const metastasisTratamiento = [
    {
      name: "dropdown",
      id: "tratamientoDespuesDeMetastasis",
      attributes: {
        attachment: {
          type: "image",
          url:
            "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
        },
        choices: [
          {
            label: "Si",
            value: "true"
          },
          {
            label: "No",
            value: "false"
          }
        ],
        label: "¿Ha recibido algún tratamiento desde que se diagnosticó la metástasis?",
        nextBtnLabel: "Siguiente",
        layout: "split-right",
        required: true
      }
    }
  
  ]
  
  export default metastasisTratamiento