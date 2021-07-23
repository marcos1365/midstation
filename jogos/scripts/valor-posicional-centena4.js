//elementos e variáveis
const bgmodal=window.document.getElementById('bgmodal')
const titulo=window.document.getElementById('titulo')
const estrelas=window.document.getElementById('estrelas')
const numeroResposta=window.document.getElementById('numero-resposta')
const respostaCentena = window.document.getElementById('resposta-centena')
const respostaDezena = window.document.getElementById('resposta-dezena')
const respostaUnidade = window.document.getElementById('resposta-unidade')
const verif = window.document.getElementById('verif')
const resultado= window.document.getElementById('resultado')
const respostaCerta= window.document.getElementById('respostaCerta')
var sorteado, acertos=0, erros=0
//eventos
verif.addEventListener('click',verificar)
respostaCentena.addEventListener('keydown',e=>{if(e.code=="Enter"){verificar()}})
respostaDezena.addEventListener('keydown',e=>{if(e.code=="Enter"){verificar()}})
respostaUnidade.addEventListener('keydown',e=>{if(e.code=="Enter"){verificar()}})
//funções
function iniciar(){
    sortearNumeros()
    exibirEstrelas()
    exibirErrosAcertos()
}
function verificar(){ 
    let centena=respostaCentena.value*100
    let dezena=respostaDezena.value*10
    let unidade=respostaUnidade.value*1
    let respostaUsuario=unidade+dezena+centena

    if(respostaUsuario==sorteado){
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
    resultado.innerHTML='&nbsp'
    respostaCerta.innerHTML='&nbsp'
    resultado.style.background='rgb(179, 122, 104)'
    respostaCerta.style.background='rgb(179, 122, 104)'
    respostaCentena.value=''
    respostaDezena.value=''
    respostaUnidade.value=''
    respostaCentena.removeAttribute('disabled')
    respostaDezena.removeAttribute('disabled')
    respostaUnidade.removeAttribute('disabled')
    sortearNumeros()
    
    if(acertos==10){
        bgmodal.style.display='block'
        titulo.innerHTML+=` ${Number.parseInt((acertos*10)/(erros+acertos))}`
    }
}
function exibirErrosAcertos(){
    let nErros=window.document.getElementById('erros')
    let nAcertos=window.document.getElementById('acertos')
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
    let posicaoUm=Number.parseInt(Math.random()*3+1) //1unidade 2dezena 3centena
    let posicaoDois=Number.parseInt(Math.random()*3+1)
    
    sorteado=String(Number.parseInt(Math.random()*900+100))
    let valorUnidade = sorteado.substr(2,1)
    let valorDezena = sorteado.substr(1,1)
    let valorCentena = sorteado.substr(0,1)

    let centena = Number.parseInt(valorCentena)-Number.parseInt(Math.random()*(Number.parseInt(valorCentena)+1))
    let dezena = Number.parseInt(valorDezena)-Number.parseInt(Math.random()*(Number.parseInt(valorDezena)+1))
    
    let unidade = Number.parseInt(valorUnidade)
    
    let diferencaCentena = Number.parseInt(valorCentena)-centena
    let diferencaDezena = Number.parseInt(valorDezena)-dezena 
    
    dezena+=(diferencaCentena*10)
    unidade+=(diferencaDezena*10)
    
    if(posicaoUm===posicaoDois){
        if(posicaoUm===1){
            respostaUnidade.value=''+unidade
            respostaUnidade.setAttribute('disabled','true')
        }else
        if(posicaoUm===2){

            respostaDezena.value=''+dezena
            respostaDezena.setAttribute('disabled','true')
        }else
        if(posicaoUm===3){
            respostaCentena.value=''+centena
            respostaCentena.setAttribute('disabled','true')
        }        
    }else{
        if(posicaoUm===1){

            respostaUnidade.value=''+unidade
            respostaUnidade.setAttribute('disabled','true')
        }else
        if(posicaoUm===2){

            respostaDezena.value=''+dezena
            respostaDezena.setAttribute('disabled','true')
        }else
        if(posicaoUm===3){

            respostaCentena.value=''+centena
            respostaCentena.setAttribute('disabled','true')
        }
        
        if(posicaoDois===1){

            respostaUnidade.value=''+unidade
            respostaUnidade.setAttribute('disabled','true')
        }else
        if(posicaoDois===2){

            respostaDezena.value=''+dezena
            respostaDezena.setAttribute('disabled','true')
        }else
        if(posicaoDois===3){

            respostaCentena.value=''+centena
            respostaCentena.setAttribute('disabled','true')
        }
    }
    if(posicaoUm===posicaoDois){
        if(posicaoUm===1){
            respostaCentena.focus()
        }else
        if(posicaoUm===2){
            respostaCentena.focus()
        }else
        if(posicaoUm===3){
            respostaDezena.focus()
        }
    }else
    if(posicaoUm===1&&posicaoDois===2||posicaoUm===2&&posicaoDois===1){
        respostaCentena.focus()
    }else
    if(posicaoUm===2&&posicaoDois===3||posicaoUm===3&&posicaoDois===2){
        respostaUnidade.focus()
    }else
    if(posicaoUm===1&&posicaoDois===3||posicaoUm===3&&posicaoDois===1){
        respostaDezena.focus()
    }
    
    window.document.getElementById('numero').innerHTML=sorteado
    numeroResposta.innerHTML=sorteado

}
