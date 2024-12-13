import { useState, useEffect } from "react"
import { useParams } from "react-router"
import axios from "axios"
import useAuth from "../../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import Alerta from "../components/Alerta"
import getAuthToken from "../utils/AuthToken"

const FormAutoLogin = () => {
    const params = useParams();
    const { email, password } = params
    const { setAuth } = useAuth();
    const [alerta, setAlerta] = useState({})
    const [cargando, setCargando] = useState(true)



    useEffect(() => {
        const redirect = async () => {
            try {
                const tokenAPI = await getAuthToken(); // Obtén el token usando la función

                const configWithTokenAPI = {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: tokenAPI
                    }
                };

                //Petición para iniciar sesión
                const { data } = await axios.post('https://apiusers.guiaysalud.com/api/users/login', { email, password }, configWithTokenAPI)
                console.log(data)

                const token = data.token.replace('Bearer ', '');
                localStorage.setItem('tokenUser', token);

                setAuth(data.user)
                window.open("/app","_self")

                // navigate('/app') // Sección privada

            } catch (error) {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }
        redirect()
    }, [])

    const { msg } = alerta

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
        <>
            <div>
                {msg && <Alerta alerta={alerta} />}
            </div>
        </>
    )
}
export default FormAutoLogin