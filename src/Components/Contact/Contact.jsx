import React from 'react'
import './Contact.scss'
import logo from '../../img/logo.png'

export const Contact = () => {

    return(
        <div id='contacto'>
            <div className='container contacto mt-5'>
                <h3 className='contacto--subtitle'>contactanos</h3>
                <div className='contacto--line mx-3'></div>
            </div>
            
            <div className='container' style={{display: 'flex', justifyContent: 'space-between'}}>
                
                <div className='contacto__box'>
                    <p className='mt-4'>Si tenes alguna duda, consulta o comentario, podes contactanos y nos comunicaremos con vos lo antes posible. </p>
                    <div className='contacto__box--img'>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                
                <div className='contacto__box__2'>
                    <form className='contacto__box__2__form'>
                        
                        <label htmlFor="name">Nombre completo*</label>
                        <input type="text" name="name" />
                        
                        <label htmlFor="mail">Email*</label>
                        <input type="mail" name="mail" />

                        <label htmlFor="textarea">Consulta*</label>
                        <textarea name="consulta" rows="7"></textarea>

                        <button className='contacto__box__2__form--button'>
                            enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}