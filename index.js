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

function arrayMapi(arr, func) {
  return arr.map((i) => func(i));
}

function eliminarDuplicados(arr) {
  return arr.filter((v, i) => arr.indexOf(v) === i);
}

// Project
// Arrays
let arrayNumerosNeg = [...Array(10).keys()].map((v) => (v === 0 ? 0 : -v));
let holaMundo = ["Hola", "Mundo"];
let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];
let arrayDeArrays = [
  [756, "nombre"],
  [225, "apellido"],
  [298, "direccion"],
];

// Funciones
function multiplicacion(num1, num2) {
  return num1 * num2;
}

function division(num, div) {
  return num / div;
}

function esPar(num) {
  return num % 2 == 0;
}

function resta(num1, num2) {
  return num1 - num2;
}

let arrayFunciones = [suma, resta, multiplicacion];

// Arrays and functions
function ordenarArray2(arr) {
  return arr.sort((a, b) => a > b);
}

function obtenerImpares(arr) {
  return arr.filter((v) => v % 2 !== 0);
}

function sumarArray(arr) {
  return arr.reduce((acc, v) => (acc += v));
}

function multiplicarArray(arr) {
  return arr.reduce((acc = 1, v) => (acc *= v));
}
