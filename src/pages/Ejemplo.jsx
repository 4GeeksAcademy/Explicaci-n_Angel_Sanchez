import React from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";

function Ejemplo() {
  const { store, dispatch } = useGlobalReducer();

  

  return (
    <div>
      <h1>Este es el valor de contador: {store.contador}</h1>
      <button
        onClick={() => {
          dispatch({
            type: "sum_contador",
          });
        }}
      >
        Aumentar contador
      </button>

    </div>
  );
}

export default Ejemplo;
