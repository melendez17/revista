import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import * as FaIcons from 'react-icons/fa' 
import * as AiIcons from 'react-icons/ai' 
import { SidebarData } from './SidebarData'
import SubMenu from './SubMenu'
import { IconContext } from 'react-icons/lib'

const Nav = styled.div``;

const NavIcon = styled(Link)``

const SidebarNav = styled.nav`
left: ${({Sidebar}) => (Sidebar ? '0' : '-100%')}; 
//Aqui se declara la posicion de la barra lateral, si esta activa se muestra, si no esta activa se esconde
z-index: 10;
transition: 800ms;
`;
const SidebarWrap = styled.div`
bg-gray-100;
`;

const Sidebar = () => {


    const [sidebar, setSidebar] = useState() //Aqui se declara el estado de Sidebar, y el metodo para cambiarlo que va a ser setSidebar
    const showSidebar = () => setSidebar(!sidebar) //Aqui se declara la funcion que va a cambiar el estado de Sidebar, que va a ser el contrario de lo que sea en ese momento

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav className=' h-20 bg-gray-950 flex justify-start items-center'>
        <NavIcon to='#'>
            <FaIcons.FaBars 
            className=' ml-8 font-normal h-20 flex content-start items-center fill-white'
            onClick={showSidebar} />
        </NavIcon>
      </Nav>
      <SidebarNav 
      className='bg-gray-950 w-64 h-screen flex content-center fixed top-0 left-0 transition transform duration-300 ease-in-out'
      Sidebar={sidebar}
      >
        <SidebarWrap>
            <NavIcon to='#'>
                <AiIcons.AiOutlineClose 
                className=' ml-8 font-normal h-20 flex content-start items-center fill-white'
                onClick={showSidebar}
                />
                {/* <SidebarLabel>Overview</SidebarLabel> */}
            </NavIcon>
            {SidebarData.map((item, index) => { //Va a mapear sidebarData que es un array, item es cada uno de los elementos del array que viene siendo a su vez un registro de datos, index es la posicion de cada uno de los elementos
                return <SubMenu item={item} key={index} /> //mostramos el submenu y le pasamos el item que es cada uno de los elementos del array y le pasamos el key que es la posicion de cada uno de los elementos
            })}
        </SidebarWrap>
      </SidebarNav>
      </IconContext.Provider>
      </>
  )
}

export default Sidebar
