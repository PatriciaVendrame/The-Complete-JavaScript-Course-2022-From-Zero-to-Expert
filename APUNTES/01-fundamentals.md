# QUE ES JAVASCRIPT ?

Es un lenguaje de programacion de alto nivel, multiparadigma, orientado a objetos

---

## LINKING JAVASCRIPT

- Enlazarlo en el <head>, online script

```
  <html>
    <head>
      <script>
        Código Javascript
      </script>
    </head>
    <body>
      Código HTML
    </body>
  </html>
```

- Enlazar el archivo externo con extensión .js en el <body>
  ` <script src="script.js"></script>`

---

## VALORES Y VARIABLES

Un valor es básicamente un dato. Es la unidad de información mas fundamental que tenemos en programación

Los valores se almacenan en variables y de esta manera se pueden reutilizar una y otra vez. Las variables se referencian por su nombre

---

## TIPOS DE DATOS

En JavaScript, cada valor es un objeto y cuando no lo es es un valor primitivo

Hay 7 tipos de valores primitivos:

- Number: Los números enteros y los números con punto decimal
- String: una secuencia de caracteres, se usan solo para texto, siempre van entre comillas dobles o simples
- Bolean: es un tipo de dato lógico que solo puede tomar uno de los valores lógicos verdadero o falso
- Undefined: un valor no definido, un valor vacio. Una variable que se declara pero no se le asigna valor
- Null: valor vacío, una variable se define con el valor null
- Symbol: valor único y que no se puede cambiar
- Big Int: valores demasiado grandes para ser representados por el tipo Number
- JavaScrip tiene una función llamada Escritura Dinámica, cuando se crea una nueva variable, no tiene que definir manualmente el TIPO de datos del valor que contiene. JavaScript determian automáticamente el tipo de datos de un valor cuando se almacena en una variable.
  La distincion entre valor y variable es fundamental, es el valor el que tiene un tipo no la variable, éstas simplemente almacenan valores que tienen un tipo
  Otra distinción de la escritura dinámica es que se puede asignar un tipo de valor distinto a la misma variable

---

## LET - CONST - VAR

- LET: para declarar variables que luego pueden cambiar durante la ejecución del programa (reasignacion). Su scopoe es de bloque
- CONST: para declarar variables cuyo valor no se puede cambiar en la ejecución del programa. Deben inicializarse al declararse, es un error declarar solamente la variable
- VAR: despues de ES6 se recomienda evitarlas por completo. Su scope es de función

---

## PRECEDENCIA DE LOS OPERADORES

