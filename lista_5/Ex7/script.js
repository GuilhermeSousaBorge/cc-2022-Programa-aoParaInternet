let nomes = ["Ana","bruna","jorge","enzo"]
let numeros = [15,98,35,78]

document.getElementById('addLinha').addEventListener('click', () => {
    let indexNomes = Math.floor(Math.random() * nomes.length)
    let indexNumeros = Math.floor(Math.random() * numeros.length)
    let tabela = document.getElementById("tabela")
    let linha = document.createElement("tr")
    linha.setAttribute("class","line")
    let dado = document.createElement("td")
    let dado2 = document.createElement("td")
    dado.appendChild(document.createTextNode(nomes[indexNomes]))
    linha.appendChild(dado)
    dado2.appendChild(document.createTextNode(numeros[indexNumeros]))
    linha.appendChild(dado2)
    tabela.appendChild(linha)
    console.log(tabela)
    let lineTable = document.getElementsByClassName("line");
    let value = lineTable.length
    for (let line of lineTable) {
        if (value % 2 === 0) {
            line.style.backgroundColor = "white";
        } else {
            line.style.backgroundColor = "gray";
        }
        value++;
    }
})

document.getElementById('removeLinha').addEventListener('click', () => {
    let tabela = document.getElementById("tabela")
    console.log(tabela.lastChild)
    tabela.removeChild(tabela.lastChild)
})