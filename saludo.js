"use strict";
// 1) Imprimir por consola
console.log("Hola desde node.js");
// 2) Declaración de variables
let nombre = "María Torres";
let creditos = 18;
let activo = true;
if (creditos >= 12) {
    console.log("Aprobado");
}
else {
    console.log("Desaprobado");
}
console.log(nombre, creditos, activo);
// 3) Función para devolver string
function saludar(persona) {
    return "Bienvenido/a, " + persona;
}
console.log(saludar(nombre));
const curso = { nombre: "JavaScript Avanzado", creditos: 3 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);
