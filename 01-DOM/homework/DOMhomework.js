// Crear un array vacío llamado 'toDoItems'
// Tu codigo acá:

let toDoItems = [];

// En la página 'index.html' hay un elemento span cuyo texto es 'Aplicación creada por:'.
// Usando querySelector seleccionar dicho span por su id ('createdBy') y luego usando innerHTML
// agregar tu nombre al final del texto actual. Ej: 'Aplicación creada por Franco'
// Tu código acá:
  
var createdBy = document.querySelector("#createdBy"); // Crea una variable seleccionando el id createdBy
createdBy.innerHTML = createdBy.innerHTML + " Facundo"; // Y por medio de esa variable se le agrega a su texto "Facundo" mediante su innerHTML

// Crear una clase denominada 'ToDo' cuyo constructor debe recibir un único parámetro del tipo string
// con el nombre 'description' que será justamente la descripción del ToDo.
// Agregar dos propiedades a la clase:
// 1) 'description' : debe ser igual a la descripción pasada como parámetro al constructor
// 2) 'complete'    : debe setearse en false
// Ayuda: usar 'this' en el constructor

function ToDo (description) { // Crea una clase ToDo
  // Tu código acá:
  this.description = description;
  this.complete = false;
}


// Agregar un método denominado 'completeToDo' al prototipo de la clase ToDo
// No requiere ningún argumento
// Debe setear el atributo 'complete' del ToDo en true

// Tu código acá:
ToDo.prototype.completeToDo = function () { // Agrega un método a la clase ToDo
  this.complete = true;
}

// Agregar dos parámetros a la función 'buildToDo':
//    1) Un objeto de la clase ToDo
//    2) Index numérico
//
// La función debe realizar lo siguiente:
//    1) Crear un elemento 'div' y asignárselo a una variable denominada 'toDoShell'
//    2) Asignarle a 'toDoShell' la clase 'toDoShell'
//    3) Crear un elemento 'span' y asignárselo a una variable denominada 'toDoText'
//    4) Utilizando el objeto toDo pasado como argumento, setear el 'toDoText' innerHTML
//       asignándole el valor de la propiedad 'description' del objeto ToDo.
//    5) Asignarle como id del 'toDoText' el valor 'index' recibido como argumento
//    6) En función del atributo 'complete' del objeto ToDo recibido como argumento:
//          - Si es true: asignarle a 'toDoText' la clase 'completeText'
//          - Si es false: no asignarle ninguna clase
//    7) Agregar 'toDoText' como hijo de 'toDoShell'
//    8) Devolver la variable toDoShell


function buildToDo(todo, index) {
  // Tu código acá:
  // Punto 1
  const toDoShell = document.createElement("div"); // Crea una variable y le crea un div mediante createElement
  // Punto 2
  toDoShell.classList.add("toDoShell"); // Le agrego una clase al div creado mediante .classList.add
  // Otra forma --> toDoShell.setAttribute("class", "toDoShell");

  // Punto 3
  const toDoText = document.createElement("span"); // Crea un span mediante la variable
  //Punto 4
  toDoText.innerHTML = todo.description; // Se le pone la description del todo pasado por argumento al span creado
  // Punto 5
  toDoText.id = index; // Al no tener el atributo ID, se crea con .id y se le asigna el index por argumento
  // Otra forma --> toDoText.setAttribute("id", index);

  // Punto 6
  if (todo.complete) toDoText.classList.add("#completeText"); // En el caso que todo.complete sea true, se le agrega la clase completeText. De lo contratio no hace nada

  // Último ejercicio (punto 3)
  toDoText.addEventListener("click", completeToDo);

  // Punto 7
  toDoShell.appendChild(toDoText); // Crea una clase hijo de la clase que se le pasa

  // Punto 8
  return toDoShell;
}

// La función 'buildToDos' debe crear un array de objetos toDo y devolverlo
// Recibirá como parámetro un array de objetos ToDo
// Utilizar el método map usando la función previamente creada ('buildToDo')
// Devolver el nuevo array

function buildToDos(toDos) { // La función buildToDos se usa para varios ToDo que llama a la primera y la repite
  // Tu código acá:
  const shellsArray = toDos.map(function(todo, i) { // Crea un array por el método map que toma como parámetro la función buildToDo
    return buildToDo(todo, i);
  });

  return shellsArray;
}

// La función 'displayToDos' se va a encargar de que se vean los toDo's en pantalla
//  1) Seleccionr el elemento cuyo id es 'toDoContainer' y almacenarlo en una variable denominada 'toDoContainer'
//  2) Setear el innerHTML de 'toDoContainer' como un string vacio ("")
//  3) Llamar a la función previemante creada 'buildToDos' pasándole como argumento el array toDoItems
//  4) Iterar sobre el resultado devuelto por la función 'buildToDos' e ir agregndo cada elemento a 'toDoContainer'
//  5) Al final de este archivo, antes de la línea que dice "NO CAMBIES NADA DE ACÁ PARA ABAJO" escribe una
//     línea para hacer el llamado a esta funcion (displayToDos)
//  6) Abrir o en el caso de ya tenerlo abierto, recargar, la página

