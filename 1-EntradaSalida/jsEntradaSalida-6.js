/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numero_1 = parseInt (document.getElementById("numeroUno").value);
    var numero_2 = parseInt (document.getElementById("numeroDos").value);
    var suma = numero_1 + numero_2;
    alert ("La suma es "+suma+".")
}

