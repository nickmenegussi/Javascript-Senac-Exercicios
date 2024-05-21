let lista = []
for (let x = 1; x < 3; x++){
    let num = Number(prompt(`Digite o seu ${x} número: `))
    lista.push(num)
    
    while (true){
        if (isNaN(num)){
            lista.pop(num)
            alert("Número inválido digite novamente!")
            num = Number(prompt(`Digite o seu ${x} número: `))
            lista.push(num)
        } else{
            break
        }
    }
    
}
console.log(lista)

 function Menu_matematica(opcao){
     switch (opcao) {
         case 1:
             let multipli = lista[0] * lista[1]
             alert(`A sua escolha foi a multiplicação dos números ${lista[0]} ${lista[1]} e o resultado: ${multipli}`)
             break;
         case 2:
             let divisão = lista[0] / lista[1]
             alert(`A sua escolha foi a divisão dos números ${lista[0]} ${lista[1]} e o resultado: ${divisão}`)
             break
         case 3:
             let adição = lista[0] + lista[1]
             alert(`A sua escolha foi a adição dos números ${lista[0]} ${lista[1]} e o resultado: ${adição}`)
             break
         case 4:
             let Subtração = lista[0] - lista[1]
             alert(`A sua escolha foi a Subtração dos números ${lista[0]} ${lista[1]} e o resultado: ${Subtração}`)
             console.log(Subtração)
             break
         case 5:
             let Potencia = lista[0] ** lista[1]
             alert(`A sua escolha foi a Potencia dos números ${lista[0]} ${lista[1]} e o resultado: ${Potencia}`)
             break
         default:
             alert("Opção fora do nosso menu! Digite novamente")
             break;
     }
 }



 alert(`Seus números foram ${lista[0]} e ${lista[1]}`)

 let menu = Number(prompt("------------- Menu da matemática -------------\n[ 1 ] Multiplicação\n[ 2 ] Divisão\n[ 3 ] Adição\n[ 4 ] Subtração\n[ 5 ] Potencia\nQual é a sua opção?    "))

 while (true){
     if (isNaN(menu) && menu >= 1 && menu <= 5){
         alert("Voce digitou uma opção inválida! digite novamente.")
         menu = Number(prompt("------------- Menu da matemática -------------\n[ 1 ] Multiplicação\n[ 2 ] Divisão\n[ 3 ] Adição\n[ 4 ] Subtração\n[ 5 ] Potencia\nQual é a sua opção?    "))
     } else {
         Menu_matematica(menu)
         break
     }
 }

