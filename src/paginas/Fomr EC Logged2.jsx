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
import contacto from "../formularios/contacto.js";
import terminosForm from "../formularios/terminosYcondiciones.js";
import tratamientoDespues from "../formularios/tratamientoDespues.js";
import cancerMamaFormulario from "../formularios/cancerDeMama.js";
import cancerCabezaCuelloFormulario from "../formularios/cancerDeCabezaCuello.js";
import cancerLinfomaFormulario from "../formularios/cancerLinfoma.js";
import cancerLeucemiaFormulario from "../formularios/cancerLeucemia.js";
import metastasisTratamiento from "../formularios/metastasisTratamiento.js";

import getAuthToken from "../utils/AuthToken.js";

import imgPortada from "../assets/form-tratamientosmodernos.jpg";
import imgCirugia from "../assets/form-cirugia.webp";
import imgTratamiento from "../assets/form-tratamiento.webp";

registerCoreBlocks();


const FormularioEcLogged = () => {

  const { auth, setAuth } = useAuth();

  const enfermedad = useFieldAnswer("enfermedad");
  const tuvoCirugia = useFieldAnswer("cirugia");
  const recibioTratamiento = useFieldAnswer("tratamiento");
  const cirugiaAntesODespues = useFieldAnswer("cirugiaAntesODespues");
  const metastasis = useFieldAnswer("metastasis")


  const [userEmail, setUserEmail] = useState('')
  const [userPassword, setUserpassword] = useState('')
  const autoLoginUrl = `/login-usuario/${userEmail}/${userPassword}`
  const navigate = useNavigate();

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
          blocks:  [


            // Sección 1: Pantalla de bienvenida
            {
              name: "welcome-screen",
              id: "bienvenida",
              attributes: {
                label: `Comenzar búsqueda`,
                description: "Realizaremos una búsqueda de tratamientos modernos a través de estudios clínicos para tu caso.",
                attachment: {
                  type: "image",
                  url: imgPortada
                },
                attachmentMaxWidth: "700px",
                buttonText: "Comenzar",
              }
            },

            // Sección 2: Opciones de enfermedad
            tiposDeCancer,

            // Sección 3: Formularios de tipo de cáncer
            ...(enfermedad?.includes("otro") ? otroTipoDeCancerForm : []),
            ...(enfermedad?.includes("cancer-cabeza-cuello") ? cancerCabezaCuelloFormulario : []),
            ...(enfermedad?.includes("cancer-pulmon") ? cancerPulmonFormulario : []),
            ...(enfermedad?.includes("cancer-mama") ? cancerMamaFormulario : []),
            ...(enfermedad?.includes("cancer-linfoma") ? cancerLinfomaFormulario : []),
            ...(enfermedad?.includes("cancer-leucemia") ? cancerLeucemiaFormulario : []),

            // Sección 4: datos Generales
            datosGeneralesFormulario,


            // Sección 5: Estado del paciente
            metastasisForm,
            ...(metastasis?.includes("true") ? metastasisTratamiento : []),


            // Sección 6: Cirugía
            {
              name: "dropdown",
              id: "cirugia",
              attributes: {
                required: true,
                attachment: {
                  type: "image",
                  url:
                    "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
                },
                choices: [
                  {
                    label: "Si",
                    value: "si-cirugia"
                  },
                  {
                    label: "No",
                    value: "no-cirugia"
                  },
                ],
                label: "¿Se le ha realizado alguna cirugía relacionada al cáncer?",
                nextBtnLabel: "Siguiente",
                layout: "split-right"
              }
            },

            ...(tuvoCirugia?.includes("si") ? siTuvoCirugia : []),


            // Sección 7: Tratamientos del paciente
            {
              name: "dropdown",
              id: "tratamiento",
              attributes: {
                attachment: {
                  type: "image",
                  url:
                    "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
                },
                choices: [
                  {
                    label: "Si",
                    value: "si-tratamiento"
                  },
                  {
                    label: "No",
                    value: "no-tratamiento"
                  },
                ],
                label: "¿Ha recibido tratamiento para el cáncer?",
                nextBtnLabel: "Siguiente",
                layout: "split-right",
                required: true,
              }
            },

            ...(recibioTratamiento?.includes("si") ? tratamientos : []),
            ...(recibioTratamiento?.includes("si") && cirugiaAntesODespues?.includes("despues") ? tratamientoDespues : []),
            // ...(recibioTratamiento?.includes("si") && tuvoCirugia?.includes("si") ? tratamientoDespues : []),
            
            
            
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
                  label: "Datos para la guía:",
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
                          label: "Nombre:",
                          required: true,
                          placeholder: "Escribe acá...",
                          defaultValue: auth.nombre
                      }
                  },
                  {
                      name: "email",
                      id: "email",
                      attributes: {
                          required: true,
                          label: "Email:",
                          defaultValue: auth.email
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
                          defaultValue: auth.telefono
                      }
                  },
          
          
              ]
          },

            // Sección 14: Términos y condiciones
            terminosForm

          ],
          settings: {
            animationDirection: "vertical",
            disableWheelSwiping: false,
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

          const datosFormulario = data
          datosFormulario.answers.userId = {value: auth.id}
          console.log(datosFormulario)

          // datosFormulario.answers.password = Math.random().toString(36).toUpperCase().slice(-8)
          datosFormulario.answers.nombreFormulario = {value: 'EC interno'}

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

              // Petición enviando formulario para guías
              const url = 'https://apiguia.guiaysalud.com/api/v2/guides'
              const formulario = await axios.post(url, info.answers, configWithTokenAPI)
              
              console.log(formulario)

              setCargando(true)
              await setIsSubmitting(false);
              await completeForm();

              window.open("/app", "_self");

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


export default FormularioEcLogged;
