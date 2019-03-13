function Mostrar()
{
    var edad = (document.getElementById("edad").value);
    if (edad < 12 || edad > 18)
        alert ("No es adolsecente.");
}