import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Header } from "./header";
export const Layout = ({
  modalAuthorizationActive,
  setModalAuthorizationActive,
}) => {
  return (
    <>
      <Header
        modalAuthorizationActive={modalAuthorizationActive}
        setModalAuthorizationActive={setModalAuthorizationActive}
      />
      <Outlet />
    </>
  );
};
