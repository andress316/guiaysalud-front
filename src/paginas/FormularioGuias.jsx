import axios from "axios";
import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth.jsx";

import { Form, useFieldAnswer, useCurrentBlock, useFormAnswers } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
// import "./styles.css";

import datosGeneralesFormulario from "../formularios/datosGenerales.js";
import cancerPulmonFormulario from "../formularios/cancerPulmon.js";
import tiposDeCancer from "../formularios/tiposDeCancer.js";
import otroTipoDeCancerForm from "../formularios/otroTipoDeCancer.js";
import metastasisForm from "../formularios/metastasisForm.js";
import siTuvoCirugia from "../formularios/cirugiaafirmativo.js";
import tratamientos from "../formularios/tratramientos.js";
import ecogForm from "../formularios/ecog.js";
import seleccionGuias from "../formularios/guiasSeleccion.js";
import terminosForm from "../formularios/terminosYcondiciones.js";
import tratamientoDespues from "../formularios/tratamientoDespues.js";
import cancerMamaFormulario from "../formularios/cancerDeMama.js";
import cancerCabezaCuelloFormulario from "../formularios/cancerDeCabezaCuello.js";
import cancerLinfomaFormulario from "../formularios/cancerLinfoma.js";
import cancerLeucemiaFormulario from "../formularios/cancerLeucemia.js";
import metastasisTratamiento from "../formularios/metastasisTratamiento.js";
import cirugiaAntesDespues from "../formularios/cirugiaAntesDespues.js";

import getAuthToken from "../utils/AuthToken.js";

import imgPortada from "../assets/form-portada.jpg";
import imgCirugia from "../assets/form-cirugia.webp";
import imgNuevoTratamientos from "../assets/form-nuevostratamientos.webp";
import imgTratamiento from "../assets/form-tratamiento.webp";

import stringMayusculas from "../../helpers/stringMayusculas.jsx";



registerCoreBlocks();


