import imgPulmon from "../assets/form-pulmon.webp";

const cancerPulmonFormulario = [
  {
    name: "dropdown",
    id: "tipoDeCancerPulmon",
    attributes: {
      attachment: {
        type: "image",
        url: imgPulmon
      },
      choices: [
        {
          label: "Células Pequeñas",
          value: "celulas-pequenas"
        },
        {
          label: "Células NO pequeñas",
          value: "celulas-no-pequenas"
        },
        {
          label: "No estoy seguro",
          value: "no-sabe"
        },
      ],
      label: "¿Selecciona tu tipo de cáncer de pulmón?",
      nextBtnLabel: "Siguiente",
      required: true,
      layout: "split-right",
      description:"El cáncer de pulmón se clasifica principalmente en dos tipos: cáncer de pulmón de células no pequeñas (CPCNP) y cáncer de pulmón de células pequeñas (CPCP)."
    }
  }

]

export default cancerPulmonFormulario