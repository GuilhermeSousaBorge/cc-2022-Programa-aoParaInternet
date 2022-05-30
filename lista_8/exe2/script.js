document.getElementById("send").addEventListener("click", ()=>{
    let text = document.getElementById("search").value
    fetch("https://reef-fishes.herokuapp.com/api/" + text)
        .then(response => response.json())
        .then(data =>{
            document.getElementById("cards").innerHTML = ""
            data.fish.forEach((item, index) => {
                let nome = item.Name
                let img = item.Img
                var price = item.Price_category
                if (price == "low") {
                    var newPrice = "$"
                }else if(price == "medium"){
                    var newPrice = "$$"
                }else if(price == "high"){
                    var newPrice = "$$$"
                }else if(price == "very high"){
                    var newPrice = "$$$$"
                }
                let card = `
                    <div>
                        <p>Nome = ${nome}</p>
                        <img src="${img}" alt="" srcset="">
                        <p>Preço = ${newPrice}</p>
                    </div>
                `
                document.getElementById("cards").innerHTML += card
            });
            
            
        })
})