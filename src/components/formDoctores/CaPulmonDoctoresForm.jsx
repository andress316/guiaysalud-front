import { useState, useEffect } from "react"
import axios from "axios";
import getAuthToken from "../../utils/AuthToken";
import { useFormik } from "formik"
import { formCaPulmonSchema } from "../../schemas";
import { Label, Select, TextInput, Checkbox } from "flowbite-react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from 'react-countup';
import pulmon3D from "../../assets/pulmon-3d.png"
import { Spinner } from "flowbite-react";

const CaPulmonDoctoresForm = () => {
    const [cantidadEstudios, setCantidadEstudios] = useState('')
    const [counterOn, setCounterOn] = useState(false)
    const [botonCargando, setBotonCargando] = useState(true)
    const [botonEnviando, setBotonEnviando] = useState(false)
    const [formPaso, setFormPaso] = useState(1)

    // const [terapiaSistemicaValidation, setTerapiaSistemicaValidation] = useState(true)
    // const [metastasisCerebralValidation, setMetastasisCerebralValidation] = useState(false)


    useEffect(() => {
        const consultarEstudios = async () => {
            try {
                const tokenAPI = await getAuthToken(); // Obtén el token usando la función

                const configWithTokenAPI = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: tokenAPI
                    }
                };

                const { data } = await axios.get('https://apifiltro.guiaysalud.com/api/v1/filter-ec/cantidad', configWithTokenAPI);
                setCantidadEstudios(data.cantidad)

            } catch (error) {
                console.log(error)
            }
        }
        consultarEstudios()
    }, [])





    const onSubmit = async (values, actions) => {

        setBotonEnviando(true)

        { values.pdl1 === "1" ? values.pdl1 = 1 : values.pdl1 = 0 }
        { values.egfr === true ? values.egfr = 1 : values.egfr = 0 }
        { values.ros1 === true ? values.ros1 = 1 : values.ros1 = 0 }
        { values.alk === true ? values.alk = 1 : values.alk = 0 }

        { values.tipoHistologico === "adenocarcinoma" ? values.adenocarcinoma = 1 : values.adenocarcinoma = 0 }
        { values.tipoHistologico === "carcinomaEscamoso" ? values.carcinomaEscamoso = 1 : values.carcinomaEscamoso = 0 }
        { values.tipoHistologico === "tumorNeuroendocrino" ? values.tumorNeuroendocrino = 1 : values.tumorNeuroendocrino = 0 }
        { values.tipoHistologico === "carcinomaNeuroendocrino" ? values.carcinomaNeuroendocrino = 1 : values.carcinomaNeuroendocrino = 0 }
        { values.ecog ? values.ecog = parseInt(values.ecog) : "" }
        { values.candidatoCirugia ? values.candidatoCirugia = parseInt(values.candidatoCirugia) : "" }
        { values.irradiacion ? values.irradiacion = parseInt(values.irradiacion) : "" }
        { values.metastasisCerebral ? values.metastasisCerebral = parseInt(values.metastasisCerebral) : "" }
        { values.terapiaSistemica ? values.terapiaSistemica = parseInt(values.terapiaSistemica) : "" }


        values.enfermedad = "66c10c7e6de66bf2fce185e5"
        values.submit = true



        try {
            const tokenAPI = await getAuthToken(); // Obtén el token usando la función

            const configWithTokenAPI = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: tokenAPI
                }
            };
            console.log('Formulario enviado:')
            console.log(values)
            const { data } = await axios.post('https://apifiltro.guiaysalud.com/api/v1/filter-ec/compare-especialista', { values }, configWithTokenAPI);

            console.log('Respuesta del servidor:')
            console.log(data)

            actions.resetForm()
            setBotonEnviando(false)
            setFormPaso(1)




        } catch (error) {
            console.log(error)
        }
    }



    const handlePasoAtras = (e) => {
        e.preventDefault()
        setFormPaso(1)
    }



    const handlePasoAdelante = (e) => {
        e.preventDefault()
        if (!values.subtipo || errors.subtipo || errors.tipoHistologico || errors.etapa || errors.candidatoCirugia || errors.pdl1 || errors.ecog) {
            console.log(errors)
            return
        }
        setFormPaso(2)
    }






    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {

            subtipo: "",
            tipoHistologico: "",
            etapa: "",

            candidatoCirugia: "",

            pdl1: "",
            ros1: "",
            alk: "",
            egfr: "",
            sinMutacion: "",

            terapiaSistemica: "",
            metastasisCerebral: "",
            irradiacion: "",

            ecog: "",

            email: "",
            nombreDoctor: "",
            nombrePaciente: "",
            telefono: ""
        },
        validationSchema: formCaPulmonSchema,
        onSubmit
    })

    // const handleEtapa = (eEtapa) => {
    //     console.log("esta es la etapa: ", eEtapa)
    //     if (eEtapa === "4") {
    //         setTerapiaSistemicaValidation(true)
    //         setMetastasisCerebralValidation(true)
    //     }

    // }



    setTimeout(() => {
        setBotonCargando(false)
    }, "1000")


    return (

        <>

            <div className="flex flex-col md:flex-row gap-10 mx-6">


                {/* Información de protocolos de pulmón */}
                <div className="flex flex-row md:flex-col md:max-w-72 md:mx-auto md:h-full overflow-hidden dark:bg-slate-700 bg-white rounded-xl p-4 shadow-lg gap-5 items-center">

                    <div className="w-1/5 md:w-56 md:p-5">
                        <img className='md:w-full mb-1' src={pulmon3D} alt="Estudio Clínico de Cáncer de pulmón" />
                    </div>

                    <div className="w-1/2 md:w-full">
                        <p className="font-poppins text-indigo-900 dark:text-white dark:text-gray100 text-md md:text-xl text-left md:text-center">Estudios Clínicos de</p>
                        <p className="font-poppins font-extrabold text-pink-500 text-md md:text-xl text-left md:text-center">Cáncer de Pulmón</p>
                    </div>

                    {botonCargando ? <div className="flex flex-row justify-center"><Spinner color="purple" aria-label="Default status example" /></div> :
                        <h2 className="w-1/5 md:w-full font-poppins font-semibold title-font text-5xl dark:text-white text-black0 text-left md:text-center">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(true)}>
                                {counterOn && <CountUp start={0} end={cantidadEstudios} duration={3} delay={0.4} />}
                            </ScrollTrigger>
                        </h2>
                    }
                </div>



                {/* Comienzo del formulario de cáncer de pulmón */}
                <form onSubmit={handleSubmit}>
                    <div className="w-full items-center">
                        <div className="flex flex-col  mx-auto mb-20 overflow-hidden dark:bg-slate-700 bg-white rounded-xl transform transition-all p-10 hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                            {formPaso === 1 ?
                                <div>
                                    <div className="mb-2 block">
                                        <Label htmlFor="subtipo" value="Tipo de cáncer de pulmón" />
                                    </div>
                                    <Select
                                        id="subtipo"
                                        placeholder="Seleccionar"
                                        value={values.subtipo}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        color={errors.subtipo && touched.subtipo ? "failure" : "gray"}
                                        required
                                    >
                                        <option value="" selected disabled hidden>Seleccionar</option>
                                        <option value="celulasPequeñas">Células Pequeñas</option>
                                        <option value="celulasNoPequeñas">Células NO Pequeñas</option>
                                        <option value="desconocido">Desconocido</option>
                                    </Select>
                                    {errors.subtipo && touched.subtipo ? <p className="text-red-500">{errors.subtipo}</p> : ""}



                                    <div className="mb-2 mt-5 block">
                                        <Label htmlFor="tipoHistologico" value="¿Cuál es la histología?" />
                                    </div>
                                    <Select
                                        id="tipoHistologico"
                                        placeholder="Seleccionar"
                                        value={values.tipoHistologico}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        color={errors.tipoHistologico && touched.tipoHistologico ? "failure" : "gray"}
                                        required
                                    >
                                        <option value="" selected disabled hidden>Seleccionar</option>
                                        <option value="adenocarcinoma">Adenocarcinoma</option>
                                        <option value="carcinomaEscamoso">Carcinoma escamoso</option>
                                        <option value="tumorNeuroendocrino">Tumor neuroendocrino</option>
                                        <option value="carcinomaNeuroendocrino">Carcinoma neuroendocrino</option>
                                        <option value="desconocido">Desconocido</option>
                                    </Select>
                                    {errors.tipoHistologico && touched.tipoHistologico ? <p className="text-red-500">{errors.tipoHistologico}</p> : ""}



                                    <div className="mb-2 mt-5 block">
                                        <Label htmlFor="etapa" value="Etapa" />
                                    </div>
                                    <Select
                                        id="etapa"
                                        placeholder="Seleccionar"
                                        value={values.etapa}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        color={errors.etapa && touched.etapa ? "failure" : "gray"}
                                        required
                                    >
                                        <option value="" selected disabled hidden>Seleccionar</option>
                                        <option value="1">I</option>
                                        <option value="2">II</option>
                                        <option value="3">III</option>
                                        <option value="4">IV</option>
                                    </Select>
                                    {errors.etapa && touched.etapa ? <p className="text-red-500">{errors.etapa}</p> : ""}



                                    {values.etapa === "4" || values.etapa === "" ? "" :
                                        <>
                                            <div className="mb-2 mt-5 block transition-all duration-4000 ease-in opacity-100">
                                                <Label htmlFor="candidatoCirugia" value="¿Es candidato a cirugia de resección?" />
                                            </div>
                                            <Select
                                                id="candidatoCirugia"
                                                placeholder="Seleccionar"
                                                value={values.candidatoCirugia}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                color={errors.candidatoCirugia && touched.candidatoCirugia ? "failure" : "gray"}
                                                required

                                            >
                                                <option value="" selected disabled hidden>Seleccionar</option>
                                                <option value="1">Si</option>
                                                <option value="0">No</option>
                                                <option value="2">Falta informacion para determinar</option>
                                            </Select>
                                        </>
                                    }



                                    <div className="mb-2 mt-5 block">
                                        <Label htmlFor="pdl1" value="¿Cual es el nivel de PDL1?" />
                                    </div>
                                    <Select
                                        id="pdl1"
                                        placeholder="Seleccionar"
                                        value={values.pdl1}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        color={errors.pdl1 && touched.pdl1 ? "failure" : "gray"}
                                        required
                                    >
                                        <option value="" selected disabled hidden>Seleccionar</option>
                                        <option value="0">Negativo</option>
                                        <option value="1">Positivo</option>
                                    </Select>
                                    {errors.pdl1 && touched.pdl1 ? <p className="text-red-500">{errors.pdl1}</p> : ""}



                                    <div className="mb-2 mt-5 block">
                                        <Label htmlFor="mutaciones" value="¿Cuenta con alguna de las siguientes mutaciones?" />
                                    </div>


                                    <div className="flex mt-5 items-center gap-2">
                                        <Checkbox
                                            id="egfr"
                                            placeholder="Seleccionar"
                                            value={values.egfr}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            checked={values.egfr === true ? true : false}

                                        />
                                        <Label htmlFor="egfr" className="flex">
                                            EGFR
                                        </Label>
                                    </div>

                                    <div className="flex mt-5 items-center gap-2">
                                        <Checkbox
                                            id="ros1"
                                            placeholder="Seleccionar"
                                            value={values.ros1}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            checked={values.ros1 === true ? true : false}

                                        />
                                        <Label htmlFor="ros1" className="flex">
                                            ROS 1
                                        </Label>
                                    </div>

                                    <div className="flex mt-5 items-center gap-2">
                                        <Checkbox
                                            id="alk"
                                            placeholder="Seleccionar"
                                            value={values.alk}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            checked={values.alk === true ? true : false}
                                        />
                                        <Label htmlFor="alk" className="flex">
                                            ALK
                                        </Label>
                                    </div>
                                    <div className="flex mt-5 items-center gap-2">
                                        <Checkbox
                                            id="sinMutacion"
                                            placeholder="Seleccionar"
                                            value={values.sinMutacion}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            checked={values.sinMutacion === true ? true : false}
                                        />
                                        <Label htmlFor="sinMutacion" className="flex" >
                                            Sin Mutaciones Driver
                                        </Label>
                                    </div>


                                    {values.etapa === "4" &&
                                        <>
                                            <div className="mb-2 mt-5 block">
                                                <Label htmlFor="terapiaSistemica" value="¿Ha recibido terapia sistémica?" />
                                            </div>
                                            <Select
                                                id="terapiaSistemica"
                                                placeholder="Seleccionar"
                                                value={values.terapiaSistemica}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                color={errors.terapiaSistemica && touched.terapiaSistemica ? "failure" : "gray"}
                                                required
                                            >
                                                <option value="" selected hidden>Seleccionar</option>
                                                <option value="1">Si</option>
                                                <option value="0">No</option>
                                            </Select>

                                            <div className="mb-2 mt-5 block">
                                                <Label htmlFor="metastasisCerebral" value="¿Tiene metástasis cerebral?" />
                                            </div>
                                            <Select
                                                id="metastasisCerebral"
                                                placeholder="Seleccionar"
                                                value={values.metastasisCerebral}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                color={errors.metastasisCerebral && touched.metastasisCerebral ? "failure" : "gray"}

                                            >
                                                <option value="" selected disabled hidden>Seleccionar</option>
                                                <option value="1">Si</option>
                                                <option value="0">No</option>
                                            </Select>
                                        </>
                                    }

                                    {values.metastasisCerebral !== "1" || values.metastasisCerebral === "" ? "" :
                                        <>
                                            <div className="mb-2 mt-5 block">
                                                <Label htmlFor="irradiacion" value="¿Ha recibido irradiación?" />
                                            </div>
                                            <Select
                                                id="irradiacion"
                                                placeholder="Seleccionar"
                                                value={values.irradiacion}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                color={errors.irradiacion && touched.irradiacion ? "failure" : "gray"}
                                            >
                                                <option value="" selected disabled hidden>Seleccionar</option>
                                                <option value="1">Si</option>
                                                <option value="0">No</option>
                                            </Select>
                                        </>
                                    }


                                    <div className="mb-2 mt-5 block">
                                        <Label htmlFor="ecog" value="¿Cuál es el ECOG estimado?" />
                                    </div>
                                    <Select
                                        id="ecog"
                                        placeholder="Seleccionar"
                                        value={values.ecog}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        color={errors.ecog && touched.ecog ? "failure" : "gray"}
                                        required
                                    >
                                        <option value="" selected disabled hidden>Seleccionar</option>
                                        <option value="0">0</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Select>
                                    {errors.ecog && touched.ecog ? <p className="text-red-500">{errors.ecog}</p> : ""}
                                </div> :
                                <div>
                                    <div className="w-full md:w-96">
                                        <div>
                                            <div className="mb-2 mt-5 block">
                                                <Label htmlFor="email" value="Email" />
                                            </div>
                                            <TextInput
                                                id="email"
                                                type="email"
                                                placeholder="correo@dominio.com"
                                                value={values.email}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                color={errors.email && touched.email ? "failure" : "gray"}
                                                required
                                            />
                                        </div>
                                        {errors.email && touched.email ? <p className="text-red-500">{errors.email}</p> : ""}

                                        <div>
                                            <div className="mb-2 mt-5 block">
                                                <Label htmlFor="nombreDoctor" value="Nombre del Doctor" />
                                            </div>
                                            <TextInput
                                                id="nombreDoctor"
                                                type="text"
                                                placeholder="Escribir.."
                                                value={values.nombreDoctor}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                color={errors.nombreDoctor && touched.nombreDoctor ? "failure" : "gray"}
                                                required
                                            />
                                        </div>
                                        {errors.nombreDoctor && touched.nombreDoctor ? <p className="text-red-500">{errors.nombreDoctor}</p> : ""}

                                        <div>
                                            <div className="mb-2 mt-5 block">
                                                <Label htmlFor="nombrePciente" value="Nombre del Paciente" />
                                            </div>
                                            <TextInput
                                                id="nombrePaciente"
                                                type="text"
                                                placeholder="Escribir.."
                                                value={values.nombrePaciente}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                color={errors.nombrePaciente && touched.nombrePaciente ? "failure" : "gray"}
                                                required
                                            />
                                        </div>
                                        {errors.nombrePaciente && touched.nombrePaciente ? <p className="text-red-500">{errors.nombrePaciente}</p> : ""}

                                        <div>
                                            <div className="mb-2 mt-5 block">
                                                <Label htmlFor="telefono" value="Telefono de contacto" />
                                            </div>
                                            <TextInput
                                                id="telefono"
                                                type="number"
                                                placeholder="+56 9"
                                                value={values.telefono}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                color={errors.telefono && touched.telefono ? "failure" : "gray"}
                                                required
                                            />
                                        </div>
                                    </div>
                                    {errors.telefono && touched.telefono ? <p className="text-red-500">{errors.telefono}</p> : ""}
                                </div>
                            }






                            {formPaso === 2 ?

                                <div className="flex flex-row justify-center gap-3 mt-5">
                                    <button className="w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-gray-500 hover:hover:bg-gray-600" onClick={e => handlePasoAtras(e)}>
                                        Atrás
                                    </button>
                                    <button type="submit" className={`w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600`} disabled={botonEnviando ? true : false}>
                                        {botonEnviando ? <Spinner color="purple" aria-label="Default status example" /> : "Enviar"}
                                    </button>
                                </div> :
                                <div className="flex flex-row justify-center gap-3 mt-5">
                                    <button type="button" className="w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={e => handlePasoAdelante(e)}>
                                        Siguiente
                                    </button>
                                </div>
                            }

                        </div>
                    </div>
                </form >

            </div >

        </>
    )
}

export default CaPulmonDoctoresForm
