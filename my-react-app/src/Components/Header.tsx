import React from "react";

export function Header({modalAuthorizationActive, setModalAuthorizationActive}) {
    return(
      <div className="header">
        <button className="button-header__home">Home</button>
        <button className="button-login"  onClick={()=> {setModalAuthorizationActive(true)}}>Login</button>
      </div>
    )
  }