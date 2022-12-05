const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) { // Reducer
  switch (action.type) {
    case INCREMENTO:
      return {
        contador: state.contador + action.payload // Devuelve el contador original con el cambio de la action
      }
    case DECREMENTO:
      return {
        contador: state.contador - action.payload
      }
    default:
      return state;
  }
}

module.exports = contador;