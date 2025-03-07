import { useState } from 'react'
import { Link } from 'react-router-dom'
import cambiarNombreEnfermedad from '../../helpers/CambiarNombreEnfermedad'
import bdGuias from '../../extras/bd-guias.json'

const CardGuiaNoCreada = ({ nombre, enfermedad }) => {
    // Extraemos descripción e imagen de la guía
    let descripcionGuia
    let imgPrevGuia
    let nombreDisplay
    const infoGuia = bdGuias.some((guia)=>{
        if(guia.enfermedad === enfermedad && guia.tipoGuia === nombre){
            descripcionGuia = guia.descripcion
            imgPrevGuia = guia.img
            nombreDisplay = guia.nombreDisplay
            return
        }
    })




    return (
        <>

            <div className="inline-block w-60 m-2 p-2 bg-white dark:bg-slate-800 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                <img className="h-40 object-cover rounded-xl" src={imgPrevGuia} alt="" />
                <div className="p-2">
                    <h2 className="font-poppins font-bold text-lg">{nombreDisplay}</h2>
                    <h3 className="font-poppins font-regular text-xs mb-2 ">{cambiarNombreEnfermedad(enfermedad)}</h3>
                    <p className='my-5'>{descripcionGuia}</p>
                    <p className="font-poppins font-bold text-sm text-gray-600 dark:text-gray-500">No has creado esta guía</p>
                </div>
                <div className="m-2 items-center">
                    <Link role='button' to={"/app/consejos-form"} target="_blank" className="block mt-2  px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-pink-500 hover:hover:bg-pink-600">Crear guía</Link>
                </div>
            </div>
        </>
    )
}

export default CardGuiaNoCreada