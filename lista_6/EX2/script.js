document.getElementById("btnEnviar").addEventListener("click", () =>{
    let linha = document.createElement("li") 
    let texto = document.createTextNode(document.getElementById("inpTexto").value)
    let lista = document.getElementById("conteudoLista")
    linha.appendChild(texto)
    lista.appendChild(linha)
    document.getElementById("inpTexto").value = ""
})