/*
Escribe una función que realice el algoritmo de burbuja.
Input [3, 6, 12, 5, 100, 1]
Output [1, 3, 5, 6, 12, 100]
*/
function ordenarBurbuja(arr) {
  let n = arr.length;
  let cambiado;

  do {
    cambiado = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        cambiado = true;
      }
    }
    n--; 
  } while (cambiado);

  return arr;
}

let entrada = [3, 6, 12, 5, 100, 1];
let salida = ordenarBurbuja(entrada);
console.log(salida);
