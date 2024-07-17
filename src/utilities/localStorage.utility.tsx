// export const persistLocalStorage = <T,>(key: string, value: T) => {
//   const dataPersist = getLocalStorage(key)
//     ? { ...JSON.parse(getLocalStorage(key) as string), ...value }
//     : value;

//   localStorage.setItem(key, JSON.stringify(dataPersist));
// };
// export const clearLocalStorage = (key: string) => {
//   localStorage.removeItem(key);
// };
// export const getLocalStorage = (key: string) => {
//   return localStorage.getItem(key);
// };
