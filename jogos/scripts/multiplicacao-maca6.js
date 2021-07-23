var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

//Variáveis 
var resposta, respostaCorreta, erros, acertos, a,b,numeroTouch='nulo'
var contador=0,contador1=0,contador2=0,contador3=0,contador4=0,contador5=0,contador6=0
var dividendo=window.document.getElementById('dividendo')
var divisor=window.document.getElementById('divisor')
var contaImg=window.document.getElementById('contaImg')
var quadro=window.document.getElementById('quadro')
var maca=window.document.getElementById('maca')

var estrelas=window.document.getElementById('estrelas')
var verif = window.document.getElementById('verif')
var resultado= window.document.getElementById('resultado')
var respostaCerta= window.document.getElementById('respostaCerta')
verif.addEventListener('click',verificar)
var resposta=window.document.getElementById('resposta')
resposta.addEventListener('keydown', e=>{
    if (e.code == "Enter"){ 
        verificar()
    } 
})
quadro.addEventListener('dragstart', e=>{e.dataTransfer.setData('text',e.target.id)})
maca.addEventListener('dragstart', e=>{e.dataTransfer.setData('text',e.target.id)})

function iniciar(){
    window.document.getElementById('resposta').focus()
    sortearNumeros()
    acertos=0
    erros=0
    exibirEstrelas()
    exibirErrosAcertos()
}
function verificar(){
    resposta.value.replace(',','.')
    if(resposta.value.length==0){
        window.document.getElementById('resposta').focus()
    }else
    if(Number(resposta.value)==respostaCorreta){
        acertou()
        window.document.getElementById('resposta').focus()
    }else{
        errou()
        window.document.getElementById('resposta').focus()
    }
}
function acertou(){
    acertos=acertos+1
    
        verif.setAttribute('disabled',true)
        window.document.getElementById('resposta').disabled=false
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
    verif.setAttribute('disabled', true)
    window.document.getElementById('resposta').disabled=false
    resultado.innerHTML=`ERROU!`
    respostaCerta.innerHTML=`${a} x ${b} = ${parseFloat(respostaCorreta)}`
    resultado.style.background='red'
    respostaCerta.style.background='red'
    
    if(acertos<0){
        acertos=0
    }
    exibirEstrelas()
    exibirErrosAcertos()

    window.setTimeout(limparCampos,5000)
}
function limparCampos(){
    resultado.innerHTML='RESULTADO'
    respostaCerta.innerHTML='&nbsp'
    resultado.style.background='rgb(179, 122, 104)'
    respostaCerta.style.background='rgb(179, 122, 104)'
    window.document.getElementById('resposta').value=''
    sortearNumeros()
    limpar()

    window.document.getElementById('verif').disabled=false
    window.document.getElementById('resposta').disabled=false

    if(acertos==10){
        //window.alert(`PARABÉNS! VOCÊ VENCEU! NOTA: ${Number.parseInt((acertos*10)/(erros+acertos))}`)
        //iniciar()
        bgmodal.style.display='block'
        bgmodal.focus()
        titulo.innerHTML+=` ${Number.parseInt((acertos*10)/(erros+acertos))}`
        titulo.style.textAlign='center'
    }
}
function limpar(){
   contaImg.innerHTML=''
   contador=0;contador1=0;contador2=0;contador3=0;contador4=0;contador5=0;contador6=0
   desselecionar()
   numeroTouch='nulo'
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
    a=String(Number.parseInt(Math.random()*7))
    b=String(Number.parseInt(Math.random()*7))
    
    dividendo.innerHTML=a
    divisor.innerHTML=b
    respostaCorreta=(Number.parseInt(a)*Number.parseInt(b))
    
}
contaImg.addEventListener('dragover',e=>{e.preventDefault()})
contaImg.addEventListener('dragleave',e=>{e.preventDefault()})
contaImg.addEventListener('touchend',e=>{quadroContaTouch()})
contaImg.addEventListener('drop',e=>{quadroConta(e)})
function quadroConta(e){
    var id=e.dataTransfer.getData('text')
    var quadro=window.document.createElement('div')
    if(id=='quadro'){
        if(contador>=6){
            contaImg.removeEventListener('drop')
        }else{
            contador++
            quadro.className='quadro'
            quadro.setAttribute('dropzone','copy')
            quadro.setAttribute('id',''+contador)
            quadro.style.display='flex'
            quadro.style.flexFlow='row wrap'
            quadro.style.justifyContent='space-around'
            contaImg.appendChild(quadro)
        }   
    }  
    if(quadro.id=='1'){
        window.document.getElementById('1').addEventListener('drop',e=>{ quadroUm(e)}) 
        window.document.getElementById('1').addEventListener('touchend',e=>{ quadroUmTouch(e);})
    }else 
    if(quadro.id=='2'){
        window.document.getElementById('2').addEventListener('drop',e=>{ quadroDois(e)}) 
        window.document.getElementById('2').addEventListener('touchend',e=>{ quadroDoisTouch(e);})
    }else
    if(quadro.id=='3'){
        window.document.getElementById('3').addEventListener('drop',e=>{ quadroTres(e)}) 
        window.document.getElementById('3').addEventListener('touchend',e=>{ quadroTresTouch(e);})
    }else
    if(quadro.id=='4'){
        window.document.getElementById('4').addEventListener('drop',e=>{ quadroQuatro(e)})
        window.document.getElementById('4').addEventListener('touchend',e=>{ quatroQuatroTouch(e);})
    }else
    if(quadro.id=='5'){
        window.document.getElementById('5').addEventListener('drop',e=>{ quadroCinco(e)})
        window.document.getElementById('5').addEventListener('touchend',e=>{ quadroCincoTouch(e);})
    }else
    if(quadro.id=='6'){
        window.document.getElementById('6').addEventListener('drop',e=>{ quadroSeis(e)})
        window.document.getElementById('6').addEventListener('touchend',e=>{ quadroSeisTouch(e);})
    }
}
function quadroUm(e){ contadorMacas(1,e)}
function quadroDois(e){ contadorMacas(2,e)}
function quadroTres(e){ contadorMacas(3,e)}
function quadroQuatro(e){ contadorMacas(4,e)}
function quadroCinco(e){ contadorMacas(5,e)}
function quadroSeis(e){ contadorMacas(6,e)}

