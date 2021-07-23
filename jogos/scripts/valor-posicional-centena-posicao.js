var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

var estrelas=window.document.getElementById('estrelas')

var resposta=window.document.getElementById('res')
var verif = window.document.getElementById('verif')
var resultado= window.document.getElementById('resultado')
var respostaCerta= window.document.getElementById('respostaCerta')
var respostaCorreta, sorteado, acertos=0, erros=0, selecionado
resposta.style.textAlign='right'
resposta.style.fontSize='20px'
//Eventos
verif.addEventListener('click',verificar)
resposta.addEventListener('keydown',e=>{if(e.code=='Enter'){verificar()}}) 

function iniciar(){
    exibirNumero()
    exibirEstrelas()
    exibirErrosAcertos()
}

function verificar(){ 
    if(resposta.value.length==0){ 
        resposta.focus()
    }else
    if(resposta.value==respostaCorreta){
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
    respostaCerta.innerHTML=respostaCorreta
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
    limparSublinhado()
    resposta.value=''
    resultado.innerHTML='&nbsp'
    respostaCerta.innerHTML='&nbsp'
    resultado.style.background='rgb(179, 122, 104)'
    respostaCerta.style.background='rgb(179, 122, 104)'
    window.document.getElementById('verif').disabled=false
    window.document.getElementById('res').disabled=false
    exibirNumero()
    
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
function limparSublinhado(){
    window.document.getElementById('centena').style.textDecoration='none'
    window.document.getElementById('dezena').style.textDecoration='none' 
    window.document.getElementById('unidade').style.textDecoration='none'
}
function exibirNumero(){
    sorteado=String(Number.parseInt(Math.random()*900+100)) 
    var centena= Number.parseInt(sorteado.substr(0,1)) 
    var dezena= Number.parseInt(sorteado.substr(1,1)) 
    var unidade= Number.parseInt(sorteado.substr(2,1))    
    window.document.getElementById('centena').innerHTML=''+centena
    window.document.getElementById('dezena').innerHTML=''+dezena
    window.document.getElementById('unidade').innerHTML=''+unidade
    sublinhado=Number.parseInt(Math.random()*3)
    if(sublinhado==0){
        window.document.getElementById('centena').style.textDecoration='underline'
        respostaCorreta=Number.parseInt(String(centena)+'00')
    }else
    if(sublinhado==1){
        window.document.getElementById('dezena').style.textDecoration='underline' 
        respostaCorreta=Number.parseInt(String(dezena)+'0')
    }else
    if(sublinhado==2){
        window.document.getElementById('unidade').style.textDecoration='underline'
        respostaCorreta=unidade  
    }
    
    resposta.focus()    
} 