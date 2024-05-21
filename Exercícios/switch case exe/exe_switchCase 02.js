function escolha_turno(turno){
    switch (turno) {
        case 1:
            alert("Bom dia!!")
            break;
        case 2:
            alert("Boa tarde!!")
            break
        case 3:
            alert("Boa noite!!")
            break
        default:
            alert("Voce digitou um número errado, digite novamente.")
            break;
    }
}

let turno = Number(prompt("No nosso menu tem os seguintes turnos:\n[ 1 ] Matutino\n[ 2 ] Vespertino\n[ 3 ] Noturno\n Qual turno voce estuda? "))


while (true){
    if (turno !== 1 && turno !== 2 && turno !== 3){
        alert("Opção inválida! Digite novamente")
        turno = Number(prompt("No nosso menu tem os seguintes turnos:\n[ 1 ] Matutino\n[ 2 ] Vespertino\n[ 3 ] Noturno\n Qual turno voce estuda? "))
    } else {
        escolha_turno(turno)
        break
    }
}
