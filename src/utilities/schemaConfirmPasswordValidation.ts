// import * as Yup from "yup";

// const inputPasswordValidations = () => {
//   return Yup.object().shape({
//     password: Yup.string()
//       .required("Contraseña es requerida")
//       .min(8, "Mínimo 8 caracteres")
//       .matches(/[0-9]/, "Debe contener al menos un número")
//       .matches(/[A-Z]/, "Debe contener al menos una letra mayúscula")
//       .matches(/[\W_]/, "Debe contener al menos un simbolo"),
//     confirmPassword: Yup.string()
//       .oneOf([Yup.ref("password" || null)], "Las contraseñas deben coincidir")
//       .required("Confirmar contraseña es requerido"),
//   });
// };

// export const schemaConfirmPassword = inputPasswordValidations();
