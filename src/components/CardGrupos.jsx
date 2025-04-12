import React from "react";
import { Link } from "react-router-dom";

import imagenCard from "../assets/nutricion_para_cancer.jpg"



const CardGrupos = ({ nombre, enfermedad, descripcion, miembros, status, hidden, pais, ciudad, img, link }) => {
    return (
        <>
            <div className={`mb-5 mx-auto mt-5 md:mb-10 items-start relative ${hidden ? 'hidden' : ""}`}>
                <div className="inline-block w-60 m-2 p-2 bg-white dark:bg-slate-900 rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
                    <p className="font-poppins font-extrabold text-sm text-gray-600 text-center dark:text-gray-500 my-1">{enfermedad}</p>
                    <img className="h-40 object-cover rounded-xl" src={img} alt="" />
                    <div className="p-2">
                        <h2 className="font-poppins font-bold text-lg">{nombre}</h2>
                        <p className="font-poppins font-medium text-md text-gray-600 dark:text-gray-500">{pais} / {ciudad}</p>
                        <p className='my-5'>{descripcion}</p>

                        <div className='flex justify-center divide-x'>
                            <div className='p-4 items-center'>
                                <h1 className='font-poppins font-bold text-5xl text-center'>{miembros}</h1>
                                <p className='font-poppins text-xs text-center'>Miembros</p>

                            </div>
                            <div className='p-4 items-center'>
                                {status === "activo" ?
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="2.8rem" className='fill-green-500' viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" /></svg>
                                        <p className='text-center font-poppins text-xs mt-1 capitalize'>{status}</p>
                                    </>
                                    : ""}

                                {status === "lleno" ?
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="2.8rem" className='fill-yellow-300' viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm192-96l128 0c17.7 0 32 14.3 32 32l0 128c0 17.7-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32l0-128c0-17.7 14.3-32 32-32z" /></svg>
                                        <p className='text-center font-poppins text-xs mt-1 capitalize'>{status}</p>
                                    </>
                                    : ""}
                                {status === "eliminado" ?
                                    <>
                                        <svg xmlns="http://www.w3.org/2000/svg" height="2.8rem" className='fill-red-500' viewBox="0 0 512 512"><path d="M367.2 412.5L99.5 144.8C77.1 176.1 64 214.5 64 256c0 106 86 192 192 192c41.5 0 79.9-13.1 111.2-35.5zm45.3-45.3C434.9 335.9 448 297.5 448 256c0-106-86-192-192-192c-41.5 0-79.9 13.1-111.2 35.5L412.5 367.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" /></svg>
                                        <p className='text-center font-poppins text-xs mt-1 capitalize'>{status}</p>
                                    </>
                                    : ""}


                            </div>
                        </div>


                    </div>
                    

                    {status === "activo" ?
                        <>
                            <div className="m-2 items-center">
                                <Link to={link} target="_blank" className="block mt-2  px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-blue-500 hover:hover:bg-blue-600">Unirme</Link>
                            </div>
                        </> : ""}
                    {status === "lleno" ?
                        <>
                            <div className="m-2 items-center">
                                <div className="block mt-2  px-6 py-2 rounded text-center text-lg font-semibold transition border">Grupo sin espacio</div>
                            </div>
                        </> : ""}
                    {status === "eliminado" ?
                        <>
                            <div className="m-2 items-center">
                                <div className="block mt-2  px-6 py-2 rounded text-center text-lg font-semibold transition border">Deshabilitado</div>
                            </div>
                        </> : ""}

                </div>
            </div>
        </>
    )
}

export default CardGrupos





