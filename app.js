// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = []; // Array para guardar los nombres de los amigos

// Función para agregar amigos a la lista
function agregarAmigo() {
  // Obtener el valor del campo de texto
  let nombreAmigo = document.getElementById('amigo').value;
  
  // Verificar que el campo no esté vacío
  if (nombreAmigo.trim() !== "") {
    amigo.push(nombreAmigo); // Agregar el nombre al array
    mostrarListaAmigos(); // Actualizar la lista visual en la pantalla
    document.getElementById('amigo').value = ""; // Limpiar el campo de texto
  } else {
    alert("Por favor, ingresa un nombre válido.");
  }
}

// Función para mostrar la lista de amigos en la pantalla
function mostrarListaAmigos() {
  const listaElement = document.getElementById('listaAmigos');
  listaElement.innerHTML = ''; // Limpiar la lista antes de agregar los nuevos nombres

  // Iterar sobre el array 'amigo' y agregar cada nombre a la lista en HTML
  amigo.forEach((nombre) => {
    const li = document.createElement('li');
    li.textContent = nombre;
    listaElement.appendChild(li);
  });
}

// Función para sortear un amigo
function sortearAmigo() {
  if (amigo.length === 0) {
    alert("Agrega al menos un amigo para realizar el sorteo.");
    return;
  }

  const nombreSorteado = sortearNombre(amigo);
  document.getElementById('resultado').textContent = `El amigo invisible sorteado es: ${nombreSorteado}`;
}

// Función para realizar el sorteo aleatorio
function sortearNombre(lista) {
  const indiceAleatorio = Math.floor(Math.random() * lista.length);
  return lista[indiceAleatorio];
}