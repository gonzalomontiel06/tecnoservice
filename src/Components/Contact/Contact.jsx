import React, {useState} from 'react'
import './Contact.scss'
import logo from '../../img/logo.png'
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'
import { Container } from 'react-bootstrap'

export const Contact = () => {

    const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 1000,
        timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer)
                toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        })

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

        // CIFRAR CON VARIABLES DE ENTORNO LAS CREDENCIALES DE EMAILJS

        emailjs.send('service_8rwtrfo', 'template_9ok68mo', {to_name: 'Tecnoservice', from_name: values.correo, message: values.consulta + values.nombre}, '7mMvt3nSQBk1VOJge')
        .then((res) => {
            console.log(res)
        })
        .catch((err) => console.log(err))
        .finally(() => {
            Toast.fire({
                icon: 'success',
                title: 'Mensaje enviado',
                willClose: () => {
                    window.location.reload()
                }
            })
        })
    }

    return(
        <Container>
            <div id='contacto'>
                <div className='container contacto mt-5'>
                    <h3 className='contacto--subtitle'>contactanos</h3>
                    <div className='contacto--line mx-3'></div>
                </div>
                
                <div className='container' id='flex'>
                    
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
        </Container>
    )
}