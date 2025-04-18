import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import getAuthToken from "../utils/AuthToken";
import CardGuiaCreada from "../components/CardGuia";
import CardGuiaNoCreada from "../components/CardGuiaNoCreada.jsx";
import avatarGuiaYSalud from "../assets/avatar-guia-y-salud.png"
import avatarUsuarioMasculino from "../assets/avatar-hombre-02.png"
import avatarUsuarioFemenino from "../assets/avatar-mujer-02.png"
import iconoBusquedaTratamiento from "../assets/ICONO-TRATAMIENTOS.png"
import iconoGrupos from "../assets/ICONO-GRUPOS.png"
import iconoFundaciones from "../assets/fundaciones.png"
import Alerta from "../components/Alerta.jsx";
import bdGuias from "../../extras/bd-guias.json"
import cambiarNombreEnfermedad from "../../helpers/CambiarNombreEnfermedad.jsx";



import { Button, Carousel, Modal, Select, Spinner } from "flowbite-react";

import BDEnfermedades from "../../extras/bd-enfermedades.json"


const AppInicio = () => {

  const { auth, cargando } = useAuth();
  const [guias, setGuias] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [conversacion, setConversacion] = useState([]);
  const mensajesEndRef = useRef(null);
  const [alerta, setAlerta] = useState({});
  const [botonCargando, setBotonCargando] = useState(false)
  const [avatarUsuario, setAvatarUsuario] = useState(avatarUsuarioMasculino)

  const [enfermedad, setEnfermedad] = useState()
  const [sexo, setSexo] = useState()
  const [pais, setPais] = useState()
  const [nuevoDia, setNuevoDia] = useState('')
  const [nuevoMes, setNuevoMes] = useState('')
  const [nuevoAno, setNuevoAno] = useState('')

  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef < HTMLInputElement > (null);

  const [guiasCreadas, setGuiasCreadas] = useState([])
  const [guiasNoCreadas, setGuiasNoCreadas] = useState([])






  //Consultamos si el usuario lleno toda su información
  if (!openModal && !auth.enfermedad) {
    setOpenModal(true)
  }


  // calculamos los días y años para formulario de información
  const anos = []
  function calcularAnos(limit) {
    var anoActual = (new Date()).getFullYear()
    for (var i = anoActual; i >= limit; i--) {
      anos.push(i)
    };
  }
  calcularAnos(1924)

  const dias = []
  function calcularDias(diaInicial, limit) {
    for (var i = diaInicial; i <= limit; i++) {
      dias.push(i)
    };
  }
  calcularDias(1, 31)





  useEffect(() => {
    //Consultamos el sexo para el avatar
    if (auth.sexo && auth.sexo === "femenino") {
      setAvatarUsuario(avatarUsuarioFemenino)
    }


    // ==============================
    // #region Consultar guías de usuario
    // ==============================

    //Consulta de guías generadas

    const consultarGuias = async () => {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      };

      try {
        //Consultamos las guías del usuario
        const tokenAPI = await getAuthToken();
       
        const configWithTokenAPI = {
          headers: {
            "Content-Type": "application/json",
            Authorization: tokenAPI
          }
        };

        const { data } = await axios.get(`https://apiusers.guiaysalud.com/api/users/${auth.id}/guide`, configWithTokenAPI);

     
        let guiasDeUsuario

        if (data.guias) {
          guiasDeUsuario = data.guias
        } else {
          guiasDeUsuario = []
        }



        // Consulta guias disponibles por enfermedad del usuario
        let guiasDisponibles = [];
        bdGuias.forEach(guia => {
          if (guia.enfermedad === auth.enfermedad) {
            guiasDisponibles.push(guia);
          }
        });


        // Filtramos las guías de la enfermedad
        let guiasUserEnfermedad = [];
        guiasDeUsuario.forEach(guia => {
          if (guia.enfermedad === auth.enfermedad) {
            guiasUserEnfermedad = [...guiasUserEnfermedad, guia];
          }
        });


        // Verificamos los valores de los arreglos
        const compararGuias = (guiasDisp, guiasUsua) => {
          const faltantes = guiasDisp.filter(guiaDisp =>
            !guiasUsua.some(guiaUsua => guiaUsua.tipoGuia.includes(guiaDisp.tipoGuia))
          );
          return faltantes;
        };


        const valoresFaltantes = compararGuias(guiasDisponibles, guiasUserEnfermedad);
        setGuiasNoCreadas(valoresFaltantes)



        // Paso 1: Agrupar los objetos por `tipoGuia`
        const guiasAgrupadas = guiasUserEnfermedad.reduce((acc, guia) => {
          const tipo = guia.tipoGuia[0];
          if (!acc[tipo]) {
            acc[tipo] = [];
          }
          acc[tipo].push(guia);
          return acc;
        }, {});

        // Paso 2: Seleccionar el objeto más reciente para cada `tipoGuia`
        const guiasMasRecientes = Object.values(guiasAgrupadas).map(grupo => {
          return grupo.reduce((masReciente, guia) => {
            return new Date(guia.fecha) > new Date(masReciente.fecha) ? guia : masReciente;
          });
        });

        // Paso 3: Ordenar el arreglo resultante por `tipoGuia`
        guiasMasRecientes.sort((a, b) => a.tipoGuia[0].localeCompare(b.tipoGuia[0]));
        setGuiasCreadas(guiasMasRecientes)


        // ==============================
        // #endregion Consultar guías de usuario
        // ==============================

      } catch (error) {
        console.error('Error al consultar las guías:', error);
      }
    };






    // Consulta de datos de conversación
    const consultarConversacion = async () => {
      try {
        const token = await getAuthToken();
        const configWithTokenAPI = {
          headers: {
            "Content-Type": "application/json",
            Authorization: token
          }
        };


        const { data } = await axios.get(`https://apiusers.guiaysalud.com/api/users/${auth.id}/conversaciones`, configWithTokenAPI);




        const formattedData = data.map(msg => [
          { sender: 'me', text: msg.mensajeUsuario.split(/Thu|Sun|Mon|Tue|Wed|Fri|Sat/)[0], createdAt: msg.fecha },
          { sender: 'bot', text: msg.MensajeRespuestaBot.split(/Thu|Sun|Mon|Tue|Wed|Fri|Sat/)[0], createdAt: msg.fecha }
        ]).flat();
        setConversacion(formattedData);

        if (data.message) {
         
          const welcomeMessage = { sender: 'bot', text: `Hola ${auth.user.nombre}, ¿En qué puedo ayudarte hoy?`, createdAt: new Date() };
          formattedData.push(welcomeMessage);
        }


      } catch (error) {
        console.error('Error al consultar la conversación en el chat:', error);
      }

    };

    consultarGuias();
    consultarConversacion();
    window.scrollTo(0, 0);
  }, [auth.id, auth.nombre]);

  useEffect(() => {
    if (mensajesEndRef.current) {
      // mensajesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [conversacion]);



  const handleSubmit = async (e) => {
    e.preventDefault();
    setBotonCargando(true)
   

    try {
      const token = await getAuthToken();
      const configWithTokenBot = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      };


      const { data } = await axios.post(`https://apibot.guiaysalud.com/api/v1/bot/conversaciones`,
        { mensaje, id: auth.id },
        configWithTokenBot
      );


      setConversacion([
        ...conversacion,
        { sender: 'me', text: mensaje, createdAt: new Date() },
        { sender: 'bot', text: data.msg.split(/Thu|Sun|Mon|Tue|Wed|Fri|Sat/)[0], createdAt: new Date() }
      ]);
      setMensaje('');
      setBotonCargando(false)
    } catch (error) {
      console.error('Error al enviar el mensaje:', error);
      setBotonCargando(false)
    }
  };




  // Modal POPUP de enfermedad - Manejamos la info fermedad
  const handleSubmitInformación = async (e) => {
    e.preventDefault()
    setBotonCargando(true)
    if (!enfermedad || !pais || !sexo || !nuevoDia || !nuevoMes || !nuevoAno) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      });
      setBotonCargando(false)
      return
    }

    try {
      const token = await getAuthToken();
      const configWithTokenBot = {
        headers: {
          "Content-Type": "application/json",
          Authorization: token
        }
      };

      let newAuthData = auth
      newAuthData.enfermedad = enfermedad
      newAuthData.pais = pais
      newAuthData.sexo = sexo
      newAuthData.fechaNacimiento = `${nuevoDia}/${nuevoMes}/${nuevoAno}`

      const { data } = await axios.put(`https://apiusers.guiaysalud.com/api/users/${auth.id}`, newAuthData, configWithTokenBot)
      setBotonCargando(false)
      setOpenModal(false)
      window.location.reload();

    } catch (error) {
    
      setBotonCargando(false)
    }
  }




  if (cargando) return 'Cargando...';
  const { msg } = alerta;

  return (

    <div className="">

      <div className='flex px-5 pt-36 md:py-10 flex-col items-center'>
        <h1 className="text-center lg:text-5xl xl:text-6xl text-4xl mb-4 font-black text-indigo-900 dark:text-white lg:pr-5 font-poppins">Bienvenido <span className="text-pink-500 dark:text-pink-500">{auth.nombre}</span></h1>
        <p className="font-poppins text-indigo-900 dark:text-white dark:text-gray100 md:text-2xl text-xl text-center">Panel de guía y apoyo para <span className="font-extrabold">{cambiarNombreEnfermedad(auth.enfermedad)}</span></p>
        <Link to="/app/configuracion" className="font-poppins font-medium text-md mt-2 text-gray-400 hover:text-pink-500">¿Necesitas cambiar de enfermedad?</Link>


      </div>


      <div className='container mx-auto flex px-5 mt-5 md:mb-3 md:flex-row flex-col items-start relative gap-7'>


        {/* Sección Chat */}
        <div className="w-full md:w-1/2 lg:w-1/3 items-center">
          <div className="flex flex-col h-[80vh] mx-auto overflow-hidden dark:bg-slate-700 bg-white rounded-xl shadow-lg">

            {/* Header del chat */}
            <div className="flex items-center p-4 bg-gradient-to-r from-indigo-800 to-indigo-950 py-5 shadow-lg gap-3">
              <img className="w-10 h-10 rounded-full bg-indigo-900" src={avatarGuiaYSalud} alt="Rounded avatar" />
              <h1 className="font-poppins font-bold text-white">Asistente Guía y Salud</h1>
            </div>


            <div className="flex-1 p-4 overflow-y-auto flex flex-col space-y-2">
              {conversacion.length > 0 ? (
                conversacion.map((msg, index) => (
                  <div className={`flex gap-2 ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
                    <img class="w-10 h-10 rounded-full bg-indigo-900" src={msg.sender === 'me' ? avatarUsuario : avatarGuiaYSalud} alt="Rounded avatar" />
                    <div
                      key={index}
                      className={`p-3 rounded-lg max-w-xs ${msg.sender === 'me'
                        ? 'bg-violet-700 self-end text-left text-white font-poppins'
                        : 'bg-violet-100 dark:bg-violet-300 dark:text-slate-800 self-start text-left font-poppins'
                        }`}
                    >
                      <p className="text-md mb-2" style={{ fontSize: '14px' }}>{msg.text}</p>
                      <small className={`${msg.sender === 'me'
                        ? 'text-violet-300 font-poppins'
                        : 'text-gray-400 dark:text-slate-600 font-poppins'
                        }`} style={{ fontSize: '12px' }}>{new Date(msg.createdAt).toLocaleString()}</small>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-gray-400 text-center">No hay conversaciones previas.</div>
              )}
              <div ref={mensajesEndRef} />
            </div>

            <form className="flex p-4 py-5" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Escribir mensaje"
                className="font-poppins flex-1 p-3 rounded focus:outline-none focus:ring-2 focus:ring-violet-500 mr-2 bg-gray-100 dark:bg-gray-900 dark:text-white text-slate-700 border-none"
                value={mensaje}
                onChange={e => setMensaje(e.target.value)}
              />
              <button type="submit" className="block mt-2  px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-pink-500 hover:hover:bg-pink-600">{botonCargando ? <Spinner color="purple" aria-label="Default status example" /> : "Enviar"}</button>
            </form>
          </div>
        </div>














        {/* Sección Otras herramientas */}
        <div className="lg:w-2/3 w-full md:w-1/2 mt-5 md:mt-0">
          <div className="flex bg-white dark:bg-slate-700 rounded-xl mb-10 h-44  items-center justify-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
            <Carousel slideInterval={5000}>
              <img src="https://cs210032000b7b5ed89.blob.core.windows.net/imgs-guiaysalud-webapp/web-app/banner-guia-y-salud.webp" alt="guiaysalud.com síguenos en redes sociales" />
            </Carousel>
          </div>







          <div className="bg-white dark:bg-slate-700 rounded-xl mb-10 items-start justify-start shadow-lg">
            <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-xl text-xl px-9 pt-5 ">Guías y consejos</h1>
            <p className="px-9 font-poppins text-gray-400 animate-pulse">Desliza para ver más ⮕</p>
            <div className="flex overflow-x-scroll scrollbar">
              <div className="flex flex-nowrap p-6">

                {
                  (guiasNoCreadas.map((guia) => (
                    <CardGuiaNoCreada
                      key={guia.id}
                      nombre={guia.tipoGuia}
                      enfermedad={guia.enfermedad}
                    />)))
                }
                {
                  (guiasCreadas.map((guia) => (
                    <CardGuiaCreada
                      key={guia.id}
                      nombre={guia.tipoGuia}
                      enfermedad={guia.enfermedad}
                      fecha={guia.fecha}
                      url={guia.pdf}
                      created={guia.fecha}

                    />)))
                }

              </div>
            </div>
          </div>
        </div>
      </div >




      <div className="container mb-5 mx-auto flex px-5 mt-5 md:mb-10 md:flex-row flex-col items-start relative md:gap-10">

        <div className="flex bg-white dark:bg-slate-700 rounded-xl mb-5 h-44 w-full md:w-1/2 items-center justify-start p-5 gap-3 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <div className="w-1/3">
            <img src={iconoBusquedaTratamiento} alt="" />
          </div>
          <div className="w-2/3">
            <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-lg text-md">Búsqueda de tratamientos modernos</h1>
            <Link role='button' to={"/app/estudios-clinicos-form"} target="_blank" className="block mt-2  px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-blue-500 hover:hover:bg-blue-600">¡Comenzar!</Link>
          </div>
        </div>

        <div className="flex bg-white dark:bg-slate-700 rounded-xl mb-5 h-44 w-full md:w-1/2 items-center justify-start p-5 gap-3 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <div className="w-1/3">
            <img src={iconoGrupos} alt="" />
          </div>
          <div className="w-2/3">
            <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-lg text-md">Grupos de apoyo para pacientes</h1>
            <Link role='button' to={"/app/grupos-apoyo"} target="_self" className="block mt-2  px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-blue-500 hover:hover:bg-blue-600">¡Unirme!</Link>
          </div>
        </div>

        {/* <div className="flex bg-white dark:bg-slate-700 rounded-xl mb-5 h-44 w-full md:w-1/2 items-center justify-start p-5 gap-3 transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
          <div className="w-1/3">
            <img src={iconoFundaciones} alt="" />
          </div>
          <div className="w-2/3">
            <h1 className="font-poppins font-bold text-indigo-900 dark:text-white dark:text-gray100 md:text-lg text-md">Fundaciones y agrupaciones</h1>
            <Link role='button' to={"/app/grupos-apoyo"} target="_self" className="block mt-2  px-6 py-2 rounded text-center text-white text-lg font-semibold transition bg-blue-500 hover:hover:bg-blue-600">¡Unirme!</Link>
          </div>
        </div> */}

        {/* <div className="flex bg-white dark:bg-slate-700 rounded-xl mb-5 h-44 w-full md:w-1/2 items-center justify-center transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">Acá van alianzas</div> */}
      </div>




      <Modal show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>

        <Modal.Body>
          <div className="space-y-6 mt-6">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Completa la información</h3>
            <p className="">Completa la información del paciente para una asistencia más personalizada.</p>

            <div className=''>
              <form onSubmit={handleSubmit}>


                <div className='mb-5'>
                  <div className="max-w-md">


                    {/* // Enfermedades */}
                    <div className="mb-2 block">
                      <h3 className='font-poppins mb-2 font-bold'>Condición:</h3>

                      <Select id="enfermedad" onChange={e => setEnfermedad(e.target.value)}>
                        <option value="" selected disabled hidden>Seleccionar</option>

                        {BDEnfermedades.length ? (BDEnfermedades.map((enfermedad) => (
                          <option value={enfermedad.nombre} >{cambiarNombreEnfermedad(enfermedad.nombre)}</option>
                        ))) : <option value="" >Seleccionar</option>}
                      </Select>
                    </div>


                    <div className="mt-5 block">
                      <h3 className='font-poppins mb-2 font-bold'>Fecha de Nacimiento:</h3>
                      <div className="flex gap-3">
                        <Select id="dia" onChange={e => setNuevoDia(e.target.value)}>
                          <option value="" selected disabled hidden>Día</option>
                          {dias.length ? (dias.map((dia) => (
                            <option value={dia} >{dia}</option>
                          ))) : <option value="" >Seleccionar</option>}
                        </Select>
                        <Select id="mes" onChange={e => setNuevoMes(e.target.value)}>
                          <option value="" selected disabled hidden>Mes</option>
                          <option value="1">Enero</option>
                          <option value="2">Febrero</option>
                          <option value="3">Marzo</option>
                          <option value="4">Abril</option>
                          <option value="5">Mayo</option>
                          <option value="6">Junio</option>
                          <option value="7">Julio</option>
                          <option value="8">Agosto</option>
                          <option value="9">Septiembre</option>
                          <option value="10">Octuble</option>
                          <option value="11">Noviembre</option>
                          <option value="12">Diciembre</option>
                        </Select>
                        <Select id="ano" onChange={e => setNuevoAno(e.target.value)}>
                          <option value="" selected disabled hidden>Año</option>
                          {
                            anos.length ? (anos.map((ano) => (
                              <option value={ano} >{ano}</option>
                            ))) : <option value="" >Seleccionar</option>
                          }

                        </Select>
                      </div>
                    </div>

                    {/* // Sexo */}
                    <div className="mt-5 block">
                      <h3 className='font-poppins mb-2 font-bold'>Sexo:</h3>
                      <Select id="sexo" onChange={e => setSexo(e.target.value)}>
                        <option value="" selected disabled hidden>Seleccionar</option>
                        <option value="masculino" >Masculino</option>
                        <option value="femenino" >Femenino</option>
                      </Select>
                    </div>



                    {/* // pais */}
                    <div className="mt-5 block">
                      <h3 className='font-poppins mb-2 font-bold'>País:</h3>
                      <Select id="pais" onChange={e => setPais(e.target.value)}>
                        <option value="" selected disabled hidden>
                          Seleccionar
                        </option>
                        <option>Chile</option>
                        <option>Argentina</option>
                        <option>Perú</option>
                        <option>México</option>
                        <option>Colombia</option>
                      </Select>
                    </div>






                  </div>
                </div>

              </form>
              {msg && <Alerta alerta={alerta} />}

              <button className="block w-full mt-5 px-6 py-2 rounded text-center text-white text-sm font-semibold transition bg-blue-500 hover:hover:bg-blue-600" onClick={handleSubmitInformación}>
                {botonCargando ? <Spinner color="white" aria-label="Default status example" /> : <>Continuar<i className="fas fa-arrow-right ml-2"></i></>}
              </button>

            </div>
          </div>
        </Modal.Body>
      </Modal>

    </div >







  );
};

export default AppInicio;
