import React from 'react'
import * as FaIcons from 'react-icons/fa' //Llamamos todos los icons de react-icon, en vez de llamar uno por uno
import * as AiIcons from 'react-icons/ai' //Llamamos todos los icons de react-icon, en vez de llamar uno por uno
import * as IoIcons from 'react-icons/io' //Llamamos todos los icons de react-icon, en vez de llamar uno por uno
import * as RiIcons from 'react-icons/ri' //Llamamos todos los icons de react-icon, en vez de llamar uno por uno

export const SidebarData = [
    //First Option
    {
        title: 'Operadores',
        path: '/topic1',
        icon: <AiIcons.AiFillHome/>, //Llamamos el icono de react-icon, es solo la parte de la derecha lo que hay que cambiar, la parte de la izquierda depende si es tipo Ai, Fa, Io, Ri
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Conceptos Básicos',
                path: '/operadores/conceptos',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Asignación',
                path: '/operadores/asignacion',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Aritméticos',
                path: '/operadores/aritmeticos',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Relacionales',
                path: '/operadores/relacionales',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Lógicos',
                path: '/operadores/logicos',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Combinación de Operadores',
                path: '/operadores/combinacion',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },
    //Second Option
    {
        title: 'Estructura de Control',
        path: '/reports',
        icon: <AiIcons.AiFillHome/>, //Llamamos el icono de react-icon, es solo la parte de la derecha lo que hay que cambiar, la parte de la izquierda depende si es tipo Ai, Fa, Io, Ri
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Conceptos Básicos',
                path: '/estructurasdecontrol/definicion',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Secuenciales',
                path: '/estructurasdecontrol/secuenciales',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Selectivas o Condicionales',
                path: 'estructurasdecontrol/condicionales',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Repetitivas - Ciclos - Loops',
                path: '/estructurasdecontrol/repetitivas',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Subprocesos',
                path: '/estructurasdecontrol/subprocesos',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]

    },
    //Third Option
    {
        title: 'Estructura de Datos',
        path: '/estructurasdedatos',
        icon: <FaIcons.FaCartPlus/>,
        subNav: [
            {
                title: 'Conceptos Básicos',
                path: '/estructurasdedatos/conceptos',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Estáticas',
                path: '/estructurasdedatos/estaticas',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Dinámicas',
                path: '/estructurasdedatos/dinamicas',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },
    {
        title: 'Bases de Datos',
        path: '/basesdedatos',
        icon: <FaIcons.FaCartPlus/>,
        subNav: [
            {
                title: 'Conceptos Básicos',
                path: '/basesdedatos/conceptos',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Normalización',
                path: '/basesdedatos/normalizacion',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },
]