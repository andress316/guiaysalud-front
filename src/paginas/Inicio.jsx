import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import useAuth from '../../hooks/useAuth';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

import heroBackground from '../assets/heroBackground-guiaysalud.webp'
import icono1 from '../assets/iconos-01.png'
import icono2 from '../assets/iconos-02.png'
import icono3 from '../assets/iconos-03.png'
import icono4 from '../assets/iconos-04.png'
import iconoBlanco1 from '../assets/iconos-blanco-01.png'
import iconoBlanco2 from '../assets/iconos-blanco-02.png'
import iconoBlanco3 from '../assets/iconos-blanco-03.png'
import iconoBlanco4 from '../assets/iconos-blanco-04.png'
import imgPaciente from '../assets/paciente.png'
import homeImage from '../assets/IMG-1.png'
import logoBlanco from '../assets/guiaysalud-logo-blanco.png'
import logoBiocenter from '../assets/logo-biocenter-blanco.png'
import logoCop from '../assets/logo-cop-blanco.png'
import logoGenoma from '../assets/logo-genoma-blanco.png'
import logoJamesLynd from '../assets/logo-james-Lynd-blanco.png'
import logoSanofi from '../assets/logo-sanofi-blanco.png'
import logoCorfo from '../assets/logo-CORFO-blanco.png'
import logoIncubaUc from '../assets/logo-incubaUC-blanco.png'
import logoSaga from '../assets/logo-saga-blanco.png'

import testimonioImg1 from '../assets/tamara-testimonio-guiaysalud-01.webp'
import testimonioImg2 from '../assets/luis-testimonio-guiaysalud-02.webp'
import testimonioImg3 from '../assets/ricardo-testimonio-guiaysalud-03.webp'

import informacionConfusaImg from '../assets/informacion-confusa-guiaysalud.webp'
import dudasImg from '../assets/dudas-guiaysalud.webp'
import apoyoImg from '../assets/apoyo-guiaysalud.webp'

import quienesSomosImf from '../assets/quienes-somos.webp'