const Formulario = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const { auth, setAuth } = useAuth();

  const enfermedad = useFieldAnswer("enfermedad");
  const tuvoCirugia = useFieldAnswer("cirugia");
  const recibioTratamiento = useFieldAnswer("tratamiento");
  const cirugiaDespues = useFieldAnswer("cirugiaAntesDespues");
  const metastasis = useFieldAnswer("metastasis")
  const guiaEstudiosClinicos = useFieldAnswer("guiaEstudiosClinicos")

  const subtipoCabezaCuello = useFieldAnswer("cabezaCuelloCavidadOral")
  const subtipoMama = useFieldAnswer("tipoDeCancerMama")
  const subtipoLeucemia = useFieldAnswer("tipoLeucemia")
  const subtipoLinfoma = useFieldAnswer("tipoDeLinfoma")
  const subtipoPulmon = useFieldAnswer("tipoDeCancerPulmon")

  const nombreValue = useFieldAnswer("nombre")



  const [recibioTrata, setRecibioTrata] = useState("")

  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserpassword] = useState('')
  const autoLoginUrl = `/login-usuario/${userEmail}/${userPassword}`

  const [cargando, setCargando] = useState(false)


  const [mensajeFinal, setMensajeFinal] = useState(`En poco recibirás tus guías.\n\nRevisa tu correo y whatsapp.\n\n\n\n
  // <a class="renderer-core-button css-ai2jtz" href="/">Ir a inicio<svg class="renderer-core-arrow-icon css-1aucf1m" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></a>`)



  if (cargando) return (
    <>
      <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
        <div className="p-4 bg-gradient-to-tr animate-spin from-yellow-500 to-blue-500 via-purple-500 rounded-full">
          <div className="bg-white rounded-full dark:bg-slate-800">
            <div className="w-28 h-28 rounded-full"></div>
          </div>
        </div>
      </div>
      <h1 className="font-poppins font-medium text-slate-500 dark:text-white absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2 animate-pulse">Cargando</h1>
    </>
  )





  return (
    <div className="h-screen w-screen z-50">

      <Form
        formId="guias-feb-2025"
        formObj={{

          blocks: [
            // Sección 1: Pantalla de bienvenida
            {
              name: "welcome-screen",
              id: "bienvenida",
              attributes: {
                label: `Crear y descargar`,
                description: "Recibe por whatsapp tus PDF con consejos creados por especialistas.",
                attachment: {
                  type: "image",
                  url: imgPortada
                },
                attachmentMaxWidth: "1600px",
                buttonText: "Comenzar",
              }
            },

            // Sección 2: Opciones de enfermedad
            tiposDeCancer,

            // Sección 3: Formularios de tipo de cáncer
            // ...(enfermedad?.includes("otro") ? otroTipoDeCancerForm : []),
            ...(enfermedad?.includes("cabeza-cuello") ? cancerCabezaCuelloFormulario : []),
            ...(enfermedad?.includes("pulmon") ? cancerPulmonFormulario : []),
            ...(enfermedad?.includes("mama") ? cancerMamaFormulario : []),
            ...(enfermedad?.includes("linfoma") ? cancerLinfomaFormulario : []),
            ...(enfermedad?.includes("leucemia") ? cancerLeucemiaFormulario : []),

            // Sección 4: datos Generales
            datosGeneralesFormulario,


            // Sección 5: Estado del paciente
            metastasisForm,


            // Sección 6: Cirugía
            {
              name: "dropdown",
              id: "cirugia",
              attributes: {
                required: true,
                attachment: {
                  type: "image",
                  url: imgCirugia
                },
                choices: [
                  {
                    label: "Si",
                    value: "1"
                  },
                  {
                    label: "No",
                    value: "0"
                  },
                ],
                label: "¿Se le ha realizado alguna cirugía relacionada al cáncer?",
                nextBtnLabel: "Siguiente",
                layout: "split-right",
                description: "Incluyen cirugias relacionadas al cáncer sin contar las tomas de biopsia.",
              }
            },

            ...(tuvoCirugia?.includes("1") ? siTuvoCirugia : []),


            // Sección 7: Tratamientos del paciente
            {
              name: "dropdown",
              id: "tratamiento",
              attributes: {
                attachment: {
                  type: "image",
                  url: imgTratamiento
                },
                choices: [
                  {
                    label: "Si",
                    value: "1"
                  },
                  {
                    label: "No",
                    value: "0"
                  },
                ],
                label: "¿Ha recibido tratamiento para el cáncer?",
                nextBtnLabel: "Siguiente",
                layout: "split-right",
                required: true,
                description: "Incluye tratamientos tradicionales como Quimioterapia, Radioterapia, Inmunoterapia, Terapia Hormonal, Terapia Dirigida, etc."
              }
            },
            ...(metastasis?.includes("1") && recibioTratamiento?.includes("1") ? metastasisTratamiento : []),
            ...(recibioTratamiento?.includes("1") ? tratamientos : []),
            ...(recibioTratamiento?.includes("1") && tuvoCirugia?.includes("1") ? cirugiaAntesDespues : []),
            ...(recibioTratamiento?.includes("1") && cirugiaDespues?.includes("despues") ? tratamientoDespues : []),


            // Sección 8: ECOG
            ecogForm,

            // Sección 9: Mensaje
            {
              name: "statement",
              id: "mensaje1",
              attributes: {
                label: "Muy bien, ya casi terminamos!",
                buttonText: "Continuar",
                quotationMarks: true
              }
            },

            // Sección 10: Selección de guías
            seleccionGuias,


            // Sección 11: Guía de estudios clínicos
            {
              name: "dropdown",
              id: "guiaEstudiosClinicos",
              attributes: {
                attachment: {
                  type: "image",
                  url: imgNuevoTratamientos
                },
                choices: [
                  {
                    label: "Si",
                    value: "tratamiento"
                  },
                  {
                    label: "No",
                    value: "0"
                  },
                ],
                label: "¿Desea recibir un listado de tratamientos de última generación en Chile?",
                description: "Recibirá un documento con los estudios clínicos más avanzados en el país y un miembro de nuestro equipo podría contactarte.",
                nextBtnLabel: "Siguiente",
                layout: "split-right",
                required: true,
              }
            },

            // Sección 12: Pregunta personalizada
            {
              id: "intereses",
              name: "short-text",
              attributes: {
                label: "¿De qué temas en específico te gustaría recibir orientación?",
                required: false,
                placeholder: "Escribe acá...",
                description: "Ayudanos a mejorar y apoyar más pacientes, cuéntanos en qué temas te gustaría recibir orientación.",
              }
            },

            // Sección 11: Mensaje
            {
              name: "statement",
              id: "mensaje2",
              attributes: {
                label: "Recibirás tus guías por correo y whatsapp",
                buttonText: "Continuar",
                quotationMarks: true
              }
            },


            // Sección 13: datos de contacto
            {
              id: "datos-contacto",
              name: "group",
              attributes: {
                label: "Responde las siguientes preguntas",
                nextBtnLabel: "Siguiente"
              },
              innerBlocks: [
                {
                  id: "nombre",
                  name: "short-text",
                  attributes: {
                    type: "string",
                    "setMaxCharacters": true, // Default: false
                    "maxCharacters": 35,
                    label: "¿Cuál es tu nombre?",
                    required: true,
                    placeholder: "Escribe acá..."
                  }
                },
                {
                  name: "email",
                  id: "email",
                  attributes: {
                    required: true,
                    label: "Email:",
                  }
                },
                {
                  id: "telefono",
                  name: "short-text",
                  attributes: {
                    type: "number",
                    "setMaxCharacters": true, // Default: false
                    "maxCharacters": 12,
                    label: "Número de teléfono con whatsapp:",
                    required: true,
                    placeholder: "+56",
                  }
                },


              ]
            },

            // Sección 14: Términos y condiciones
            terminosForm

          ],
          settings: {
            animationDirection: "vertical",
            disableWheelSwiping: true,
            disableNavigationArrows: false,
            disableProgressBar: false
          },
          theme: {
            font: "Roboto",
            buttonsBgColor: "#9b51e0",
            logo: {
              src: ""
            },
            questionsColor: "#000",
            answersColor: "#0aa7c2",
            buttonsFontColor: "#fff",
            buttonsBorderRadius: 25,
            errorsFontColor: "#fff",
            errorsBgColor: "#f00",
            progressBarFillColor: "#000",
            progressBarBgColor: "#ccc",
            backgroundColor: "#130a2b",
            questionsColor: "white",
            answersColor: "white"
          },
          messages: {
            'label.hintText.enter': "Presiona <strong>Enter ↵</strong> para avanzar.",
            'block.longText.hint': '<strong>Shift ⇧ + Enter ↵</strong> para salto de línea.',
            'block.dropdown.placeholder': "Seleccionar",
            'label.errorAlert.required': 'Este campo es obligatorio',
            'label.errorAlert.selectionRequired': 'Seleccionar una opción',
            'label.submitBtn': 'Crear guías',
            'label.hintText.key': '✓',
            'label.button.ok': 'Siguiente',
            'label.errorAlert.maxCharacters': 'Excede el largo permitido',
            'label.errorAlert.email': 'Email inválido',
            'block.email.placeholder': 'Escribe acá...',

            'block.defaultThankYouScreen.label': `En poco recibirás tus guías.\n\nRevisa tu correo y whatsapp.\n\n\n\n<a class="renderer-core-button css-ai2jtz" href="/login">Iniciar Sesión<svg class="renderer-core-arrow-icon css-1aucf1m" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></a>`
          }
        }}

        // Enviamos el formulario
        onSubmit={(data, { completeForm, setIsSubmitting }) => {

          let datosFormulario = data
          datosFormulario.answers.subtipo = { value: 0 }
          datosFormulario.answers.user = { id: null, nombre: null, email: null, telefono: null }

          datosFormulario.answers.origenFormulario = { value: "guias-2025-nonloged" }
          datosFormulario.answers.origenCampana = { value: searchParams.get("origen-campana") }
          datosFormulario.answers.nombreFormulario = { value: 'Guias - Guía y Salud' }

          datosFormulario.answers.nombre = { value: stringMayusculas(nombreValue) }


          // Tratamientos:
          if (datosFormulario.answers.tratamiento.value === "0") {
            datosFormulario.answers.quimioterapia = { value: "0" }
            datosFormulario.answers.radioterapia = { value: "0" }
            datosFormulario.answers.inmunoterapia = { value: "0" }
            datosFormulario.answers.terapiaHormonal = { value: "0" }
            datosFormulario.answers.terapiaDirigida = { value: "0" }
          }

          if (datosFormulario.answers.tratamientosDelPaciente) {
            if (datosFormulario.answers.tratamientosDelPaciente.value.includes("quimioterapia")) {
              datosFormulario.answers.quimioterapia = { value: "1" }
            } else { datosFormulario.answers.quimioterapia = { value: "0" } }

            if (datosFormulario.answers.tratamientosDelPaciente.value.includes("radioterapia")) {
              datosFormulario.answers.radioterapia = { value: "1" }
            } else { datosFormulario.answers.radioterapia = { value: "0" } }

            if (datosFormulario.answers.tratamientosDelPaciente.value.includes("inmunoterapia")) {
              datosFormulario.answers.inmunoterapia = { value: "1" }
            } else { datosFormulario.answers.inmunoterapia = { value: "0" } }

            if (datosFormulario.answers.tratamientosDelPaciente.value.includes("terapiaHormonal")) {
              datosFormulario.answers.terapiaHormonal = { value: "1" }
            } else { datosFormulario.answers.terapiaHormonal = { value: "0" } }

            if (datosFormulario.answers.tratamientosDelPaciente.value.includes("terapiaDirigida")) {
              datosFormulario.answers.terapiaDirigida = { value: "1" }
            } else { datosFormulario.answers.terapiaDirigida = { value: "0" } }
          }


          // Subtipos:
          if (datosFormulario.answers.enfermedad.value.includes("cabeza-cuello")) {
            datosFormulario.answers.subtipo = { value: subtipoCabezaCuello }
          }

          if (datosFormulario.answers.enfermedad.value.includes("mama")) {
            datosFormulario.answers.subtipo = { value: subtipoMama }
          }

          if (enfermedad === "linfoma") {
            datosFormulario.answers.subtipo = { value: subtipoLinfoma }
          }

          if (enfermedad === "leucemia") {
            datosFormulario.answers.subtipo = { value: subtipoLeucemia }
          }

          if (enfermedad === "pulmon") {
            datosFormulario.answers.subtipo = { value: subtipoPulmon }
          }

          if (datosFormulario.answers.guiaEstudiosClinicos.value === "tratamiento") {
            datosFormulario.answers.guiasSeleccionadas.value.push("tratamiento")
          }

       



          async function submit(info) {

            setUserEmail(info.answers.email.value)
            setUserpassword(info.answers.password)

            try {

              const tokenAPI = await getAuthToken(); // Obtén el token usando la función

              // Autorización para peticiones
              const configWithTokenAPI = {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: tokenAPI
                }
              }

              // Petición enviando formulario para guías
              const url = 'https://apiguia.guiaysalud.com/api/v2/guides'
              const formulario = await axios.post(url, info, configWithTokenAPI)

            

              const userNew = formulario.data.userNew
              
              const email = formulario.data.correo
              const password = formulario.data.password


              if (!password) {
                await setIsSubmitting(false);
                await completeForm();
                setMensajeFinal(true)
                return
              }


              setCargando(true)
              await setIsSubmitting(false);
              await completeForm();

              // Petición para login
              const { data } = await axios.post('https://apiusers.guiaysalud.com/api/users/login', { email, password }, configWithTokenAPI);

              const token = data.token.replace('Bearer ', '');
              localStorage.setItem('tokenUser', token);
              setAuth(data.user);

              window.open("/app", "_self");


            } catch (error) {
              
            }
          }
          submit(datosFormulario)
        }
        }
      />
    </div>
  );
};

export default Formulario;
