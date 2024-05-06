import React from "react";
import styled from "styled-components";
import img1 from "../../assets/estructuras/condicionales/ifsimple.png";
import img2 from "../../assets/estructuras/condicionales/ifdoble.png";
import img3 from "../../assets/estructuras/condicionales/ifanidado.png";
import img4 from "../../assets/estructuras/condicionales/switch.png";

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
        <Titles>Estructuras de Control Condicionales</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>   
            Las estructuras de selección poseen más de un flujo o camino de instrucciones pero solo pueden elegir uno y el camino a seguir es decidido con el resultado de una condición. La comparación puede ser con variable o constantes. Existen 3 tipos:
            </Texto>
            <Titles>
            If simple
            </Titles>
            <div class="w-full flex justify-center items-center">
              <img
                src={img1}
                alt="Expresión Matemáticas"
                class=" my-5 h-96 rounded-lg"
              />
            </div>
            <Titles>
            If doble
            </Titles>
            <div class="w-full flex justify-center items-center">
              <img
                src={img2}
                alt="Expresión Matemáticas"
                class=" my-5 h-96 rounded-lg"
              />
            </div>
            <Titles>
            If anidado
            </Titles>
            <div class="w-full flex justify-center items-center">
              <img
                src={img3}
                alt="Expresión Matemáticas"
                class=" my-5 h-96 rounded-lg"
              />
            </div>
            <Titles>
            Condicional multiple (switch)
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
