// import { Kushki } from "@kushki/js";
// const kushki = new Kushki({
//   merchantId: "82cbab9b4b2a48b987b5c03a6600fd08", // Reemplaza esto por tu Public Key
//   inTestEnvironment: true, // Configurado en modo prueba
// });
// const form = {
//   name: "Omar Approved",
//   number: "5451951574925480",
//   cvv: "123",
//   expiry_month: "08",
//   expiry_year: "28",
// };
// console.log(form);
// kushki.requestSubscriptionToken(
//   {
//     currency: "MXN",
//     card: {
//       name: form.name,
//       number: form.number,
//       cvc: form.cvv,
//       expiryMonth: form.expiry_month,
//       expiryYear: form.expiry_year,
//     },
//   },
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   (response: any) => {
//     if (!response.code) {
//       console.log(response.token);
//       // Submit your code to your back-end
//     } else {
//       console.error(
//         "Error: ",
//         response.error,
//         "Code: ",
//         response.code,
//         "Message: ",
//         response.message
//       );
//     }
//   }
// );
