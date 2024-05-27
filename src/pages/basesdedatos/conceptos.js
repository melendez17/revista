import React from "react";
import styled from "styled-components";
import img1 from "../../assets/bases/conceptos/datos.png";
import img2 from "../../assets/bases/conceptos/jerarquiadedatos.jpg";
import img3 from "../../assets/bases/conceptos/jerarquiadedatos2.jpg";
import img4 from "../../assets/bases/conceptos/acme.png";
import img5 from "../../assets/bases/conceptos/mer.png";

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
  margin-top: 1rem;
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
        <Titles>Bases de Datos</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>
              <b>Conjunto de datos</b> relacionados que pertenecen a un mismo
              contexto. Sirven para guardar datos. Los datos son hechos
              conocidos que pueden ser registrados e interpretados para ser
              información.
            </Texto>
            {/* <img1/> */}
            <div class="w-full flex justify-center items-center">
              <img
                src={img1}
                alt="Expresión Matemáticas"
                class=" my-5 h-64 rounded-lg"
              />
            </div>
            <Subtitles>Jerarquía de Datos</Subtitles>
            <div class="w-full flex justify-center flex-col items-center">
              <img
                src={img2}
                alt="Expresión Matemáticas"
                class=" my-5 h-92 rounded-lg"
              />
              <img
                src={img3}
                alt="Expresión Matemáticas"
                class=" my-5 h-92 rounded-lg"
              />
            </div>
            <Subtitles>SQL</Subtitles>
            <Texto>
              <b>Structured Query Language</b> es un lenguaje de programación
              que se utiliza para gestionar y recuperar información de una base
              de datos. SQL es un lenguaje de base de datos estándar, pero hay
              muchas variaciones diferentes de SQL utilizadas por diferentes
              tipos de bases de datos. <b>Tiene 3 clausulas</b>
            </Texto>
            <div class="ml-6 space-y-4">
                <li>
                    <b>Select</b> -&gt; Seleccionar.
                </li>
                <li>
                    <b>Where</b> -&gt; Donde, bajo ciertas condiciones o parámetros.
                </li>
                <li>
                    <b>From</b> -&gt; de donde viene.
                </li>
            </div>

            <Subtitles>ACME</Subtitles>
            <div class="w-full flex justify-center flex-col items-center">
              <img
                src={img4}
                alt="Expresión Matemáticas"
                class=" my-5 h-64 rounded-lg"
              />
            </div>
            <Texto>
              En la fábula del correcaminos y el coyote, podemos ver las bombas
              con las que el coyote perseguía al correcaminos, que eran marca
              ACME, analogía que se puede aplicar como recordatorio a este
              principio.
            </Texto>

            <Texto>
              <b>Mantenimiento que se genera en una base de datos:</b>
            </Texto>
            <div class="ml-6 space-y-4">
              <li>
                <b>A</b> Agregar
              </li>
              <li>
                <b>C</b> Consultar
              </li>
              <li>
                <b>M</b> Modificar
              </li>
              <li>
                <b>E</b> Eliminar
              </li>
            </div>

            <Titles>M.E.R (Modelo Entidad Relación)</Titles>

            <Texto>
              <b>Conceptos</b>
            </Texto>
            <div class="ml-6 space-y-4">
              <li>
                <b>Tuplas</b> = Registros
              </li>
              <li>
                <b>Entidad</b> = Tabla
              </li>
              <li>
                <b>Atributo</b> = Campo
              </li>
            </div>

            <Texto>
              <b>Simbología en los diagramas:</b>
            </Texto>
            <div class="ml-6 space-y-4">
              <li>
                <b>Rectángulo</b> Entidad
              </li>
              <li>
                <b>Rombo</b> Relación
              </li>
              <li>
                <b>Círculo</b> Atributo
              </li>
            </div>

            <div class="w-full flex justify-center flex-col items-center">
              <img
                src={img5}
                alt="Expresión Matemáticas"
                class=" my-5 h-92 rounded-lg"
              />
            </div>

            <Subtitles>Entidad</Subtitles>

            <Texto>
              Todo aquello que se pueda llegar y caracterizar. <br />
              <b>Ejemplo:</b> persona (ya que tiene atributos o características)
            </Texto>

            <Subtitles>Relación</Subtitles>

            <Texto>
            Va acompañado de un verbo, uno mis entidades. <br />
              <b>Ejemplo:</b> Persona <b>TIENE</b> Carro
            </Texto>

            <Subtitles>Cardinalidades</Subtitles>

            <Texto>
            <div class="ml-6 space-y-4">
              <li>
                <b>1-1</b> Relación de 1 a 1 
              </li>
              <li>
                <b>1 - N</b> Relación de 1 a muchos
              </li>
              <li>
                <b>N - M</b> Atributo de muchos a muchos
              </li>
            </div>
            </Texto>

            <Titles>Llaves</Titles>
            <Subtitles>Llave Primaria</Subtitles>
            <Texto>Es un campo identificador principal que por medio de este, podemos referenciar a la totalidad del registro.</Texto>
            <Subtitles>Llave Alterna</Subtitles>
            <Texto>Es una llave potencial que puede ser una llave primaria, cumple los requisitos, pero no llega a serlo.</Texto>
            <Subtitles>Súper Llave</Subtitles>
            <Texto>Al tener dos campos unidos o más, este no se va a repetir, permite identificar que no se repita.</Texto>
            <Subtitles>Llave Foránea</Subtitles>
            <Texto>Es una referencia de una llave primaria de otra tabla.</Texto>
          </div>
        </div>
      </div>
    </div>
  );
};

export default conceptos;
