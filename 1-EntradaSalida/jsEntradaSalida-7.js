/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var numero_1 = parseInt (document.getElementById("numeroUno").value);
    var numero_2 = parseInt (document.getElementById("numeroDos").value);
    var suma = numero_1 + numero_2;
    alert ("El resultado es "+suma+".")
}

function restar()
{
    var numero_1 = parseInt (document.getElementById("numeroUno").value);
    var numero_2 = parseInt (document.getElementById("numeroDos").value);
    var resta = numero_1 - numero_2;
    alert ("El resultado es "+resta+".")
}

function multiplicar()
{ 
    var numero_1 = parseInt (document.getElementById("numeroUno").value);
    var numero_2 = parseInt (document.getElementById("numeroDos").value);
    var multiplicar = numero_1 * numero_2;
    alert ("El resultado es "+multiplicar+".")
}

function dividir()
{
    var numero_1 = parseInt (document.getElementById("numeroUno").value);
    var numero_2 = parseInt (document.getElementById("numeroDos").value);
    var dividir = numero_1 / numero_2;
    alert ("El resultado es "+dividir+".")
}

