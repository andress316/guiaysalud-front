const tratamientoDespues =[
    {
        name: "dropdown",
        id: "cirugiaDespuesDeTratamiento",
        attributes: {
            choices: [
                {
                    label: "3 meses después",
                    value: "3"
                },
                {
                    label: "6 meses después",
                    value: "6"
                },
                {
                    label: "9 meses después",
                    value: "9"
                },
                {
                    label: "1 año después",
                    value: "12"
                },
                {
                    label: "1 año y 6 meses después",
                    value: "18"
                },
                {
                    label: "2 años después",
                    value: "24"
                },
                {
                    label: "Más timpo después",
                    value: "mas"
                }
            ],
            label: "¿Cuánto tiempo después de la cirugía comenzó el tratamiento?",
            nextBtnLabel: "Siguiente",
            description:"Seleccione un periodo de tiempo aproximado.",
            required: true
        }
    }
]

export default tratamientoDespues


// const tratamientoDespues =[
//     {
//         name: "dropdown",
//         id: "cirugiaDespuesDeTratamiento",
//         attributes: {
//             choices: [
//                 {
//                     label: "Fue primero el tratamiento y después la operación",
//                     value: "tratamientoOperacion"
//                 },
//                 {
//                     label: "Fue la operación y menos de 6 meses después empezó tratamiento",
//                     value: "operacionTratamiento>6meses"
//                 },
//                 {
//                     label: "Fue la operación y más de  6 meses después empezó tratamiento",
//                     value: "operacionTratamiento<6meses"
//                 }
//             ],
//             label: "El tratamiento fue 6 meses antes o 6 meses después de la operación?",
//             nextBtnLabel: "Siguiente",
//             description:"Seleccione un periodo de tiempo aproximado.",
//             required: true
//         }
//     }
// ]

// export default tratamientoDespues