[MDN PRECEDENCIA OPERADORES](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

---

## TEMPLATE LITERALS

- Antes de ES6, para concatenar strings se usaba el signo " + "
- Desde ES6 se usan template literals, se puede escribir una cadenas insertando las variables directamente

```
const firstName = "First Name";
const lastName = "LastName"
const person = `${firstName} ${lastName}`;

```

- Antes de ES6 para los saltos de linea se usaba " \n\ "
- Desde ES6 para los saltos de línea en los templates literals solo es necesario aplicar un RETURN

---

## IF ELSE

```
if(condicion) {
  código...
} else if{
  código...
} else {
  código...
}
```

Es una estructura de control porque permite tener mas control sobre la forma en que se ejecuta el código. No se ejecuta el código de forma lineal sino que se evalua la condicion, se controla los bloques que deberían ejecutarse y los que no deberían ejecutarse.
Si la condicion se cumple se ejecuta el código, si no se cumple se ejecuta el código del bloque else. El bloque else es opcional, si no se declara simplemente no se ejecuta ningún código.
Las variables que se definen dentro de cualquier bloque de código de la estructura de control no será accesible fuera del bloque

---

## CONVERSION Y COERCION

En JavaScript hay conversión de tipo y coerción de tipo,
CONVERSION -> cuando convertimos manualmente de un tipo a otro, una conversión explicita

```
const yearStr = "1990";
const yearNum = Number(yearStr);
```

COERSION -> cuando JavaScript convierte automáticamente los tipos por nosotros, ocurre implicitamente, completamente oculto para nosotros
Ocurre siempre que un operador está tratando con dos valores que tienen tipos diferentes. En este caso, JavaScript, detras de escena, convertirá uno de los valores para que coincida con el otro valor, para que al final, la operación se pueda ejecutar

```
const coercion = "I am " + 23 + " years old.";
```

El numero 23 se convierte en string para poder formar la cadena

```
let n = "1" + 1; // type of String = 11
n = n - 1; // type of Number = 10
console.log(n); // 10
```

---

## TRUTHY AND FALSY VALUES

- Los valores falsy son valores que no son exactamente falsos, pero se volverán falsos cuando se intenta volverlos booleanos
  En JavaScript solo hay cinco valores falsy

  - 0 (cero)
  - "" (string vacío)
  - undefined
  - null
  - NaN
    Los valores falso en sí mismo ya es falso

- Los demas valores son valores truthy que se convertiran a verdadero
  Ejemplo: cualquier número que no sea cero, cualquier cadena no vacía, etc se convertiran a verdadero cuando se intente convertirlos en valor booleano
  ```
  console.log(Boolean(0)); // false
  console.log(Boolean(undefined)); // false
  console.log(Boolean("texto")); //true
  console.log(Boolean({})); //true
  ```
  La conversión de booleanos siempre es implícita, es decir es una coerción escrita que JavaScript hace automáticamente detrás de escena. Esta coerción sucede en dos escenarios:
  - Cuando se usan operadores lógicos
  - En el contexto lógico, como por ejemplo, en la condición de una instrucción if else, donde evalua de manera booleana la condicion. Si el valor es truthy o falsy se convertira a verdadero o falso

---

## OPERADORES DE IGUALDAD: == VS ===

- === -> OPERADOR DE IGUALDAD ESTRICTA, no realiza coercion de tipos, ambos valores deben ser exactamente iguales

  ` 18 === "18" // false`
  ` 18 !== "18" // true`

- == -> OPERADOR DE IGUALDAD FLEXIBLE, realiza la coercion de tipos

  `18 == "18" // true`
  `18 != "18" // false`

---

## LOGICA BOOLEANA AND - OR - NOT

AND sólo es true si todas las condiciones son true

- AND &&

  true AND true = true

  false AND true = false

  false AND false = false

  true AND false = false

OR sólo es false si todas las condiciones son false

- OR ||

  false OR false = false

  false OR true = true

  true OR false = true

  true OR true = true

NOT ! opera sobre una sola condición y convierte su valor booleano

---

## INSTRUCCIÓN SWITCH

Es una alternativa a escribir una declaración if/else donde se quiere comparar un valor con múltiples opciones diferentes

```
switch(variable) {
  case "case1":
    código..
    break;
  case "case2":
  case "case3":
    código...
    break;
  .
  .
  .
  case "case n":
   código...
   break;

  default:
    código...
}
```

- Se compara la variable con los CASE, es el equivalente a la condición del IF. Si no se cumple la condición se ejecuta el bloque DEFAULT que es el equivalente al ELSE de la sentencia if/ else
- Dos CASE para un mismo bloque de código, establece que cualquiera de los dos CASE ejecutará ese bloque.
- BREAK detiene la ejecución, si se omite, el código sigue ejecutandose
- SWITCH hace COMPARACION ESTRICTA

---

## EXPRESIONES Y DECLARACIONES (STATEMENTS AND EXPRESIONS)

Una EXPRESION es un fragmento de código que produce un valor

- 3 + 4 es una EXPRESION
- un número también es una EXPRESION porque es un valor para JavaScript
- true && false && !true tambien es una expresion poruqe produce un valor booleano

Las DECLARACIONES es un fragmento de código mas grande que se ejecuta y no produce ningún valor por sí mismo

Escribimos programas completos como una secuencia de acciones y estas acciones son las declaraciones

Ejemplo declaracion es el bloque if/else que no retorna ningun valor

```
if(23 > 10) {
  const str = '23 is bigger';
 }
```

- '23 is bigger' es una expresión
- const str = '23 is bigger' es una declaracion porque no produce un valor
- las declaraciones terminan en;

La distinción entre expresiones y declaraciones es porque JavaScrip espera ambas en diferentes lugares

En los TEMPLATE LITERALS solo se puede insertar expresiones que generan algun valor y es reemplazado, no se pueden usar declaraciones

---

## OPERADOR CONDICIONAL (TERNARY)

El OPERADOR TERNARIO es una expresion, como tal, los operadores generan un resultado, el retorno de este resultado se almacena en una variable

```
const age = 18;
const drink = age >= 18 ? 'wine🍷' : 'water💧'
```

Si no se usa un operador ternario se debe hacer con una estructura if= else, la variable se debe declarar afuera ya que si se declara dentro de la estructura if else no es accesible desde afuera del condicional

```
let drink2;
if(age >= 18) {
  drink2 = 'wine🍷';
} else {
  drink2 = 'water💧';
}
```

En un template literal no podemos poner como expresion un condicional if else porque arroja un error ya que éste es una declaración.

En un template literal si podemos incluir un operador ternario

Ejemplo:
`` console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)``;

