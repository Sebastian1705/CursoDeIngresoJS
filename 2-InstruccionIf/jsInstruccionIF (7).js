function Mostrar()
{
    var edad = (document.getElementById("edad").value);
    var estado_civil = (document.getElementById("estadoCivil").value);
    if (edad < 18 && estado_civil != "Soltero")
        alert ("Es muy pequeño para no ser soltero.")
}