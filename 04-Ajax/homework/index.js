const btnAmigos = document.querySelector("#boton");
const btnSearch = document.querySelector("#search");
const btnDelete = document.querySelector("#delete");

const listaAmigos = document.querySelector("#lista");
const amigoSearch = document.querySelector("#amigo");
const inputSearch = document.querySelector("#input");

const inputDelete = document.querySelector("#inputDelete");
const respuestaDelete = document.querySelector("#success")

// FUNCTION PARA BOTON AMIGOS
function showFriends() {
    listaAmigos.innerHTML = ""
    fetch(`http://localhost:5000/amigos`)
    .then(r /*respuesta de lo de arriba*/ => r.json())
    .then(amigos => {
        for (let i = 0; i < amigos.length; i++) {
            let li = `<li>${amigos[i].name}<button onclick="deleteFriend(${amigos[i].id})">X</button></li>` /*creo una etiqueta li con el nombre de cada amigo*/
            listaAmigos.innerHTML += li
        }
    })
    .catch(err => listaAmigos.innerHTML = `Error no tenés amigos`) /*el .catch devuelve errores*/
}

// FUNCTION PARA BOTON SEARCH
function searchFriend() {
    let id = inputSearch.value
    inputSearch.value = ""
    fetch(`http://localhost:5000/amigos/${id}` /*se le agrega al HTML el id que quiero buscar*/)
    .then(r => r.json())
    .then(amigo => {
        amigoSearch.innerText = amigo.name /*guarda el nombre en el span #amigo guardado en amigoSearch*/
    })
    .catch(err => amigoSearch.innerText = `No se encontró al amigo con el id = ${id}`) /*devuelve un error si no encuentra al amigo buscado*/
}

// FUNCTION PARA BOTON DELETE
function deleteFriend(id) {
    // let id = inputDelete.value
    if (typeof id !== "number") {
        id = inputDelete.value
    }
    inputDelete.value = ""
    fetch(`http://localhost:5000/amigos/${id}`, {
        method: "DELETE"
    })
    .then(r => r.json())
    .then(r => {
        respuestaDelete.innerText = `El amigo fue eliminado de la lista`
        showFriends()
    })
}

// BOTON AMIGOS
btnAmigos.addEventListener("click", showFriends)
// BOTON SEARCH
btnSearch.addEventListener("click", searchFriend)
// BOTON DELETE
btnDelete.addEventListener("click", deleteFriend)



// Prueba con jQuery (no funciona)

// $('#boton').click(function () {
//     var idNum = 1;
//     $.get("http://localhost:5000/amigos/" + idNum, function (amigos) {
//         var li = document.getElementsByTagName("ul").createElement("li");
//         li.innerText = amigos.name;
//         $('#respuesta').append(li);
//         idNum++;
//     });
// });

// $('#delete').on('click',function(){
//     $('#lista li:last-child').last().remove();
// });