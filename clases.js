class Calculadora{
    constructor(bienvenida){
        this.bienvenida = bienvenida;
    };

    dividendos() {//sacar los dividendos
        alert(calculadoraVar.bienvenida);
        let dividendos = [];                                           
        while (true) {
            let numa = parseInt(prompt('Ingresa un número para calcular sus dividendos:\nPara volver al Menú Principal escriba -1 y presione Aceptar. '));
    
            if (isNaN(numa) || numa === "") { //No aceptar 'nan' o ''
                alert("Opción incorrecta. Intente nuevamente!")
    
            } else if (numa === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
                opt = -1;
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
    
    suma() {//suma
        while (true) {
            alert(calculadoraVar.bienvenida);
            let numa = parseInt(prompt('Suma:\nIngresa el primer número: '));
            let numb = parseInt(prompt('Suma:\nIngresa el segundo número\nPara volver al Menú Principal escriba -1 y presione Aceptar. '));
            let res = 0;
    
            if (isNaN(numa) || isNaN(numb) || numa === "" || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
                alert("Opción incorrecta. Intente nuevamente!")
    
            } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
                opt = -1;
                break;
    
            } else {//Suma
                res = numa + numb;
                alert("Suma: " + numa + "+" + numb + " = " + res);//Resultado 
                break;
            };
        };
    };
        
    resta() {//resta
        while (true) {
            alert(calculadoraVar.bienvenida);
            let numa = parseInt(prompt('Resta:\nIngresa el primer número: '));
            let numb = parseInt(prompt('Resta:\nIngresa el segundo número\nPara volver al Menú Principal escriba -1 y presione Aceptar. '));
            let res = 0;
    
            if (isNaN(numa) || isNaN(numb) || numa === "" || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
                alert("Opción incorrecta. Intente nuevamente!")
    
            } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
                opt = -1;
                break;
    
            } else {//Resta
                res = numa - numb;
                alert("Resta: " + numa + "-" + numb + " = " + res);//Resultado             
                break;
            };
        };
    };
        
    multiplicacion() {//multiplicación
        while (true) {
            alert(calculadoraVar.bienvenida);
            let numa = parseInt(prompt('Multiplicación:\nIngresa el primer número: '));
            let numb = parseInt(prompt('Multiplicación:\nIngresa el segundo número\nPara volver al Menú Principal escriba -1 y presione Aceptar. '));
            let res = 0;
    
            if (isNaN(numa) || isNaN(numb) || numa === "" || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
                alert("Opción incorrecta. Intente nuevamente!")
    
            } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
                opt = -1;
                break;
    
            } else {//Multiplicación
                res = numa * numb;
                alert("Multiplicación: " + numa + "x" + numb + " = " + res);//Resultado
                break;
            };
        };
    };    
    
    division() {//división
        while (true) {
            alert(calculadoraVar.bienvenida);
            let numa = parseInt(prompt('División:\nIngresa el primer número: '));
            let numb = parseInt(prompt('División:\nIngresa el segundo número\nPara volver al Menú Principal escriba -1 y presione Aceptar. '));
            let res = 0;
    
            if (isNaN(numa) || isNaN(numb) || numa === "" || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
                alert("Opción incorrecta. Intente nuevamente!")
    
            } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
                opt = -1;
                break;
    
            } else {//División
                res = numa / numb;
                alert("División: " + numa + "/" + numb + " = " + res);//Resultado             
                break;
            };
        };
    };
    
    potencia() {//Potencia
        while (true) {
            alert(calculadoraVar.bienvenida);
            let numa = parseInt(prompt('Potencia:\nIngresa el primer número(base): '));
            let numb = parseInt(prompt('Potencia:\nIngresa el segundo número(Exponente)\nPara volver al Menú Principal escriba -1 y presione Aceptar. '));
            let res = 0;
    
            if (isNaN(numa) || isNaN(numb) || numa === "" || numb === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
                alert("Opción incorrecta. Intente nuevamente!")
    
            } else if (numb === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
                opt = -1;
                break;
    
            } else {//Potencia
                res = Math.pow(numa, numb);//Utilice una función ya existente
                alert("Potencia: " + numa + " elevado a la potencia de " + numb + " = " + res);//Resultado             
                break;
            };
        };
    };
    
    raizcuadrada() {//Raíz cuadrada
        while (true) {
            alert(calculadoraVar.bienvenida);
            let numa = parseInt(prompt('RaízCuadrada:\nIngresa el número para conseguir su raíz cuadrada.\nPara volver al Menú Principal escriba -1 y presione Aceptar. '));
            let res = 0;
    
            if (isNaN(numa) || numa === "") { //No aceptar 'nan' o '' en ambos números introducidos por el user
                alert("Opción incorrecta. Intente nuevamente!")
    
            } else if (numa === -1) {//Salida dentro del bucle, para que no sea infinito para el usuario
                opt = -1;
                break;
    
            } else {//Raíz cuadrada
                res = Math.sqrt(numa);//Utilice una función ya existente
                alert("RaízCuadrada: La raíz cuadrada de " + numa + " es " + res);//Resultado             
                break;
            };
        };
    };   
};

class Utiles{//Útiles escolares
    constructor(nombreIntro, colorIntro, marcaIntro, cantidadIntro, precioIntro,){
        this.nombre = nombreIntro;
        this.color = colorIntro;
        this.marca = marcaIntro;
        this.cantidad =cantidadIntro;
        this.precio = precioIntro;
    };

    venta(){//Si alguien quiere comprar, resta del inventario
        while(true){
            let cant = parseInt(prompt("Qué cantidad de " + this.nombre + " deseas llevar?\nEl precio por unidad es de $" + this.precio + "\nPara volver al Menú Principal escriba -1 y presione Aceptar."));
            let preciofinal = 0;
            if (isNaN(cant) || cant === "") { //No aceptar 'nan' o ''
                alert("Opción incorrecta. Intente nuevamente!");
            }else if (cant === -1){
                opt = -1;
                break;
            }else if (cant>this.cantidad){
                alert("No contamos con esa cantidad. Actualmente tenemos " + this.cantidad + " " + this.nombre + ".");
            }else{
                this.cantidad -= cant; 
                preciofinal += this.precio * cant;
                if(this.cantidad<1){
                    alert("Aquí tiene " + cant + " de " + this.nombre + " con un precio total de $" + preciofinal + ", no quedaron más " + this.nombre);
                    break;
                }else{
                    alert("Aquí tiene " + cant + " de " + this.nombre + "\nCon un precio total de: $" + preciofinal + "\nSi necesitas más, aún nos restan " + this.cantidad + " de " + this.nombre);
                    break;
                };
            };
        };
    };

};


