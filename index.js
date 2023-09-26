// Ejercicio 1. 
let arrayVacio = []; 
// Ejercicio 2. 
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Ejercicio 3. 
let arrayNumerosPares = [0, 2, 4, 6, 8];
// Ejercicio 4. 
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];
// Ejercicio 5. 
function suma (num1, num2) {
    return num1+num2; 
}
// Ejercicio 6. 
function potenciacion (num1, num2) {
    return Math.pow(num1, num2);
}
// Ejercicio 7. 
function separarPalabras (string) {
    return string.split(" ");
}
// Ejercicio 8. 
function repetirString (string, num) {
    return string.repeat(num);
}
// Ejercicio 9.  
function esPrimo (num) {
    for(let i = 2; i < num; i++) { // (número primo= divisible entre 1 y sí mismo, así que)
        if (num % i == 0) return false;
    } 
    return true; // (true fuera del bucle)
}
// 10.
function ordenarArray (arrnum) {
    return arrnum.sort();
}
// 11. 
function obtenerPares (arrnum) {
    let elementosPares = [];
    for (let i = 0; i < arrnum.length; i++) {
        let element = arrnum[i]; // element accede al valor del índice de arrnum
        if (element % 2 == 0) {
            elementosPares.push(element); // element es el valor que hay en el índice de esa vuelta 
        }                     // llamada a .push para que se añada al array
    } 
    return elementosPares;
}
// 12. 
function pintarArray (array) {
    let cadena = '';
    for (let i = 0; i < array.length; i++) {
        cadena += array[i].toString();
        if (i < array.length -1) {
            cadena += ', ';
        }
    }  
    return  '[' + cadena +']';
} 
// 13. 
function arrayMapi (array, fun) {
    let result = []; 
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let temp2 = fun(temp); // se necesitan crear variables temporales para ir guardando el valor que devuelve fun a cada vuelta 
        result.push(temp2); // .push para añadir al array 
    }
    return result; 
}
// 14. 
function eliminarDuplicados (array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        let temp = array[i]; 
        if (!result.includes(temp)) { // si result no incluye array[i], se guarda 
            result.push(temp); // se añade aquí al array
        }
    }
    return result; 
}
// 15. 
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
// 16. 
let holaMundo = ['Hola', 'Mundo'];
// 17. 
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']; 
// 18. 
let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];
// 19. 
function multiplicacion (num1, num2) {
    return num1*num2;
}
// 20. 
function division (num1, num2) {
    return num1/num2; 
}
// 21. 
function esPar (num) {
    return num%2 == 0;
}
// 22. 
function resta (num1, num2) {
    return num1-num2; 
}
let arrayFunciones = [suma, resta, multiplicacion];
// 23. 
function ordenarArray2 (arrnum) {
    return arrnum.sort().reverse(); //ordenar e invertir orden
}
// 24. 
function obtenerImpares (arrnum) {
    let elementosImpares = [];
    for (let i = 0; i < arrnum.length; i++) {
        let element = arrnum[i]; // mismo procedimiento para el caso Pares 
        if (element % 2 !== 0) {
            elementosImpares.push(element); 
        }                     
    } 
    return elementosImpares;
}
// 25. 
function sumarArray (arrnum) {
    let suma = 0; 
    for (let i = 0; i < arrnum.length; i++) {
        suma += arrnum[i]; // no es necesario declarar otra variable si solo quiero sumar el valor de i  
    }
    return suma; 
}
// sumarArray([1, 2, 3]); 

// 26. 
function multiplicarArray (arrnum) {
    let multiplicacion = 1; 
    for (let i = 0; i < arrnum.length; i++) {
        multiplicacion *= arrnum[i]; // multiplicar y luego asignar
    }
    return multiplicacion; 
}
// multiplicarArray([2, 3, 4]); 