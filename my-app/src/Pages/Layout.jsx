// Description: This is the layout component for the app. 
// It will be used to wrap all the pages in the app.

// Import libraries
import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
export default Layout;