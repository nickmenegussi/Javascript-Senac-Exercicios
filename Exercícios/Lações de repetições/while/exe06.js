let num = 1
let pares = 0
let impar = 0

while (num <= 10){
    let usuario_num = Number(prompt("Digite algum número: "))

    if (usuario_num % 2 === 0){
        pares += 1
    } else {
        impar += 1
    }
    num ++
}
alert(`Voce digitou 10 números. Desses 10 só ${pares} são pares e ${impar} são impares`)
