// En el archivo contador.js

let contadorNotis = 0;

export const getContadorNotis = () => contadorNotis;

export const aumentarContador = () => {
  contadorNotis++;
};

export const disminuirContador =() => contadorNotis--;