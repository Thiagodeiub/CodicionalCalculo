
function calculo() {
var preco = formpreco.value
var peso = formpeso.value
var total = preco * peso

document.getElementById("valorPrato").innerHTML = `
 Prato da mesa ficou em ${total}
`



}
btnCalcular.addEventListener('click', calculo)





