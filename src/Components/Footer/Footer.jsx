import React from 'react'
import './Footer.scss'
import { MdOutlineEmail } from 'react-icons/md'
import { BsTelephoneForward } from 'react-icons/bs'
import { MdSchedule } from 'react-icons/md'
import { RiHomeLine } from 'react-icons/ri'
import { IoPeopleOutline } from 'react-icons/io5'
import { BsInfoCircle } from 'react-icons/bs'
import { Link } from 'react-scroll'
import { Container } from 'react-bootstrap'


export const Footer = () => {
    return(
        <Container fluid style={{padding: 0}}>
                <div className='container-fluid footer '>
                    <div id='footerSize'>
                            <div id='footerBox' className='container'>
                                    <div className='container footer__nosotros mt-5'>
                                        <h3>email</h3>
                                        <div className='footer__nosotros__mail'>
                                            <MdOutlineEmail className='footer__nosotros__mail--icon' />
                                            <p>tecnoservice.gestion@gmail.com</p>
                                        </div>
                                        <div className='footer__nosotros__mail'>
                                            <MdOutlineEmail className='footer__nosotros__mail--icon' />
                                            <p>tecnoservice.siniestros@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className='container footer__nosotros mt-5' id='footerHorario'>
                                            <h3>horarios</h3>
                                            <div className='footer__nosotros__mail'>
                                                <MdSchedule className='footer__nosotros__mail--icon' />
                                                <p>Lun - Vie de 09 a 18hs</p>
                                            </div>
                                    </div>
                            </div>
                            <div className='container'>
                                <div className='container footer__nosotros mt-5'>
                                    <h3>telefonos</h3>
                                    <div className='footer__nosotros__mail'>
                                        <BsTelephoneForward className='footer__nosotros__mail--icon' />
                                        <p>116-685-7596</p>
                                    </div>
                                    <div className='footer__nosotros__mail'>
                                        <BsTelephoneForward className='footer__nosotros__mail--icon' />
                                        <p>113-805-5550</p>
                                    </div>
                                </div>
                            </div>
                            <div className='container'>
                                <div className='container footer__nosotros mt-5'>
                                    <h3>mapa del sitio</h3>
                                    <div className='container footer__nosotros__mail'>
                                        <RiHomeLine className='footer__nosotros__mail--icon' />
                                        <Link to="banner" spy={true} smooth={true} offset={-25} duration={300}>
                                            inicio
                                        </Link>
                                    </div>
                                    <div className='container footer__nosotros__mail'>
                                        <BsInfoCircle className='footer__nosotros__mail--icon' />
                                        <Link to="nosotros" spy={true} smooth={true} offset={-25} duration={300}>
                                            quienes somos
                                        </Link>
                                    </div>
                                    <div className='container footer__nosotros__mail'>
                                        <IoPeopleOutline  className='footer__nosotros__mail--icon' />
                                        <Link to="contacto" spy={true} smooth={true} offset={-25} duration={300}>
                                            contacto
                                        </Link>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div className='container-fluid footer__copyrigth'>
                    <p>Copyright © 2021-2022 Tecnoservice S.R.L.</p>
                </div>
            </Container>
    )
}