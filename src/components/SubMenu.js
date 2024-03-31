import React, {useState} from "react";
import {Link} from 'react-router-dom'
import styled from "styled-components";

const SidebarLink = styled(Link)`
    display: flex;
    color: #e1e9fc;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    list-style: none;
    height: 60px;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background: #252831;
        border-left: 4px solid #632ce4;
        cursor: pointer;
    }
`;

const SidebarLabel = styled.span`
margin-left: 16px;

`;

const DropdownLink = styled(Link)`
background-color: #414757;
height: 60px;
padding-left: 3rem;
display: flex;
align-items: center;
text-decoration: none;
color: #f5f5f5;
font-size: 18px;

&:hover{
    background: #632ce4;
    cursor: pointer;
}
`;

const SubMenu = ({item}) => { //definimos este subMenu que va a recibir un item

    const [subNav, setSubNav] = useState(false); //Declaramos el estado de subNav y el metodo para cambiarlo que va a ser setSubNav

    const showSubNav = () => setSubNav(!subNav); //Declaramos la funcion que va a cambiar el estado de subNav, que va a ser el contrario de lo que sea en ese momento 
    return(
        <>
        <SidebarLink 
        to={item.path}
        onClick={item.subNav && showSubNav}> {/* Aqui se declara que si item.subNav existe y showSubNav es verdadero, entonces se ejecuta la funcion showSubNav */}

            <div>
                {item.icon}
                <SidebarLabel>
                {item.title}
                </SidebarLabel>
            </div>
            <div>
                {/* {item.subNav && item.subNav.length > 0 && item.iconClosed} */}
                {item.subNav &&  subNav //Esto es una condición (demarcada por el ?) si item.subNav existe y subNav también es verdadero se realiza la siguiente acción 
                ? item.iconOpened //Si la condición anterior es verdadera (item.subNav existe y subNav es verdadero), entonces se renderiza item.iconOpened que es el icono
                : item.subNav //Si la condición anterior no es verdadera, la expresión verifica solo item.subNav. Si item.subNav está definido (es decir, si hay un submenú disponible), entonces realiza la siguiente acción
                ? item.iconClosed // Si item.subNav está definido, entonces se renderiza item.iconClosed que es el icono
                : null //Si item.subNav no está definido, entonces no se renderiza nada
                }
            </div>

        </SidebarLink>
        {subNav && item.subNav.map((item, index) => {
            return (
                <DropdownLink to={item.path} key={index}>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </DropdownLink>)
        }) }
        </>
    );
};

export default SubMenu