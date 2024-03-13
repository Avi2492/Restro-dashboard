import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Hero from "../components/hero/Hero";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Hero />
    </div>
  );
};

export default Layout;
