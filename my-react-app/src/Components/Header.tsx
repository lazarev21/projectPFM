import React from "react";
import { Link } from "react-router-dom";

export function Header({
  modalAuthorizationActive,
  setModalAuthorizationActive,
}) {
  return (
    <div className="header">
      <Link className="button-header__home" to="/">
        Home
      </Link>
      <a
        className="button-login"
        onClick={() => {
          setModalAuthorizationActive(true);
        }}
      >
        Login
      </a>
    </div>
  );
}
