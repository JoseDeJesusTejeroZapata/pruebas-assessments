// import * as Yup from "yup";

// const inputNamesValidations = () => {
//   return Yup.object().shape({
//     name: Yup.string()
//       .matches(/^[a-zA-ZÀ-ú\s]+$/, "Solo se permiten letras")
//       .required("Nombre es requerido."),
//     firstSurname: Yup.string()
//       .matches(/^[a-zA-ZÀ-ú\s]+$/, "Solo se permiten letras")
//       .required("Primer apellido es requerido."),
//     secondSurname: Yup.string()
//       .matches(/^[a-zA-ZÀ-ú\s]+$/, "Solo se permiten letras")
//       .required("Segundo apellido es requerido."),
//     curp: Yup.string().required("Documento es requerido."),
//     tributaryInformation: Yup.string()
//       .required("Información tributaria es requerido."),
//       // .min(13, "Debe tener al menos 13 caracteres."),
//     address: Yup.string()
//       .required("La address de la wallet es requerida.")
//       .min(26, "La address debe tener al menos 26 caracteres."),
//     street: Yup.string().required("Calle es requerido."),
//     number: Yup.string()
//       .required("Número es requerido.")
//       .matches(/^\d+$/, "Solo se permiten números"),
//     zipCode: Yup.string()
//       .required("Código postal es requerido.")
//       .matches(/^\d+$/, "Solo se permiten números"),
//     city: Yup.string().required("Ciudad es requerida."),
//     commune: Yup.string().required("Colonia/Comuna es requerida."),
//     giro: Yup.string().required("Giro es requerido."),
//   });
// };

// export const schemaNames = inputNamesValidations();
