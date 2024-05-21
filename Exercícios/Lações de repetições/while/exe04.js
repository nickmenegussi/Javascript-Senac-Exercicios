// 4 
let menu = Number(prompt("------ Menu do Jogo ------\n[ 0 ] Imprima Oi\n[ 1 ] Imprima Eu amo minha vida\n"))


while (menu < 1 || menu > 0 || isNaN(menu)){

    switch (menu) {
        case 0:
            alert("Voce digitou Oi!")
            break
        case 1:
            alert("Voce digitou Eu amo minha vida")
            break
        default:
            alert(`Voce digitou a opção ${menu}. Entretanto, não temos ela em nosso menu, digite novamente, `)
            break

    }

    if (menu === 1 || menu === 0){
        break
    }else {
        menu = Number(prompt("------ Menu do Jogo ------\n[ 1 ] Imprima Oi\n[ 2 ] Imprima Eu amo minha vida\n"))

    }

    
}
