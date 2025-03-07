const contacto = {
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
                type: "number",
                "setMaxCharacters": true, // Default: false
                "maxCharacters": 35,
                label: "¿Cuál es tu nombre?",
                required: true,
                placeholder: "Escribe acá...",
                defaultValue:"Test"
            }
        },
        {
            name: "email",
            id: "email",
            attributes: {
                required: true,
                label: "Email:",
                defaultValue:"jandresr91@gmail.com"
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
                defaultValue:"+56957600539"
            }
        },


    ]
}

export default contacto