import React from 'react'
import './HomeView.scss'
import { Col, Container, Row } from 'react-bootstrap'

export const HomeView = () => {

        return(
            <Container fluid>
                <Row>
                    <main className='main'>
                        <section className='main__section'>
                            <div className='main__section__title'>
                                <Row>
                                    <Col lg={12} xs={12}>
                                        <h1 className='main__section--title'>tecnoservice</h1>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col lg={12} xs={12}>
                                        <h3 className='mx-3 main__section--title-2'>tecnica y gestion de siniestros.</h3>
                                    </Col>
                                </Row>
                            </div>
                        </section>
                    </main>
                </Row>
            </Container>
        )
}