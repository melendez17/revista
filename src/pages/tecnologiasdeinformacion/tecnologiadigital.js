import React from "react";
import styled from "styled-components";
import img1 from "../../assets/operadores/relacionales/operadoresrelacionales.png";

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
    <div class="p-4 pb-0 xl:flex justify-center items-center sm:ml-72 max-h-max xl:mr-10 overflow-y-auto my-20">
      {/* <div class=" font-Titles text-2xl font-semibold mb-4 text-gray-900"> */}
      <div class="xl:w-3/4">
        <Titles>Tecnología Digital</Titles>
        {/* </div> */}
        <div class="h-[75vh]">
        <iframe loading="lazy" class=" h-full w-full" src="https://www.canva.com/design/DAGM896h5uI/qbXL3bcqwGZ0f0vVvFEW5g/view?embed" 
         title="Canva Presentation">…</iframe></div>
      </div>
    </div>
  );
};

export default conceptos;
