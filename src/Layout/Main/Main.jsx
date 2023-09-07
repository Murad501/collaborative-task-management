import { Outlet } from "react-router-dom";
import { Header } from "../../components/Shared/Navbar/Navbar";
import { useEffect, useState } from "react";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Main;
