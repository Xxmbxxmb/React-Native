import React, { useState } from "react";
import { useCounter } from "../hooks/useCounter";

export const ContadorHook = () => {

  const { contador, acumular } = useCounter();

  return (
    <>
      <h3>
        Contador con Hook: <small>{contador}</small>
      </h3>

      <button className="btn btn-primary" onClick={() => acumular(1)}>+ 1</button>
      <button className="btn btn-primary" onClick={() => acumular(-1)}>- 1</button>
    </>
  );
};
