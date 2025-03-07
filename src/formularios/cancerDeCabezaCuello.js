import imgCabezaCuello from "../assets/form-cabezacuello.webp";


const cancerCabezaCuelloFormulario = [
    {
      name: "dropdown",
      id: "cabezaCuelloCavidadOral",
      attributes: {
        attachment: {
          type: "image",
          url: imgCabezaCuello
        },
        choices: [
          {
            label: "Si",
            value: "si-cavidad-oral"
          },
          {
            label: "No",
            value: "no-cavidad-oral"
          }
        ],
        label: "¿El cáncer está en la cavidad oral?",
        nextBtnLabel: "Siguiente",
        required: true,
        layout: "split-right",
        description: "Incluye labios, la lengua, las encías, la mucosa de las mejillas, el piso de la boca, el paladar duro y la región detrás de las muelas. ",
      }
    }
  
  ]
  
  export default cancerCabezaCuelloFormulario