import React from "react";
import styled from "styled-components";
import img1 from "../../assets/estructurasdedatos/dinamicas/listaenlazada.png";
import img2 from "../../assets/estructurasdedatos/dinamicas/pilas.png";
import img3 from "../../assets/estructurasdedatos/dinamicas/cola.png";
import img4 from "../../assets/estructurasdedatos/dinamicas/arbol.png";
import img5 from "../../assets/estructurasdedatos/dinamicas/grafos.png";

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
        <Titles>Estructuras de Datos Dinámicas</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>   
            Sólo se hace una definición del tamaño al momento de edición, sin embargo, durante la ejecución el valor puede cambiar. A diferencia de un array que contiene espacio para almacenar un número fijo de elementos, una estructura dinámica de datos se amplía y contrae durante la ejecución del programa. Existen varios tipos:
            </Texto>
            {/* lineales */}
            <div> 
            <Titles>
            Estructura de datos lineales
            </Titles>
            <Texto>   
            Las estructuras de datos lineales son aquellas en las que los elementos ocupan lugares sucesivos en la estructura y cada uno de ellos tiene un único sucesor y un único predecesor, es decir, sus elementos están ubicados uno al lado del otro relacionados en forma lineal. Existen varios tipos:
            </Texto>
            <Subtitles>
            Listas Enlazadas
            </Subtitles>
            <Texto>   
            En las estructuras de datos, las listas enlazadas se construyen con elementos que están ubicados en una secuencia. Aquí, cada elemento se conecta con el siguiente a través de un enlace que contiene la posición del siguiente elemento. De este modo, teniendo la referencia del principio de la lista podemos acceder a todos los elementos de la misma.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img1}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
            <Subtitles>
                Pila
            </Subtitles>
            <Texto>   
            La pila es un tipo especial de lista lineal dentro de las estructuras de datos dinámicas que permite almacenar y recuperar datos, siendo el modo de acceso a sus elementos de tipo LIFO (del inglés Last In, First Out, es decir, último en entrar, primero en salir). ¿Cómo funciona? A través de dos operaciones básicas: apilar (push), que coloca un objeto en la pila, y su operación inversa, desapilar (pop), que retira el último elemento apilado.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img2}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
            <Subtitles>
                Cola
            </Subtitles>
            <Texto>   
            a cola es otro tipo especial de lista lineal dentro de las estructuras de datos dinámicas, pero a diferencia de una pila que sigue el principio LIFO (Last In, First Out), una cola sigue el principio FIFO (First In, First Out), es decir, el primer elemento en entrar es el primero en salir.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img3}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
            </div>
            {/* No lineales  */}
            <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <div>
            <Titles>
            Estructura de datos no lineales
            </Titles>
            <Texto>   
            Las estructuras de datos no lineales, también llamadas multienlazadas, son aquellas en las que cada elemento puede estar enlazado a cualquier otro componente. Es decir, cada elemento puede tener varios sucesores o varios predecesores. Existen dos tipos:
            </Texto>
            <Subtitles>
            Árboles
            </Subtitles>
            <Texto>   
            En estructura de datos, los árboles consisten en una estructura no lineal que se utiliza para representar datos con una relación jerárquica en la que cada elemento tiene un único antecesor y puede tener varios sucesores.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img4}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
            <Subtitles>
                Grafos
            </Subtitles>
            <Texto>   
            Otro tipo de no lineal de estructura de datos en programación, son los grafos. Se trata de una estructura matemática formada por un conjunto de puntos —una estructura de datos— y un conjunto de líneas, cada una de las cuales une un punto a otro. Los puntos se llaman nodos o vértices del grafo y las líneas se llaman aristas o arcos.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img5}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>
            </div>
            </div>
            </div>
            {/* fin  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default conceptos;
