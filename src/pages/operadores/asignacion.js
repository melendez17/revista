import React from "react";
import styled from "styled-components";
import img1 from "../../assets/operadores/asignacion/asignacion.png";
import img2 from "../../assets/operadores/asignacion/asignacionSimple.png";
import img3 from "../../assets/operadores/asignacion/asignacionCompuesta.png";

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
        <Titles>Operadores de Asignación</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>
              Los operadores de asignación son símbolos utilizados en
              programación para asignar un valor a una variable. Estos
              operadores permiten modificar el valor de una variable mediante
              diferentes operaciones aritméticas o lógicas y asignar el
              resultado de esa operación de nuevo a la misma variable. Por
              ejemplo, en muchos lenguajes de programación, el operador básico
              de asignación es el signo igual (=), que asigna el valor a la
              derecha del operador a la variable a la izquierda del operador.
            </Texto>
            {/* <img1/> */}
            <div class="w-full flex justify-center items-center">
              <img
                src={img1}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
            <Titles>
               Tipos de operadores
            </Titles>
            <Texto>
            Los operadores de asignación almacenan un valor en el objeto especificado por el operando izquierdo. Hay dos tipos de operaciones de asignación:
            </Texto>
            <Texto>
               <div class="ml-6 space-y-4">
            <li>
            <b>Asignación simple:</b> En la que el valor del segundo operando se almacena en el objeto especificado por el primer operando.
            </li>
            <li><b>Asignación compuesta:</b> En la que se realiza una operación aritmética, de desplazamiento o bit a bit antes de almacenar el resultado.</li>
               </div>
            </Texto>
            <div class="lg:grid grid-cols-1 lg:grid-cols-2 mt-10">
               <div class="flex justify-center items-center">
                  <Titles>
                     Asignación Simple
                  </Titles>
                     </div>
                  <div class="w-full flex justify-center col-start-1 lg:row-start-2 items-center">
              <img
                src={img2}
                alt="Asignación Simple"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
               <div class="flex justify-center items-center text-center lg:col-start-2">
                  <Titles class="">
                     Asignación Compuesta
                  </Titles>
               </div>
                  <div class="w-full flex justify-center col-start-2 lg:row-start-2 items-center">
              <img
                src={img3}
                alt="Asignación Compuesta"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default conceptos;
