// import * as Yup from "yup";
// const emailREgExp =
//   /^(([^<>()[\]\\.,;:\s@”]+(\.[^<>()[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
// const inputEmailValidations = () => {
//   return Yup.object().shape({
//     email: Yup.string()
//       .matches(
//         emailREgExp,
//         "Correo inválido, verifique que el correo este bien escrito."
//       )
//       .required("Correo es requerido."),
//     emailDestination: Yup.string()
//       .matches(
//         emailREgExp,
//         "Correo inválido, verifique que el correo este bien escrito."
//       )
//       .required("Correo es requerido."),
//   });
// };

// export const schema = inputEmailValidations();
