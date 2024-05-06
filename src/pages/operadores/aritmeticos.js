import React from "react";
import styled from "styled-components";
import img1 from "../../assets/operadores/aritmeticos/operadoresaritmeticos.webp";
import img2 from "../../assets/operadores/aritmeticos/precedencia.png";

const Texto = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  margin-left: 25px;
  margin-right: 25px;
  text-align: justify;

  @media (min-width: 768px) {
    margin-right: 2rem;
  }
`;

const Titles = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: Montserrat Alternates, serif;
`;

const conceptos = () => {
  return (
    <div class="p-4 xl:flex justify-center items-center sm:ml-72 max-h-max xl:mr-10 overflow-y-auto my-20">
      {/* <div class=" font-Titles text-2xl font-semibold mb-4 text-gray-900"> */}
      <div class="xl:w-3/4">
        <Titles>Operadores Aritméticos</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>
            Los operadores aritméticos son símbolos utilizados en programación para realizar operaciones matemáticas sobre variables y valores numéricos. Hace referencia a los símbolos matemáticos para realizar una operación
            </Texto>
            {/* <img1/> */}
            <div class="w-full flex justify-center items-center">
              <img
                src={img1}
                alt="Expresión Matemáticas"
                class=" my-5 h-96 rounded-lg"
              />
            </div>
            <Texto>
              <b>Precedencia:</b> Orden en el que se realizan las operaciones
            </Texto>
            {/* <img1/> */}
            <div class="w-full flex justify-center items-center">
              <img
                src={img2}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default conceptos;
