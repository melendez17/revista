import React from 'react'
import styled from 'styled-components'
import img1 from '../../assets/operadores/conceptos/expresionmatematica.png'
import img2 from '../../assets/operadores/conceptos/expresionlogica.png'
import img3 from '../../assets/operadores/conceptos/condicionlogica.png'
import img4 from '../../assets/operadores/conceptos/variable.png'
import img5 from '../../assets/operadores/conceptos/algoritmo.png'
import img6 from '../../assets/operadores/conceptos/pseudocodigo.png'
import img7 from '../../assets/operadores/conceptos/diagramadeflujo.png'
import img8 from '../../assets/operadores/conceptos/paradigma.jpg'
import img9 from '../../assets/operadores/conceptos/paradigma2.webp'

const Texto = styled.div`
margin-top: 15px;
margin-bottom: 15px;
margin-left: 25px;
margin-right: 25px;
text-align: justify;

@media (min-width: 768px){
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

    <Titles>
        Conceptos Básicos
    </Titles>
    {/* </div> */}
    <div>
        {/* <div class="font-Titles text-md font-medium grid grid-cols-3 text-gray-900"> */}
        <div class="text-justify">
         <Texto>
            <b>Expresión matemática:</b> Conjunto de números, operadores, símbolos que, al resolverlo, dan un resultado (resultados pueden ser números).
         </Texto>
         {/* <img1/> */}
         <div class="w-full flex justify-center items-center">
         <img src={img1} alt="Expresión Matemáticas" class=' my-5 h-52 rounded-lg'/>
         </div>
         <Texto>
            <b>Expresión lógica:</b> Una expresión lógica se evalúa como verdadera o falsa, o como que falta si es indeterminada. Una expresión lógica devuelve 1 si la expresión es verdadera, 0 si es falsa o falta el sistema si falta. (Resultado lógico).
         </Texto>
         <div class="w-full flex justify-center items-center">
         <img src={img2} alt="Expresión Matemáticas" class=' my-5 h-52 rounded-lg'/>
         </div>
         <Texto>
            <b>Condición lógica</b> (if) es el uso técnico que se le puede dar a la expresión lógica como tal, y según donde se ubica cumple una función específica.
         </Texto>
         <div class="w-full flex justify-center items-center">
         <img src={img3} alt="Expresión Matemáticas" class=' my-5 h-52 rounded-lg'/>
         </div>
        {/* </div> */}
         <Texto>
            <b>Variable:</b> Espacio en la memoria que tiene una dirección, un tipo, un valor y un nombre. El nombre debe cumplir con ciertas reglas:
            <div class="ml-6 space-y-4">
            <li>
            Sin tildes
            </li>
            <li>No puede empezar con un número</li>
            <li>Sin carácteres especiales (solo utilizar el guión bajo)</li>
               </div>
         </Texto>
         {/* <img1/> */}
         <div class="w-full flex justify-center items-center">
         <img src={img4} alt="Expresión Matemáticas" class=' my-5 h-52 rounded-lg'/>
         </div>
         <Texto>
            <b>Algoritmo:</b> Es el conjunto de ordenes o pasos lógicos para poder llegar a un resultado o para poder realizar una tarea. Es definido, cuantas veces se realice da el mismo resultado. Es preciso, los pasos claros y lógicos. Características:
            <div class="ml-6 space-y-4">
            <li>
            <b>Finito:</b> Tiene un fin.
            </li>
            <li><b>Definido:</b> Debe dar el mismo resultado al recibir la misma entrada, por ejemplo, siempre va a devolver lo mismo, si comenzó devolviendo un queque, siempre va a devolver un queque.</li>
            <li><b>Precisos:</b> Las instrucciones lógicas son claras y concisas, sin ambiguedad.</li>
               </div>
         </Texto>
         {/* <img1/> */}
         <div class="w-full flex justify-center items-center">
         <img src={img5} alt="Expresión Matemáticas" class=' my-5 h-52 rounded-lg'/>
         </div>
         <Texto>
            <b>Pseudocódigo:</b>  Es la especificación de un algoritmo en lenguaje natural.
         </Texto>
         {/* <img1/> */}
         <div class="w-full flex justify-center items-center">
         <img src={img6} alt="Expresión Matemáticas" class=' my-5 h-52 rounded-lg'/>
         </div>
         <Texto>
            <b>Diagrama de flujo:</b> Representación gráfica de un pseudocódigo.
         </Texto>
         {/* <img1/> */}
         <div class="w-full flex justify-center items-center">
         <img src={img7} alt="Expresión Matemáticas" class=' my-5 h-52 rounded-lg'/>
         </div>
         <Texto>
            <b>Paradigma:</b> Forma de ver o resolver las cosas.
         </Texto>
         {/* <img1/> */}
         <div class="w-full flex justify-center items-center space-x-10">
         <img src={img8} alt="Expresión Matemáticas" class=' my-5 h-52 rounded-lg'/>
         <img src={img9} alt="Expresión Matemáticas" class=' my-5 h-52 rounded-lg'/>
         </div>
    </div>
        </div>
    </div>


   {/* <div class="p-4 border-2 overflow-y-visible border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      <div class="grid grid-cols-3 gap-4 mb-4">
         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>
      <div class="grid grid-cols-2 gap-4 mb-4">
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
      <div class="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
         <p class="text-2xl text-gray-400 dark:text-gray-500">
            <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
               <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
            </svg>
         </p>
      </div>
      <div class="grid grid-cols-2 gap-4">
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
         <div class="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
            <p class="text-2xl text-gray-400 dark:text-gray-500">
               <svg class="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
               </svg>
            </p>
         </div>
      </div>
   </div> */}
</div>
  )
}

export default conceptos
