const numero = Math.floor(Math.random() * 100) + 1
console.log(numero)
document.getElementById("btnEnviar").addEventListener("click", () =>{
    let valor = document.getElementById("inpTexto").value
    if(valor === ""){
        alert("Campo nao pode ser vazio");
    }else{
        let linha = document.createElement("li")
        let lista = document.getElementById("conteudoLista")

        if(parseInt(valor) < numero){
            let resposta = document.createTextNode(parseInt(valor) + " esta muito baixo")
            linha.appendChild(resposta)
            lista.appendChild(linha)
        }else if(parseInt(valor) > numero){
            let resposta = document.createTextNode(parseInt(valor) + " esta muito alto")
            linha.appendChild(resposta)
            lista.appendChild(linha)
        }else{
            let resposta = document.createTextNode(parseInt(valor) + " E o numero certo")
            linha.appendChild(resposta)
            lista.appendChild(linha)
            alert("Parabens uHul")
        }
        document.getElementById("inpTexto").value = ""
    }
})