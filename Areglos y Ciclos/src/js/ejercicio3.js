/*Escribe un programa para calcular la suma y el producto (multiplicación) de una serie
 de números. Imprime la suma y el producto.
Ejemplo: Dada una matriz [1, 2, 3, 4] La suma es 10. El producto es 24.
*/

function calcularSumaYMultiplicacion(arreglo) {
  const suma = arreglo.reduce((acumulador, valor) => acumulador + valor, 0);
  const multiplicación = arreglo.reduce((acumulador, valor) => acumulador * valor, 1);

  console.log(`La suma es: ${suma}`);
  console.log(`El producto es: ${multiplicación}`);
}

calcularSumaYMultiplicacion([1, 2, 3, 4]);