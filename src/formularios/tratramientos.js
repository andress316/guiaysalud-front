
import imgQuimioterapia from "../assets/form-quimioterapia.webp";


const tratamientos = [{
    name: "multiple-choice",
    id: "tratamientosDelPaciente",
    attributes: {
        required: true,
        multiple: true,
        verticalAlign: false,
        label: "¿Qué tratamientos ha recibido el paciente?",
        choices: [
            {
                label: "Quimioterapia",
                value: "quimioterapia"
            },
            {
                label: "Radioterapia",
                value: "radioterapia"
            },
            {
                label: "Inmunoterapia",
                value: "inmunoterapia"
            },
            {
                label: "Terapia Hormonal",
                value: "terapiaHormonal"
            },
            {
                label: "Terapia Dirigida",
                value: "terapiaDirigida"
            },
            {
                label: "No estoy seguro/a",
                value: "inseguro"
            }
        ]
    }
}
]


export default tratamientos