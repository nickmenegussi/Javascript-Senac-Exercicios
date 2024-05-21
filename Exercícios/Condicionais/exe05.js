// 5.
let n1 = Number(prompt(`Digite o seu primeiro numero: `))
let n2 = Number(prompt(`Digite o seu segundo numero: `))
let n3 = Number(prompt(`Digite o seu terceiro numero: `))
let n4 = Number(prompt(`Digite o seu quarto numero: `))
let n5 = Number(prompt(`Digite o seu quinto numero: `))

let maior_n,menor_n = 0


if (n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5){
    maior_n = n1
} else if (n2 > n1 && n2 > n3 && n2 > n4 && n2 >n5){
    maior_n = n2
} else if (n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5){
    maior_n = n3
} else if (n4 > n1 && n4 > n2 && n4 > n3 && n2 >n5){
    maior_n = n4
} else {
    maior_n = n5
}

if (n1 < n2 && n1 < n3 && n1 < n4 && n1 < n5){
    menor_n = n1
} else if (n2 < n1 && n2 < n3 && n2 < n4 && n2 < n5){
    menor_n = n2
} else if (n3 < n1 && n3 < n2 && n3 < n4 && n3 < n5){
    menor_n = n3
} else if (n4 < n1 && n4 < n2 && n4 < n3 && n2 < n5){
    menor_n = n4
} else {
    menor_n = n5
}



console.log(`Os números digitados foram: ${n1} ${n2} ${n3} ${n4} ${n5}`)
console.log(`O maior dessa sequencia foi: ${maior_n}`)
console.log(`O menor dessa sequencia foi: ${menor_n}`)