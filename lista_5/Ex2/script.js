document.getElementById('trocaParagrafo').addEventListener('click', () => {
    let aux = document.getElementById('conteudo1').innerHTML
    document.getElementById('conteudo1').innerHTML = document.getElementById('conteudo2').innerHTML
    document.getElementById('conteudo2').innerHTML = aux
})