let count = 0

document.getElementById("setaDireita").addEventListener("click",()=>{
    count++
    if(count !=0){
        fetch('https://pokeapi.co/api/v2/pokemon/' + count)
                    .then(response => response.json())
                    .then(data => {
                        //O que vamos fazer com os dados
                        console.log('Success:');
                        document.getElementById("numero").innerHTML = data.id;
                        let nome = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                        document.getElementById("nome").innerHTML = nome;
                        document.getElementById("pic").setAttribute("src", data.sprites.front_default);
                        let tipos = '';
                        data.types.forEach(function(item, index){
                            tipos += item.type.name + ", ";
                        });
                        document.getElementById("tipos").innerHTML = tipos.slice(0, -2);
                    })
                    .catch((error) => {
                        //Verificar os erros
                        console.error('Error:', error);
                    });
    }else{
        count = 1
        alert("[Erro]")
    }
})

document.getElementById("setaEsquerda").addEventListener("click",()=>{
    count--
    if (count < 0){
        count = 1
        alert("[Erro]")
    }
    fetch('https://pokeapi.co/api/v2/pokemon/' + count)
                .then(response => response.json())
                .then(data => {
                    //O que vamos fazer com os dados
                    console.log('Success:');
                    document.getElementById("numero").innerHTML = data.id;
                    let nome = data.name.charAt(0).toUpperCase() + data.name.slice(1);
                    document.getElementById("nome").innerHTML = nome;
                    document.getElementById("pic").setAttribute("src", data.sprites.front_default);
                    let tipos = '';
                    data.types.forEach(function(item, index){
                        tipos += item.type.name + ", ";
                    });
                    document.getElementById("tipos").innerHTML = tipos.slice(0, -2);
                })
                .catch((error) => {
                    //Verificar os erros
                    console.error('Error:', error);
                });
})

