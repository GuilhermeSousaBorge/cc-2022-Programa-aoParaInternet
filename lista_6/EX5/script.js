const mudaLogo = (e) =>{

    let texto = document.createElement("input")
    let botao = document.createElement("button")
    texto.setAttribute("id","textoLogo")
    botao.setAttribute("value","Enviar")
    
    e.removeChild(e.firstChild)
    e.replaceChild(texto,e.firstChild)
    e.appendChild(botao)

    let logo = document.createElement("span")
    let cont = document.createTextNode(document.getElementById("textoLogo").value)
    if (cont != null) {
        logo.appendChild(cont)
        e.replaceChild(logo,e.firstChild)
    }else{

    }
}

const mudaEmpresa = (e) =>{
    console.log("ok")
}

const mudaFoto = (e) =>{
    console.log("ok")
}

const mudaFuncionario = (e) =>{
    console.log("ok")
}

const mudaFuncao = (e) =>{
    console.log("ok")
}