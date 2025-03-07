import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

import cambiarNombreEnfermedad from "../../helpers/CambiarNombreEnfermedad.jsx";

import getAuthToken from "../utils/AuthToken.js";

import imgPortada from "../assets/form-tratamientosmodernos.jpg";
import imgCirugia from "../assets/form-cirugia.webp";
import imgTratamiento from "../assets/form-tratamiento.webp";

import stringMayusculas from "../../helpers/stringMayusculas.jsx";


registerCoreBlocks();


const FormularioGuiasLogged = () => {

  const { auth, setAuth } = useAuth();
  const userId = auth.id
  const userTelefono = auth.telefono
  const userNombre = auth.nombre
  const userEmail = auth.email
  const userEnfermedad = auth.enfermedad

  const enfermedad = useFieldAnswer("enfermedad");
  const tuvoCirugia = useFieldAnswer("cirugia");
  const recibioTratamiento = useFieldAnswer("tratamiento");
  const cirugiaDespues = useFieldAnswer("cirugiaAntesDespues");
  const metastasis = useFieldAnswer("metastasis")

  const subtipoCabezaCuello = useFieldAnswer("cabezaCuelloCavidadOral")
  const subtipoMama = useFieldAnswer("tipoDeCancerMama")
  const subtipoLeucemia = useFieldAnswer("tipoLeucemia")
  const subtipoLinfoma = useFieldAnswer("tipoDeLinfoma")
  const subtipoPulmon = useFieldAnswer("tipoDeCancerPulmon")

  const nombreValue = useFieldAnswer("nombre")


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
        formId="1"
        formObj={{
          FormMessages: {
            block: {
              dropdown: {
                placeholder: "Bienvenido"
              }
            }
          },
          blocks: [


            // Sección 1: Pantalla de bienvenida
            {
              name: "welcome-screen",
              id: "bienvenida",
              attributes: {
                label: `Consejos para ${cambiarNombreEnfermedad(userEnfermedad)}`,
                description: "Recibe gratis consejos y guías creadas por especialistas.",
                attachment: {
                  type: "image",
                  url: imgPortada
                },
                attachmentMaxWidth: "700px",
                buttonText: "Comenzar",
              }
            },

            // Sección 2: Opciones de enfermedad
            // tiposDeCancer,

            // Sección 3: Formularios de tipo de cáncer
            // ...(enfermedad?.includes("otro") ? otroTipoDeCancerForm : []),
            ...(auth.enfermedad.includes("cabeza-cuello") ? cancerCabezaCuelloFormulario : []),
            ...(auth.enfermedad.includes("pulmon") ? cancerPulmonFormulario : []),
            ...(auth.enfermedad.includes("mama") ? cancerMamaFormulario : []),
            ...(auth.enfermedad.includes("linfoma") ? cancerLinfomaFormulario : []),
            ...(auth.enfermedad.includes("leucemia") ? cancerLeucemiaFormulario : []),

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
                layout: "split-right"
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
            // seleccionGuias,

            // Sección 11: Guía de estudios clínicos
            // {
            //   name: "dropdown",
            //   id: "guiaEstudiosClinicos",
            //   attributes: {
            //     attachment: {
            //       type: "image",
            //       url: imgNuevoTratamientos
            //     },
            //     choices: [
            //       {
            //         label: "Si",
            //         value: "tratamiento"
            //       },
            //       {
            //         label: "No",
            //         value: "0"
            //       },
            //     ],
            //     label: "¿Desea recibir un listado de tratamientos de última generación en Chile?",
            //     description: "Recibirá un documento con los estudios clínicos más avanzados en el país y un miembro de nuestro equipo podría contactarte.",
            //     nextBtnLabel: "Siguiente",
            //     layout: "split-right",
            //     required: true,
            //   }
            // },

          

            // Sección 12: Pregunta personalizada
            // {
            //   id: "preguntaPersonalizada",
            //   name: "short-text",
            //   attributes: {
            //     label: "Ingresa una pregunta específica:",
            //     required: false,
            //     placeholder: "Escribe acá..."
            //   }
            // },

            // Sección 13: datos de contacto
            {
              id: "datos-contacto",
              name: "group",
              attributes: {
                label: "Datos para enviar tus documentos:",
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
                    placeholder: "Escribe acá...",
                    defaultValue: userNombre
                  }
                },
                {
                  id: "telefono",
                  name: "short-text",
                  attributes: {
                    type: "number",
                    "setMaxCharacters": true, // Default: false
                    "maxCharacters": 12,
                    label: "Número de whatsapp:",
                    required: true,
                    placeholder: "+56",
                    defaultValue: userTelefono
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
            'label.submitBtn': 'Buscar Tratamientos',
            'label.hintText.key': '✓',
            'label.button.ok': 'Siguiente',
            'label.errorAlert.maxCharacters': 'Excede el largo permitido',
            'label.errorAlert.email': 'Email inválido',
            'block.email.placeholder': 'Escribe acá...',

            'block.defaultThankYouScreen.label': `Resultado enviado.\n\nRevisa tu correo y whatsapp.\n\n\n\n<a class="renderer-core-button css-ai2jtz" href="/app">Volver a inicio<svg class="renderer-core-arrow-icon css-1aucf1m" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.88 4.12L13.76 12l-7.88 7.88L8 22l10-10L8 2z"></path></svg></a>`
          }
        }}

        // Enviamos el formulario
        onSubmit={(data, { completeForm, setIsSubmitting }) => {

          let datosFormulario = data
          datosFormulario.answers.email = { value: userEmail }
          datosFormulario.answers.enfermedad = { value: userEnfermedad }
          datosFormulario.answers.subtipo = { value: null }
          datosFormulario.answers.user = { id: userId, nombre: userNombre, email: userEmail, telefono: userTelefono }

          datosFormulario.answers.origenFormulario = { value: "EC-2025-loged" }
          datosFormulario.answers.origenCampana = { value: "sin-campaña" }
          datosFormulario.answers.nombreFormulario = { value: 'Estudios Clínicos Logged - Guía y Salud' }

          datosFormulario.answers.nombre = { value: stringMayusculas(nombreValue) }


          // Tratamientos:
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





          console.log("Datos enviados:")
          console.log(datosFormulario)
          datosFormulario.answers.nombreFormulario = 'Estudios Clínicos Interno'


          async function submit(info) {

            try {

              const tokenAPI = await getAuthToken(); // Obtén el token usando la función

              // Autorización para peticiones
              const configWithTokenAPI = {
                headers: {
                  "Content-Type": "application/json",
                  Authorization: tokenAPI
                }
              }

              // Petición enviando formulario
              const url = 'https://apifiltro.guiaysalud.com/api/v1/filter-ec/filter'
              const formulario = await axios.post(url, info, configWithTokenAPI)

              console.log("Respuesta recibida:")
              console.log(formulario)
              console.log(formulario.data.message)

              await setIsSubmitting(false);
              await completeForm();

            } catch (error) {
              console.log(error)
            }
          }
          submit(datosFormulario)
        }}
      />
    </div>
  );
};

export default FormularioGuiasLogged;
