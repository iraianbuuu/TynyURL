import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link2, Zap, Shield, BarChart3 } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();
  const handleShorten = (e) => {
    e.preventDefault();

    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center px-4 sm:px-8">
      {/* Hero Section */}
      <h3 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl md:text-5xl lg:text-6xl">
        Simplify Your Links, Amplify Your Reach!
      </h3>
      <p className="my-3 mx-auto text-center text-gray-500 md:text-xl dark:text-gray-400 max-w-3xl">
        Create short, powerful links in seconds. Track, analyze, and optimize
        your online presence with our advanced URL shortener.
      </p>

      {/* URL Form */}
      <form
        onSubmit={handleShorten}
        className="my-3 w-full max-w-lg flex flex-col sm:flex-row gap-4"
      >
        <Input
          type="url"
          value={longUrl}
          placeholder="Enter your URL"
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button className="h-full" type="submit" variant="destructive">
          Shorten
        </Button>
      </form>

      {/* Why Choose Section */}
      <section className="w-full py-8 md:py-16 lg:py-28 dark:bg-gray-800">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
            Why Choose TynyURL?
          </h2>
          <div className="grid gap-6 items-center sm:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-white dark:bg-gray-700">
              <Zap className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-center">Lightning Fast</h3>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Create short links in seconds with customization.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-white dark:bg-gray-700">
              <Shield className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-center">Secure & Reliable</h3>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Your links are safe and always accessible.
              </p>
            </div>
            {/* Feature 3 */}
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-white dark:bg-gray-700">
              <BarChart3 className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-center">Detailed Analytics</h3>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Track clicks, locations, and more with our powerful dashboard.
              </p>
            </div>
            {/* Feature 4 */}
            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-white dark:bg-gray-700">
              <Link2 className="h-12 w-12 text-primary" />
              <h3 className="text-xl font-bold text-center">Custom Links</h3>
              <p className="text-sm text-center text-gray-500 dark:text-gray-400">
                Create branded short links with your own wish.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
