function switch_case(numero) {
    switch (numero) {
        case 1:
            alert("Não é um dia util é um final de semana")
            break;
        case 2:
            alert("É um dia util")
            break;
        case 3:
            alert("É um dia util")
            break;
        case 4:
            alert("É um dia util")
            break;
        case 5:
            alert("É um dia util")
            break;
        case 6:
            alert("É um dia util")
            break;
        case 7:
            alert("Não é um dia util")
            break;
        default:
            alert("Voce diigtou um numero errado")
    }
}

let numero = Number(prompt("Digite um número de 1 a 7: "))

switch_case(numero)


while (numero > 7 || numero < 1 || numero !== isNaN(numero)){
    numero = Number(prompt("Digite um número de 1 a 7: "))

    if (numero >= 1 && numero <= 7){
        switch_case(numero)
        break
    } else {
        alert("Voce digitou errado novamente!")
    }

}
 