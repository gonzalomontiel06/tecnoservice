import React, {useState} from 'react'
import './Contact.scss'
import logo from '../../img/logo.png'
import emailjs from '@emailjs/browser';

export const Contact = () => {

    const [values, setValues] = useState({
        nombre: '',
        correo: '',
        consulta: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.send('service_8rwtrfo', 'template_9ok68mo', {to_name: 'Tecnoservice', from_name: values.nombre, message: values.consulta +  values.correo}, '7mMvt3nSQBk1VOJge')
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
    }

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
                    <form className='contacto__box__2__form' onSubmit={handleSubmit}>
                        
                        <label htmlFor="name">Nombre completo*</label>
                        <input type="text" name="nombre" onChange={handleChange} />
                        
                        <label htmlFor="mail">Email*</label>
                        <input type="mail" name="correo" onChange={handleChange} />

                        <label htmlFor="textarea">Consulta*</label>
                        <textarea name="consulta" rows="7" onChange={handleChange} ></textarea>

                        <button className='contacto__box__2__form--button'>
                            enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}