// 2. 
let nota = Number(prompt("Digite um nota entre 0 a 10: "))
 
while (nota > 10 || nota < 0 || isNaN(nota)){
    nota = Number(prompt("Digite um nota entre 0 a 10: "))
 
    if (nota >= 0 && nota <= 10){
        break
    }
}
