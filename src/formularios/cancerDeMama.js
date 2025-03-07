import imgMama from "../assets/form-mama.webp";

const cancerMamaFormulario = [
    {
      name: "dropdown",
      id: "tipoDeCancerMama",
      attributes: {
        attachment: {
          type: "image",
          url: imgMama
        },
        choices: [
          {
            label: "Her2 +",
            value: "her2+"
          },
          {
            label: "Her2 -",
            value: "her2-"
          },
          {
            label: "Mama Triple Negativo",
            value: "triplenegativo"
          },
        ],
        label: "¿Selecciona tu tipo de cáncer de mama?",
        nextBtnLabel: "Siguiente",
        required: true,
        layout: "split-right",
        description:"Selecciona el tipo de cáncer de mama con el que fuiste diagnosticada (HER2+, HER2-, Triple Negativo)"
      }
    }
  
  ]
  
  export default cancerMamaFormulario