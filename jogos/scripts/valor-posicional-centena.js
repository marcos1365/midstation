var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

var estrelas=window.document.getElementById('estrelas')
var divCentena= window.document.getElementById('conteiner-centena')
var divDezena= window.document.getElementById('conteiner-dezena')
var divUnidade= window.document.getElementById('conteiner-unidade')

var centena = window.document.getElementById('centena')
var dezena = window.document.getElementById('dezena')
var unidade = window.document.getElementById('unidade')

var verif = window.document.getElementById('verif')
var resultado= window.document.getElementById('resultado')
var respostaCerta= window.document.getElementById('respostaCerta')
var cenResposta=0,dezResposta=0, uniResposta=0, sorteado, acertos=0, erros=0, selecionado

//Eventos
verif.addEventListener('click',verificar) 
divCentena.addEventListener('dragover',e=>{e.preventDefault()})
divCentena.addEventListener('dragleave', e=>{e.preventDefault()})
divCentena.addEventListener('drop', e=>{ adicionarCentena()})
divCentena.addEventListener('touchstart',adicionarCentenaTouch)

divDezena.addEventListener('dragover',e=>{e.preventDefault()})
divDezena.addEventListener('dragleave', e=>{e.preventDefault()})
divDezena.addEventListener('drop', e=>{ adicionarDezena()})
divDezena.addEventListener('touchstart',adicionarDezenaTouch)

divUnidade.addEventListener('dragover',e=>{e.preventDefault()})
divUnidade.addEventListener('dragleave', e=>{e.preventDefault()})
divUnidade.addEventListener('drop', e=>{adicionarUnidade()})
divUnidade.addEventListener('touchstart',adicionarUnidadeTouch)

window.document.getElementById('centena').addEventListener('touchstart',selecionarCentena)
window.document.getElementById('dezena').addEventListener('touchstart',selecionarDezena)
window.document.getElementById('unidade').addEventListener('touchstart',selecionarUnidade)

