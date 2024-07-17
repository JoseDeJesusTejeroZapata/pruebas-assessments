// export const downloadFileResponse = (file: unknown, type: string, fileName: string) => {
//   const part = file as unknown as BlobPart;
//   const blob = new Blob([part], {
//     type,
//   });
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");

//   link.href = url;
//   link.setAttribute("download", fileName);
//   document.body.appendChild(link);
//   link.click();
// };
