import React from "react";

import { Container } from "../Components/container";

export function HomePage({
  modalAuthorizationActive,
  setModalAuthorizationActive,
}) {
  return (
    <div className="App">
      <Container
        modalAuthorizationActive={modalAuthorizationActive}
        setModalAuthorizationActive={setModalAuthorizationActive}
      />
    </div>
  );
}
