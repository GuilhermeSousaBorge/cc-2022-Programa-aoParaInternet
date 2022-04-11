document.getElementById('btnAtivar').addEventListener('click', () => {
    let item = document.getElementById("tabela").getElementsByTagName("tr")
    for (let index = 1; index < item.length; index+=2) {
        item[index].style.backgroundColor = "gray";    
    }
})

document.getElementById('btnDesativar').addEventListener('click', () => {
    let item = document.getElementById("tabela").getElementsByTagName("tr")
    for (let index = 1; index < item.length; index+=2) {
        item[index].style.backgroundColor = "white";    
    }
})