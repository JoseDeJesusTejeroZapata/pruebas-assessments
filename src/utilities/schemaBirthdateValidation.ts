// import * as Yup from "yup";
// const inputbirthdateValidations = () => {
//   return Yup.object().shape({
//     year: Yup.number()
//       .required("Fecha de nacimiento es obligatoria")
//       .test("is-adult", "Debes ser mayor de edad", function () {
//         const { day, month, year } = this.parent;
//         const today = new Date();
//         const birthDate = new Date(year, month - 1, day);

//         const age = today.getFullYear() - birthDate.getFullYear();
//         const monthDiff = today.getMonth() - birthDate.getMonth();

//         if (
//           monthDiff < 0 ||
//           (monthDiff === 0 && today.getDate() < birthDate.getDate())
//         ) {
//           return age - 1 >= 18;
//         } else {
//           return age >= 18;
//         }
//       }),
//   });
// };

// export const schemabirthdate = inputbirthdateValidations();
