let mes = Number(prompt("Digite o número de um mes entre 1 e 12: "))
 
function validação_mes(mes_usuario){
    switch (mes_usuario){
        case 1:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Janeiro`)
            break
        case 2:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Fevereiro`)
            break
        case 3:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Março`)
            break
        case 4:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Abril`)
            break
        case 5:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Maio`)
            break
        case 6:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Junho`)
            break
        case 7:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Julho`)
            break
        case 8:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Agosto`)
            break
        case 9:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Setembro`)
            break
        case 10:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Outubro`)
            break
        case 11:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Novembro`)
            break
        case 12:
            alert(`Voce digitou o número ${mes_usuario} que é respectivo ao mes de Dezembro`)
            break
        default:
            alert("Voce digitou errado!")
    }
}
 
while (true){
    if (mes >= 1 && mes <= 12){
        validação_mes(mes)
        break
    } else{
        alert("Voce digitou uma opção inválida! digite novamente!")
        mes = Number(prompt("Digite o número de um mes entre 1 e 12: "))
    }
}