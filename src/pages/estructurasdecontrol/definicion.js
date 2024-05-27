import React from "react";
import styled from "styled-components";
import img1 from "../../assets/estructuras/conceptos/concepto.png";
import img2 from "../../assets/estructuras/conceptos/concepto2.png";

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
        <Titles>Estructuras de Control</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>   
            Las estructuras de control son el conjunto de reglas que permiten controlar el flujo de ejecución de las instrucciones de un algoritmo o de un programa. Hace referencia al flujo, al orden del código.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img2}
                alt="Expresión Matemáticas"
                class=" my-5 h-64 ounded-lg"
              />
            </div>
            <Titles>
            ¿Para qué sirven las estructuras de control?
            </Titles>
            <Texto>   
            Las estructuras de control nos dan el poder de alterar, controlar o modificar el orden o el flujo en el que se ejecutan las instrucciones de un software a voluntad.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img1}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>

            <Titles>
              Lo más importante de un ciclo:
            </Titles>
            <div class="ml-6 space-y-4">
            <li>
            Valor Inicial
            </li>
            <li>Condición Lógica</li>
            <li>Incremento o Decremento</li>
               </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default conceptos;
