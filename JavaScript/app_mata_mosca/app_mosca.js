


var largura = 0
var altura = 0
vidas = 1
largura = window.innerWidth
altura = window.innerHeight
var tempo = 15
var moscaMorta = 0


// criando o nivel de dificulada, pegando parametro do index
var nivelJogo = window.location.search
nivelJogo = nivelJogo.replace('?', '')
//mudando o tempo de criação das moscas
if(nivelJogo === 'normal'){
    nivelMosca = 2000
}else if(nivelJogo === 'dificil'){
    nivelMosca = 1500
}else if(nivelJogo === 'hard'){
    nivelMosca = 1000
}

function pegarTamanho() {
    largura = window.innerWidth
    altura = window.innerHeight
}

var crono = setInterval(elemento => { // cronometro
    tempo -= 1
    if(tempo < 0){ // vitoria
        clearInterval(crono)// parando de contar o tempo 
        clearInterval(criamosca) // parando de criar mosca
        window.location.href ='vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
}, 1000)

function criarMosca() {
    //Eliminando elemento
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            moscaMorta -= 4
            window.location.href ='fim_do_jogo.html?' + moscaMorta
        }else{

            document.getElementById('v'+vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    //Determinando posição randomica
    var posicaoX = (Math.floor(Math.random() * largura - 90))
    var posicaoY = (Math.floor(Math.random() * altura - 90))

    posicaoX = (posicaoX < 0 ? 0 : posicaoX)
    posicaoY = (posicaoY < 0 ? 0 : posicaoY) 

    //criando elemento img
    var mosca = document.createElement('img')
    mosca.src = "imagens/mosca.png"
    mosca.className = criarTamanho()+ ' ' + criarLado()
    mosca.style.left = posicaoX + 'px'
    mosca.style.top = posicaoY + 'px'
    mosca.style.position = 'absolute'
    mosca.id = 'mosquito'
    mosca.onclick = (function(){
        this.remove()
    })
    document.body.appendChild(mosca)
    moscaMorta += 1
}

function criarTamanho(){
    var tamanho = Math.floor(Math.random() * 3)
    switch(tamanho){
        case 0:
            return 'mosca'
        case 1:
            return 'mosca1'
        case 2:
            return 'mosca2'
    }
}

function criarLado(){
    var tamanho = Math.floor(Math.random() * 2)
    switch(tamanho){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'

    }
}
