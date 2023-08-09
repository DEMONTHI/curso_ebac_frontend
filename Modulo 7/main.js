function maior(){
var numero1 = parseFloat(document.getElementById("numeroA").value);
var numero2 = parseFloat(document.getElementById("numeroB").value);

if (numero2 > numero1) {
   alert(numero2 + " é maior que " + numero1)
} else {
   alert("O numero contido em B tem que ser maior que em A")
}
}