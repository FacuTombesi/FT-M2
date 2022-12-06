const { INCREMENTO, DECREMENTO } = require('../action-types');

const initialState = {
  contador: 0
}

// Nuestro reducer que maneja nuestros dos casos de acción incremento y decremento.
// Recibe el estado de nuestro store, junto con una action creada por nuestro action creator. 
// ¿Qué tiene que hacer el reducer con el contador de cada caso?

function contador(state = initialState, action) { // Reducer
  switch (action.type) {
    case INCREMENTO: // Por convención las constantes se escriben con mayúscula y _ para los espacios
      return {
        ...state,
        contador: state.contador + 1 // Devuelve el contador original con el cambio de la action
      }
    case DECREMENTO:
      return {
        ...state,
        contador: state.contador - 1
      }
    default:
      return { ...state }; // Devuelve el estado tal cual está
  }
}

module.exports = contador;