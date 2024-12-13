import * as yup from "yup";

const formCaPulmonSchema = yup.object().shape({

    subtipo: yup.string().required("Campo obligatorio"),
    tipoHistologico: yup.string().required("Campo obligatorio"),
    etapa: yup.string().required("Campo obligatorio"),

    pdl1: yup.string().required("Campo obligatorio"),

    ecog: yup.string().required("Campo obligatorio"),

    email: yup.string().email("Ingresar un email válido").required("Campo obligatorio"),
    nombreDoctor: yup.string().required("Campo obligatorio"),
    nombrePaciente: yup.string().required("Campo obligatorio"),
    telefono: yup.number("Ingresa solo números").required("Campo obligatorio"),
});

export { formCaPulmonSchema };






