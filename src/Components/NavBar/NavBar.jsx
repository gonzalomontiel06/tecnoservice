import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import { Link } from 'react-scroll'

export const NavBar = () => {


    return (
        <header className='container-fluid banner' id='banner'>
            <div className='container banner-div'>
                <NavLink to='/'>
                    <div className='banner-div__icon' ></div>
                </NavLink>
                <nav className='banner-div__nav'>

                    <Link to="nosotros" spy={true} smooth={true} offset={-25} duration={300}>
                        quienes somos
                    </Link>

                    <Link to="contacto" spy={true} smooth={true} offset={50} duration={300}>
                        contacto
                    </Link>

                    {/* CODIGO NAV LINK DE REACT ROUTER DOM
                    <NavLink className={({ isActive }) => isActive ? 'link' : ''} to='/nosotros'>quienes somos</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'link' : ''} to='/contacto'>contacto</NavLink> */}

                </nav>
            </div>
        </header>
    )
}