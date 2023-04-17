// Variables

let nombre = "Facundo";
let apellido = " Brochero";
let curso = "Javascript";
let entidad = "coder House";
let cursando = true

console.log(nombre + apellido)
// pude ver que se hace con "" 
// el espacio pero me di cuenta que modificando el string
// de arriba dejando un espacio entre la comilla y el 
// apellido aparecia el espacio en consola
console.log(curso)
console.log(entidad)
console.log(cursando)

const comision = 39515
const bienvenida = "BIENVENIDOS A LA PAGINA"

console.log(comision)

const unidos = comision + " " + entidad;

console.log(unidos)

const usuario = prompt("Ingrese Facundo Brochero (usuario)");
const clave = prompt("Ingrese su Contraseña")

console.log(usuario + " " + clave)

if (usuario == "Facundo Brochero") {
    alert("usuario correcto")
    alert(bienvenida)
} else {
    alert("Usuario Incorrecto")
}


