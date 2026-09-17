
// 1) Imprimir por consola
console.log("Hola desde node.js");

// 2) Declaración de variables
let nombre: string = "María Torres";
let creditos: number = 18;
let activo: boolean = true;

if(creditos >= 12){console.log("Aprobado");} 
else {console.log("Desaprobado");}

console.log(nombre, creditos, activo);

// 3) Función para devolver string
function saludar(persona: string): string {
 return "Bienvenido/a, " + persona;
}
console.log(saludar(nombre));

// 4) INTERFAZ: Describe la forma de un dato, osea un objeto
interface Curso {
 nombre: string;
 creditos: number;
}
const curso: Curso = { nombre: "JavaScript Avanzado", creditos: 3 };
console.log(`Curso: ${curso.nombre} (${curso.creditos} créditos)`);