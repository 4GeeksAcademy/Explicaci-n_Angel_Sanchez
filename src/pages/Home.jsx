import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const { store, dispatch } = useGlobalReducer();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState(null);

  useEffect(() => {
    const getTodos = async () => {
      try {
        const response = await fetch(
          "https://playground.4geeks.com/todo/users/mitoperni"
        );

        const data = await response.json();

        dispatch({
          type: "set_todos",
          payload: data.todos,
        });

      } catch (error) {
        console.log(error);
      }
    };

    getTodos();
  }, []);

  return (
    <div className="text-center mt-5">
      <h1>Esto es el Home</h1>
      <button className="btn btn-success" onClick={() => navigate("/ejemplo")}>
        Este botón también te lleva a Ejemplo
      </button>
      <h2>La cuenta va por: {store.contador}</h2>
      <button
        onClick={() => {
          dispatch({
            type: "sum_contador",
          });
        }}
      >
        Aumentar contador
      </button>
      <input
        type="number"
        name=""
        id=""
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({
            type: "sum_cantidad_contador",
            payload: inputValue,
          });
        }}
      >
        Aumentar esta cantidad
      </button>
    </div>
  );
};
