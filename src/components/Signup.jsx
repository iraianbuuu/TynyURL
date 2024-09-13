import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BeatLoader } from "react-spinners";
import * as Yup from "yup";
import Error from "../components/Error";
import useFetch from "@/hooks/UseFetch";
import { login, signup } from "@/db/apiAuth";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UrlState } from "@/Context";

const Signup = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    profile_picture: null,
  });
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const longLink = searchParams.get("createNew");

  const handleSignup = async () => {
    setErrors({});
    try {
      const schema = Yup.object().shape({
        name : Yup.string().required("Name is required"),
        email: Yup.string()
          .email("Invalid Email")
          .required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        profile_picture : Yup.mixed().required("Profile picture is required"),
      });

      await schema.validate(formData, { abortEarly: false });
      if (!formData.profile_picture) {
        throw new Error("Profile picture is missing");
      }
      // Call the login function
      await fnSignup();
    } catch (e) {
      const validationErrors = {};
      e.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };
  const handleInputChange = (e) => {
    const { name, value , files } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: files ? files[0] : value,
    }));
  };

  const { data, error, loading, fn: fnSignup } = useFetch(signup, formData);
  const {fetchUser} = UrlState();
  useEffect(() => {
    if (!error && data) {
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
      fetchUser();
    }
  }, [data, error]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Signup</CardTitle>
        <CardDescription>Enter your details to create a new account</CardDescription>
        {error && <Error message={error.message} />}
      </CardHeader>
      <CardContent className="space-y-2">
      <div className="space-y-2">
          <Input
            name="name"
            type="text"
            placeholder="Enter your username"
            value={formData.name}
            onChange={handleInputChange}
          />
          {errors.name && <Error message={errors.name} />}
        </div>
        <div className="space-y-2">
          <Input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange}
          />
          {errors.email && <Error message={errors.email} />}
        </div>
        <div className="space-y-2">
          <Input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange}
          />
          {errors.password && <Error message={errors.password} />}
        </div>
        <div className="space-y-2">
          <Input
            name="profile_picture"
            type="file"
            accept="image/*"
            onChange={handleInputChange}
          />
          {errors.profile_picture && <Error message={errors.profile_picture} />}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleSignup} disabled={loading} >
          {loading ? <BeatLoader size={10} color="#ffffff" /> : "Create account"}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Signup;
