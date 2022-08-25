import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'

export const NavBar = () => {


        return (
            <header className='container-fluid banner'>
                <div className='container banner-div'>
                    <NavLink to='/'>
                        <div className='banner-div__icon' ></div>
                    </NavLink>
                    <nav className='banner-div__nav'>
                        <NavLink className={({isActive}) => isActive ? 'link' : ''} to='/nosotros'>quienes somos</NavLink>
                        <NavLink className={({isActive}) => isActive ? 'link' : ''} to='/contacto'>contacto</NavLink>
                    </nav>
                </div>
            </header>
        )
}