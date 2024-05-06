import React from "react";
import styled from "styled-components";
import img1 from "../../assets/estructuras/repetitivas/concepto/tipos.png";
import img2 from "../../assets/estructuras/repetitivas/tipos/for.png";
import img3 from "../../assets/estructuras/repetitivas/tipos/while.png";
import img4 from "../../assets/estructuras/repetitivas/tipos/dowhile.png";

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
        <Titles>Estructuras de Control Repetitivas - Loops - Ciclos</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>   
            Estas estructuras de control consisten en repetir cierto fragmento del código un número de veces determinado por una condición. Un ciclo es un conjunto de instrucciones que se ejecuta repetidamente. Se le denomina también ciclo a cada una de las repeticiones (iteraciones) que ejecuta la estructura de control.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img1}
                alt="Expresión Matemáticas"
                class=" my-5 h-96 rounded-lg"
              />
            </div>
            <Titles>
            For (Para)
            </Titles>
            <div class="w-full flex justify-center items-center">
              <img
                src={img2}
                alt="Expresión Matemáticas"
                class=" my-5 h-96 rounded-lg"
              />
            </div>
            <Titles>
            While (Mientras)
            </Titles>
            <div class="w-full flex justify-center items-center">
              <img
                src={img3}
                alt="Expresión Matemáticas"
                class=" my-5 h-96 rounded-lg"
              />
            </div>
            <Titles>
            Do While (Hacer Mientras)
            </Titles>
            <div class="w-full flex justify-center items-center">
              <img
                src={img4}
                alt="Expresión Matemáticas"
                class=" my-5 h-96 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default conceptos;
