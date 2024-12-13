import { useState } from "react"
import { useFormik } from "formik"
import { formCaPulmonSchema } from "../../schemas";
import { Label, Select, TextInput, Checkbox } from "flowbite-react";
import ScrollTrigger from "react-scroll-trigger";
import CountUp from 'react-countup';
import pulmon3D from "../../assets/pulmon-3d.png"
import { Spinner } from "flowbite-react";

const CaPulmonDoctoresForm = () => {
    const [counterOn, setCounterOn] = useState(false)
    const [botonCargando, setBotonCargando] = useState(true)
    const [formPaso, setFormPaso] = useState(1)


    const onSubmit= () => {
        console.log("subiendo")
        console.log(values)
    }

    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues: {
            tipo_ca_pulmon: "",
            tipo_histologico: "",
            etapa: "",
            candidato_cirugia: "",

            pdl1: "",
            egfr: "",
            ros1: "",
            alk: "",
            sinMutacion: "",

            terapia_sistemica: "",
            metastasis_cerebral: "",
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
                                {counterOn && <CountUp start={0} end={10} duration={2} delay={0.4} />}
                            </ScrollTrigger>
                        </h2>
                    }
                </div>



                {/* Comienzo del formulario de cáncer de pulmón */}
                <form onSubmit={handleSubmit}>
                    <div className="w-full items-center">
                        <div className="flex flex-col  mx-auto mb-20 overflow-hidden dark:bg-slate-700 bg-white rounded-xl transform transition-all p-10 hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">



                            {/* PASO 1 DEL FORM */}
                            este es el paso 1
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="tipo_ca_pulmon" value="Tipo de cáncer de pulmón" />
                                </div>
                                <Select
                                    id="tipo_ca_pulmon"
                                    placeholder="Seleccionar"
                                    value={values.tipo_ca_pulmon}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    color={errors.tipo_ca_pulmon && touched.tipo_ca_pulmon ? "failure" : "gray"}
                                    required
                                >
                                    <option value="" selected disabled hidden>Seleccionar</option>
                                    <option value="celulasPequeñas">Células Pequeñas</option>
                                    <option value="celulasNoPequeñas">Células NO Pequeñas</option>
                                    <option value="desconocido">Desconocido</option>
                                </Select>
                                {errors.tipo_ca_pulmon && touched.tipo_ca_pulmon ? <p className="text-red-500">{errors.tipo_ca_pulmon}</p> : ""}



                                <div className="mb-2 mt-5 block">
                                    <Label htmlFor="tipo_histologico" value="¿Cuál es la histología?" />
                                </div>
                                <Select
                                    id="tipo_histologico"
                                    placeholder="Seleccionar"
                                    value={values.tipo_histologico}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    color={errors.tipo_histologico && touched.tipo_histologico ? "failure" : "gray"}
                                    required
                                >
                                    <option value="" selected disabled hidden>Seleccionar</option>
                                    <option value="adenocarcinoma">Adenocarcinoma</option>
                                    <option value="carcinoma_escamoso">Carcinoma escamoso</option>
                                    <option value="tumor_neuroendocrino">Tumor neuroendocrino</option>
                                    <option value="carcinoma_neuroendocrino">Carcinoma neuroendocrino</option>
                                    <option value="desconocido">Desconocido</option>
                                </Select>
                                {errors.tipo_histologico && touched.tipo_histologico ? <p className="text-red-500">{errors.tipo_histologico}</p> : ""}



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
                                            <Label htmlFor="candidato_cirugia" value="¿Es candidato a cirugia de resección?" />
                                        </div>
                                        <Select
                                            id="candidato_cirugia"
                                            placeholder="Seleccionar"
                                            value={values.candidato_cirugia}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            color={errors.candidato_cirugia && touched.candidato_cirugia ? "failure" : "gray"}
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
                                        color={errors.egfr && touched.egfr ? "failure" : "gray"}
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
                                        color={errors.ros1 && touched.ros1 ? "failure" : "gray"}

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
                                        color={errors.alk && touched.alk ? "failure" : "gray"}
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
                                        color={errors.sinMutacion && touched.sinMutacion ? "failure" : "gray"}
                                    />
                                    <Label htmlFor="sinMutacion" className="flex" >
                                        Sin Mutaciones Driver
                                    </Label>
                                </div>


                                {values.etapa !== "4" || values.etapa === "" ? "" :
                                    <>
                                        <div className="mb-2 mt-5 block">
                                            <Label htmlFor="terapia_sistemica" value="¿Ha recibido terapia sistémica?" />
                                        </div>
                                        <Select
                                            id="terapia_sistemica"
                                            placeholder="Seleccionar"
                                            value={values.terapia_sistemica}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            color={errors.terapia_sistemica && touched.terapia_sistemica ? "failure" : "gray"}
                                        >
                                            <option value="" selected disabled hidden>Seleccionar</option>
                                            <option value="1">Si</option>
                                            <option value="0">No</option>
                                        </Select>

                                        <div className="mb-2 mt-5 block">
                                            <Label htmlFor="metastasis_cerebral" value="¿Tiene metástasis cerebral?" />
                                        </div>
                                        <Select
                                            id="metastasis_cerebral"
                                            placeholder="Seleccionar"
                                            value={values.metastasis_cerebral}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            color={errors.metastasis_cerebral && touched.metastasis_cerebral ? "failure" : "gray"}

                                        >
                                            <option value="" selected disabled hidden>Seleccionar</option>
                                            <option value="1">Si</option>
                                            <option value="0">No</option>
                                        </Select>
                                    </>
                                }

                                {values.metastasis_cerebral !== "1" || values.metastasis_cerebral === "" ? "" :
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
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Select>
                            </div>
                            {errors.ecog && touched.ecog ? <p className="text-red-500">{errors.ecog}</p> : ""}





                            {/* PASO 2 DEL FORM */}
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
                                            placeholder="Escribir.."
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




                            <button className="w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" type="submit">Enviar</button>

                        </div>
                    </div>
                </form >

            </div >

        </>
    )
}

export default CaPulmonDoctoresForm
