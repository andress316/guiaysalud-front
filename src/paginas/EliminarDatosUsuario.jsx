import React from 'react'

const EliminarDatosUsuario = () => {
    return (
        <div className="bg-gray-100 dark:bg-slate-800 text-slate-800 dark:text-white">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">Solicitud para eliminar datos almacenados</h1>
                <h2 className="text-2xl font-bold mb-2">Instrucciones:</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Envía un correo a datosusuarios@guiaysalud.com</li>
                    <li>Escribe el motivo de la solicitud, junto con el nombre y correo electrónico del usuario</li>
                    <li>Nuestro equipo realizará la búsqueda de información</li>
                    <li>Si el usuario es existente, eliminaremos la información solicitada y recibirás un correo de confirmación</li>
                </ul>
                <h2 className="text-2xl font-bold mb-2">¿Cuánto puede demorar el proceso?</h2>
                <p className="mb-4">
                    La búsqueda del usuario puede demorar hasta 10 días hábiles, cuando el proceso haya concluido recibirás un correo de confirmación.
                </p>
            </div>
        </div>
    )
}

export default EliminarDatosUsuario