function displayToDos() {
  // Tu código acá:
  // Punto 1
  const toDoContainer = document.querySelector("#toDoContainer"); // Crea una variable y le asigna el id correspondiente a través de querySelector o getElementById
  // Punto 2
  toDoContainer.innerHTML = "";
  
  // Punto 3
  const todos = buildToDos(toDoItems); // Se crea una variable nueva que llama a buildToDos pasándole como argumento el array de toDoItems
  // Punto 4
  todos.forEach(function(todo) { // Recorre el resultado de buildToDos y lo agrega al array de toDoContainer
    toDoContainer.appendChild(todo);

  // Punto 5 al final del archivo
  });
}

// La función 'addToDo' agregará un nuevo ToDo al array 'toDoItems'
// [NOTA: Algunas cuestiones a tener en cuenta sobre el elemento 'input' de HTML (Ya que 'toDoInput' es un input)
// Todos los elementos input tienen una propiedad llamada 'value' que nos permite acceder al texto que se encuentre
// actualmente escrito dentro del input]
//  1) Crear un nuevo ToDo usando la clase ToDo y pasándole el valor del input 'toDoInput' como parámetro
//  2) Agregar el objeto ToDo recién creado al array toDoItems
//  3) Setear el valor del input toDoInput como un string vacio ("") (Esto se realiza para que en la vista se borre lo que se encontraba escrito)
//  4) Llamar a la función displayToDos para que se actualicen los toDos mostrados en pantalla

function addToDo() {
  // Tu código acá:
  // Punto 1
  const toDoInput = document.querySelector("#toDoInput"); // Crea una nueva variable pasándole el id toDoInput
  const newTodo = new ToDo(toDoInput.value); // Y creo una nueva variable creando una nueva instancia de la clase ToDo y pasándole el valor de toDoInput
  // Otra forma --> const val = document.getElementById("toDoInput").value;
  //                const newTodo = new ToDo(val);
  // Punto 2
  toDoItems.push(newTodo); // Pushea al array de toDoItems el valor de newTodo
  // Punto 3
  toDoInput.value = "";
  // Punto 4
  displayToDos(); // Se llama a la función de displayToDos para que se ejecute y se muestren
}

// Agregar un 'Event Listener' para que cada vez que el botón 'AGREGAR' sea clickeado
// se ejecute la función 'addToDo'
//   1) Seleccionar el elemento cuyo id es 'addButton'
//   2) Agregarle un 'click' event listener, pasándole la función 'addToDo' como callback

// Tu código acá:

// Punto 1
const addButton = document.querySelector("#addButton"); // o getElementById("addButton")
// Punto 2
addButton.addEventListener("click", addToDo);

// La función completeToDo se va a ejecutar cuando queramos completar un todo
// [NOTA: Algunas cuestiones a tener en cuenta
// Todo Event Listener recibe como parámetro el objeto 'event' conteniendo un montón de información que incluye
// el tipo del evento, que elemento fue el que lo llamó, los valores de dicho elemento, etc.
// En este paso vamos a utilizarlo para encontrar el index del item que disparó el evento (Esta parte ya se
// encuentra desarrollada pero está comentada dentro de la función por lo que va a ser necesario que la descomenten)]
//   1) Utilizando el index suministrdo, llamar a 'completeToDo' (Recuerden que habíamos creado dcho método en el
//      prototipo de la clase ToDo) sobre el elemento correspondiente del array toDoItems
//   2) Llamar a displayToDos para actualizar los elementos que se van a mostrar en pantalla
//   3) En la función 'buildToDo' agregar un 'click' event listener al elemento 'toDoText', pasándole
//      esta función como callback

function completeToDo(event) {
  // DESCOMENTAR LA SIGUIENTE LINEA
  const index = event.target.id; // Apunta al ID de cada elemento de la lista
  // Tu código acá:
  // Punto 1
  toDoItems[index].completeToDo(); // Llamo al index de toDoItems porque lo que quiero es el target de los elementos

  //Punto 2
  displayToDos();
}

// Una vez que llegaste a este punto verificá que todos los tests pasen


// **********************************************EXTRA CREDITOS:********************************************** //

/*    Investigá sobre el tipo 'checkbox' del elemento input y realizar lo siguiente en la función 'buildToDo':
        a) Crer un checkbox en la función 'buildToDo'
        b) Asignarle como id a dicho checkbox el valor del index y quitar el id del index de toDoText
        c) Agregarle al checkbox el 'click' event listener de completeToDo y quitárle el event listener a toDoText
        d) Asignarle la clase 'completeCheckbox' al checkbox
        e) Dentro del bloque 'if' de la función buildToDo, si es true, setear el atributo 'checked' en true en el checkbox
        f) Agregar el checkbox sobre el elemento 'toDoShell'
*/
// ********************************************** ----------- ********************************************** //


// Acá debes insertar la llamada a 'displayToDos'

// Punto 5
displayToDos();

// ---------------------------- NO CAMBIES NADA DE ACÁ PARA ABAJO ----------------------------- //
if (typeof module !== 'undefined') {
  module.exports = {
    toDoItems: toDoItems,
    ToDo: ToDo,
    buildToDos: buildToDos,
    buildToDo: buildToDo,
    completeToDo: completeToDo,
    displayToDos: displayToDos,
    addToDo: addToDo
  };
}
