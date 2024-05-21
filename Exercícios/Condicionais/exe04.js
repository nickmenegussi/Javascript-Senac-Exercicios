// 4.
let num1 = Number(prompt("Digite o primeiro valor: "))
let num2 = Number(prompt("Digite o seu segundo numero: "))
 
let operacao = prompt("Qual operação voce deseja realizar? ")
 
 
if (operacao === "-"){
    resultado = num1 - num2
    console.log(`O resultado foi: ${resultado}`)
} else if (operacao === "+"){
    resultado = num1 + num2
    console.log(`O resultado foi: ${resultado}`)
    console.log(resultado)
} else if (operacao === "/"){
    resultado = num1 / num2
    console.log(`O resultado foi: ${resultado}`)
} else if (operacao === "*"){
    resultado = num1 * num2
    console.log(`O resultado foi: ${resultado}`)
}
 
