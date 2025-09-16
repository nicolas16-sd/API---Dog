'use strict'

async function buscarImagens(){
    const raca = document.getElementById('input').value
    const url = `https://dog.ceo/api/breed/${raca}/images`
    
    const response = await fetch(url)
    const imagens = await response.json()

    const galeria = document.getElementById('galeria')
    galeria.innerHTML = ''

    imagens.message.forEach(urlImagem => {
        const imagem = document.createElement('img')
        imagem.src = urlImagem
        galeria.appendChild(imagem)
    });

}

const buscar = document.getElementById('botao-buscar')
buscar.addEventListener('click', buscarImagens)