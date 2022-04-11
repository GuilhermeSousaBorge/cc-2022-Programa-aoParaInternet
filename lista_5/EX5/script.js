document.getElementById('btn').addEventListener('click', () => {
    let text = document.getElementById("inpTexto").value
    let cor = document.getElementById("inpCor").value
    document.getElementById("paragraph").innerHTML = text
    document.getElementById("paragraph").style.color = cor  
})