function maior(){
var numero1 = parseFloat(document.getElementById("numeroA").value);
var numero2 = parseFloat(document.getElementById("numeroB").value);
if (numero1 > numero2)
alert(numero1 + " é maior que " + numero2);
else
if(numero2 > numero1)
   alert(numero2 + " é maior que " + numero1);
else
   alert(numero1 + " é igual a " + numero2);
}