function iniciar(){
    sortearNumeros()
    exibirEstrelas()
    exibirErrosAcertos()
}
function adicionarCentena(){ 
    if(cenResposta<900){
        var imgCentena=window.document.createElement('img')
        imgCentena.src='imagens/centena.png'
        imgCentena.className='img-centena'
        imgCentena.setAttribute('draggable','false')
        divCentena.appendChild(imgCentena)
        cenResposta+=100
    }
}
function adicionarDezena(){ 
    if(dezResposta<90){
        var imgDezena=window.document.createElement('img')
        imgDezena.src='imagens/dezena.png'
        imgDezena.className='img-dezena'
        imgDezena.setAttribute('draggable','false')
        divDezena.appendChild(imgDezena)
        dezResposta+=10
    }
}
function adicionarUnidade(){
    if(uniResposta<9){
        var imgUnidade=window.document.createElement('img')
        imgUnidade.src='imagens/unidade.png'
        imgUnidade.className='img-unidade'
        imgUnidade.setAttribute('draggable','false')
        divUnidade.appendChild(imgUnidade)
        uniResposta++  
    }
}
function adicionarCentenaTouch(){ 
    if(cenResposta<900 && selecionado=='c'){
        var imgCentena=window.document.createElement('img')
        imgCentena.src='imagens/centena.png'
        imgCentena.className='img-centena'
        imgCentena.setAttribute('draggable','false')
        divCentena.appendChild(imgCentena)
        cenResposta+=100
    }
}
function adicionarDezenaTouch(){ 
    if(dezResposta<90 && selecionado=='d'){
        var imgDezena=window.document.createElement('img')
        imgDezena.src='imagens/dezena.png'
        imgDezena.className='img-dezena'
        imgDezena.setAttribute('draggable','false')
        divDezena.appendChild(imgDezena)
        dezResposta+=10
    }
}
function adicionarUnidadeTouch(){
    if(uniResposta<9 && selecionado=='u'){
        var imgUnidade=window.document.createElement('img')
        imgUnidade.src='imagens/unidade.png'
        imgUnidade.className='img-unidade'
        imgUnidade.setAttribute('draggable','false')
        divUnidade.appendChild(imgUnidade)
        uniResposta++  
    }
}
function verificar(){
    if((cenResposta+dezResposta+uniResposta)==sorteado){
        acertou()
    }else{
        errou()
    }
}
function acertou(){
    acertos=acertos+1
    resultado.innerHTML='ACERTOU!'
    resultado.style.background='green'
    respostaCerta.style.background='green'
    exibirEstrelas()
    exibirErrosAcertos()
    window.setTimeout(limparCampos,2000)
    
}
function errou(){
    erros+=1
    acertos-=1
    resultado.innerHTML=`ERROU!`
    resultado.style.background='red'
    respostaCerta.style.background='red'
    if(acertos<0){
        acertos=0
    }
    exibirEstrelas()
    exibirErrosAcertos()

    window.setTimeout(limparCampos,2000)
}
function limparCampos(){
    limparCentena()
    limparDezena()
    limparUnidade()
    resultado.innerHTML='&nbsp'
    respostaCerta.innerHTML='&nbsp'
    resultado.style.background='rgb(179, 122, 104)'
    respostaCerta.style.background='rgb(179, 122, 104)'
    sortearNumeros()
    desselecionar()
    
    if(acertos==10){
        bgmodal.style.display='block'
        bgmodal.focus()
        titulo.innerHTML+=` ${Number.parseInt((acertos*10)/(erros+acertos))}`
        titulo.style.textAlign='center'
    }
}
function exibirErrosAcertos(){
    var nErros=window.document.getElementById('erros')
    var nAcertos=window.document.getElementById('acertos')
    nErros.innerHTML=`ERROS: ${erros}`
    nAcertos.innerHTML=`ACERTOS: ${acertos}` 
}
function exibirEstrelas(){ 
    if(acertos==0){
        estrelas.innerHTML='&nbsp'
    }else
    if(acertos==1){
        estrelas.innerHTML= '&#9734;'
    }else
    if(acertos==2){
        estrelas.innerHTML='&#9734; &#9734;'
    }else
    if(acertos==3){
        estrelas.innerHTML='&#9734; &#9734; &#9734;'
    }else
    if(acertos==4){
        estrelas.innerHTML='&#9734; &#9734; &#9734; &#9734;'
    }else
    if(acertos==5){
        estrelas.innerHTML='&#9734; &#9734; &#9734; &#9734; &#9734;'
    }else
    if(acertos==6){
        estrelas.innerHTML='&#9734; &#9734; &#9734; &#9734; &#9734; &#9734;'
    }else
    if(acertos==7){
        estrelas.innerHTML='&#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;'
    }else
    if(acertos==8){
        estrelas.innerHTML='&#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;'
    }else
    if(acertos==9){
        estrelas.innerHTML='&#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;'
    }else
    if(acertos==10){
        estrelas.innerHTML='&#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734; &#9734;'
    }
}
function sortearNumeros(){
    sorteado=String(Number.parseInt(Math.random()*900+100))
    window.document.getElementById('numero').innerHTML=sorteado
}
function limparCentena(){
    divCentena.innerHTML=''
    cenResposta=0
}
function limparDezena(){
    divDezena.innerHTML=''
    dezResposta=0
}
function limparUnidade(){
    divUnidade.innerHTML=''
    uniResposta=0
}
function selecionarCentena(){
    desselecionar()
    selecionado='c'
    window.document.getElementById('centena').style.border='solid'
    window.document.getElementById('centena').style.backgroundColor='rgba(54,54,54,0.5)'
}
function selecionarDezena(){
    desselecionar()
    selecionado='d'
    window.document.getElementById('dezena').style.border='solid'
    window.document.getElementById('dezena').style.backgroundColor='rgba(54,54,54,0.5)'
}
function selecionarUnidade(){
    desselecionar()
    selecionado='u'
    window.document.getElementById('unidade').style.border='solid black'
    window.document.getElementById('unidade').style.backgroundColor='rgba(54,54,54,0.5)'
}
function desselecionar(){
    selecionado='nulo'
    window.document.getElementById('centena').style.border='solid rgb(179, 122, 104)'
    window.document.getElementById('centena').style.backgroundColor='rgb(179, 122, 104)'
    window.document.getElementById('dezena').style.border='solid rgb(179, 122, 104)'
    window.document.getElementById('dezena').style.backgroundColor='rgb(179, 122, 104)'
    window.document.getElementById('unidade').style.border='solid rgb(179, 122, 104)'
    window.document.getElementById('unidade').style.backgroundColor='rgb(179, 122, 104)'

}