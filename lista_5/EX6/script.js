document.getElementById("btnFonte").addEventListener('click', () => {
    let cor = document.getElementById("corFonte").value
    document.getElementById("paragrafo1").style.color = cor
    document.getElementById("paragrafo2").style.color = cor
    document.getElementById("paragrafo3").style.color = cor
})

document.getElementById("btnFundo").addEventListener('click', () => {
    let cor = document.getElementById("corFundo").value
    document.getElementById("paragrafo1").style.backgroundColor = cor
    document.getElementById("paragrafo2").style.backgroundColor = cor
    document.getElementById("paragrafo3").style.backgroundColor = cor
})