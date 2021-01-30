import styled from "@emotion/styled";
import React, { useEffect, useState } from "react";
import Frase from "./Components/Frase";

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size 0.7s ease;
  :hover {
    cursor: pointer;
    background-size: 400;
  }
`;

function App() {
  const [frase, setfrase] = useState({});
  const consultarAPI = async () => {
    const api = await fetch(
      "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
    );
    const datos = await api.json();
    console.log(datos);
    setfrase(datos[0]);
  };

  useEffect(() => {
    consultarAPI();
  }, []);

  return (
    <Contenedor>
      <Frase frase={frase} />
      <Boton onClick={consultarAPI}>Obtener Frase</Boton>
    </Contenedor>
  );
}

export default App;
