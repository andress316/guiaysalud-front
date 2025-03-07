import imgLeucemia from "../assets/form-leucemia.webp";

const cancerLeucemiaFormulario = [
    {
      name: "dropdown",
      id: "tipoLeucemia",
      attributes: {
        attachment: {
          type: "image",
          url: imgLeucemia
        },
        choices: [
          {
            label: "Leucemia linfocítica aguda (LLA)",
            value: "LLA"
          },
          {
            label: "Leucemia mielóide aguda (LMA)",
            value: "LMA"
          },
          {
            label: "Leucemía linfocítica crónica (LLC)",
            value: "LLC"
          },
          {
            label: "Otro",
            value: "otro"
          },
          {
            label: "No lo sé",
            value: "noSe"
          },
        ],
        label: "¿Qué tipo de Leucemia es?",
        nextBtnLabel: "Siguiente",
        required: true,
        layout: "split-right",
        description:"Si no recuerdas o no estás seguro del tipo de luecemia selecciona 'No lo sé'."
      }
    }
  
  ]
  
  export default cancerLeucemiaFormulario