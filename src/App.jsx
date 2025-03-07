import { BrowserRouter, Routes, Route, Form } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Login from "./paginas/Login"
import Registrar from "./paginas/Registrar"
import NuevoPassword from "./paginas/NuevoPassword"
import OlvidePassword from "./paginas/OlvidePassword"
import ConfirmarCuenta from "./paginas/ConfirmarCuenta"
import Inicio from "./paginas/Inicio"
import { AuthProvider } from "../context/AuthProvider"
import RutaProtegida from "./layouts/RutaProtegida"
import AppInicio from "./paginas/AppInicio"
import Perfil from "./paginas/Perfil"
import Blog from "./paginas/Blog"
import RutaPublica from "./layouts/RutaPublica"
import TerminosYcondiciones from "./paginas/TerminosYcondiciones"
import PoliticasPrivacidad from "./paginas/PoliticasPrivacidad"
import EliminarDatosUsuario from "./paginas/EliminarDatosUsuario"
import Configuracion from "./paginas/Configuracion"
import Nosotros from "./paginas/Nosotros"

import FormAutoLogin from "./paginas/FormAutoLogin"
import FormularioGuias from "./paginas/FormularioGuias"
import FormularioGuiasLogged from "./paginas/FormularioGuiasLogged"
import FormularioEc from "./paginas/FormularioEc"
import FormularioEcLogged from "./paginas/FormularioEcLogged"
import FormularioDoctores from "./paginas/FormularioDoctores"

import GruposApoyo from "./paginas/GruposApoyo"




function App() {

  return (
    <>

      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<RutaPublica />}>
              <Route index element={<Inicio />} />
              <Route path="/terminos-y-condiciones" element={<TerminosYcondiciones />} />
              <Route path="/politicas-de-privacidad" element={<PoliticasPrivacidad />} />
              <Route path="/eliminar-datos" element={<EliminarDatosUsuario />} />
              <Route path="/login" element={<Login />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/registrar" element={<Registrar />} />
              <Route path="/olvide-password" element={<OlvidePassword />} />
              <Route path="/olvide-password/:token" element={<NuevoPassword />} />
              <Route path="/confirmar/:id" element={<ConfirmarCuenta />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login-usuario/:email/:password" element={<FormAutoLogin />} />
              <Route path="/guias-forms" element={<FormularioGuias />} />
              <Route path="/estudios-clinicos-doctores" element={<FormularioDoctores />} />
              <Route path="/consejos-form" element={<FormularioGuias />} />
              <Route path="/estudios-clinicos-form" element={<FormularioEc />} />
            </Route>


            <Route path="/app" element={<RutaProtegida />}>

              <Route index element={<AppInicio />} />
              <Route path='/app/configuracion' element={<Configuracion />} />
              <Route path='/app/consejos-form' element={<FormularioGuiasLogged />} />
              <Route path='/app/estudios-clinicos-form' element={<FormularioEcLogged />} />
              <Route path='/app/grupos-apoyo' element={<GruposApoyo />} />

              {/* <Route path="/app/perfil" element={<Perfil />} />
              <Route path="/app/blog" element={<Blog />} /> */}
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>

    </>
  )
}

export default App
