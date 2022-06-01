var pokemons = []
var poke_selecionados = []
var poke_sorteados = []
let randomNumber;
var poke = 151
let tmp;
var bingo = false
let tempo

const rand_poke = () => Math.floor(Math.random() * poke) + 1;

let geraPoke = ()=>{
    for(let i=1;i<poke;i++){
        pokemons.push(i)
    }
}
geraPoke()

let geraCartela = ()=>{
    for (let i = pokemons.length; i;) {
        randomNumber = Math.random() * i-- | 0;
        tmp = pokemons[randomNumber];
        // troca o número aleatório pelo atual
        pokemons[randomNumber] = pokemons[i];
        // troca o atual pelo aleatório
        pokemons[i] = tmp;
    }
    for (let index = 1; index <= 16; index++) {
        let text = `
                <div id="card" onClick="clicou(this)">
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons[index]}.png">
                </div>
                `
        document.getElementById("cartela").innerHTML += text
    }
}

 let sorteador = ()=>{
    if(poke === 0){
        clearInterval(tempo)
    }
    sorteaPoke = rand_poke()
    while(poke_sorteados.includes(sorteaPoke)=== true){
        sorteaPoke = rand_poke()
    }
    document.getElementById("poke_sorteado").setAttribute("src",`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemons[sorteaPoke]}.png`)
    poke_sorteados.push(sorteaPoke)
    poke--
 }

document.getElementById("bingo").addEventListener("click", ()=>{
    for (let i = 0; i < 9; i++) {
        if (poke_sorteados.indexOf(poke_selecionados[i], 0) === -1) {
            alert("Você nao bingou");
            return -1;
        }
    }
    alert("Voce bingou !!!");
})

let clicou = (e)=>{
    e.style.backgroundColor = "red"
    let id = e.children[0].src
    poke_selecionados.push(id.substring(73,75))
}

document.getElementById("enviar").addEventListener("click",()=>{
    document.getElementById("cartela").innerHTML = ""
    geraCartela()
    tempo = setInterval(sorteador,2000)
})