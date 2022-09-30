import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.scss'
import { Link } from 'react-scroll'
import { Col, Container, Row } from 'react-bootstrap'

export const NavBar = () => {


    return (
        <Container fluid>
            <Row>
                <header className='container-fluid banner' id='banner'>
                    <div className='container banner-div'>
                        <Col xs={4} lg={8} md={7}>
                            <NavLink to='/'>
                                <div className='banner-div__icon'></div>
                            </NavLink>
                        </Col>
                        <Col xs={8} lg={4} md={5}>
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
                        </Col>
                    </div>
                </header>
            </Row>
        </Container>
    )
}