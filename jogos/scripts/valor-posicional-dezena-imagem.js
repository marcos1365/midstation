var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

var estrelas=window.document.getElementById('estrelas')
var divDezena= window.document.getElementById('conteiner-dezena')
var divUnidade= window.document.getElementById('conteiner-unidade')
var resposta=window.document.getElementById('res')
var verif = window.document.getElementById('verif')
var resultado= window.document.getElementById('resultado')
var respostaCerta= window.document.getElementById('respostaCerta')
var dezResposta=0, uniResposta=0, sorteado, acertos=0, erros=0, selecionado
resposta.style.textAlign='right'
resposta.style.fontSize='20px'
//Eventos
verif.addEventListener('click',verificar)
resposta.addEventListener('keydown',e=>{if(e.code=='Enter'){verificar()}}) 

function iniciar(){
    exibirMaterialDourado()
    exibirEstrelas()
    exibirErrosAcertos()
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
function verificar(){ 
    if(resposta.value.length==0){ 
        resposta.focus
    }else
    if(resposta.value==sorteado){
        acertou()
    }else{
        errou()
    }
}
function acertou(){
    acertos=acertos+1
    verif.setAttribute('disabled',true)
    resposta.setAttribute('disabled',true)
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
    verif.setAttribute('disabled',true)
    resposta.setAttribute('disabled',true)
    resultado.innerHTML=`ERROU!`
    respostaCerta.innerHTML=sorteado
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
    limparDezena()
    limparUnidade()
    resposta.value=''
    resultado.innerHTML='&nbsp'
    respostaCerta.innerHTML='&nbsp'
    resultado.style.background='rgb(179, 122, 104)'
    respostaCerta.style.background='rgb(179, 122, 104)'
    window.document.getElementById('verif').disabled=false
    window.document.getElementById('res').disabled=false
    exibirMaterialDourado()
    
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
function limparUnidade(){
    divUnidade.innerHTML=''
    uniResposta=0
}
function limparDezena(){
    divDezena.innerHTML=''
    dezResposta=0
}
function exibirMaterialDourado(){
    sorteado=String(Number.parseInt(Math.random()*100)) 
    if(sorteado.length>1){
        var dezena= Number.parseInt(sorteado.substr(0,1)) 
        var unidade= Number.parseInt(sorteado.substr(1,1))    
    }else{
        var dezena= 0 
        var unidade= Number.parseInt(sorteado.substr(0,1))
    }

    if(Number.parseInt(sorteado)>9){ 
        
        for(var x=0;x<dezena;x++){  
            adicionarDezena()
        }
        for(var x=0;x<unidade;x++){  
            adicionarUnidade()
        }
    }else{
        
        for(var x=0;x<unidade;x++){  
            adicionarUnidade()
        }
    }
    resposta.focus()
} 