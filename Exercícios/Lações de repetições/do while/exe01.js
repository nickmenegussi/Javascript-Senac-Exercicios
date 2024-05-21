// 1.
 do {
    let nome_usuario = prompt("Digite o seu nome de usuario: ")
    let senha_usuario = prompt("Digite a sua senha: ")
  
    while (nome_usuario === senha_usuario){
        alert("Sua senha esta igual com o seu usario, modifique-o")
        nome_usuario = prompt("Digite o seu nome de usuario: ")
        senha_usuario = prompt("Digite a sua senha: ")
     }
    
 } while(nome_usuario === senha_usuario)
