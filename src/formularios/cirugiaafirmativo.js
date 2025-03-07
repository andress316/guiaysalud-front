const siTuvoCirugia = [
    {
      id: "datos-cirugia",
      name: "group",
      attributes: {
        description: "Puedes ingresar una fecha estimada y una breve descripción.",
        label: "Responde las siguientes preguntas",
        nextBtnLabel: "Siguiente"
      },
      innerBlocks: [
        {
          name: "date",
          id: "fechaCirugia",
          attributes: {
            "format": "DDMMYYYY",
            "separator": "/",
            required: true,
            label: "Ingresa la fecha estimada de la cirugía (Día / Mes / Año)."
          }
        },
        {
          name: "long-text",
          id: "detallesCirugia",
          'label.errorAlert.required': 'Este campo es obligatorio',
          attributes: {
            required: true,
            label: "Describe brevemente los detalles de la cirugía.",
            placeholder: "Escribe acá...",
          }
        }
      ]
    }
  ]

  export default siTuvoCirugia