document.getElementById("addItem").addEventListener("click", () =>{
    let cont = document.getElementById("text").value
    if (cont === "") {
        alert("Campo nao pode ser vazio")
    }else{
        let text = `
        <tr class="line">
            <td>
                <i class="fa fa-circle-thin" aria-hidden="true" id="feito" onClick="marcarFeito(this)"></i>
                <span>${cont}</span>
                <i class="fa-solid fa-trash-can" id="excluir" onClick="remover(this)"></i>
            </td>
        </tr> `
        document.getElementById("tabela").innerHTML += text
        document.getElementById("text").value = ""
    }
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
const marcarFeito = (e)=>{
    e.nextElementSibling.style.textDecoration = "line-through"
    e.setAttribute("class","fa fa-check-circle")
}

const remover = (e) =>{
    e.parentElement.remove()
}
