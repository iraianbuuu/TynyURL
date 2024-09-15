import Header from "@/components/Header";
import Footer from "@/pages/Footer";
import React from "react";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div>
      <main className="min-h-screen container">
        <Header />
        <Outlet />
      </main>
    <Footer/>
    </div>
  );
};

export default AppLayout;
