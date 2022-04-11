document.getElementById('addLinha').addEventListener('click', () => {
    let tabela = document.getElementById("tabela").innerHTML
    console.log(tabela)
})

document.getElementById('remveLinha').addEventListener('click', () => {
    let tabela = document.getElementById("tabela")
    tabela.removeChild(tabela.ariaRowCount.length)
})