const Inicio = () => {
  const { darkTheme } = useAuth()
  const [open, setOpen] = React.useState(1);
  const [counterOn, setCounterOn] = useState(false)


  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  const theme = {
    accordion: {
      defaultProps: {
        icon: undefined,
        className: "",
        animate: {
          unmount: {},
          mount: {},
        },
        disabled: false,
      },
      styles: {
        base: {
          container: {
            display: "block",
            position: "relative",
            width: "w-full",
          },
          header: {
            initial: {
              display: "flex",
              justifyContent: "justify-between",
              alignItems: "items-center",
              width: "w-full",
              py: "py-4",
              borderWidth: "border-b border-b-blue-gray-100",
              color: "text-blue-gray-700",
              fontSmoothing: "antialiased",
              fontFamily: "font-sans",
              fontSize: "text-xl",
              textAlign: "text-left",
              fontWeight: "font-semibold",
              lineHeight: "leading-snug",
              userSelect: "select-none",
              hover: "hover:text-blue-gray-900",
              transition: "transition-colors",
            },
            active: { color: "text-blue-gray-900" },
            icon: {
              ml: "ml-4",
            },
          },
          body: {
            display: "block",
            width: "w-full",
            py: "py-4",
            color: "text-gray-700",
            fontSmoothing: "antialiased",
            fontFamily: "font-sans",
            fontSize: "text-sm",
            fontWeight: "font-light",
            lineHeight: "leading-normal",
          },
          disabled: {
            pointerEvents: "pointer-events-none",
            opacity: "opacity-50",
          },
        },
      },
    },
  };


  return (
    <>
      {/* HERO SECTION */}
      <div className='container mx-auto flex px-5 md:py-24 md:flex-row flex-col items-center relative pt-40'>

        {/* Cuerpo del Hero */}
        <div className='lg:flex-grow lg:pr-32 md:pr-16 md:pb-0 flex-col md:items-start md:text-left items-center text-center pb-5'>

          {/* texto */}
          <h1 className='lg:text-5xl xl:text-6xl text-4xl mb-4 font-black text-slate-800 dark:text-white lg:pr-5 font-poppins'>Apoyo y acompañamiento<br />de pacientes</h1>
          <p className='mb-8 leading-relaxed text-lg font-poppins dark:text-gray-400'>Accede a información de calidad, descubre tratamientos de última generación y conecta con personas que comparten tu experiencia.</p>

          {/* botones */}
          <div className='flex md:flex-row flex-col flex-wrap w-full justify-center md:justify-start gap-10 md:gap-0'>
            <Link to="/registrar" className='bg-blue-500 hover:bg-blue-600 text-white px-10 py-3 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition'>
              Comenzar ahora
            </Link>
          </div>
        </div>

        {/* imagen */}
        <div className='flex w-full md:block'>
          <div className='relative w-full mx-auto flex justify-center items-center md:items-start' style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/bZtTlpPOOmI?si=AJAvEKobhGOojeob"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className='absolute top-0 left-0 w-full h-full'
            ></iframe>
          </div>
        </div>

        <img src={heroBackground} alt="" className='md:block absolute bottom-0 md:right-0 w-full xl:w-1/2 lg:w-[60%] md:w-[55%] -z-10' />
      </div>












      {/* Counter */}
      <section className="text-white body-font mt-20 bg-gradient-to-r from-blue-400 to-emerald-400">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="font-poppins font-semibold title-font sm:text-4xl text-3xl text-white">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={1000} end={4868} duration={2} delay={0} />}
                </ScrollTrigger>
              </h2>
              <p className="leading-relaxed">Usuarios</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="font-poppins font-semibold title-font sm:text-4xl text-3xl text-white">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={1000} end={2867} duration={2} delay={0} />}
                </ScrollTrigger>
              </h2>
              <p className="leading-relaxed">Manuales de orientación</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="font-poppins font-semibold title-font sm:text-4xl text-3xl text-white">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={1} end={32} duration={2} delay={0} />}
                </ScrollTrigger>
              </h2>
              <p className="leading-relaxed">Grupos de Apoyo</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="font-poppins font-semibold title-font sm:text-4xl text-3xl text-white">
                <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                  {counterOn && <CountUp start={1} end={20} duration={2} delay={0} />}
                </ScrollTrigger>
              </h2>
              <p className="leading-relaxed">Tipos de enfermedades</p>
            </div>
          </div>
        </div>
      </section>




      {/* Sección: Herramientas para pacientes */}
      <section className="text-gray-600 body-font mt-15">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-poppins font-semibold mb-2 text-slate-800 dark:text-white">
              Nuestras soluciones para pacientes
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
              El acceso a información de calidad permite que muchos pacientes puedan tomar mejores decisiones. De esa forma, queremos apoyarte a través de herramientas diseñadas especialmente para ti.
            </p>
          </div>



          {/* Trajetas */}
          <div className="flex flex-wrap -m-4">

            {/* Tarjeta 1 */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col text-center items-center">
              <div className="border border-gray-200 dark:border-gray-600 p-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-600 text-pink-500 mb-4">
                  <img className="w-14 h-14" src={!darkTheme ? icono1 : iconoBlanco1} alt="" />
                </div>
                <h2 className="text-lg text-slate-800 font-poppins font-semibold title-font mb-2 dark:text-white">
                Orientación y Recomendaciones

                </h2>
                <p className="leading-relaxed text-base dark:text-gray-400">
                  Completa tu información y recibe un PDF de consejos personalizados.
                </p>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-10 mb-10">
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Contenido desarrollado a partir de fuentes confiables.
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Información revisada por especialistas.
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Información de fácil lectura.
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Recibe tu PDF por whatsapp gratis.
                  </li>
                </ul>
                <Link to="/consejos-form">
                  <button className="flex mx-auto mt-5 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
                    Comenzar
                  </button>
                </Link>
              </div>
            </div>


            {/* Tarjeta 2 */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col text-center items-center">
              <div className="border border-gray-200 dark:border-slate-600 p-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-600 mb-4">
                  <img className="w-14 h-14" src={!darkTheme ? icono2 : iconoBlanco2} alt="" />
                </div>
                <h2 className="text-lg text-slate-800 dark:text-white font-poppins font-semibold title-font mb-2">
                  Chat IA de apoyo para pacientes
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-400">
                  Resuelve dudas con un asistente virtual, entrenado para responder con información médica de calidad.
                </p>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-10 mb-10">
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Modelo de Intelingia Artificial entrenado con información médica de fuentes certificadas.
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Resuelve dudas de manera rápida, segura y gratuita.
                  </li>
                </ul>
                <Link to="/registrar">
                  <button className="flex mx-auto mt-5 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
                    Comenzar
                  </button>
                </Link>
              </div>
            </div>



            {/* Tarjeta 3 */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col text-center items-center">
              <div className="border border-gray-200 dark:border-slate-600 p-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-600 text-pink-500 mb-4">
                  <img className="w-14 h-14" src={!darkTheme ? icono3 : iconoBlanco3} alt="" />
                </div>
                <h2 className="text-lg text-slate-800 dark:text-white font-poppins font-semibold title-font mb-2">
                  Grupos de apoyo para pacientes
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-400">
                  Encuentra a personas como tu, que buscan compartir experiencias y sabiduría.
                </p>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-10 mb-10">
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Únete a una comunidad de apoyo y aprendizaje.
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Comparte experiencias y consejos de manera segura.
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Conecta con personas que están pasando por lo mismo que tú.
                  </li>
                </ul>
                <Link to="/registrar">
                  <button className="flex mx-auto mt-5 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
                    Comenzar
                  </button>
                </Link>
              </div>
            </div>



            {/* Tarjeta 4 */}
            <div className="xl:w-1/4 md:w-1/2 p-4 flex flex-col text-center items-center">
              <div className="border border-gray-200 dark:border-slate-600 p-6 rounded-xl hover:shadow-2xl hover:shadow-blue-500/20 transition">
                <div className="w-24 h-24 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-slate-600 text-pink-500 mb-4">
                  <img className="w-14 h-14" src={!darkTheme ? icono4 : iconoBlanco4} alt="" />
                </div>
                <h2 className="text-lg text-slate-800 dark:text-white font-poppins font-semibold title-font mb-2">
                  Tratamiento de última generación
                </h2>
                <p className="leading-relaxed text-base dark:text-gray-400">
                  Te ayudamos a encuentrar un tratamiento de última generación mediante estudios clínicos.
                </p>
                <ul className="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400 mt-10 mb-10">
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Acceso a los traramientos más avanzados del mundo.
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Tratamientos cubiertos en su totalidad por los centros de salud.
                  </li>
                  <li className="flex items-center text-left">
                    <svg
                      className="w-3.5 h-3.5 me-2 text-blue-500 dark:text-green-400 flex-shrink-0"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                    </svg>
                    Apoya el desarrollo de nuevos tratamientos.
                  </li>
                </ul>
                <Link to="/estudios-clinicos-form">
                  <button className="flex mx-auto mt-5 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded-lg text-lg hover:shadow-lg hover:shadow-blue-500/50 transition">
                    Comenzar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>










      <section id='guias' className="text-gray-600 body-font mx-5">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={informacionConfusaImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-xl mb-4 text-slate-900 dark:text-white font-poppins font-semibold">
              La información puede ser confusa
            </h1>
            <h2 className="sm:text-2xl text-3xl mb-4 text-slate-900 dark:text-white font-poppins font-light">
              Recibe consejos personalizados para ti
            </h2>
            <p className="mb-8 leading-relaxed dark:text-gray-400">
              Nuestros documentos de orientación y recomendaciones, son elaborados por expertos para que logres comprender tu condición y que puedas enfocarte en lo más importante para tu salud.
            </p>
            <div className="flex justify-center">
              <Link to="/consejos-form">
                <button className="inline-flex text-white bg-yellow-300 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg hover:shadow-lg hover:shadow-yellow-500/50 transition">
                  Crear guías
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>




      <section id='chat' className="text-gray-600 body-font mx-5">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-3xl mb-4 text-slate-900 dark:text-white font-poppins font-semibold">
              ¿Muchas dudas sobre tu salud?
            </h1>
            <h2 className="sm:text-2xl text-xl mb-4 text-slate-900 dark:text-white font-poppins font-light">
              Escribe a nuestro asistente y pídele ayuda con los temas que no entiendas
            </h2>
            <p className="mb-8 leading-relaxed dark:text-gray-400">
              Este asistente tiene la función de apoyarte en cada etapa del proceso y ayudarte con todas las dudas que tengas. Por favor consulta con tu médico antes de seguir cualquier recomendación.
            </p>
            <Link to="/registrar">
              <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg hover:shadow-lg hover:shadow-pink-500/50 transition">
                Chat con asistente
              </button>
            </Link>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 mt-10 md:mt-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={dudasImg}
            />
          </div>
        </div>
      </section>



      <section id='grupos' className="text-gray-600 body-font mx-5">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={apoyoImg}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="sm:text-4xl text-xl mb-4 text-slate-900 dark:text-white font-poppins font-semibold">
              ¡No estás solo o sola!
            </h1>
            <h2 className="sm:text-2xl text-3xl mb-4 text-slate-900 dark:text-white font-poppins font-light">
              Hay muchos pacientes como tú en nuestros grupos de apoyo.
            </h2>
            <p className="mb-8 leading-relaxed dark:text-gray-400">
              Unirte a una comunidad puede traer muchos beneficios, como ayudarte a aprender por lo que otras personas ya vivieron o bien guiar a las personas que están empezando. Además puedes encontrar un espacio donde puedas decir lo que sientes.
            </p>
            <div className="flex justify-center">
              <Link to="/registrar">
                <button className="inline-flex text-white bg-sky-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-400 rounded text-lg hover:shadow-lg hover:shadow-sky-500/50 transition">
                  Unirme a grupos de apoyo
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>





















      <section id='tratamiento' className="text-gray-600 body-font mt-20 pt-10 pb-20 md:pl-20 md:pr-20 ">
        <div className="flex flex-wrap w-full flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-poppins font-semibold mb-2 text-slate-800 dark:text-white">
            Búsqueda de tratamientos modernos
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
            Te ayudamos a postular a las alternativas de tratamiento más modernas del mundo, sin costo para ti.

          </p>
        </div>
        <div className="container px-5 py-10 mx-auto flex flex-wrap">
          <div className="flex flex-wrap w-full">
            <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5" viewBox="0 0 512 512"><path d="M24 56c0-13.3 10.7-24 24-24l32 0c13.3 0 24 10.7 24 24l0 120 16 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l16 0 0-96-8 0C34.7 80 24 69.3 24 56zM86.7 341.2c-6.5-7.4-18.3-6.9-24 1.2L51.5 357.9c-7.7 10.8-22.7 13.3-33.5 5.6s-13.3-22.7-5.6-33.5l11.1-15.6c23.7-33.2 72.3-35.6 99.2-4.9c21.3 24.4 20.8 60.9-1.1 84.7L86.8 432l33.2 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0c-9.5 0-18.2-5.6-22-14.4s-2.1-18.9 4.3-25.9l72-78c5.3-5.8 5.4-14.6 .3-20.5zM224 64l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 160l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" /></svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                    Paso 1
                  </h2>
                  <p className="leading-relaxed dark:text-gray-400">
                    Responde algunas preguntas sobre tu condición o la de tu familiar.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5" viewBox="0 0 512 512"> <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                    Paso 2
                  </h2>
                  <p className="leading-relaxed dark:text-gray-400">
                    Nosotros realizaremos la búsqueda de tratamientos y veremos si hay alguno que se adecúe a ti.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5" viewBox="0 0 384 512"> <path d="M320 464c8.8 0 16-7.2 16-16l0-288-80 0c-17.7 0-32-14.3-32-32l0-80L64 48c-8.8 0-16 7.2-16 16l0 384c0 8.8 7.2 16 16 16l256 0zM0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64z" /></svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                    Paso 3
                  </h2>
                  <p className="leading-relaxed dark:text-gray-400">
                    Te pediremos algunos exámenes para obtener información adicional.
                  </p>
                </div>
              </div>
              <div className="flex relative pb-12">
                <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-200 pointer-events-none" />
                </div>
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="white" className="w-5 h-5" viewBox="0 0 640 512"><path d="M232 0c-39.8 0-72 32.2-72 72l0 8L72 80C32.2 80 0 112.2 0 152L0 440c0 39.8 32.2 72 72 72l.2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0 .2 0s0 0 0 0l272 0 8 0s0 0 0 0l104 0c39.8 0 72-32.2 72-72l0-288c0-39.8-32.2-72-72-72l-88 0 0-8c0-39.8-32.2-72-72-72L232 0zM480 128l88 0c13.3 0 24 10.7 24 24l0 40-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 0 48-56 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l56 0 0 104c0 13.3-10.7 24-24 24l-88 0 0-128 0-208zM72 128l88 0 0 336c0 0 0 0-.1 0l-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0-.2 0c-13.2 0-24-10.7-24-24l0-104 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-48 56 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-56 0 0-40c0-13.3 10.7-24 24-24zM208 72c0-13.3 10.7-24 24-24l176 0c13.3 0 24 10.7 24 24l0 264 0 128-64 0 0-64c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 64-64 0 0-392zm88 24l0 24-24 0c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l24 0 0 24c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-24 24 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-24 0 0-24c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z" /></svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                    Paso 4
                  </h2>
                  <p className="leading-relaxed dark:text-gray-400">
                    Te contactaremos con un centro médico que evaluará tu caso y realizarán exámenes para determinar si el tratamiento que ofrecen es la mejor opción para ti.
                  </p>
                </div>
              </div>
              <div className="flex relative">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500 inline-flex items-center justify-center text-white relative z-10">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                </div>
                <div className="flex-grow pl-4">
                  <h2 className="font-medium title-font text-sm text-gray-900 dark:text-white mb-1 tracking-wider">
                    Paso 5
                  </h2>
                  <p className="leading-relaxed dark:text-gray-400">
                    Si tu aceptas el tratamiento, podrás acceder. Si en algún momento lo deseas también lo puedes abandonar.
                  </p>
                </div>
              </div>
              <Link to="/estudios-clinicos-form">
                <button className="inline-flex text-white bg-pink-500 border-0 py-2 mt-10 px-6 focus:outline-none hover:bg-pink-400 rounded text-lg hover:shadow-lg hover:shadow-pink-500/50 transition">
                  Buscar tratamiento
                </button>
              </Link>
            </div>
            <img
              className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
              src={homeImage}
              alt="step"
            />
          </div>
        </div>
      </section>











      <section className="text-gray-600 body-font my-36">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-poppins font-semibold mb-2 text-slate-800 dark:text-white">
            Pacientes que hemos ayudado
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 dark:text-gray-400">
            Conoce algunos pacientes que se han beneficiado de nuestras herramientas.
          </p>
        </div>
        <div className="container px-5 py-15 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={testimonioImg1}
                />
                <p className="leading-relaxed dark:text-gray-400">
                  "En mi experiencia, después de mi diagnóstico de cáncer de mama, el apoyo de pares en los grupos de Vitzana, fue fundamental para mi bienestar. Sufrir juntos duele menos y la esperanza se transmite y se potencia... es muy sanador."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm dark:text-white">
                  Tamara
                </h2>
                <p className="text-gray-500 dark:text-white">Cáncer de mama</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={testimonioImg2}
                />
                <p className="leading-relaxed dark:text-gray-400">
                  "Pase 8 meses hasta que me hicieron una biopsia... esperar 8 meses con un cáncer agresivo es como practicamente no tener más expectativas de vida. Acceder a un estudio clínico me salvo la vida"
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 dark:text-white font-medium title-font tracking-wider text-sm">
                  Luis
                </h2>
                <p className="text-gray-500 dark:text-white">Cáncer de pulmón</p>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src={testimonioImg3}
                />
                <p className="leading-relaxed dark:text-gray-400">
                  "Se preocupan mucho por ti, desde el primer momento he recibido muchos beneficios, me pagan el traslado, el tratamiento e incluso un cirugía que necesitaba. Estoy muy agradecido."
                </p>
                <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-6 mb-4" />
                <h2 className="text-gray-900 dark:text-white font-medium title-font tracking-wider text-sm">
                  Ricardo
                </h2>
                <p className="text-gray-500 dark:text-white">Cáncer gástrico</p>
              </div>
            </div>
          </div>
        </div>
      </section>




      <section className="my-36 bg-gradient-to-b from-blue-400 via-blue-500 to-purple-600 text-white pt-8 pb-4">
        <h2 className="text-center text-2xl mb-2 font-poppins font-bold leading-8">
          Colaboradores
        </h2>
        <p className="text-center text-lg font-poppins font-light leading-8 ">
          Insituciones que nos apoyan y trabajan con nosotros
        </p>
        <div className="logos group relative overflow-hidden whitespace-nowrap  py-10 [mask-image:_linear-gradient(to_right,_transparent_0,_white_128px,white_calc(100%-128px),_transparent_100%)]">
          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            {/* Ensure that the images cover entire screen width for a smooth transition */}
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoBiocenter}
              alt="Transistor"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoCop}
              alt="Reform"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoSaga}
              alt="Reform"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoJamesLynd}
              alt="Tuple"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoGenoma}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoSanofi}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoIncubaUc}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoCorfo}
              alt="SavvyCal"
            />
          </div>
          {/* Duplicate of the above for infinite effect (you can use javascript to duplicate this too) */}
          <div className="animate-slide-left-infinite group-hover:animation-pause inline-block w-max">
            {/* Ensure that the images cover entire screen width for a smooth transition */}
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoBiocenter}
              alt="Transistor"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoCop}
              alt="Reform"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoSaga}
              alt="Reform"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoJamesLynd}
              alt="Tuple"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoGenoma}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoSanofi}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoIncubaUc}
              alt="SavvyCal"
            />
            <img
              className="mx-4 inline h-16 ml-24"
              src={logoCorfo}
              alt="SavvyCal"
            />
          </div>
        </div>
      </section>




      <section className="text-gray-600 body-font my-20" id="nosotros">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              className="object-cover object-center rounded"
              alt="quienes somos guia y salud"
              src={quienesSomosImf}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="font-poppins title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 dark:text-white">
              Sobre Nosotros
            </h1>
            <p className="mb-8 leading-relaxed dark:text-gray-400">
              Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag
              typewriter affogato, hella selvage wolf narwhal dreamcatcher.
            </p>
            <Accordion open={open === 1}>
              <AccordionHeader onClick={() => handleOpen(1)} className='dark:text-gray-400'>¿Qué es Guía y Salud?</AccordionHeader>
              <AccordionBody className='dark:text-gray-400'>
                Somos una organización de apoyo a pacientes y familiares con enfermedades crónicas.
                Generamos herramientas tecnológicas, grupos y actividades que permitan compartir experiencias, apoyo y conocimiento.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader onClick={() => handleOpen(2)} className='dark:text-gray-400'>
                ¿A quiénes ayuda Guía y Salud?
              </AccordionHeader>
              <AccordionBody className='dark:text-gray-400'>
                Guía y Salud apoya a pacientes y familiares con enfermedades crónicas. Creemos que muchas veces la mejor forma de ayudar es generando redes de apoyo, mejorando el conocimiento sobre la enfermedad y apoyando con la adherencia al tratamiento
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader onClick={() => handleOpen(3)} className='dark:text-gray-400'>
                ¿Cómo se financia Guía y Salud?
              </AccordionHeader>
              <AccordionBody className='dark:text-gray-400'>
                Guía y Salud es un proyecto que nació con el apoyo de CORFO. Además del apoyo a pacientes y familiares busca potenciar el ecosistema de innovación en salud, contribuyendo en acelerar el desarrollo de nuevos y mejores medicamentos.
              </AccordionBody>
            </Accordion>
          </div>



        </div>
      </section>











      <footer className="overflow-x-hidden">
        <div className=" bottom-0 mt-[100px] ml-[-50%] h-auto w-[200%] rounded-t-[100%] bg-gradient-to-b from-blue-400 via-blue-500 to-purple-600">
          <div className="mt-5 text-center text-2xl text-white">

            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap md:text-left text-center order-first">
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="font-poppins title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    Páginas
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <Link to="/" className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg ">Inicio</Link>
                    </li>
                    <li>
                      <Link to="/login" className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg ">Ingresar</Link>
                    </li>
                    <li>
                      <Link to="/registrar" className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg ">Crear Cuenta</Link>
                    </li>
                    {/* <li>
                      <Link to="/blog" className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg ">Blog</Link>
                    </li> */}
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="font-poppins title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    Herramientas
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <Link to='/consejos-form' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Consejos para tu enfermedad
                      </Link>
                    </li>
                    <li>
                      <Link to='/registrar' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Chat IA de apoyo a pacientes</Link>
                    </li>
                    <li>
                      <Link to='/registrar' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Grupos de apoyo para pacientes</Link>
                    </li>
                    <li>
                      <Link to='/estudios-clinicos-form' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Búsqueda de tratamiento</Link>
                    </li>
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    Redes Sociales
                  </h2>
                  <nav className="list-none mb-10">
                    <li>
                      <Link to='https://www.instagram.com/guiaysalud' target='_blank' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Instagram</Link>
                    </li>
                    <li>
                      <Link to='https://www.facebook.com/guiaysalud' target='_blank' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Facebook</Link>
                    </li>
                    {/* <li>
                      <a href='www.instagram.com' target='_blank' className="text-gray-100 hover:text-gray-200 cursor-pointer font-poppins font-normal text-lg">Linkedin</a>
                    </li> */}
                  </nav>
                </div>
                <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                  <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                    Subscríbete a nuestras noticias
                  </h2>
                  <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                    <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                      <label
                        htmlFor="footer-field"
                        className="leading-7 text-sm text-gray-100"
                      >
                        Correo:
                      </label>
                      <input
                        type="text"
                        id="footer-field"
                        name="footer-field"
                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                      />
                    </div>
                    <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-800 rounded">
                      Enviar
                    </button>
                  </div>
                  <p className="text-gray-100 text-sm mt-2 md:text-left text-center">
                    Al enviar tu correo electrónico estarás subscrito a nuestros boletines de noticias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </>
  );
};

export default Inicio;
