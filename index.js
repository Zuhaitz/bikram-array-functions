// Pair Programming
// Arrays
let arrayVacio = [];
let arrayNumeros = [...Array(10).keys()];
let arrayNumerosPares = [...Array(10).keys()].filter((i) => i % 2 == 0);
let arrayBidimensional = [
  [0, 1, 2],
  ["a", "b", "c"],
];

// Funciones
function suma(num1, num2) {
  return num1 + num2;
}

function potenciacion(num, pot) {
  let res = 1;
  for (let i = 0; i < pot; i++) {
    res *= num;
  }

  return res;
  // return num ** pot;
}

function separarPalabras(str) {
  return str.split(" ");
}

function repetirString(str, num) {
  let res = "";
  for (let i = 0; i < num; i++) {
    res += str;
  }

  return res;
}

function esPrimo(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

function ordenarArray(arr) {
  return arr.sort();
}

function obtenerPares(arr) {
  let res = [];
  for (x of arr) {
    if (x % 2 == 0) res.push(x);
  }

  return res;
}

function pintarArray(arr) {
  return `[${arr}]`.replaceAll(",", ", ");
}
