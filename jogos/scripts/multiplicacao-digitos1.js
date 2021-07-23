const numeros= window.document.querySelectorAll('.numero')
var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

//Variáveis da divisão
var resposta, respostaCorreta, erros, acertos, a,b,numeroTouch
var dividendo=window.document.getElementById('dividendo')
var divisor=window.document.getElementById('divisor')
var a1=window.document.getElementById('a1')
var a2=window.document.getElementById('a2')
var a3=window.document.getElementById('a3')
var a4=window.document.getElementById('a4')
var a5=window.document.getElementById('a5')
var a6=window.document.getElementById('a6')
var a7=window.document.getElementById('a7')

var b0=window.document.getElementById('b0')
var b1=window.document.getElementById('b1')
var b2=window.document.getElementById('b2')
var b3=window.document.getElementById('b3')
var b4=window.document.getElementById('b4')
var b5=window.document.getElementById('b5')

var b6=window.document.getElementById('b6')
var b7=window.document.getElementById('b7')
var b8=window.document.getElementById('b8')
var b9=window.document.getElementById('b9')
var b10=window.document.getElementById('b10')
var b11=window.document.getElementById('b11')

var c0=window.document.getElementById('c0')
var c1=window.document.getElementById('c1')
var c2=window.document.getElementById('c2')
var c3=window.document.getElementById('c3')
var c4=window.document.getElementById('c4')
var c5=window.document.getElementById('c5')
var c6=window.document.getElementById('c6')

var d1=window.document.getElementById('d1')
var d2=window.document.getElementById('d2')
var d3=window.document.getElementById('d3')
var d4=window.document.getElementById('d4')
var d5=window.document.getElementById('d5')
var d6=window.document.getElementById('d6')

var e1=window.document.getElementById('e1')
var e2=window.document.getElementById('e2')
var e3=window.document.getElementById('e3')
var e4=window.document.getElementById('e4')
var e5=window.document.getElementById('e5')
var e6=window.document.getElementById('e6')


var imgB1=window.document.createElement('img')
var imgB2=window.document.createElement('img')
var imgB3=window.document.createElement('img')
var imgB4=window.document.createElement('img')
var imgB5=window.document.createElement('img')
var imgB6=window.document.createElement('img')
var imgB7=window.document.createElement('img')
var imgB8=window.document.createElement('img')
var imgB9=window.document.createElement('img')
var imgB10=window.document.createElement('img')
var imgB11=window.document.createElement('img')

var imgC1=window.document.createElement('img')
var imgC2=window.document.createElement('img')
var imgC3=window.document.createElement('img')
var imgC4=window.document.createElement('img')
var imgC5=window.document.createElement('img')
var imgC6=window.document.createElement('img')

var imgD1=window.document.createElement('img')
var imgD2=window.document.createElement('img')
var imgD3=window.document.createElement('img')
var imgD4=window.document.createElement('img')
var imgD5=window.document.createElement('img')
var imgD6=window.document.createElement('img')

var imgE1=window.document.createElement('img')
var imgE2=window.document.createElement('img')
var imgE3=window.document.createElement('img')
var imgE4=window.document.createElement('img')
var imgE5=window.document.createElement('img')
var imgE6=window.document.createElement('img')


var estrelas=window.document.getElementById('estrelas')
var verif = window.document.getElementById('verif')
var resultado= window.document.getElementById('resultado')
var respostaCerta= window.document.getElementById('respostaCerta')
verif.addEventListener('click',verificar)

var zero=window.document.getElementById('zero')
var um=window.document.getElementById('um')
var dois=window.document.getElementById('dois')
var tres=window.document.getElementById('tres')
var quatro=window.document.getElementById('quatro')
var cinco=window.document.getElementById('cinco')
var seis=window.document.getElementById('seis')
var sete=window.document.getElementById('sete')
var oito=window.document.getElementById('oito')
var nove=window.document.getElementById('nove')


