const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
// Se esta buscando el elemento <name>, el cual no es un tag HTML válido.
const $n = document.querySelector('name');
/* Estarian bien si en nuestro HTML y CSS exitieran los elementos id="blog" y id="location" pero como no estan, 
entonces esta mal
*/
const $b = document.querySelector('#blog');
const $l = document.querySelector('.location');

// La función displayUser esta utilizando await sin aun ser declarada como async.
function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(data);
// En '${data.name}', ${data.blog}', '${data.location}' no se ponen comillas simples sino comillas gruesas.
  $n.textContent = '${data.name}';
  $b.textContent = '${data.blog}';
  $l.textContent = '${data.location}';
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);