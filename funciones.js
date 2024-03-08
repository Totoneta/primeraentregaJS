//Funciones:

function dividendos() {//sacar los dividendos
    let dividendos = [];                                           
    while (true) {
        let numa = parseInt(prompt('Ingresa un número(Para abandonar introduzca -1): '));

        if (isNaN(numa) || numa === "") { //No aceptar 'nan' o ''
            alert("Opción incorrecta. Intente nuevamente!")

        } else if (numa === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
            opt = -1;
            alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
            break;

        } else {//Los calculos de dividendos
            for(let i = 1; i <= numa; i++ ) {
                if (numa % i === 0){
                    dividendos.push(i)
                };
            };
            alert("Los divisores de " + numa + " son " + dividendos);//Resultado 
            break;
        };
    };
    

};


function suma() {//suma
    while (true) {
        let numa = parseInt(prompt('Suma:\nIngresa el primer número: '));
        let numb = parseInt(prompt('Suma:\nIngresa el segundo número(Para abandonar introduzca -1): '));
        let res = 0;

        if (isNaN(numa) || isNaN(numb) || numa === "" || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
            alert("Opción incorrecta. Intente nuevamente!")

        } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
            opt = -1;
            alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
            break;

        } else {//Suma
            res = numa + numb;
            alert("Suma: " + numa + "+" + numb + " = " + res);//Resultado 
            break;
        };
    };
};


function resta() {//resta
    while (true) {
        let numa = parseInt(prompt('Resta:\nIngresa el primer número: '));
        let numb = parseInt(prompt('Resta:\nIngresa el segundo número(Para abandonar introduzca -1): '));
        let res = 0;

        if (isNaN(numa) || isNaN(numb) || numa === "" || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
            alert("Opción incorrecta. Intente nuevamente!")

        } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
            opt = -1;
            alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
            break;

        } else {//Resta
            res = numa - numb;
            alert("Resta: " + numa + "-" + numb + " = " + res);//Resultado             
            break;
        };
    };
};


function multiplicacion() {//multiplicación
    while (true) {
        let numa = parseInt(prompt('Multiplicación:\nIngresa el primer número: '));
        let numb = parseInt(prompt('Multiplicación:\nIngresa el segundo número(Para abandonar introduzca -1): '));
        let res = 0;

        if (isNaN(numa) || isNaN(numb) || numa === "" || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
            alert("Opción incorrecta. Intente nuevamente!")

        } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
            opt = -1;
            alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
            break;

        } else {//Multiplicación
            res = numa * numb;
            alert("Multiplicación: " + numa + "x" + numb + " = " + res);//Resultado
            break;
        };
    };
};


function division() {//división
    while (true) {
        let numa = parseInt(prompt('División:\nIngresa el primer número: '));
        let numb = parseInt(prompt('División:\nIngresa el segundo número(Para abandonar introduzca -1): '));
        let res = 0;

        if (isNaN(numa) || isNaN(numb) || numa === "" || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
            alert("Opción incorrecta. Intente nuevamente!")

        } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
            opt = -1;
            alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
            break;

        } else {//División
            res = numa / numb;
            alert("División: " + numa + "/" + numb + " = " + res);//Resultado             
            break;
        };
    };
};

function potencia() {//Potencia
    while (true) {
        let numa = parseInt(prompt('Potencia:\nIngresa el primer número(base): '));
        let numb = parseInt(prompt('Potencia:\nIngresa el segundo número(Exponente).Para abandonar introduzca -1: '));
        let res = 0;

        if (isNaN(numa) || isNaN(numb) || numa === "" || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
            alert("Opción incorrecta. Intente nuevamente!")

        } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
            opt = -1;
            alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
            break;

        } else {//Potencia
            res = Math.pow(numa, numb);//Utilice una función ya existente
            alert("Potencia: " + numa + " elevado a la potencia de " + numb + " = " + res);//Resultado             
            break;
        };
    };
};

function raizcuadrada() {//Raíz cuadrada
    while (true) {

        let numb = parseInt(prompt('RaízCuadrada:\nIngresa el número para conseguir su raíz cuadrada.\nPara abandonar introduzca -1:\n '));
        let res = 0;

        if (isNaN(numb) || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
            alert("Opción incorrecta. Intente nuevamente!")

        } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
            opt = -1;
            alert("Gracias por visitar nuestra aplicación.\n¡Esperamos verte pronto!");
            break;

        } else {//Raíz cuadrada
            res = Math.sqrt(numb);//Utilice una función ya existente
            alert("RaízCuadrada: La raíz cuadrada de " + numb + " es " + res);//Resultado             
            break;
        };
    };
};




