var resposta=window.document.getElementById('resposta')
resposta.addEventListener('keydown', e=>{
    if (e.code == "Enter"){ 
        verificar()
    } 
})
numeros.forEach(num=>{
    addEventListener('dragstart', e=>{e.dataTransfer.setData('text',e.target.id)})
})

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

   c4.innerHTML=''; c5.innerHTML='';c6.innerHTML='';
   d3.innerHTML=''; d4.innerHTML=''; d5.innerHTML='';d6.innerHTML='';

   window.document.getElementById('traco2').style.borderBottom='solid rgb(104, 128, 179)'
   e4.innerHTML='';e5.innerHTML=''; e6.innerHTML=''
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
    a=String(Number.parseInt(Math.random()*90)+10)
    b=String(Number.parseInt(Math.random()*10))
    
    dividendo.innerHTML=a
    divisor.innerHTML=b
    respostaCorreta=(Number.parseInt(a)*Number.parseInt(b))
    
    //a4.innerHTML=a.substr(0,1)
    a5.innerHTML=a.substr(0,1)
    a6.innerHTML=a.substr(1,1)
    //a7.innerHTML=a.substr(3,1)
    //b5.innerHTML=b.substr(0,1)
    b6.innerHTML=b
    
}
c4.addEventListener('dragover',e=>{e.preventDefault()})
c4.addEventListener('dragleave',e=>{e.preventDefault()})
c4.addEventListener('touchend',e=>{imgNumerosTouchC4()})
c4.addEventListener('drop',e=>{imgNumerosC4(e)})
function imgNumerosC4(e){
    var id=e.dataTransfer.getData('text')
    imgC4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgC4.src='imagens/'+numeros[x]+'.png'} }
    c4.appendChild(imgC4)
}
function imgNumerosTouchC4(){
    imgC4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgC4.src='imagens/'+numeros[x]+'.png'} }
    c4.appendChild(imgC4)
}
c5.addEventListener('dragover',e=>{e.preventDefault()})
c5.addEventListener('dragleave',e=>{e.preventDefault()})
c5.addEventListener('touchend',e=>{imgNumerosTouchC5()})
c5.addEventListener('drop',e=>{imgNumerosC5(e)})
function imgNumerosC5(e){
    var id=e.dataTransfer.getData('text')
    imgC5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgC5.src='imagens/'+numeros[x]+'.png'} }
    c5.appendChild(imgC5)
}
function imgNumerosTouchC5(){
    imgC5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgC5.src='imagens/'+numeros[x]+'.png'} }
    c5.appendChild(imgC5)
}
c6.addEventListener('dragover',e=>{e.preventDefault()})
c6.addEventListener('dragleave',e=>{e.preventDefault()})
c6.addEventListener('touchend',e=>{imgNumerosTouchC6()})
c6.addEventListener('drop',e=>{imgNumerosC6(e)})
function imgNumerosC6(e){
    var id=e.dataTransfer.getData('text')
    imgC6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgC6.src='imagens/'+numeros[x]+'.png'} }
    c6.appendChild(imgC6)
}
function imgNumerosTouchC6(){
    imgC6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgC6.src='imagens/'+numeros[x]+'.png'} }
    c6.appendChild(imgC6)
}

d4.addEventListener('dragover',e=>{e.preventDefault()})
d4.addEventListener('dragleave',e=>{e.preventDefault()})
d4.addEventListener('touchend',e=>{imgNumerosTouchD4()})
d4.addEventListener('drop',e=>{imgNumerosD4(e)})
function imgNumerosD4(e){
    var id=e.dataTransfer.getData('text')
    imgD4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgD4.src='imagens/'+numeros[x]+'.png'} }
    d4.appendChild(imgD4)
    d3.innerHTML='+'
    window.document.getElementById('traco2').style.borderBottom='solid'
    //d4.style.borderBottomColor='black'
}
function imgNumerosTouchD4(){
    imgD4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgD4.src='imagens/'+numeros[x]+'.png'} }
    d4.appendChild(imgD4)
    d3.innerHTML='+'
    window.document.getElementById('traco2').style.borderBottom='solid'
}
d5.addEventListener('dragover',e=>{e.preventDefault()})
d5.addEventListener('dragleave',e=>{e.preventDefault()})
d5.addEventListener('touchend',e=>{imgNumerosTouchD5()})
d5.addEventListener('drop',e=>{imgNumerosD5(e)})
function imgNumerosD5(e){
    var id=e.dataTransfer.getData('text')
    imgD5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgD5.src='imagens/'+numeros[x]+'.png'} }
    d5.appendChild(imgD5)
    d3.innerHTML='+'
    window.document.getElementById('traco2').style.borderBottom='solid'
    //d5.style.borderBottomColor='black'
}
function imgNumerosTouchD5(){
    imgD5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgD5.src='imagens/'+numeros[x]+'.png'} }
    d5.appendChild(imgD5)
    d3.innerHTML='+'
    window.document.getElementById('traco2').style.borderBottom='solid'
}

