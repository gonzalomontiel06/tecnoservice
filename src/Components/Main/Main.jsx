import React from 'react'
import './Main.scss'
import { CgNotes } from 'react-icons/cg'
import { GiAutoRepair } from 'react-icons/gi'
import { FaTruck } from 'react-icons/fa'
import { MdCall } from 'react-icons/md'


export const Main = () => {


        return(
            <div className='container pasos'>
                <div className='pasos__container'>
                    <div className='pasos__container__art clas'>
                        <CgNotes className='icon'/>
                        <div className='mt-2'>
                            <h2 className='pasos__container__art--subtitle'>Administracion</h2>
                            <p className='pasos__container__art--parrafo'>Soporte tecnico de lunes a viernes para estar en constante comunicacion con nuestros clientes </p>
                        </div>
                    </div>
                    <div className='pasos__container__art'>
                        <FaTruck className='icon'/>
                        <div className='mt-2'>
                            <h2 className='pasos__container__art--subtitle'>Logistica</h2>
                            <p className='pasos__container__art--parrafo'>Contamos con flota propia para gestionar retiros y/o entregas de equipos</p>
                        </div>
                    </div>
                    <div className='pasos__container__art'>
                    <GiAutoRepair className='icon'/>
                        <div className='mt-2'>
                            <h2 className='pasos__container__art--subtitle'>Laboratorio</h2>
                            <p className='pasos__container__art--parrafo'>Taller tecnico para gestionar todo tipo de reparaciones, tanto linea marron como linea blanca</p>
                        </div>
                    </div>
                    <div className='pasos__container__art'>
                        <MdCall className='icon'/>
                        <div className='mt-2'>
                            <h2 className='pasos__container__art--subtitle'>Compañias</h2>
                            <p className='pasos__container__art--parrafo'>Linea exclusiva para mantener el constante tacto con las Compañias aseguradoras</p>
                        </div>
                    </div>    
                </div>
            </div>
        )
}