EL OPERADOR TERNARIO NO REEMPLAZA AL IF ELSE, EL OPERADOR TERNARIO SE USA PARA DESICIONES RAPIDAS, PARA BLOQUES DE CODIGO MAS GRANDES SE USA IF ELSE

TODO OPERADOR ES UNA EXPRESION

---

## MODO ESTRICTO (STRICT MODE)

Es un modo especial que se puede activar en JavaScript que facilita la escritura de código seguro, se activa escribiendo al comienzo del script (tiene que ser en la primera línea)

`'use strict';`
Evita cometer errores accidentales a los desarrolladores

- Prohibe hacer ciertas cosas
- Creará errores visibles en determinadas situaciones en las que, sin el modo estricto, JavaScript simplemente fallaria silenciosamente sin avisar del error cometido

```
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive');
```

_sin el modo estricto, el error de escribir mal la variable en el primer if no aparece como error en la consola_

_con el modo estricto, el error se muestra en la consola y es descriptivo del error cometido_

---

## FUNCIONES (FUNCTIONS)

Una funcion es un fragmento de código que podemos reutilizar una y otra vez en nuestro código. Se pueden pasar datos a una función y ésta puede también devolver datos que son usados en otra parte del programa
Los argumentos (datos de entrada) que se pasan a una función son específicos de la función y se definiran en el llamado a la misma

Funciones que no retornan valor

```
function nombre(parametros) {
  código...
}

Invocando / ejecutando / llamando a la función
nombre(argumentos);
```

Funciones que retornan valores

```
function nombre(parametros) {
   return código...
}

Invocando / ejecutando / llamando a la función
const rtdo = nombre(argumentos);
```

- PARÁMETRO van entre los parentesis de la función cuando se define la misma
- ARGUMENTO van entre los parentesis de la función cuando se llama a la misma

---

## FUNCIONES DECLARADAS VS FUNCIONES EXPRESADAS

- FUNCIONES DECLARADAS se usa la palabra function

```
function nombre(parametros) {
   return código...
}

Invocando / ejecutando / llamando a la función
const rtdo = nombre(argumentos);
```

- FUNCIONES EXPRESADAS se declaran mediante una variable, una expresión produce un valor por lo que se utiliza a la variable para almacenar el valor de la función. El nombre de la función es el nombre de la variable

```
const nombre = function (parametros) {
   return código...
}

Invocando / ejecutando / llamando a la función
const rtdo = nombre(argumentos);
```

La principal diferencia entre las FUNCIONES DECLARADAS Y LAS FUNCIONES EXPRESADAS

- DECLARADAS: se pueden llamar antes que se definan en el código
- EXPRESADAS: no se pueden llamar antes que se definan en el código

---

# FUNCIONES FLECHA (ARROW FUNCTIONS)

Una expresión de función flecha es una alternativa compacta a una Función Expresada tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

```
- Sintaxis: un parámetro sin (), código de una línea sin {}, return implícto

const nombre = parametro => código de una línea ...


- Sintaxis: varios parámetros entre (), se usan {} cuando se necesita mas de una línea de código, return explícito

const nombre = (parametro1, parametro2) => {
  return código  ...
}

- Llamada a la funcion, al  ser funciones expresadas, retornan un valor, se debe almacenar el resultado en una variable

const rtdo = nombre(argumentos);
```

---

## ESTRUCTURA DE DATOS: ARRAYS

