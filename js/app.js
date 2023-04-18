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

let usuario = prompt("Ingrese Facundo Brochero o Profesor (usuario)");
let clave = prompt("Ingrese su Contraseña")

console.log(usuario + " " + clave)


if (usuario == "Facundo Brochero" || usuario == "Profesor") {
    while (clave != 1234) {
        clave = prompt("Clave incorrecta")
    }
    alert("usuario y clave correcto")
    alert(bienvenida)
} else {
    alert("Usuario Incorrecto")
    window.location = "index.html"
}


