let numeros = 1
let soma = 0
let ListaOfNumbers = []  

while(numeros > 0){
    let usuario_num = Number(prompt(`Digite o seu  ou [ 0 ] para sair: `))

 if (isNaN(usuario_num)){
        alert("Voce digitou um número errado. Tente Novamente.")
        continue  //vai voltar para o inicio do loop
    } else {
        ListaOfNumbers.push(usuario_num)
        soma += usuario_num
    }

    if (usuario_num === 0){
        ListaOfNumbers.pop()
        numeros = 0
        i = 0
        let media = soma / ListaOfNumbers.length

        alert(`Voce digitou todos esses números: ${ListaOfNumbers.join(" ")} `)
        alert(`A média desses números foi: ${media}`)
        
        break 
    } 
    numeros++ 
}