import React from "react";
import styled from "styled-components";
import img1 from "../../assets/estructurasdedatos/dinamicas/listaenlazada.png";
import img2 from "../../assets/estructurasdedatos/dinamicas/pilas.png";
import img3 from "../../assets/estructurasdedatos/dinamicas/cola.png";
import img4 from "../../assets/estructurasdedatos/dinamicas/arbol.png";
import img5 from "../../assets/estructurasdedatos/dinamicas/grafos.png";
import img6 from "../../assets/estructurasdedatos/dinamicas/nodo.webp";

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
  width: 100%;
  line-height: 2rem;
  font-weight: 500;
  margin-left: 25px;
  margin-bottom: 1rem;
  margin-top: 1rem;
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
          <div class="text-justify flex items-center justify-center flex-col">
            <Subtitles>
              Punteros
            </Subtitles>
            <Texto>
              Los punteros son variables que almacenan direcciones de memoria. En C, C++ y otros lenguajes de programación, los punteros son una de las características más importantes y potentes. Los punteros en C son una forma de acceder a la memoria y manipular directamente los datos en ella.
            </Texto>
            <div  className="max-w-[600px]">
            <div className="bg-gray-100 p-10 font-semibold">
              int x
            </div>
            <Texto>
            Con esto estamos declarando un valor entero, este guarda valores de tipo entero.
            </Texto>
            <div className="bg-gray-100 p-10 font-semibold">
              int * p
            </div>
            <Texto>
            Estamos declarando un puntero, este guarda únicamente la dirección de variables que cumplan el mismo tipo.
            </Texto>
            <div className="bg-gray-100 p-10 font-semibold">
            p = &x
            </div>
            <Texto>
            Estamos declarando a “p” con el valor de la dirección de x, de igual forma del mismo tipo.
            </Texto>
            </div>
            <Subtitles>
              Indireccionamiento
            </Subtitles>
            <Texto>
              Mediante una variable puntero le podemos cambiar el valor a una variable con solo tener la dirección de memoria de la variable a la que queremos cambiar el valor.
            </Texto>
            <div  className="max-w-[600px]">
            <div className="bg-gray-100 p-10 font-semibold">
            *p = 10
            </div>
            <Texto>
            Con base en el ejemplo anterior, “p” tiene el valor de la dirección de x, con esta instancia estamos diciendo que cambie el valor de la variable que está en la dirección “p”, es decir, cambiar el valor de “x”.
            </Texto>
            </div>
            <Subtitles>
              Nodos
            </Subtitles>
            <Texto>
            Es una estructura de datos tipo registro que es la unidad mínima un espacio para un puntero y uno para un dato.
            </Texto>
            <div class="w-full flex justify-center items-center">
              <img
                src={img6}
                alt="Expresión Matemáticas"
                class=" my-5 h-52 rounded-lg"
              />
            </div>

            <Texto>   
            Sólo se hace una definición del tamaño al momento de edición, sin embargo, durante la ejecución el valor puede cambiar. A diferencia de un array que contiene espacio para almacenar un número fijo de elementos, una estructura dinámica de datos se amplía y contrae durante la ejecución del programa. Existen varios tipos:
            </Texto>
            <div>
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
                Recorridos de los arboles
            </Subtitles>
            <Texto>
            En los árboles, los recorridos son una forma de visitar todos los nodos de un árbol. Existen tres tipos de recorridos:
            </Texto>
            <div class="ml-6 space-y-4">
            <li>
              <b>Preorden:</b> Raíz, Izquierda, Derecha
            </li>
            <li>
              <b>Enorden:</b> Izquierda, Raíz, Derecha
              </li>
            <li>
              <b>Posorden:</b> Izquierda, Derecha, Raíz
            </li>
            </div>
            <Subtitles>
                Grafos
            </Subtitles>
            <Texto>   
            Estructura de datos compleja que posee más de 2 punteros. Otro tipo de no lineal de estructura de datos en programación, son los grafos. Se trata de una estructura matemática formada por un conjunto de puntos —una estructura de datos— y un conjunto de líneas, cada una de las cuales une un punto a otro. Los puntos se llaman nodos o vértices del grafo y las líneas se llaman aristas o arcos.
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
            {/* fin  */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default conceptos;
