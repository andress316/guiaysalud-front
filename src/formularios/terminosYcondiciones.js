const terminosForm =
{
    name: "dropdown",
    id: "terminos",
    attributes: {
        required: true,
        choices: [
            {
                label: "Si acepto",
                value: "si-acepto"
            }
        ],
        label: "¿Aceptas los términos y condiciones?",
        description: `Guía y Salud tiene el objetivo de educar y guíar a pacientes sobre sus enfermedades, de ninguna forma remplazan una consulta médica o la opinión de un especialista, revisa los <a href="https://guiaysalud.com/terminos-y-condiciones" target="_blank" style="color:#9b51df;text-align:center">Términos y condiciones</a> y selecciona la opción "Si acepto" para continuar, de otra forma puedes cerrar esta ventana.`

    }
}

export default terminosForm