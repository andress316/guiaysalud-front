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
import FormEnfermedad from "./paginas/FormEnfermedad"
import Formulario from "./paginas/Formulario"
import FormAutoLogin from "./paginas/FormAutoLogin"
import RutaPublica from "./layouts/RutaPublica"
import TerminosYcondiciones from "./paginas/TerminosYcondiciones"
import Configuracion from "./paginas/Configuracion"
import Nosotros from "./paginas/Nosotros"
import FormularioDoctores from "./paginas/FormularioDoctores"





function App() {

  return (
    <>

      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<RutaPublica />}>

              <Route index element={<Inicio />} />
              
              <Route path="/guias/:enfermedad" element={<FormEnfermedad />} />
              <Route path="/terminosycondiciones" element={<TerminosYcondiciones />} />
              <Route path="/login" element={<Login />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/registrar" element={<Registrar />} />
              <Route path="/olvide-password" element={<OlvidePassword />} />
              <Route path="/olvide-password/:token" element={<NuevoPassword />} />
              <Route path="/confirmar/:id" element={<ConfirmarCuenta />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/login-usuario/:email/:password" element={<FormAutoLogin />} />
              <Route path="/formulario-doctores-ec" element={<FormularioDoctores />} />
              <Route path="/formulario-consejos-cancer" element={<Formulario />} />
            </Route>


            <Route path="/app" element={<RutaProtegida />}>
              <Route index element={<AppInicio />} />
              <Route path='/app/configuracion' element={<Configuracion />} />
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
