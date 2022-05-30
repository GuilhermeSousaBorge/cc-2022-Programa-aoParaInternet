let getNome
let getEmail
let getMensagem
let dados
let cadastro
let parent = document.getElementById('json')

let enviar = () =>{
    getNome = document.getElementById("inpNome").value
    console.log(getNome)
    getEmail = document.getElementById("inpEmail").value
    getMensagem = document.getElementById("message").value
    dados =  {
        "nome":getNome,
        "email":getEmail,
        "mensagem":getMensagem
    }
    cadastro = JSON.stringify(dados)
    alert(cadastro)
}