- Un array es un contenedor en el que se pueden lanzar variables y luego hacer referencias a ellas. Son objetos similares a una lista.
- Pueden contener la cantidad de elementos necesarios y ser de distinto tipo, el orden de los elementos es importante
- El índice de los elementos comienza desde 0

- Sintaxis

```
  - const meses = ['Enero', 'Febrero', 'Marzo'];
  - const meses = new Array('Enero', 'Febrero', 'Marzo');
```

- array[i] -> acceder a un elemento del array
- array.length -> contar los elementos de un array
- array[array.length - 1] -> acceder al último elemento de un array
- array[i] = 'nuevo' -> cambiar el valor en un determinado elemento del array

- Un array no es un valor primitivo, solo los valores primitivos declarados con CONST no se puede cambiar su valor.
- Un array definido con CONST puede mutar el valor de sus elementos
- Un array definido con CONST no se puede reemplazar por completo

---

## OPERACIONES BASICAS CON ARRAYS - METODOS ( BASIC ARRAYS OPERATIONS - METHODS)

Los métodos son funciones

- Agregar elementos a un array

```
array.push(argumento) -> modifica el array, agrega elementos al FIINAL de un array
const rtdo = array.push(argumento) -> almacena en la variable el valor de la longitud de un array
```

```
array.unshift(argumento) -> agrega un elemento al INICIO del array
const rtdo = array.unshift(argumento) -> almacena en la variable el valor de la longitud de un array
```

- Eliminar elementos de un array

```
array.pop(); -> elimina el ÚLTIMO elemento del array
const rtdo = array.pop(); -> almacena en la variable el elemento eliminado

array.shift(); -> elimina el PRIMER elemento del array
const rtdo = array.shift(); -> almacena en la variable el elemento eliminado
```

- Posicion de un elemento del array

```
array.indexOf(argumento) ->retorna el índice de la posición donde se encuentra un determinado elemento de la matriz, el que se pasa por argumento

array.indexOf(argumento) -> retorna -1 cuando no se encuentra el elemento
```

- Verificar si un elemento pertenece a un array

```
- A partir de ES6 se incorpora el método includes(), es similar a indexOf, se diferencian en que en vez de retornar le índice del elemento, devolverá TRUE si el elemento está o FALSE en caso contrario
- Este método realmente usa la IGUALDAD ESTRICTA para esta verificación, no realiza coerción
- Su aplicación mas útil es en el condicional if/else

  array.includes(argumento) -> true / false
```

---

## INTRODUCCIÓN A LOS OBJETOS

Sintaxis

```
const elemento = {
  clave: 'valor',
  clave: 'valor',
  clave: 'valor',
  ...
}
```

- CLAVE -> o propiedad, es el nombre de la variable
- VALOR -> puede ser de cualquier tipo
- El orden de las propiedades del objeto no son importantes

---

## NOTACION DE PUNTO VS NOTACION DE CORCHETES

- objeto.propiedad -> mediante el punto se accede al valor de la propiedad del objeto

- objeto['propiedad'] -> mediante los corchetes y la propiedad ENTRE COMILLAS (que referencia a la llave) obtenemos el valor de la propiedad

La diferencia entre ambos tipos de notaciones es que en la notacion de corchetes podemos establecer cualquier operación para establecer el nombre de la propiedad y asi acceder a su valor (una operación es una expresión que genera un valor), en cambio, en la notacion de punto debemos determinar el nombre de la propiedad de la cual queremos su valor

```
const persona = {
  primerNombre = 'Nombre',
  primerApellido = 'Apellido'
}

const acort = 'primer';
```

persona.(acort + 'Nombre') -> retorna un error de string inesperado
persona[acort + 'Nombre'] -> retorna Nombre

- Intentar acceder mediante la notacion de punto a propiedades no definidas en un objeto arroja 'UNDEFINED'
  Sucede cuando se quiere reemplazar la propiedad por su equivalente al valor de una variable, javascript toma a la variable como una propiedad del objeto y no toma el valor de la variable como equivalente a la propiedad del objeto por lo que retorna undefined
  Si se accede mediante la notacion de corchete, javascript toma el valor de la variiable como equivalente a la propiedad del objeto, retornando el valor de la propiedad