e4.addEventListener('dragover',e=>{e.preventDefault()})
e4.addEventListener('dragleave',e=>{e.preventDefault()})
e4.addEventListener('touchend',e=>{imgNumerosTouchE4()})
e4.addEventListener('drop',e=>{imgNumerosE4(e)})
function imgNumerosE4(e){
    var id=e.dataTransfer.getData('text')
    imgE4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgE4.src='imagens/'+numeros[x]+'.png'} }
    e4.appendChild(imgE4)
}
function imgNumerosTouchE4(){
    imgE4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgE4.src='imagens/'+numeros[x]+'.png'} }
    e4.appendChild(imgE4)
}
e5.addEventListener('dragover',e=>{e.preventDefault()})
e5.addEventListener('dragleave',e=>{e.preventDefault()})
e5.addEventListener('touchend',e=>{imgNumerosTouchE5()})
e5.addEventListener('drop',e=>{imgNumerosE5(e)})
function imgNumerosE5(e){
    var id=e.dataTransfer.getData('text')
    imgE5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgE5.src='imagens/'+numeros[x]+'.png'} }
    e5.appendChild(imgE5)
}
function imgNumerosTouchE5(){
    imgE5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgE5.src='imagens/'+numeros[x]+'.png'} }
    e5.appendChild(imgE5)
}
e6.addEventListener('dragover',e=>{e.preventDefault()})
e6.addEventListener('dragleave',e=>{e.preventDefault()})
e6.addEventListener('touchend',e=>{imgNumerosTouchE6()})
e6.addEventListener('drop',e=>{imgNumerosE6(e)})
function imgNumerosE6(e){
    var id=e.dataTransfer.getData('text')
    imgE6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgE6.src='imagens/'+numeros[x]+'.png'} }
    e6.appendChild(imgE6)
}
function imgNumerosTouchE6(){
    imgE6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgE6.src='imagens/'+numeros[x]+'.png'} }
    e6.appendChild(imgE6)
}

  
//Referente ao Touch 
zero.addEventListener('touchstart', e=>{
    zero.addEventListener('touchend', e=>{
        numeroTouch='zero'
        desselecionar()
        zero.style.borderColor='black'
        zero.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    }) 
},true) 
um.addEventListener('touchstart', e=>{

    um.addEventListener('touchend', e=>{
        numeroTouch='um'
        desselecionar()
        um.style.borderColor='black'
        um.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    }) 
},true) 
dois.addEventListener('touchstart', e=>{
    dois.addEventListener('touchend', e=>{
        numeroTouch='dois'
        desselecionar()
        dois.style.borderColor='black'
        dois.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true) 
tres.addEventListener('touchstart', e=>{
    tres.addEventListener('touchend', e=>{
        numeroTouch='tres'
        desselecionar()
        tres.style.borderColor='black'
        tres.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    }) 
},true) 
quatro.addEventListener('touchstart', e=>{
    quatro.addEventListener('touchend', e=>{
        numeroTouch='quatro'
        desselecionar()
        quatro.style.border='solid'
        quatro.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true) 
cinco.addEventListener('touchstart', e=>{
    cinco.addEventListener('touchend', e=>{
        numeroTouch='cinco'
        desselecionar()
        cinco.style.border='solid'
        cinco.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true) 
seis.addEventListener('touchstart', e=>{

    seis.addEventListener('touchend', e=>{
        numeroTouch='seis'
        desselecionar()
        seis.style.border='solid'
        seis.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    }) 
},true) 
sete.addEventListener('touchstart', e=>{

    sete.addEventListener('touchend', e=>{
        numeroTouch='sete'
        desselecionar()
        sete.style.border='solid'
        sete.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true) 
oito.addEventListener('touchstart', e=>{

    oito.addEventListener('touchend', e=>{
        numeroTouch='oito'
        desselecionar()
        oito.style.border='solid'
        oito.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true)  
nove.addEventListener('touchstart',e=>{
    nove.addEventListener('touchend', e=>{
        numeroTouch='nove'
        desselecionar()
        nove.style.border='solid'
        nove.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true)

function desselecionar(){
    zero.style.borderColor='rgb(104, 128, 179)'
    zero.style.backgroundColor='rgb(104, 128, 179)'
    um.style.borderColor='rgb(104, 128, 179)'
    um.style.backgroundColor='rgb(104, 128, 179)'
    dois.style.borderColor='rgb(104, 128, 179)'
    dois.style.backgroundColor='rgb(104, 128, 179)'
    tres.style.borderColor='rgb(104, 128, 179)'
    tres.style.backgroundColor='rgb(104, 128, 179)'
    quatro.style.borderColor='rgb(104, 128, 179)'
    quatro.style.backgroundColor='rgb(104, 128, 179)'
    cinco.style.borderColor='rgb(104, 128, 179)'
    cinco.style.backgroundColor='rgb(104, 128, 179)'
    seis.style.borderColor='rgb(104, 128, 179)'
    seis.style.backgroundColor='rgb(104, 128, 179)'
    sete.style.borderColor='rgb(104, 128, 179)'
    sete.style.backgroundColor='rgb(104, 128, 179)'
    oito.style.borderColor='rgb(104, 128, 179)'
    oito.style.backgroundColor='rgb(104, 128, 179)'
    nove.style.borderColor='rgb(104, 128, 179)'
    nove.style.backgroundColor='rgb(104, 128, 179)'
} 
