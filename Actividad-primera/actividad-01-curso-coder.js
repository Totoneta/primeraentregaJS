/*
INDICE:
1. Bucle for básico
2. Bucle while básico
3. Bucle do while básico
4. Consigna Para T.P.
5. Ejercicio práctico - Calculadora de Dividendos
6. Problemas y soluciones - Calculadora de Dividendos

1. Bucle for básico:
    for(let i = 0;i<=5;i++){
        console.log("For: " + i)
    };


2. Bucle while básico:
    let i = 0;
    while(i<=5){
        console.log("While: " + i)
        i++
    };


3. Bucle do while básico:
    let i = 0;
    do {
        console.log("do-while: " + i)
        i++
    }while(+i < 5);


4. Tomando como base los ejemplos de la estructura for y while,
crear un algoritomo que repita un bloque de instrucciones.
En cada repetición es necesario efectual una operación o comparación
para obtener una salida por alerta o consola 


5. Calculadora de Dividendos:
*/
while(true){//Envuelve todo el codigo para que siempre se mantenga activo hasta que el usuario decida por opcion terminarlo
    let opt =parseInt(prompt("Ingrese una opción:\n0 - Abandonar la aplicación\n1 - Acceder a la aplicación de dividendos"));
    
    if (isNaN(opt) || opt === "") { //No aceptar 'nan' o ''
    alert("Opción incorrecta. Intente nuevamente!")
    
    } else if (opt===1){//Introducir  '1'  arranca la calculadora de dividendos
            
        while(true) {
                let num = parseInt(prompt('Ingresa un número(Para abandonar introduzca -1): '));
                
                if (isNaN(opt) || opt === "") {//no aceptar nan ni ""
                    alert("Opción incorrecta. Intente nuevamente!")
                
                }else if (num === -1){//Segunda salida dentro del bucle, para que no sea infinito para el usuario
                    alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!"); 
                    break;
                
                }else{//Los calculos de dividendos
                    
                    let dividendos = [];                                           
                    for(let i = 1; i <= num; i++ ) {
                        if (num % i === 0){
                            dividendos.push(i)
                        };
                    };
                    alert("Los divisores de " + num + " son " + dividendos);//Resultado                     
                
                }
            };
        
    }else if(opt===0) {//Al introducir '0' termina el bucle principal
        alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!"); 
        break
        
    }else{//Solo si no coloca opciones correctas ('1' o '0')
        alert("Opción incorrecta. Intente nuevamente!")
    };

};



/*
6. Problemas y soluciones - Calculadora de Dividendos

-El bucle principal se rompe antes de llegar a la segunda opción(user coloca '0' para salir / línea actual 71)
*HABÍA UN BREAK MAL UBICADO

-Opción inválida en los if, si presiono enter sín ninguna opción respone con Nan igual(línea actual 43 y 51)
*ERA PARSEINT, NO NUMBER LPM

-No se corta el bucle cuando se coloca -1, en la opcion del 2do bucle while interno y ya coloque un break(línea actual 54)
*NO ENCUENTRO SOLUCION
*/






























