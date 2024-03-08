/*
ÍNDICE:
    --->Funciones en "main.js"<---

1. Consigna Para T.P.(Entrega 1)
2. Problemas y soluciones - Calculadora de Dividendos(Entrega 1)
3. Consigna Para T.P.(Entrega 2)
4. Replanteo de evolución de proyecto (Entrega 2)
5. Problemas y soluciones - Calculadora "Científica" (Entrega 2)
6. Ejercicio práctico - Calculadora "Científica":
--------------------------------------------------------------------------------------
1. 
Consigna Para T.P.(Entrega 1)

Tomando como base los ejemplos de la estructura for y while,
crear un algoritomo que repita un bloque de instrucciones.
En cada repetición es necesario efectual una operación o comparación
para obtener una salida por alerta o consola 
--------------------------------------------------------------------------------------
2. 
Problemas y soluciones - Calculadora de Dividendos(Entrega 1)

-El bucle principal se rompe antes de llegar a la segunda opción(user coloca '0' para salir / línea actual 71)
*HABÍA UN BREAK MAL UBICADO

-Opción inválida en los if, si presiono enter sín ninguna opción respone con Nan igual(línea actual 43 y 51)
*ERA PARSEINT, NO NUMBER LPM

-No se corta el bucle cuando se coloca -1, en la opcion del 2do bucle while interno y ya coloque un break(línea actual 54)
*NO ENCUENTRO SOLUCION
--------------------------------------------------------------------------------------
3. 
Consigna Para T.P.(Entrega 2)

Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. 
A partir de los ejemplos mostrados la primera clase, y en funcion del tipo de simulador que 
hayas elegido, deberás:
-Incorporar al menor 1 array en tu proyecto
-Utilizar algunos de los métodos o propiedades vistos en la clase
--------------------------------------------------------------------------------------
4. 
Replanteo de evolución de proyecto (Entrega 2)

Tuve inconvenientes para re-plantearme la idea del proyecto final, ya qué no se me ocurre como utilizar los objetos y funciones. Ahora estoy agregando
más cantidad de operaciones para realizar, y que se vea reflejado en el código, solo funciones(aprender a acortar código para el que lo lea). 
Lo que no puedo solucionar es el utilizar objetos.

--------------------------------------------------------------------------------------
5.
Problemas y soluciones - Calculadora "Científica" (Entrega 2)

-Cambiar las funciones a un archivo aparte es más ordenado, pero devuelve que no existe ninguna función
Tenía que poner antes la etiqueta de funciones y debajo la aplicación: <script scr="funciones.js">, y debajo <script scr"main.js"> en HTML

-

--------------------------------------------------------------------------------------

6. Calculadora "Científica":
*/

while (true) {//Envuelve todo el codigo para que siempre se mantenga activo hasta que el usuario decida por opcion terminarlo
    let opt = parseInt(prompt("Ingrese una opción:\n1 - Dividendos\n2 - Suma\n3 - Resta\n4 - Multiplicación\n5 - División\n6 - Potencia\n7 - Raíz\n0 - Abandonar la aplicación"));

    if (isNaN(opt) || opt === "") { //No aceptar 'nan' o ''
        alert("Opción incorrecta. Intente nuevamente!")

    } else if (opt === 1) {//Introducir  '1'  arranca la calculadora de dividendos
        dividendos();

    } else if (opt === 2) {
        suma();

    } else if (opt === 3) {
        resta();

    } else if (opt === 4) {
        multiplicacion();

    } else if (opt === 5) {
        division();

    } else if (opt === 6) {
        potencia();
        
    } else if (opt === 7) {
        raizcuadrada();

    }else if (opt === -1) {//Segunda salida dentro del bucle, para que no sea infinito para el usuario
        alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
        break;
            
    } else if (opt === 0) {//Al introducir '0' termina el bucle principal
        alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
        break
        
    } else {//Solo si no coloca opciones correctas
        alert("Opción incorrecta. Intente nuevamente!")
    };

};






























