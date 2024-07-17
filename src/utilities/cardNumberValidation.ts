// import * as Yup from "yup";
// const schemaCardNumberValidation = () => {
//   return Yup.object().shape({
//     cardNumber: Yup.string()
//       .matches(/^[0-9.]+$/, "Solo se permiten números")
//       .max(16, "Máximo 16 dígitos")
//       .min(16, "Minimo 16 dígitos")
//       .required("Número de tarjeta es requerido")
//       .matches(/^[3-5]\d*$/, "Ingresar un numero de tarjeta válido"),
//     cvvNumber: Yup.string()
//       .min(3, "Minimo 3 dígitos")
//       .required("Número de seguridad es requerido"),
//     withdrawalWallet: Yup.string()
//       .min(4, "Máximo 4 dígitos")
//       .required("Número es requerido"),
//     receivingWallet: Yup.string()
//       .min(4, "Máximo 4 dígitos")
//       .required("Número es requerido"),
//   });
// };

// export const schemaCardNumber = schemaCardNumberValidation();
