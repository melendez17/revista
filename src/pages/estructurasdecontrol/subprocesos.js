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
        <Titles>Subprocesos</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify flex items-center justify-center flex-col">
            <Texto>
            Preciso, definido y finito. Son tareas o algoritmos secundarios, extracto del algoritmo principal (fuera del algoritmo principal) que se pueden llamar en nuestro algoritmo principal. Se basa de la programación estructural, que dice hacer un problema grande en partes más pequeñas.
            </Texto>
            <Subtitles>
              Procedimiento
            </Subtitles>
            <Texto>
              Algoritmo que realiza una tarea específica, no devuelve un valor, solo realiza una tarea.
            </Texto>
            <Subtitles>
              Función
            </Subtitles>
            <Texto>
            Algoritmo que realiza una tarea y devuelve algún valor o resultado.
            </Texto>
            <Subtitles>
              Definir = Crear y Llamar = Invocar
            </Subtitles>
            <Texto>
            Para definir un subproceso se debe crear y para llamarlo se debe invocar. Es decir no puedo llamar algo que no está definido o creado.
            </Texto>
            <Subtitles>
              Parámetro
            </Subtitles>
            <Texto>
            Cuando nos referimos a parámetros, hablamos de variables que se utilizan para enviar información a un subproceso. Por ejemplo en la vida cuando tenemos una receta, no puedo realizarla sin tener los materiales, a estos materiales les llamamos parámetros. <b>Existen dos tipos de parámetros:</b>
            </Texto>
            <div  className="max-w-[600px]">
            <div className="bg-gray-100 p-10">
              <b>Valor:</b> <br/> Se envía el valor de la variable. Se refiere a una especie de copia de la variable, en nuestro subproceso, nuestra variable va a cambiar en algún punto pero en el proceso principal siempre se va a mantener el valor original.<br/><br/>
            <b>Referencia:</b> <br/> Se refiere a nuestra variable original en nuestro proceso, y enviándose al proceso principal cambiando, es decir, se trabaja la variable original siempre. 
            </div>
            <Texto>
            Si no definimos que estamos trabajando con un parámetro por referencia, por defecto estamos trabajando con un parámetro por valor
            </Texto>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default conceptos;
