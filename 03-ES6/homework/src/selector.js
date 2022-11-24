var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)) resultSet.push(startEl); // Si el elemento que te pasé (startEl) existe, me lo pushea a resultSet

  for (let i = 0; i < startEl.children.length; i++) { // Recorre los hijos del body
    let res = traverseDomAndCollectElements(matchFunc, startEl.children[i]); // Y guarda el resultado realizando recursión con los hijos del body. El resultado da true o false y pushea a resultSet
    resultSet = [...resultSet, ...res]; // Con el spread operator se guardan todos los resultados hasta el último para no perderlos, generando copias
  }

  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag

// Los valores que puede recibir esta función son: .clase, #id, div o div.clase
var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0] === "#") return "id";
  if (selector[0] === ".") return "class";
  if (selector.split(".").length === 2) return "tag.class"; // El split parte en dos el string cuando el parámetro que recibe, en este caso un punto
  // Otra forma --> if (selector.includes(".")) return "tag.class";
  return "tag";
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector); // Va a la función y guarda el resultado en una variable
  var matchFunction; // Guarda una nueva variable que después le pasa una función en los if

  if (selectorType === "id") { // Si el resultado de selectorTypeMatcher es "id", entra al if
    matchFunction = function(element) { // Recibe un argumento para entrar una parte específica del id; ejemplo, body.id
      return "#" + element.id === selector;
      // Ej:  #  +     idOne   =   #idOne
    }
  } else if (selectorType === "class") {
    matchFunction = function(element) { // Class puede tener varias clases en su nombre por lo que hay que recorrerlo con un for
      for (const clase of element.classList) {
        if ("." + clase === selector) return true;
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function(element) {
      let [tag, clase] = selector.split("."); // Divide tag.class en dos
      // TAG.CLASS
      // div.classOne
      // h1.classRandom
      return matchFunctionMaker(tag)(element) && matchFunctionMaker("." + clase)(element); // Realiza recursividad con tag y clase y comparo cada uno con element. matchFunctionMaker() es una closure y se le pasa element. Finalmente retorna el resultado si ambas son true
      //            TAG                                 CLASS
      //            div                                 classOne
      //            h1                                  classRandom
    }
  } else if (selectorType === "tag") {
    matchFunction = function(element) {
      return element.tagName.toLowerCase() === selector; // Devuelve el nombre del tag en minúscula
    }
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc); // Recibe una función
  return elements;
};
