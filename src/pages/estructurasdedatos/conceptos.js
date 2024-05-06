import React from "react";
import styled from "styled-components";
import img1 from "../../assets/estructurasdedatos/concepto/esquema.png";

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
        <Titles>Estructuras de Datos</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>   
            Las estructuras de datos son aquellas que nos permiten, como desarrolladores, organizar la información de manera eficiente, y en definitiva diseñar la solución correcta para un determinado problema.
            </Texto>
            <Titles>
            ¿Cuáles son los tipos de estructuras de datos?
            </Titles>
            <Texto>   
            Primero, debemos diferenciar entre <b>estructura de dato estática y estructura de dato dinámica. </b> <br/><br/>

Las <b>estructuras de datos estáticas</b> son aquellas en las que el tamaño ocupado en memoria se define antes de que el programa se ejecute y no puede modificarse dicho tamaño durante la ejecución del programa, mientras que una <b>estructura de datos dinámica</b> es aquella en la que el tamaño ocupado en memoria puede modificarse durante la ejecución del programa.
<br/><br/>
Cada tipo de estructura dependerá del tipo de aplicación que se requiera. 
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img1}
                alt="Expresión Matemáticas"
                class=" my-5 h-96 ounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default conceptos;
