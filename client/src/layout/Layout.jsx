import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";
import Hero from "../components/hero/Hero";
// import Footer from "../components/footer/Footer";
import HomePage from "../pages/HomePage";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Outlet />
      <Hero />
      <Outlet />
      <HomePage />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
