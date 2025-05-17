import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";

const Root = () => {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default Root;
