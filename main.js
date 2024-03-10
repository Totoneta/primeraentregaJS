/*
ÍNDICE:
    --->Clases en "clases.js"<---
    --->Objetos en "objetos.js"<---

1. Consigna Para T.P.(Entrega 1).
2. Problemas y soluciones - Calculadora de Dividendos(Entrega 1).
3. Consigna Para T.P.(Entrega 2).
4. Replanteo de evolución de proyecto (Entrega 2).
5. Problemas y soluciones - Calculadora "Científica" (Entrega 2).
6. Ejercicio práctico - Calculadora "Científica"
--------------------------------------------------------------------------------------
1. 
Consigna Para T.P.(Entrega 1)

Tomando como base los ejemplos de la estructura for y while,
crear un algoritomo que repita un bloque de instrucciones.
En cada repetición es necesario efectual una operación o comparación
para obtener una salida por alerta o consola.
--------------------------------------------------------------------------------------
2. 
Problemas y soluciones - Calculadora de Dividendos(Entrega 1)

- El bucle principal se rompe antes de llegar a la segunda opción(user coloca '0' para salir / línea actual 71).
*HABÍA UN BREAK MAL UBICADO

- Opción inválida en los if, si presiono enter sín ninguna opción respone con Nan igual(línea actual 43 y 51).
*ERA PARSEINT, NO NUMBER LPM

- No se corta el bucle cuando se coloca -1, en la opcion del 2do bucle while interno y ya coloque un break(línea actual 54).
*NO ENCUENTRO SOLUCION
--------------------------------------------------------------------------------------
3. 
Consigna Para T.P.(Entrega 2)

Traslada al proyecto integrador el concepto de objetos, visto en la clase de hoy. 
A partir de los ejemplos mostrados la primera clase, y en funcion del tipo de simulador que 
hayas elegido, deberás:
- Incorporar al menor 1 array en tu proyecto
- Utilizar algunos de los métodos o propiedades vistos en la clase
--------------------------------------------------------------------------------------
4. 
Replanteo de evolución de proyecto (Entrega 2)

Tuve inconvenientes para re-plantearme la idea del proyecto final, ya qué no se me ocurre como utilizar los objetos y funciones. Ahora estoy agregando
más cantidad de operaciones para realizar, y que se vea reflejado en el código, solo funciones(aprender a acortar código para el que lo lea). 
Lo que no puedo solucionar es el utilizar objetos.

--------------------------------------------------------------------------------------
5.
Problemas y soluciones - Calculadora "Científica" (Entrega 2)

- Cambiar las funciones a un archivo aparte es más ordenado, pero devuelve que no existe ninguna función.
Tenía que poner antes la etiqueta de funciones y debajo la aplicación: <script scr="funciones.js">, y debajo <script scr"main.js"> en HTML

- No se como agregar una clase y a esa clase un objeto siendo el proyecto una calculadora
Pedí ayuda al tutor Giuliano. Me ayudo aportando la idea de crear la calculadora en una clase directamente

-

--------------------------------------------------------------------------------------

6. Calculadora "Científica y Stock de Útiles":
*/
while(true){
    opcioningreso = parseInt(prompt("Ingrese:\n1 - Calculadora Científica\n2 - Venta de útiles escolares"));
    while (opcioningreso === 1) {//Envuelve todo el codigo para que siempre se mantenga activo hasta que el usuario decida por opcion terminarlo
        let opt = parseInt(prompt("Ingrese una opción:\n1 - Dividendos\n2 - Suma\n3 - Resta\n4 - Multiplicación\n5 - División\n6 - Potencia\n7 - Raíz\nPresione 0 para volver al Menú Principal."));

        if (isNaN(opt) || opt === "") { //No aceptar 'nan' o ''
            alert("Opción incorrecta. Intente nuevamente!")

        } else if (opt === 1) {//Introducir  '1'  arranca la calculadora de dividendos
            calculadoraVar.dividendos();//toma 1 número y retorna sus dividendos

        } else if (opt === 2) {
            calculadoraVar.suma();//Tomas dos valores y retorna su suma

        } else if (opt === 3) {
            calculadoraVar.resta();//Tomas dos valores y retorna el 1 valor - el 2 valor

        } else if (opt === 4) {
            calculadoraVar.multiplicacion();//Tomas dos valores y retorna su multiplicación

        } else if (opt === 5) {
            calculadoraVar.division();//Tomas dos valores y retorna la división del 1 valor / el 2 valor

        } else if (opt === 6) {
            calculadoraVar.potencia();//Tomas dos valores y retorna el 1 valor como base y el 2 valor como exponente
            
        } else if (opt === 7) {
            calculadoraVar.raizcuadrada();//Tomas un valor y retorna su raíz cuadrada

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

    while(opcioningreso === 2){
        let catalogo = parseInt(prompt("Ingrese una opción para comprar:\n1 - Lápiz\n2 - Birome\n3 - Liquid Paper\n4 - Hojas cuadriculadas\n5 - Hojas rayadas\n6 - Carpeta\n7 - Cartuchera\nPresione 0 para volver al Menú Principal."))
        
        if (isNaN(catalogo) || catalogo === "") { //No aceptar 'nan' o ''
            alert("Opción incorrecta. Intente nuevamente!");
        }else if (catalogo === 1){//Lapices
            Lapiz.venta();
        }else if (catalogo === 2){//Biromes
            Birome.venta();
        }else if (catalogo === 3){//LiquidPaper
            Liquidpaper.venta();
        }else if (catalogo === 4){//Hojas Cuadriculadas
            Hojascuadriculadas.venta();
        }else if (catalogo === 5){//Hojas Rayadas
            Hojasrayadas.venta();
        }else if (catalogo === 6){//Carpetas
            Carpeta.venta();
        }else if (catalogo === 7){//Cartucheras
            Cartuchera.venta();
        }else if (catalogo === -1){
            alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
            break;
        }else if (catalogo === 0){
            alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
            break;
        }else {//Solo si no coloca opciones correctas
            alert("Opción incorrecta. Intente nuevamente!");
        };
    
    };
};





























