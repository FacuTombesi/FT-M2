const { createStore } = require("redux");
const contador = require("./reducer");
const { incremento, decremento } = require("./actions");

// En esta línea creamos nuestro store. Pasándole como parámetro nuestro Reducer
var store = createStore(contador); // Donde se guardan los estados

// Obtenemos el elemento con el id `valor`.
var valor = document.getElementById("valor"); // Guardo el valor desde el span en index.html

// Esta función nos va a servir para actualizar nuestro DOM con el valor que tengamos en nuestro Store.
// En el primer render y cada vez que nos subscribamos al Store.
// Utilizamos el elemento obtenido arriba para mostrar el State.

function renderContador() {
  // Obtenemos la propiedad 'contador' de nuestro store:
  const counter = store.getState() // Conseguimos el valor del reducer contador y nos devuelve el estado
  // Seteamos el número obtenido como texto dentro del elemento con id 'valor':
  !counter ? /*si no existe counter*/ (valor.innerHTML = 0) /*lo pongo en 0*/ : /*else*/ valor.innerHTML = counter.contador // Cambio el valor del span "valor" con el que consigo del contador
}

// Ejecutamos la función 'renderContador':
renderContador()
// Nos subscribimos al store pasándole la misma función. Así cada vez que llegue una acción, ejecutamos la función:
store.subscribe(renderContador) // Cada vez que haya un cambio se ejecuta la función
// Por último, utilizamos los botones de nuestro HTML para que cada vez que hagamos click,
// hagan un dispatch al store de la acción correspondiente:
const botonIncremento = document.getElementById("incremento")
botonIncremento.addEventListener("click", () => {
  store.dispatch(incremento())
})

const botonDecremento = document.getElementById("decremento")
botonDecremento.addEventListener("click", () => {
  store.dispatch(decremento())
})