export const convertCamelToDashCase = (camelCase: string) => {
   return camelCase
       .split('')
       .flatMap((ch) => ch.toUpperCase() === ch ? ['-', ch.toLowerCase()] : [ch])
       .join('')
}
