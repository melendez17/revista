import React from "react";
import styled from "styled-components";
import img1 from "../../assets/operadores/logicos/precedencia.png";
import img2 from "../../assets/operadores/logicos/tabla.png";

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
        <Titles>Operadores Lógicos o Booleanos</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>   
            Usados para combinar dos o más expresiones lógicas y dar un resultado verdadero o falso de esas expresiones.
            </Texto>
            {/* <img1/> */}
            <div class="w-full flex justify-center items-center">
              <img
                src={img2}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
            <Texto>   
            Pero al igual que los aritméticos, cuentan con una precedencia, es decir un orden que se le va a dar y este orden es:
            </Texto>
            {/* <img1/> */}
            <div class="w-full flex justify-center items-center">
              <img
                src={img1}
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
