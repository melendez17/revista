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
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Relacionales',
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Lógicos',
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Combinación de Operadores',
                path: '/reports/report2',
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
                path: '/reports/report1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Secuenciales',
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Selectivas o Condicionales',
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Repetitivas - Ciclos - Loops',
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]

    },
    //Third Option
    {
        title: 'Estructura de Datos',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>,
        subNav: [
            {
                title: 'Conceptos Básicos',
                path: '/topic1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Vectores',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Matrices',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Registro',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]
    },
]