function quadroUmTouch(e){contadorMacasTouch(1)}
function quadroDoisTouch(e){ contadorMacasTouch(2)}
function quadroTresTouch(e){ contadorMacasTouch(3)}
function quadroQuatroTouch(e){ contadorMacasTouch(4)}
function quadroCincoTouch(e){ contadorMacasTouch(5)}
function quadroSeisTouch(e){ contadorMacasTouch(6)}

function contadorMacas(num,e){ 
    if(e.dataTransfer.getData('text')=='maca'){
    if(num==1){
        if(contador1>=6){
            window.document.getElementById('1').removeEventListener('drop')
        }else{
            contador1++
            window.document.getElementById('1').appendChild(macas())
        }  
    }else
    if(num==2){
        if(contador2>=6){
            window.document.getElementById('2').removeEventListener('drop')
        }else{
            contador2++
            window.document.getElementById('2').appendChild(macas())
        }  
    }else
    if(num==3){
        if(contador3>=6){
            window.document.getElementById('3').removeEventListener('drop')
        }else{
            contador3++
            window.document.getElementById('3').appendChild(macas())
        }  
    }else
    if(num==4){
        if(contador4>=6){
            window.document.getElementById('4').removeEventListener('drop')
        }else{
            contador4++
            window.document.getElementById('4').appendChild(macas())
        }  
    }else
    if(num==5){
        if(contador5>=6){
            window.document.getElementById('5').removeEventListener('drop')
        }else{
            contador5++
            window.document.getElementById('5').appendChild(macas())
        }  
    }else
    if(num==6){
        if(contador6>=6){
            window.document.getElementById('6').removeEventListener('drop')
        }else{
            contador6++
            window.document.getElementById('6').appendChild(macas())
        }  
    }
}
}
function contadorMacasTouch(num){
    if(numeroTouch=='maca'){ 
    if(num==1){
        if(contador1>=6){
            window.document.getElementById('1').removeEventListener('touchend')
        }else{
            contador1++
            window.document.getElementById('1').appendChild(macasTouch())
        }  
    }else
    if(num==2){
        if(contador2>=6){
            window.document.getElementById('2').removeEventListener('touchend')
        }else{
            contador2++
            window.document.getElementById('2').appendChild(macasTouch())
        }  
    }else
    if(num==3){
        if(contador3>=6){
            window.document.getElementById('3').removeEventListener('touchend')
        }else{
            contador3++
            window.document.getElementById('3').appendChild(macasTouch())
        }  
    }else
    if(num==4){
        if(contador4>=6){
            window.document.getElementById('4').removeEventListener('touchend')
        }else{
            contador4++
            window.document.getElementById('4').appendChild(macasTouch())
        }  
    }else
    if(num==5){
        if(contador5>=6){
            window.document.getElementById('5').removeEventListener('touchend')
        }else{
            contador5++
            window.document.getElementById('5').appendChild(macasTouch())
        }  
    }else
    if(num==6){ 
        if(contador6>=6){
            window.document.getElementById('6').removeEventListener('touchend')
        }else{ 
            contador6++
            window.document.getElementById('6').appendChild(macasTouch())
        }  
    }
    }
}
function macas(){
    var macas=window.document.createElement('img')
    macas.src='imagens/maca.png'
    macas.className='macas'
    macas.setAttribute('draggable','false')
    return macas
}
function macasTouch(){
    var macas=window.document.createElement('img')
    macas.src='imagens/maca.png'
    macas.className='macas'
    macas.setAttribute('draggable','false')
    return macas
}
//Referente ao Touch 
function quadroContaTouch(){
    var quadro=window.document.createElement('div')
    if(numeroTouch=='quadro'){
        if(contador>=6){
            contaImg.removeEventListener('touchend')
        }else{
            contador++
            quadro.className='quadro'
            quadro.setAttribute('dropzone','copy')
            quadro.setAttribute('id',''+contador)
            quadro.style.display='flex'
            quadro.style.flexFlow='row wrap'
            quadro.style.justifyContent='space-around'
            contaImg.appendChild(quadro)
        }  
    } 
    if(quadro.id=='1'){
        window.document.getElementById('1').addEventListener('drop',e=>{ quadroUm(e)}) 
        window.document.getElementById('1').addEventListener('touchend',e=>{ quadroUmTouch(e);})
    }else 
    if(quadro.id=='2'){
        window.document.getElementById('2').addEventListener('drop',e=>{ quadroDois(e)}) 
        window.document.getElementById('2').addEventListener('touchend',e=>{ quadroDoisTouch(e);})
    }else
    if(quadro.id=='3'){
        window.document.getElementById('3').addEventListener('drop',e=>{ quadroTres(e)}) 
        window.document.getElementById('3').addEventListener('touchend',e=>{ quadroTresTouch(e);})
    }else
    if(quadro.id=='4'){
        window.document.getElementById('4').addEventListener('drop',e=>{ quadroQuatro(e)})
        window.document.getElementById('4').addEventListener('touchend',e=>{ quadroQuatroTouch(e);})
    }else
    if(quadro.id=='5'){
        window.document.getElementById('5').addEventListener('drop',e=>{ quadroCinco(e)})
        window.document.getElementById('5').addEventListener('touchend',e=>{ quadroCincoTouch(e);})
    }else
    if(quadro.id=='6'){
        window.document.getElementById('6').addEventListener('drop',e=>{ quadroSeis(e)})
        window.document.getElementById('6').addEventListener('touchend',e=>{ quadroSeisTouch(e);})
    }
}

quadro.addEventListener('touchstart',e=>{
    quadro.addEventListener('touchend', e=>{
        numeroTouch='quadro'
        desselecionar()
        quadro.style.border='solid'
        quadro.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true)
maca.addEventListener('touchstart',e=>{
    maca.addEventListener('touchend', e=>{
        numeroTouch='maca'
        desselecionar()
        maca.style.border='solid'
        maca.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true)
function desselecionar(){
    quadro.style.borderColor='black'
    quadro.style.backgroundColor='rgb(104, 128, 179)'
    maca.style.borderColor='rgb(104, 128, 179)'
    maca.style.backgroundColor='rgb(104, 128, 179)'
    
} 