- AGREGAR PROPIEDADES A UN OBJETO CON NOTACION DE PUNTO Y CORCHETES
  persona.color = 'Azul';
  persona[color] = 'Azul';

## METODOS DE LOS OBJETOS

```
const persona = {
    firstName: 'Nombre',
    lastName: 'Apellido',
    nacimiento: 1991,
    job: 'estudiante',
    friends: ['Juan', 'Pedro', 'Lucas'],
    calcEdad: function (nacimiento) {
      return 2037 - nacimiento;
    }
};
```

- Las funciones que son propiedades de un objeto se llaman métodos. Éstas funciones son funciones expresadas.
- Invocar el metodo con notacion punto
  `const edad = persona.calcEdad(2000);`
- Invocar el metodo con notacion de corchete
  `const edad = persona['calcEdad'](2000);`
- This -> un método accede a las propiedades del objeto que lo invoca mediante la palabra reservada THIS, this apunta al objeto que lo invoca

```
calcEdad: function () {
      return 2037 - this.nacimiento;
    }
```

- Crear una propiedad desde una función: Esta propiedad estará disponible después que se llame al método que la creó

```
calcEdad: function () {
      this.age =  2037 - this.nacimiento;// se crea la propiedad age
      return this.age
    }
```

## ESTRUCTURA DE CONTROL - LOOPS - FOR

- Permite automatizar tareas repetitivas

```
for(contador; condicion; incremento/decremento) {
  código...
}
```

- El bucle FOR se ejecuta mientras la condicion sea verdadera
- El incremento/decremento del contador evita un ciclo infinito y se ejecuta al final de la ejecución del código.

## SENTENCIA BREAK Y CONTINUE EN LOOPS

- Uso de loops en recorrer arrays
- Variable contador " i " inicia en 0 porque el índice el array comienza en 0
- Crear una array partiendo de un array original en un for

  - Crear una variable fuera del FOR, de tipo array, a la que se le agregaran los valores
  - Asinar a cada indice del nuevo array un valor que va a depender del valor del array original

  ```
  const array = ["nombre", 2, true, [a, b, c]];
  let nuevoArray = [];
  for(let i = 0; i < array.length; i++) {
    nuevoArray[i] = typeOf array[i]; //agregar el tipo de cada elemento
    nuevoArray.push(typeOf array[i]); //agregar elementos mediante el método push()
  }
  ```

- CONTINUE: es salir de la iteración actual del ciclo y continuar con la siguiente iteración
- BREAK: se usa para terminar completamente todo el ciclo

```
Mostrar solo los que son tipo String

  const array = ["nombre", 2, true, [a, b, c]];
  for(let i = 0; i < array.length(); i++) {
    if(typeOf array[i] !== "string") continue
    console.log(array[i], typeOf array[i]);
  }

Si hay un elemeto tipo number salir del ciclo

 const array = ["nombre", 2, true, [a, b, c]];
  for(let i = 0; i < array.length(); i++) {
    if(typeOf array[i] === "number") break;
    console.log(array[i], typeOf array[i]);
  }
```

## ESTRUCTURA DE CONTROL - WHILE

- WHILE tiene los mismos parámetros que el for, un inicializador, una condición y un incremento/decremento
- No siempre se necesita un contador y sin contador no se necesita incrementarlo/decrementarlo
- Siempre necesita una condición

```
FOR LOOP
for(contador; condición; incremento/decremento)
for (let rep = 1; rep < 10; rep++) {
    console.log(`Lifting weights repetition ${rep}🏋️‍♀️`);
}
```

```
WHILE LOOP

let rep = 1; //contador
while (rep <= 10) { //condición
    console.log(`Lifting weights repetition ${rep}🏋️‍♂️`);
    repeat++; //incremento
}
```

EJEMPLO SIN CONTADOR

- Si la condición se cumple en el primer lanzamiento este ciclo tendrá exactamente cero iteraciones y nunca comenzará

```
Seguir ejecutando el ciclo mientras los dados sean distintos de 6

let dice = (Math.trunc(Math.random() * 6) + 1);
while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    //se necesita volver a tirar para que no caiga en un loop infinito
    dice = (Math.trunc(Math.random() * 6) + 1);
    if (dice === 6) {
        console.log('Loop es about to end...');
    }
}
```
