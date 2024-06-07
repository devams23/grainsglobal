import { Outlet } from "react-router";

import Navbar from "./Navigation_Bar/Navbar";
import React from "react";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;