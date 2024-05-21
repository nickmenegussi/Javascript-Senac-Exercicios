// 6
let idade_user = Number(prompt("Digite a sua idade"))

if (idade_user >= 18){
    console.log("É obrigatorio voce votar")
} else if (idade_user >= 16) {
    console.log("Voto opcional")
} else {
    console.log("Não é obrigado voce votar")
}