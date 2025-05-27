// Crear un programa que recorra las 2 matrices; Si hay cursos comunes, imprímirlos en la consola.

let cursosDePepito = ['Matematicas', 'Inglés', 'Programación'];
let cursosDePablito = ['Geografía', 'Español', 'Programación'];

let cursosEnComun = cursosDePepito.filter(course => cursosDePablito.includes(course));

if (cursosEnComun.length > 0) {
  console.log('Cursos en común:', cursosEnComun);
} else {
  console.log('No hay cursos en común.');
}