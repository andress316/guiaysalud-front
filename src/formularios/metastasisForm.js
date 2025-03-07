import imgMetastasis from "../assets/form-cabebzaycuello.webp";

const metastasisForm = {
    name: "dropdown",
    id: "metastasis",
    attributes: {
        attachment: {
            type: "image",
            url: imgMetastasis
        },
        choices: [
            {
                label: "Si",
                value: "1"
            },
            {
                label: "No",
                value: "0"
            },
        ],
        label: "¿El cáncer se ha extendido a otros órganos?",
        nextBtnLabel: "Siguiente",
        layout: "split-right",
        required: true,
        description:"Las células cancerosas se diseminan desde el tumor original hacia otras partes del cuerpo, formando nuevos tumores en órganos o tejidos distantes, a través de la sangre o el sistema linfático."
    }
}


export default metastasisForm