import React from 'react'
import './AboutUs.scss'
import DarkVariantExample from './DarkVariantExample'
import DarkVariantExample2 from './DarkVariantExample2'
import DarkVariantExample3 from './DarkVariantExample3'
import { Col, Container, Row } from 'react-bootstrap'

export const AboutUs = () => {

    return (
        <Container>
                <section className='nosotros' id='nosotros'>
                    <h2 className='nosotros--subtitle mt-3'>Sobre nosotros</h2>
                    
                    <Row>
                        <div className='nosotros__box'>
                            <Col>
                                <div className='nosotros__box__storie'>
                                    <p>Somos una empresa nueva en el mercado de prestación de servicio técnico. Contamos con un equipo de técnicos especializados en línea blanca - línea marrón - equipos móviles y o portátiles - alarmas - portones e instalaciones eléctricas.</p>
                                    <p>Trabajamos cada día para mejorar nuestras prestaciones por eso los equipos dañados son reparados con repuestos originales ya que de esa forma podemos brindar más seguridad al cliente y que cada trabajo este respaldado por la garantía de repuestos oficiales.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className='nosotros__box__img'></div>
                            </Col>
                        </div>
                    </Row>

                    <h3 className='nosotros--subtitle-2'>Marcas con las que trabajamos</h3>
                    
                    <Row>
                        <Col>
                            <div className='nosotros__marcas'>
                                <div style={{width: '200px', height: '200px'}}>
                                    <DarkVariantExample />
                                </div>
                                <div style={{width: '200px', height: '200px'}}>
                                    <DarkVariantExample2 />
                                </div>
                                <div style={{width: '200px', height: '200px'}}>
                                    <DarkVariantExample3 />
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <div className='container nosotros__box-2 mt-4'>
                            <Col>
                                <div className='nosotros__box-2__storie'>
                                    <p>A su vez, contamos con vehículos propios para realizar las visitas en domicilios y efectuar el retiros de los equipos dañados.</p>
                                    <p>Ingresaran a nuestros laboratorios para su verificacion/reparacion y su posterior devolución. La misma cuenta con su correspondiente garantía.</p>
                                </div>
                            </Col>
                            <Col>
                                <div className='nosotros__box-2__img'></div>
                            </Col>
                        </div>
                    </Row>

                </section>
        </Container>
    )
}