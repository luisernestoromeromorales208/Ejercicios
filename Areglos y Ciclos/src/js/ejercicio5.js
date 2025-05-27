/*
Para cada uno de los ejercicios siguientes, suponga que está comenzando con la siguiente matriz de personas.
let gente = ["María", "Dani", "Luis", "Juan", "Camila"];
- Escriba un comando que imprima todas las personas de la lista.
- Escriba el comando para eliminar "Dani" de la matriz.
- Escribe el comando para eliminar "Juan" del array.
- Escribe el comando para mover a "Luis" al frente de la matriz.
- Escriba el comando para agregar su nombre al final de la matriz.
Usando un bucle, itere a través de esta matriz y después de console.log "Maria", salga del bucle.
Escribe el comando que da el indexOf donde se encuentra "Maria".
Al final del ejercicio, debería haber 4 personas en la formación.
*/

let personas = ["María", "Dani", "Luis", "Juan", "Camila"];
personas.forEach(persona => console.log(persona));

let indiceDani = personas.indexOf("Dani");
if (indiceDani !== -1) {
  personas.splice(indiceDani, 1);
}

let indiceJuan = personas.indexOf("Juan");
if (indiceJuan !== -1) {
  personas.splice(indiceJuan, 1);
}

let indiceLuis = personas.indexOf("Luis");
if (indiceLuis !== -1) {
  let luis = personas.splice(indiceLuis, 1)[0];
  personas.unshift(luis);
}

personas.push("TuNombre");

for (let persona of personas) {
  console.log(persona);
  if (persona === "María") {
    break;
  }
}

let indiceMaria = personas.indexOf("María");
console.log("El índice de María es:", indiceMaria);