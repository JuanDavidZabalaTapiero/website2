
function suma() {
    // Variables
    // Capturar dato

    // Operación
    // Mensaje

    // Explicación algoritmo (Mensaje)
    alert("Algoritmo que realiza una suma entre dos valores");

    // Declaración de variables
    let a = 0;
    let b = 0;
    let s = 0;

    // Capturamos los datos
    // prompt (ingresar datos)
     a = parseInt(prompt("Ingrese un número: "));
     b = parseInt(prompt("Ingrese otro número: "));

    //  Realizamos la operación
     s = a+b;

    //  Muestra el resultado de la suma 
    alert("El resultado de la suma es: "+s)
}

function opBasicas() {
    alert("Suma, resta, mult y división de 2 números ingresados");

    let a = 0;
    let b = 0;
    let s = 0;
    let r = 0;
    let m = 0;
    let d = 0;

    a = parseInt(prompt("Ingrese un número: "));
    b = parseInt(prompt("Ingrese otro número: "));

    s = a + b;
    alert("El resultado de la suma es: "+s)

    r = a - b;
    alert("El resultado de la resta es: "+r)

    m = a * b;
    alert("El resultado de la multiplicación es: "+m)

    d = a / b;
    alert("El resultado de la división es: "+d)
}

function cuadradoNumero() {
    // Mensaje (explicación)
    alert("Algoritmo que calcula el cuadrado de un número ingresado")

    // Variable (lugar para guardar un dato o valor)
    let a = 0;

    // Ingresar dato a la variable
    a = parseInt(prompt("Ingrese un número: "));

    // Mensaje con resultado
    alert("El cuadrado del número es: " + (a*a) )
}

function areaTriangulo() {
    // Mensaje
    alert("Algoritmo que calcula el área de un triángulo al ingresar su base y altura")

    // Crear variables
    let b,a,c = 0;

    // Para ingresar valor a las variables
    b = parseInt(prompt("Ingrese la base del triángulo (en m): "));
    a = parseInt(prompt("Ingrese la altura del triángulo (en m): "));

    // Variable con el resultado de una operación
    c = (b * a)/2;

    // Mensaje (print) para mostrar resultado
    alert("El área del triángulo es: " + c + " m2")
}

function conversionMedidas() {
    // Mensaje
    alert("Algoritmo que determina las pulgadas, los kilometros y lo milimetros de un valor dado en metros")

    //Crear variables 
    let m,p,k,ml = 0;

    m = parseInt(prompt("Ingrese el valor a convertir: "));

    // Valor a las variables
    p = m * 39.3701;
    k = m * 0.001;
    ml = m * 1000;

    // Mensaje con resultado
    alert(m + " metros son " + p + " pulgadas");
    alert(m + " metros son " + k + " kilómetros");
    alert(m + " metros son " + ml + " milímetros");
}

function mayorDosNumeros() {
    // Mensaje
    alert("Algoritmo para hallar el mayor entre 2 números ingresados")

    // Crear variables
    let a,b = 0;

    // Ingresar valor a las variables por el usuario (capturar valor y guardarlo)
    a = parseInt(prompt("Ingrese un número: "));
    b = parseInt(prompt("Ingrese otro número: "));

    // Condiciones y mensaje determinados
    if (a > b) {
        alert(a + " es mayor que " + b);
    }
    if (a < b) {
        alert(b + " es mayor que " + a);
    }
    if (a == b) {
        alert("Los números son iguales");
    }
}

function menorTresNumeros() {
    // Mensaje para explicar el propósito del botón
    alert("Algoritmo que halla el número menor entre 3 ingresados");

    // Creación (dar existencia en pc)
    let n1,n2,n3 = 0;

    // Ingresar valor en ese lugar (variable)
    n1 = parseInt(prompt("Ingrese un número: "));
    n2 = parseInt(prompt("Ingrese otro número: "));
    n3 = parseInt(prompt("Ingrese el último número: "));

    // Operaciones
    if ((n1==n2) && (n1 == n3)) {
        alert("Los números ingresados son iguales");
    }
    if ((n1 < n2) && (n1 < n3)) {
        alert(n1 + " es menor que " + n2 + " y " + n3);
    }
    if ((n2 < n1) && (n2 < n3)) {
        alert(n2 + " es menor que " + n1 + " y " + n3);
    }
    if ((n3 < n1) && (n3 < n2)) {
        alert(n3 + " es menor que " + n1 + " y " + n2);
    }
    
}
 function promedioNotas() {
    // Mensaje incial (importante para entender)
    alert("Algoritmo que calcula el promedio de 7 notas (con valor entre 1 y 10) y dice si el estudiante aprobo (mayor o igual a 6.1) o no aprobo (menor que 6.1)")

    // Creo variables y les asigno valor
    let n1,n2,n3,n4,n5,n6,n7,p = 0; 

    n1 = parseInt(prompt("Ingrese la nota 1: "));
    n2 = parseInt(prompt("Ingrese la nota 2: "));
    n3 = parseInt(prompt("Ingrese la nota 3: "));
    n4 = parseInt(prompt("Ingrese la nota 4: "));
    n5 = parseInt(prompt("Ingrese la nota 5: "));
    n6 = parseInt(prompt("Ingrese la nota 6: "));
    n7 = parseInt(prompt("Ingrese la nota 7: "));

    // Variable con promedio
    p = (n1+n2+n3+n4+n5+n6+n7) / 7;

    if (p >=6.1) {
        alert("El estudiante aprobo con un promedio de " + p + " SIUU");
    } else {
        alert("El estudiante no aprobo. Promedio: " + p + " :C")
    }
 }

 function descuentoCompra() {
    // Mensaje
    alert("Algoritmo que calcula el valor de una compra de kilos de manzana, teniendo en cuenta el descuento que se le puede aplicar. ");

    let k,x = 0;

    // Valor del kilo de manzana
    x = 10000;

    // Ingresar valor
    k = parseInt(prompt("Ingrese los número de kilos de manzana comprados: "));

    // Operaciones con if
    if (k <= 2) {
        alert("Su compra no tiene descuento. El valor total es " + (k * x) + " $");
    }
    if ((k >= 3) && (k <=5)) {
        alert("Su compra tiene descuento del 10%. El valor total es " + ((k*x)-((k*x)*0.1)) + " $");
    }
    if ((k >= 6) && (k <=10)) {
        alert("Su compra tiene descuento del 15%. El valor total es " + ((k*x)-((k*x)*0.15)) + " $");
    }
    if (k >= 11) {
        alert("Su compra tiene descuento del 20%. El valor total es " + ((k*x)-((k*x)*0.2)) + " $");
    }
 }

 function salarioSemanal() {
    // Mensaje
    alert("Algoritmo que calcula el dinero que ganó un trabajador, teniendo en cuenta el número de horas trabajadas")

    // Crear variables
    let h,v,hx = 0;

    // Variable estática
    v = 12500;

    // Ingresar valor a la variable (lugar para almacenar un valor o varios)
    h = parseInt(prompt("Ingrese el número de horas trabajadas: "))

    // Operaciones
    if (h <= 40) {
        alert("El trabajador ganó " + (h * v) + " $");
    }
    if (h > 40) {
        hx = h - 40;
        alert("El trabajador ganó " + ((40 * v)+(hx * 18000)) + " $ (contando las horas extras)");
    }
 }
