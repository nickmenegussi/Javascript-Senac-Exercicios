// 9.
let peso = Number(prompt("Me diga qual é o seu peso: "))
let altura = Number(prompt("Me diga qual é a sua altura:  "))

let calcular_imc = peso / (altura) ** 2

if (calcular_imc < 18.5){
    console.log("Voce está abaixo do peso.")
} else if (calcular_imc <= 24.9){
    console.log(`${calcular_imc} peso ideial, parabens!`)
} else if (calcular_imc <= 29.9){
    console.log("Levemente acima do peso")
} else if (calcular_imc <= 34.9) {
    console.log("Obesidade grau I")
} else if (calcular_imc <= 39.9){
    console.log("Obesidade grau II (SEVERA) ")
} else {
    console.log("Obesidade grau III (MORBIDA) ")
}
