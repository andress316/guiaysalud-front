import imgGuias from "../assets/form-guias.jpg";

const seleccionGuias = {
    name: "multiple-choice",
    id: "guiasSeleccionadas",
    attributes: {
        layout: "split-right",
        attachment: {
            type: "image",
            url: imgGuias
        },
        required: true,
        multiple: true,
        verticalAlign: false,
        label: "Selecciona las guías que te gustaría recibir",
        choices: [
            {
                label: "Información de la enfermedad",
                value: "info-general"
            },
            {
                label: "Alimentación y Efectos Secundarios",
                value: "alimentacion-efectos-secundarios"
            }
            ,
            {
                label: "Consejos de Salud Mental",
                value: "salud-mental"
            }
        ]
    }
}


export default seleccionGuias