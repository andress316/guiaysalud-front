const cancerLinfomaFormulario = [
    {
      name: "dropdown",
      id: "tipoDeLinfoma",
      attributes: {
        attachment: {
          type: "image",
          url:
            "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
        },
        choices: [
          {
            label: "Linfoma difuso células B",
            value: "difusoCelulasB"
          },
          {
            label: "Linfoma células del manto",
            value: "celulasDelManto"
          },
          {
            label: "Linfoma folicular",
            value: "folicular"
          },
          {
            label: "Linfoma primario",
            value: "primario"
          },
          {
            label: "Linfoma de la zona marginal",
            value: "zonaMarginal"
          },
          {
            label: "Linfoma cutáneo",
            value: "cutaneo"
          },
          {
            label: "Otro",
            value: "otro"
          },
          {
            label: "No lo sé",
            value: "noSabe"
          },
        ],
        label: "¿Qué tipo de Linfoma es?",
        nextBtnLabel: "Siguiente",
        layout: "split-right",
        required: true
      }
    }
  
  ]
  
  export default cancerLinfomaFormulario