
console.log ("======================================");
console.log("Tarea 02 - ventanas con Javascript");
console.log("=======================================");

//ejercicios con ventanas

//1.creamos una variable con una ventana para el user
let numeroUno= prompt("introduce un numero:");

//2.imprimo la variable en la consola
console.log(numeroUno);

//3. otra variable para guardar numero
let numeroDos= prompt("introduce otro numero")

//4.imprimimos de nuevo el otro numero
console.log(numeroDos);

//Importante:convertir  a numero los datos
numeroUno = parseInt(numeroUno)
numeroDos = parseInt(numeroDos)

//5.creamos una variable para los resultados
let resultado = numeroUno + numeroDos;

//6. imprimimos el resultado
console.log(resultado)