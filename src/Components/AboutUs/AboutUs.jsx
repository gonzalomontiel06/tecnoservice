import React from 'react'
import './AboutUs.scss'
import DarkVariantExample from './DarkVariantExample'
import DarkVariantExample2 from './DarkVariantExample2'
import DarkVariantExample3 from './DarkVariantExample3'

export const AboutUs = () => {

    return (
        <section className='container nosotros'>
            <h2 className='nosotros--subtitle'>¿Quienes somos?</h2>
            <div className='container nosotros__box'>
                <div className='nosotros__box__img'>
                </div>
                <div className='nosotros__box__storie'>
                    <p>Somos una empresa nueva en el mercado de prestación de servicio técnico. Contamos con un equipo de técnicos especializados en línea blanca - línea marrón - equipos móviles y o portátiles - alarmas - portones e instalaciones eléctricas.</p>
                    <p>Trabajamos cada día para mejorar nuestras prestaciones por eso los equipos dañados son reparados con repuestos originales ya que de esa forma podemos brindar más seguridad al cliente y que cada trabajo este respaldado por la garantía de repuestos oficiales.</p>
                </div>
            </div>
            <h3 className='nosotros--subtitle-2'>Marcas con las que trabajamos</h3>
            <div className='nosotros__marcas mt-5'>
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
        </section>
    )
}
//<p>A su vez contamos con vehículos propios para realizar las visitas en domicilios y efectuar el retiros de los equipos dañados para su reparación en nuestros laboratorios y su posterior devolución. La misma cuenta con su correspondiente garantía.</p>