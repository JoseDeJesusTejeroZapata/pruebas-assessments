// import * as Yup from "yup";
// const cellphoneRegExp =
//   /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,3})|(\(?\d{2,3}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
// const schemaCellphoneValidation = () => {
//   return Yup.object().shape({
//     cellphone: Yup.string()
//       .matches(cellphoneRegExp, "Numero no valido")
//       .matches(/^[0-9.]+$/, "Solo se permiten números")
//       .max(10, "Máximo 10 dígitos")
//       .min(10, "Minimo 10 dígitos")
//       .required("Teléfono es requerido"),
//     cellphoneDestination: Yup.string()
//       .matches(cellphoneRegExp, "Numero no valido")
//       .max(10, "Máximo 10 dígitos")
//       .min(10, "Minimo 10 dígitos")
//       .required("Teléfono es requerido"),
//   });
// };

// export const schemaCellphone = schemaCellphoneValidation();
