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
        <Titles>Normalización</Titles>
        {/* </div> */}
        <div>
          {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
          <div class="text-justify">
            <Texto>
            Es un conjunto de reglas sobre tablas o modelos para tener claridad en los datos, según deberían de estar organizados.
            </Texto>
            <Subtitles>Dependencia Funcional </Subtitles>
            <Texto>
            Un atributo depende completamente de la llave primaria  <br />
              <b>Ejemplo:</b> Nombre dependiente de la llave Cédula
            </Texto>
            <Subtitles>Dependencia Parcial </Subtitles>
            <Texto>
            Puede depender pero no necesariamente, no depende del todo de la llave primaria para identificarlo  <br />
            </Texto>
            <Subtitles>Dependencia Transitiva </Subtitles>
            <Texto>
            Un campo depende de otro cmapo que no es llave primaria, es decir   <br />
              <b>Ejemplo:</b> Un campo "Permiso de Conducir" depende de "Fecha de Nacimiento", no de la llave primaria que sería cédula
            </Texto>
            
            <hr/>

            <Subtitles>Datos Atómicos </Subtitles>
            <Texto>
            Es un dato que ya no se puede dividir, ya sea por conveniencia o por especificación del lenguaje. 
              <b>Ejemplo:</b> "Apellido" es un dato atómico, no se puede dividir en "Apellido Paterno" y "Apellido Materno", en cambio "Apellidos" si se puede dividir en "Apellido Paterno" y "Apellido Materno".
            </Texto>

            <hr/>

            <Titles>
              Reglas
            </Titles>
            <Subtitles>Primera forma normal </Subtitles>
            <Texto>
            Todos están en la primera forma normal cuando se busca que todos los campos estén atómicos (que no se puedan dividir más) e identificar una llave primaria en la tabla o en la entidad.<br />
            </Texto>
            <Subtitles>Segunda forma normal </Subtitles>
            <Texto>
            Debe de estar en la primera forma normal y deben de eliminarse las dependencias no funcionales o dependencias parciales.
            </Texto>
            <Subtitles>Tercera forma normal </Subtitles>
            <Texto>
            Debe de estar en segunda forma normal y deben eliminarse dependencias transitivas.
            </Texto>

          </div>
        </div>
      </div>
    </div>
  );
};

export default conceptos;
