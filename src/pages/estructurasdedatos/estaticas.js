import React from "react";
import styled from "styled-components";
import img1 from "../../assets/estructurasdedatos/estaticas/vector.png";
import img2 from "../../assets/estructurasdedatos/estaticas/matriz.png";
import img3 from "../../assets/estructurasdedatos/estaticas/registro.png";

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

const Subtitles = styled.div`
  font-size: 1.3rem;
  line-height: 2rem;
  font-weight: 500;
  margin-left: 25px;
  margin-bottom: 1rem;
  font-family: Montserrat Alternates, serif;
`;

const conceptos = () => {
  return (
    <div class="p-4 xl:flex justify-center items-center sm:ml-72 max-h-max xl:mr-10 overflow-y-auto my-20">
      {/* <div class=" font-Titles text-2xl font-semibold mb-4 text-gray-900"> */}
      <div class="xl:w-3/4">
        <Titles>Estructuras de Datos Estáticas</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>   
            No existe variante en el tiempo de ejecución, únicamente en el momento de edición. Existen varios tipos:
            </Texto>
            <Titles>
            Arreglos
            </Titles>
            <Texto>   
            Es una estructura de datos homogéneos (del mismo tipo) en un índice y pueden haber varios tipos:
            </Texto>
            <Subtitles>
                Vector
            </Subtitles>
            <Texto>   
                Un arreglo de una dimensión, es decir, de un índice con datos homogéneos. Los valores se almacenan en la memoria de manera continua. Esta se ordena de izquierda a derecha.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img1}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
            <Subtitles>
                Matriz
            </Subtitles>
            <Texto>   
            Estructura de datos con dos dimensiones y por ende dos índices con datos homogéneos. La matriz se llena por columnas con una fila estática (primero se escribe fila, luego columna). Esta se llena de izquierda a derecha y de arriba hacía abajo.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img2}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
            <Titles>
            Registros
            </Titles>
            <Texto>   
            Estructura de datos que permite organizar datos heterogéneos en una misma unidad, una sola memoria
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img3}
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
