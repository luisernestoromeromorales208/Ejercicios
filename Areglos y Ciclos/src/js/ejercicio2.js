/* Escribe una función que:
- Acepta una serie de números.
- Duplica el valor de cada número de la matriz.
- Imprime la nueva matriz actualizada.
Ejemplo: Dada una matriz [1, 2, 4, 5]. La salida debe ser [2, 4, 8, 10]
*/

function duplicarYMostrar(numeros) {
    const numerosduplicados = numeros.map(numero => numero * 2);
    console.log(numerosduplicados);
}

duplicarYMostrar([1, 2, 4, 5]);