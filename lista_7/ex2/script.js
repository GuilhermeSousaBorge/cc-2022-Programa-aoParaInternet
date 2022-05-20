

function iniciar(){
    videos.forEach((item,index) => {
        let container = document.getElementById("container")
        let card = document.createElement("div")
        let vid = document.createElement('video')
        vid.setAttribute("width","320")
        vid.setAttribute("heigth","240")
        let source = document.createElement("source")
        source.setAttribute("src",'www.youtube.com/watch?v='+item.youtubeId)
        source.setAttribute("type","video/mp4")
        let titulo = document.createElement('span')
        let autor = document.createElement('span')
        vid.appendChild(source)
        titulo.appendChild(document.createTextNode(item.title))
        autor.appendChild(document.createTextNode(item.author))
        card.appendChild(vid)
        card.appendChild(titulo)
        card.appendChild(autor)
        container.appendChild(card)
    });
}

window.addEventListener('load',iniciar);