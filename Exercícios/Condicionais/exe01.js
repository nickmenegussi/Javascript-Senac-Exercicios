// 1 Peça o primeiro nome do usuário no prompt e guarde em uma variável
// 2. Peça o segundo nome do usuário no prompt e guarde em uma variável
// 3. Peça a idade do usuário no prompt e guarde em uma variável
// 4. Pergunte ao usuário se ele é estudante e guarde em uma variável
// Imprima o seu nome, sobrenome, idade e status de estudante no console


let NomePerson = prompt("Qual é o seu nome? ")
 
let SegundoNome = prompt("Qual é o segundo nome? ")
 
let ageofperson = Number(prompt("Qual é a sua idade? "))

while (true){
    if (ageofperson < 0 && isNaN(ageofperson) ){
        ageofperson = Number(prompt("Qual é a sua idade? "))
    } else {
        break
    }
}

let IsStudent = confirm("Voce é estudande? ")
 
console.log(`Seu nome é ${NomePerson} ${SegundoNome}, sua idade é ${AgeOfPerson} e voce é estudando ${IsStudent}`)