import { Tabs } from "flowbite-react";
import CardGrupos from '../components/CardGrupos';
import BdGrupos from "../../extras/bd-grupos.json"

const GruposApoyos = () => {

    const data = BdGrupos.sort((a ,b) => a.posicion - b.posicion)
    console.log(data)




    return (
        <div className="min-h-svh">
            <div className='flex px-5 pt-36 md:py-10 flex-col items-center'>
                <h1 className="text-center lg:text-5xl xl:text-6xl text-4xl mb-4 font-black text-indigo-900 dark:text-white lg:pr-5 font-poppins">Grupos <span className="text-pink-500 dark:text-pink-500">De Apoyo</span></h1>
                <p className="font-poppins text-indigo-900 dark:text-white dark:text-gray100 md:text-2xl text-xl text-center">¡Únete a los grupos de apoyo y conecta con pacientes como tú!</p>
            </div>




            <div className='flex flex-col md:flex-row justify-center'>
                <Tabs className="flex justify-center" aria-label="Tabs with icons" variant="underline">
                    <Tabs.Item active title="Chile">

                        <div className="flex flex-wrap">
                            {data.length ?
                                (data.map((grupo) => (
                                    <CardGrupos
                                        key={grupo.nombre}
                                        nombre={grupo.nombre}
                                        enfermedad={grupo.enfermedadDisplay}
                                        descripcion={grupo.descripcion}
                                        miembros={grupo.miembros}
                                        status={grupo.status}
                                        hidden={grupo.hidden}
                                        pais={grupo.pais}
                                        ciudad={grupo.ciudad}
                                        img={grupo.img}
                                        link={grupo.link}
                                    />
                                ))) : "Aún no se han creado grupos de apoyo para pacientes."}
                        </div>


                    </Tabs.Item>
                </Tabs>
            </div >



        </div>
    )
}

export default GruposApoyos
