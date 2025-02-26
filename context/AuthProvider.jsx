import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import flushSync from "react-dom"
import axios from "axios";
import getAuthToken from '../src/utils/AuthToken'; // Importa la función

const AuthContext = createContext();

const AuthProvider = ({ children }) => {


    const [auth, setAuth] = useState({});
    const [cargando, setCargando] = useState(true);
    const navigate = useNavigate();
    const [darkTheme, setDarkTheme] = useState()
    const [enfermedades, setEnfermedades] = useState([])
    const [avatar, setAvatar] = useState('')
    const [avatarGrande, setAvatarGrande] = useState('')
    const [mantenimiento, setMantenimiento] = useState(false)

    // Utilizamos el useEffect para autorizar a los usuarios con el Token
    //Para eso se consulta la API con el token y se guarda los datos de Auth en el state
    useEffect(() => {

        //Verificamos si estamos en mantenimiento llamada a la
        

        // Verificamos el theme
        const theme = localStorage.getItem('theme')
        if (theme === 'true') {
            setDarkTheme(true)
            document.querySelector('html').classList.add('dark')
        } else {
            setDarkTheme(false)
            document.querySelector('html').classList.remove('dark')
        }

        // Verificamos si el usuario está autenticado
        const autenticarUsuario = async () => {

            const tokenAPI = await getAuthToken(); // Obtén el token usando la función
            const token = await localStorage.getItem('tokenUser');

            if (!token) {
                setCargando(false);
                return;
            }

            const configWithTokenAPI = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: tokenAPI
                }
            };


            // Realizamos una consulta a la API
            try {
                const { data } = await axios.post('https://apiusers.guiaysalud.com/api/users/verify-token', { token }, configWithTokenAPI);
                const user = data.user


                if(user.sexo === "femenino"){
                    setAvatar("../assets/AVATAR-MUJER-02.png")
                    setAvatarGrande("../assets/AVATAR-MUJER-01.png")
                } else {
                    setAvatar("../assets/AVATAR-HOMBRE-02.png")
                    setAvatarGrande("../assets/AVATAR-HOMBRE-01.png")
                }



                // Guardamos los datos del usuario en el contexto
                setAuth(user)

                // Reenviamos al usuario si no existe el contexto
                if (!user.id) {
                    navigate('/app');
                }

                setCargando(false);

            } catch (error) {
                setAuth({});
                setCargando(false);
            }
        }

        autenticarUsuario(); // Llamamos la función





        // Consultamos el listado de enfermedades para la APP
        async function consultarEnfermedaddes() {
            try {
                const token = await getAuthToken();
                const configWithTokenBot = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: token
                    }
                };
                const data = await axios.get(`https://apiguia.guiaysalud.com/api/v1/guides/enfermedades`, configWithTokenBot)               
                setEnfermedades(data)
            } catch (error) {
                console.log(error)
            }
        }
        consultarEnfermedaddes()
    }, []);


    if(mantenimiento){
        return (
            <>
                Estamos en mantenimeinto
            </>
        )
    }

    return (
        <AuthContext.Provider
            value={{
                auth,
                setAuth,
                cargando,
                darkTheme,
                setDarkTheme,
                avatar,
                setAvatar,
                avatarGrande,
                setAvatarGrande
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider };

export default AuthContext;
