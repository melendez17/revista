import React from 'react'
import * as FaIcons from 'react-icons/fa' //Llamamos todos los icons de react-icon, en vez de llamar uno por uno
import * as AiIcons from 'react-icons/ai' //Llamamos todos los icons de react-icon, en vez de llamar uno por uno
import * as IoIcons from 'react-icons/io' //Llamamos todos los icons de react-icon, en vez de llamar uno por uno
import * as RiIcons from 'react-icons/ri' //Llamamos todos los icons de react-icon, en vez de llamar uno por uno

export const SidebarData = [
    //First Option
    {
        title: 'Overview',
        path: '/topic1',
        icon: <AiIcons.AiFillHome/>, //Llamamos el icono de react-icon, es solo la parte de la derecha lo que hay que cambiar, la parte de la izquierda depende si es tipo Ai, Fa, Io, Ri
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Users',
                path: '/overview/users',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Revenue',
                path: '/overview/revenue',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]

    },
    //Second Option
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillHome/>, //Llamamos el icono de react-icon, es solo la parte de la derecha lo que hay que cambiar, la parte de la izquierda depende si es tipo Ai, Fa, Io, Ri
        iconClosed: <RiIcons.RiArrowDownSFill/>,
        iconOpened: <RiIcons.RiArrowUpSFill/>,
        subNav: [
            {
                title: 'Report1',
                path: '/reports/report1',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Report2',
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper/>,
            },
            {
                title: 'Report2',
                path: '/reports/report2',
                icon: <IoIcons.IoIosPaper/>,
            },
        ]

    },
    //Third Option
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcons.FaCartPlus/>, 
    },
]