## Condicionales

```javascript
if (condicion) {
  // codigo si la condicion se cumple (true)
}

if (condicion) {
  // codigo si la condicion se cumple (true)
} else {
  // opcional
  // codigo si la condicion no se cumple (false)
}

if (condicion) {
  // codigo si la condicion se cumple (true)
} else if (condicion) {
  // codigo si la condicion no se cumple (false)
} else if (condicion) {
  // codigo si la condicion se cumple (true)
} else {
  // opcional
  // codigo si la condicion no se cumple (false)
}

if (a > b && a > c && a > d) {
  // codigo
}

if (a > b || a > c || a > d) {
  // codigo
}

if (condicion) {
  // codigo si la condicion se cumple (true)
}

if (condicion) {
  // codigo si la condicion se cumple (true)
}

if (condicion) {
  // codigo si la condicion se cumple (true)
}

let a = 6
let b = 8
let c = 3
let d = 9

if (a > b) {
  // codigo si la condicion se cumple (true)
} else if (a > c) {
    // codigo si la condicion se cumple (true)
} else if (a > d) {
    // codigo si la condicion se cumple (true)
}
```

## Ciclos

```javascript
// for
for(iterador; condicion; incremento){
    // codigo a ejecutar
}

// for in
for(indice in coleccion){
    // codigo a ejecutar
}

// for of
for(valor of coleccion){
    // codigo a ejecutar
}

// while 
while (condicion){
    // codigo a ejecutar
}

// do while
do {
    // codigo a ejecutar
} while (condicion)
```

## Funciones

```javascript
// funciones de Nombre
function nombreDeLaFuncion(param1, param2){ // param1, param2 son opcionales
    // codigo
    return resultado; // opcional
}


// expresion de funcion
const nombreDeLaFuncion = function(param1, param2){ // param1, param2 son opcionales
    // codigo
    return resultado; // opcional
}

// Arrow Funcion o Funciones de Flecha
const nombreDeLaFuncion = (param1, param2) => { // param1, param2 son opcionales
    // codigo
    return resultado; // opcional
}


```