const cancerLeucemiaFormulario = [
    {
      name: "dropdown",
      id: "tipoLeucemia",
      attributes: {
        attachment: {
          type: "image",
          url:
            "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
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
        ],
        label: "¿Qué tipo de Leucemia es?",
        nextBtnLabel: "Siguiente",
        layout: "split-right",
        required: true
      }
    }
  
  ]
  
  export default cancerLeucemiaFormulario