import imgLinfoma from "../assets/form-linfoma.webp";

const cancerLinfomaFormulario = [
    {
      name: "dropdown",
      id: "tipoDeLinfoma",
      attributes: {
        attachment: {
          type: "image",
          url: imgLinfoma
        },
        choices: [
          {
            label: "Linfoma difuso células B",
            value: "difuso-celulas-b"
          },
          {
            label: "Linfoma células del manto",
            value: "celulas-manto"
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
            value: "zona-marginal"
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
        required: true,
        layout: "split-right",
        description:"Si no recuerdas o no estás seguro del tipo de linfoma selecciona 'No lo sé'."
      }
    }
  
  ]
  
  export default cancerLinfomaFormulario