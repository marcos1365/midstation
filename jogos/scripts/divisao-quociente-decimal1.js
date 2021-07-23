const numeros= window.document.querySelectorAll('.numero')
var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

//Variáveis da divisão
var resposta, respostaCorreta, erros, acertos, a,b,numeroTouch,numeroTouchCol3
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

var f2=window.document.getElementById('f2')
var f3=window.document.getElementById('f3')
var f4=window.document.getElementById('f4')
var f5=window.document.getElementById('f5')
var f6=window.document.getElementById('f6')

var g2=window.document.getElementById('g2')
var g3=window.document.getElementById('g3')
var g4=window.document.getElementById('g4')
var g5=window.document.getElementById('g5')
var g6=window.document.getElementById('g6')

var h2=window.document.getElementById('h2')
var h3=window.document.getElementById('h3')
var h4=window.document.getElementById('h4')
var h5=window.document.getElementById('h5')
var h6=window.document.getElementById('h6')

var i2=window.document.getElementById('i2')
var i3=window.document.getElementById('i3')
var i4=window.document.getElementById('i4')
var i5=window.document.getElementById('i5')
var i6=window.document.getElementById('i6')

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

var imgF2=window.document.createElement('img')
var imgF3=window.document.createElement('img')
var imgF4=window.document.createElement('img')
var imgF5=window.document.createElement('img')
var imgF6=window.document.createElement('img')

var imgG2=window.document.createElement('img')
var imgG3=window.document.createElement('img')
var imgG4=window.document.createElement('img')
var imgG5=window.document.createElement('img')
var imgG6=window.document.createElement('img')

var imgH2=window.document.createElement('img')
var imgH3=window.document.createElement('img')
var imgH4=window.document.createElement('img')
var imgH5=window.document.createElement('img')
var imgH6=window.document.createElement('img')

var imgI2=window.document.createElement('img')
var imgI3=window.document.createElement('img')
var imgI4=window.document.createElement('img')
var imgI5=window.document.createElement('img')
var imgI6=window.document.createElement('img')

//Variáveis da multiplicação
col3a1=window.document.getElementById('col3a1')
col3a2=window.document.getElementById('col3a2')
col3b2=window.document.getElementById('col3b2')
col3b4=window.document.getElementById('col3b4')
col3c4=window.document.getElementById('col3c4')

col3d2=window.document.getElementById('col3d2')
col3d3=window.document.getElementById('col3d3')
col3d4=window.document.getElementById('col3d4')

imgCol3a2=window.document.createElement('img')
imgCol3c4=window.document.createElement('img')
imgCol3d2=window.document.createElement('img')
imgCol3d3=window.document.createElement('img')
imgCol3d4=window.document.createElement('img')

var estrelas=window.document.getElementById('estrelas')
var verif = window.document.getElementById('verif')
var resultado= window.document.getElementById('resultado')
var respostaCerta= window.document.getElementById('respostaCerta')
verif.addEventListener('click',verificar)
resposta=window.document.getElementById('resposta')

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
var virgula=window.document.getElementById('virgula')

var zeroCol3=window.document.getElementById('zeroCol3')
var umCol3=window.document.getElementById('umCol3')
var doisCol3=window.document.getElementById('doisCol3')
var tresCol3=window.document.getElementById('tresCol3')
var quatroCol3=window.document.getElementById('quatroCol3')
var cincoCol3=window.document.getElementById('cincoCol3')
var seisCol3=window.document.getElementById('seisCol3')
var seteCol3=window.document.getElementById('seteCol3')
var oitoCol3=window.document.getElementById('oitoCol3')
var noveCol3=window.document.getElementById('noveCol3')

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
    respostaCerta.innerHTML=`${a} &#247; ${b} = ${parseFloat(respostaCorreta).toFixed(2)}`
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
    limparDivisao()
    limparMultiplicacao()
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
function limparDivisao(){
   b0.innerHTML=''; b1.innerHTML=''; b2.innerHTML=''; b3.innerHTML=''; b4.innerHTML=''
   b6.innerHTML=''; b7.innerHTML=''; b8.innerHTML=''; b9.innerHTML=''; b10.innerHTML=''; b11.innerHTML=''
   b1.style.borderBottomColor='rgb(104, 128, 179)'
   b2.style.borderBottomColor='rgb(104, 128, 179)'
   b3.style.borderBottomColor='rgb(104, 128, 179)'
   b4.style.borderBottomColor='rgb(104, 128, 179)'

   c1.innerHTML=''; c2.innerHTML=''; c3.innerHTML=''; c4.innerHTML=''; c5.innerHTML=''
   d0.innerHTML=''; d1.innerHTML=''; d2.innerHTML=''; d3.innerHTML=''; d4.innerHTML=''; d5.innerHTML='';
   d1.style.borderBottomColor='rgb(104, 128, 179)'
   d2.style.borderBottomColor='rgb(104, 128, 179)'
   d3.style.borderBottomColor='rgb(104, 128, 179)'
   d4.style.borderBottomColor='rgb(104, 128, 179)'
   d5.style.borderBottomColor='rgb(104, 128, 179)'
   
   e0.innerHTML=''; e1.innerHTML=''; e2.innerHTML=''; e3.innerHTML=''; e4.innerHTML='';e5.innerHTML=''; e6.innerHTML=''
   f0.innerHTML=''; f1.innerHTML=''; f2.innerHTML=''; f3.innerHTML=''; f4.innerHTML='';f5.innerHTML=''; f6.innerHTML=''
   f1.style.borderBottomColor='rgb(104, 128, 179)'
   f2.style.borderBottomColor='rgb(104, 128, 179)'
   f3.style.borderBottomColor='rgb(104, 128, 179)'
   f4.style.borderBottomColor='rgb(104, 128, 179)'
   f5.style.borderBottomColor='rgb(104, 128, 179)'
   f6.style.borderBottomColor='rgb(104, 128, 179)'
   
   g0.innerHTML=''; g1.innerHTML=''; g2.innerHTML=''; g3.innerHTML=''; g4.innerHTML=''; g5.innerHTML=''; g6.innerHTML=''
   h0.innerHTML=''; h1.innerHTML=''; h2.innerHTML=''; h3.innerHTML=''; h4.innerHTML=''; h5.innerHTML=''; h6.innerHTML=''
   h1.style.borderBottomColor='rgb(104, 128, 179)'
   h2.style.borderBottomColor='rgb(104, 128, 179)'
   h3.style.borderBottomColor='rgb(104, 128, 179)'
   h4.style.borderBottomColor='rgb(104, 128, 179)'
   h5.style.borderBottomColor='rgb(104, 128, 179)'
   h6.style.borderBottomColor='rgb(104, 128, 179)'

   i0.innerHTML=''; i1.innerHTML=''; i2.innerHTML=''; i3.innerHTML=''; i4.innerHTML=''; i5.innerHTML=''; i6.innerHTML=''
}
function limparMultiplicacao(){
    col3a1.innerHTML=''
    col3a2.innerHTML=''
    col3c4.innerHTML=''
    col3d2.innerHTML=''
    col3d3.innerHTML=''
    col3d4.innerHTML=''

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
    a=String(Number.parseInt(Math.random()*899)+100)
    b=String(Number.parseInt(Math.random()*9)+1)
    while(a.length==4 && a%b==0){
        a=String(Number.parseInt(Math.random()*9000)+1000)
        b=String(Number.parseInt(Math.random()*90)+10)
    }
    dividendo.innerHTML=a
    divisor.innerHTML=b
    respostaCorreta=(Number.parseInt(a)/Number.parseInt(b)).toFixed(2)
    
    a1.innerHTML=a.substr(0,1)
    a2.innerHTML=a.substr(1,1)
    a3.innerHTML=a.substr(2,1)
    a4.innerHTML=a.substr(3,1)
    a6.innerHTML=b.substr(0,1)
    //a7.innerHTML=b.substr(1,1)
    
    //col3b2.innerHTML=b.substr(0,1)
    col3b4.innerHTML=b.substr(0,1)
}

b1.addEventListener('dragover',e=>{e.preventDefault()})
b1.addEventListener('dragleave',e=>{e.preventDefault()})
b1.addEventListener('touchend',e=>{imgNumerosTouchB1()})
b1.addEventListener('drop',e=>{imgNumerosB1(e)})
function imgNumerosB1(e){
    var id=e.dataTransfer.getData('text')
    imgB1.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgB1.src='imagens/'+numeros[x]+'.png'} }
    b1.appendChild(imgB1)
    b0.innerHTML='-'
    b1.style.borderBottomColor='black'
}
function imgNumerosTouchB1(){
    imgB1.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgB1.src='imagens/'+numeros[x]+'.png'} }
    b1.appendChild(imgB1)
    b0.innerHTML='-'
    b1.style.borderBottomColor='black'
}

b2.addEventListener('dragover',e=>{e.preventDefault()})
b2.addEventListener('dragleave',e=>{e.preventDefault()})
b2.addEventListener('touchend',e=>{imgNumerosTouchB2()})
b2.addEventListener('drop',e=>{imgNumerosB2(e)})
function imgNumerosB2(e){
    var id=e.dataTransfer.getData('text')
    imgB2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgB2.src='imagens/'+numeros[x]+'.png'} }
    b2.appendChild(imgB2)
    b0.innerHTML='-'
    b2.style.borderBottomColor='black'
}
function imgNumerosTouchB2(){
    imgB2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgB2.src='imagens/'+numeros[x]+'.png'} }
    b2.appendChild(imgB2)
    b0.innerHTML='-'
    b2.style.borderBottomColor='black'
}

b3.addEventListener('dragover',e=>{e.preventDefault()})
b3.addEventListener('dragleave',e=>{e.preventDefault()})
b3.addEventListener('touchend',e=>{imgNumerosTouchB3()})
b3.addEventListener('drop',e=>{imgNumerosB3(e)})
function imgNumerosB3(e){
    var id=e.dataTransfer.getData('text')
    imgB3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgB3.src='imagens/'+numeros[x]+'.png'} }
    b3.appendChild(imgB3)
    b0.innerHTML='-'
    b3.style.borderBottomColor='black'
}
function imgNumerosTouchB3(){
    imgB3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgB3.src='imagens/'+numeros[x]+'.png'} }
    b3.appendChild(imgB3)
    b0.innerHTML='-'
    b3.style.borderBottomColor='black'
}
b4.addEventListener('dragover',e=>{e.preventDefault()})
b4.addEventListener('dragleave',e=>{e.preventDefault()})
b4.addEventListener('touchend',e=>{imgNumerosTouchB4()})
b4.addEventListener('drop',e=>{imgNumerosB4(e)})
function imgNumerosB4(e){
    var id=e.dataTransfer.getData('text')
    imgB4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgB4.src='imagens/'+numeros[x]+'.png'} }
    b4.appendChild(imgB4)
    b0.innerHTML='-'
    b4.style.borderBottomColor='black'
}
function imgNumerosTouchB4(){
    imgB4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgB4.src='imagens/'+numeros[x]+'.png'} }
    b4.appendChild(imgB4)
    b0.innerHTML='-'
    b4.style.borderBottomColor='black'
}
c1.addEventListener('dragover',e=>{e.preventDefault()})
c1.addEventListener('dragleave',e=>{e.preventDefault()})
c1.addEventListener('touchend',e=>{imgNumerosTouchC1()})
c1.addEventListener('drop',e=>{imgNumerosC1(e)})
function imgNumerosC1(e){
    var id=e.dataTransfer.getData('text')
    imgC1.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgC1.src='imagens/'+numeros[x]+'.png'} }
    c1.appendChild(imgC1)
}
function imgNumerosTouchC1(){
    imgC1.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgC1.src='imagens/'+numeros[x]+'.png'} }
    c1.appendChild(imgC1)
}
c2.addEventListener('dragover',e=>{e.preventDefault()})
c2.addEventListener('dragleave',e=>{e.preventDefault()})
c2.addEventListener('touchend',e=>{imgNumerosTouchC2()})
c2.addEventListener('drop',e=>{imgNumerosC2(e)})
function imgNumerosC2(e){
    var id=e.dataTransfer.getData('text')
    imgC2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgC2.src='imagens/'+numeros[x]+'.png'} }
    c2.appendChild(imgC2)
}
function imgNumerosTouchC2(){
    imgC2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgC2.src='imagens/'+numeros[x]+'.png'} }
    c2.appendChild(imgC2)
}
c3.addEventListener('dragover',e=>{e.preventDefault()})
c3.addEventListener('dragleave',e=>{e.preventDefault()})
c3.addEventListener('touchend',e=>{imgNumerosTouchC3()})
c3.addEventListener('drop',e=>{imgNumerosC3(e)})
function imgNumerosC3(e){
    var id=e.dataTransfer.getData('text')
    imgC3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgC3.src='imagens/'+numeros[x]+'.png'} }
    c3.appendChild(imgC3)
}
function imgNumerosTouchC3(){
    imgC3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgC3.src='imagens/'+numeros[x]+'.png'} }
    c3.appendChild(imgC3)
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
d1.addEventListener('dragover',e=>{e.preventDefault()})
d1.addEventListener('dragleave',e=>{e.preventDefault()})
d1.addEventListener('touchend',e=>{imgNumerosTouchD1()})
d1.addEventListener('drop',e=>{imgNumerosD1(e)})
function imgNumerosD1(e){
    var id=e.dataTransfer.getData('text')
    imgD1.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgD1.src='imagens/'+numeros[x]+'.png'} }
    d1.appendChild(imgD1)
    d0.innerHTML='-'
    d1.style.borderBottomColor='black'
}
function imgNumerosTouchD1(){
    imgD1.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgD1.src='imagens/'+numeros[x]+'.png'} }
    d1.appendChild(imgD1)
    d0.innerHTML='-'
    d1.style.borderBottomColor='black'
}
d2.addEventListener('dragover',e=>{e.preventDefault()})
d2.addEventListener('dragleave',e=>{e.preventDefault()})
d2.addEventListener('touchend',e=>{imgNumerosTouchD2()})
d2.addEventListener('drop',e=>{imgNumerosD2(e)})
function imgNumerosD2(e){
    var id=e.dataTransfer.getData('text')
    imgD2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgD2.src='imagens/'+numeros[x]+'.png'} }
    d2.appendChild(imgD2)
    d0.innerHTML='-'
    d2.style.borderBottomColor='black'
}
function imgNumerosTouchD2(){
    imgD2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgD2.src='imagens/'+numeros[x]+'.png'} }
    d2.appendChild(imgD2)
    d0.innerHTML='-'
    d2.style.borderBottomColor='black'
}
d3.addEventListener('dragover',e=>{e.preventDefault()})
d3.addEventListener('dragleave',e=>{e.preventDefault()})
d3.addEventListener('touchend',e=>{imgNumerosTouchD3()})
d3.addEventListener('drop',e=>{imgNumerosD3(e)})
function imgNumerosD3(e){
    var id=e.dataTransfer.getData('text')
    imgD3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgD3.src='imagens/'+numeros[x]+'.png'} }
    d3.appendChild(imgD3)
    d0.innerHTML='-'
    d3.style.borderBottomColor='black'
}
function imgNumerosTouchD3(){
    imgD3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgD3.src='imagens/'+numeros[x]+'.png'} }
    d3.appendChild(imgD3)
    d0.innerHTML='-'
    d3.style.borderBottomColor='black'
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
    d0.innerHTML='-'
    d4.style.borderBottomColor='black'
}
function imgNumerosTouchD4(){
    imgD4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgD4.src='imagens/'+numeros[x]+'.png'} }
    d4.appendChild(imgD4)
    d0.innerHTML='-'
    d4.style.borderBottomColor='black'
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
    d0.innerHTML='-'
    d5.style.borderBottomColor='black'
}
function imgNumerosTouchD5(){
    imgD5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgD5.src='imagens/'+numeros[x]+'.png'} }
    d5.appendChild(imgD5)
    d0.innerHTML='-'
    d5.style.borderBottomColor='black'
}
e1.addEventListener('dragover',e=>{e.preventDefault()})
e1.addEventListener('dragleave',e=>{e.preventDefault()})
e1.addEventListener('touchend',e=>{imgNumerosTouchE1()})
e1.addEventListener('drop',e=>{imgNumerosE1(e)})
function imgNumerosE1(e){
    var id=e.dataTransfer.getData('text')
    imgE1.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgE1.src='imagens/'+numeros[x]+'.png'} }
    e1.appendChild(imgE1)
}
function imgNumerosTouchE1(){
    imgE1.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgE1.src='imagens/'+numeros[x]+'.png'} }
    e1.appendChild(imgE1)
}

e2.addEventListener('dragover',e=>{e.preventDefault()})
e2.addEventListener('dragleave',e=>{e.preventDefault()})
e2.addEventListener('touchend',e=>{imgNumerosTouchE2()})
e2.addEventListener('drop',e=>{imgNumerosE2(e)})
function imgNumerosE2(e){
    var id=e.dataTransfer.getData('text')
    imgE2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgE2.src='imagens/'+numeros[x]+'.png'} }
    e2.appendChild(imgE2)
}
function imgNumerosTouchE2(){
    imgE2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgE2.src='imagens/'+numeros[x]+'.png'} }
    e2.appendChild(imgE2)
}

e3.addEventListener('dragover',e=>{e.preventDefault()})
e3.addEventListener('dragleave',e=>{e.preventDefault()})
e3.addEventListener('touchend',e=>{imgNumerosTouchE3()})
e3.addEventListener('drop',e=>{imgNumerosE3(e)})
function imgNumerosE3(e){
    var id=e.dataTransfer.getData('text')
    imgE3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgE3.src='imagens/'+numeros[x]+'.png'} }
    e3.appendChild(imgE3)
}
function imgNumerosTouchE3(){
    imgE3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgE3.src='imagens/'+numeros[x]+'.png'} }
    e3.appendChild(imgE3)
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
f2.addEventListener('dragover',e=>{e.preventDefault()})
f2.addEventListener('dragleave',e=>{e.preventDefault()})
f2.addEventListener('touchend',e=>{imgNumerosTouchF2()})
f2.addEventListener('drop',e=>{imgNumerosF2(e)})
function imgNumerosF2(e){
    var id=e.dataTransfer.getData('text')
    imgF2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgF2.src='imagens/'+numeros[x]+'.png'} }
    f2.appendChild(imgF2)
    f0.innerHTML='-'
    f2.style.borderBottomColor='black'
}
function imgNumerosTouchF2(){
    imgF2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgF2.src='imagens/'+numeros[x]+'.png'} }
    f2.appendChild(imgF2)
    f0.innerHTML='-'
    f2.style.borderBottomColor='black'
}
f3.addEventListener('dragover',e=>{e.preventDefault()})
f3.addEventListener('dragleave',e=>{e.preventDefault()})
f3.addEventListener('touchend',e=>{imgNumerosTouchF3()})
f3.addEventListener('drop',e=>{imgNumerosF3(e)})
function imgNumerosF3(e){
    var id=e.dataTransfer.getData('text')
    imgF3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgF3.src='imagens/'+numeros[x]+'.png'} }
    f3.appendChild(imgF3)
    f0.innerHTML='-'
    f3.style.borderBottomColor='black'
}
function imgNumerosTouchF3(){
    imgF3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgF3.src='imagens/'+numeros[x]+'.png'} }
    f3.appendChild(imgF3)
    f0.innerHTML='-'
    f3.style.borderBottomColor='black'
}
f4.addEventListener('dragover',e=>{e.preventDefault()})
f4.addEventListener('dragleave',e=>{e.preventDefault()})
f4.addEventListener('touchend',e=>{imgNumerosTouchF4()})
f4.addEventListener('drop',e=>{imgNumerosF4(e)})
function imgNumerosF4(e){
    var id=e.dataTransfer.getData('text')
    imgF4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgF4.src='imagens/'+numeros[x]+'.png'} }
    f4.appendChild(imgF4)
    f0.innerHTML='-'
    f4.style.borderBottomColor='black'
}
function imgNumerosTouchF4(){
    imgF4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgF4.src='imagens/'+numeros[x]+'.png'} }
    f4.appendChild(imgF4)
    f0.innerHTML='-'
    f4.style.borderBottomColor='black'
}
f5.addEventListener('dragover',e=>{e.preventDefault()})
f5.addEventListener('dragleave',e=>{e.preventDefault()})
f5.addEventListener('touchend',e=>{imgNumerosTouchF5()})
f5.addEventListener('drop',e=>{imgNumerosF5(e)})
function imgNumerosF5(e){
    var id=e.dataTransfer.getData('text')
    imgF5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgF5.src='imagens/'+numeros[x]+'.png'} }
    f5.appendChild(imgF5)
    f0.innerHTML='-'
    f5.style.borderBottomColor='black'
}
function imgNumerosTouchF5(){
    imgF5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgF5.src='imagens/'+numeros[x]+'.png'} }
    f5.appendChild(imgF5)
    f0.innerHTML='-'
    f5.style.borderBottomColor='black'
}
f6.addEventListener('dragover',e=>{e.preventDefault()})
f6.addEventListener('dragleave',e=>{e.preventDefault()})
f6.addEventListener('touchend',e=>{imgNumerosTouchF6()})
f6.addEventListener('drop',e=>{imgNumerosF6(e)})
function imgNumerosF6(e){
    var id=e.dataTransfer.getData('text')
    imgF6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgF6.src='imagens/'+numeros[x]+'.png'} }
    f6.appendChild(imgF6)
    f0.innerHTML='-'
    f6.style.borderBottomColor='black'
}
function imgNumerosTouchF6(){
    imgF6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgF6.src='imagens/'+numeros[x]+'.png'} }
    f6.appendChild(imgF6)
    f0.innerHTML='-'
    f6.style.borderBottomColor='black'
}
g2.addEventListener('dragover',e=>{e.preventDefault()})
g2.addEventListener('dragleave',e=>{e.preventDefault()})
g2.addEventListener('touchend',e=>{imgNumerosTouchG2()})
g2.addEventListener('drop',e=>{imgNumerosG2(e)})
function imgNumerosG2(e){
    var id=e.dataTransfer.getData('text')
    imgG2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgG2.src='imagens/'+numeros[x]+'.png'} }
    g2.appendChild(imgG2)
}
function imgNumerosTouchG2(){
    imgG2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgG2.src='imagens/'+numeros[x]+'.png'} }
    g2.appendChild(imgG2)
}
g3.addEventListener('dragover',e=>{e.preventDefault()})
g3.addEventListener('dragleave',e=>{e.preventDefault()})
g3.addEventListener('touchend',e=>{imgNumerosTouchG3()})
g3.addEventListener('drop',e=>{imgNumerosG3(e)})
function imgNumerosG3(e){
    var id=e.dataTransfer.getData('text')
    imgG3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgG3.src='imagens/'+numeros[x]+'.png'} }
    g3.appendChild(imgG3)
}
function imgNumerosTouchG3(){
    imgG3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgG3.src='imagens/'+numeros[x]+'.png'} }
    g3.appendChild(imgG3)
}
g4.addEventListener('dragover',e=>{e.preventDefault()})
g4.addEventListener('dragleave',e=>{e.preventDefault()})
g4.addEventListener('touchend',e=>{imgNumerosTouchG4()})
g4.addEventListener('drop',e=>{imgNumerosG4(e)})
function imgNumerosG4(e){
    var id=e.dataTransfer.getData('text')
    imgG4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgG4.src='imagens/'+numeros[x]+'.png'} }
    g4.appendChild(imgG4)
}
function imgNumerosTouchG4(){
    imgG4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgG4.src='imagens/'+numeros[x]+'.png'} }
    g4.appendChild(imgG4)
}
g5.addEventListener('dragover',e=>{e.preventDefault()})
g5.addEventListener('dragleave',e=>{e.preventDefault()})
g5.addEventListener('touchend',e=>{imgNumerosTouchG5()})
g5.addEventListener('drop',e=>{imgNumerosG5(e)})
function imgNumerosG5(e){
    var id=e.dataTransfer.getData('text')
    imgG5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgG5.src='imagens/'+numeros[x]+'.png'} }
    g5.appendChild(imgG5)
}
function imgNumerosTouchG5(){
    imgG5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgG5.src='imagens/'+numeros[x]+'.png'} }
    g5.appendChild(imgG5)
}
g6.addEventListener('dragover',e=>{e.preventDefault()})
g6.addEventListener('dragleave',e=>{e.preventDefault()})
g6.addEventListener('touchend',e=>{imgNumerosTouchG6()})
g6.addEventListener('drop',e=>{imgNumerosG6(e)})
function imgNumerosG6(e){
    var id=e.dataTransfer.getData('text')
    imgG6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgG6.src='imagens/'+numeros[x]+'.png'} }
    g6.appendChild(imgG6)
}
function imgNumerosTouchG6(){
    imgG6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgG6.src='imagens/'+numeros[x]+'.png'} }
    g6.appendChild(imgG6)
}
h2.addEventListener('dragover',e=>{e.preventDefault()})
h2.addEventListener('dragleave',e=>{e.preventDefault()})
h2.addEventListener('touchend',e=>{imgNumerosTouchH2()})
h2.addEventListener('drop',e=>{imgNumerosH2(e)})
function imgNumerosH2(e){
    var id=e.dataTransfer.getData('text')
    imgH2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgH2.src='imagens/'+numeros[x]+'.png'} }
    h2.appendChild(imgH2)
    h0.innerHTML='-'
    h2.style.borderBottomColor='black'
}
function imgNumerosTouchH2(){
    imgH2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgH2.src='imagens/'+numeros[x]+'.png'} }
    h2.appendChild(imgH2)
    h0.innerHTML='-'
    h2.style.borderBottomColor='black'
}
h3.addEventListener('dragover',e=>{e.preventDefault()})
h3.addEventListener('dragleave',e=>{e.preventDefault()})
h3.addEventListener('touchend',e=>{imgNumerosTouchH3()})
h3.addEventListener('drop',e=>{imgNumerosH3(e)})
function imgNumerosH3(e){
    var id=e.dataTransfer.getData('text')
    imgH3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgH3.src='imagens/'+numeros[x]+'.png'} }
    h3.appendChild(imgH3)
    h0.innerHTML='-'
    h3.style.borderBottomColor='black'
}
function imgNumerosTouchH3(){
    imgH3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgH3.src='imagens/'+numeros[x]+'.png'} }
    h3.appendChild(imgH3)
    h0.innerHTML='-'
    h3.style.borderBottomColor='black'
}
h4.addEventListener('dragover',e=>{e.preventDefault()})
h4.addEventListener('dragleave',e=>{e.preventDefault()})
h4.addEventListener('touchend',e=>{imgNumerosTouchH4()})
h4.addEventListener('drop',e=>{imgNumerosH4(e)})
function imgNumerosH4(e){
    var id=e.dataTransfer.getData('text')
    imgH4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgH4.src='imagens/'+numeros[x]+'.png'} }
    h4.appendChild(imgH4)
    h0.innerHTML='-'
    h4.style.borderBottomColor='black'
}
function imgNumerosTouchH4(){
    imgH4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgH4.src='imagens/'+numeros[x]+'.png'} }
    h4.appendChild(imgH4)
    h0.innerHTML='-'
    h4.style.borderBottomColor='black'
}
h5.addEventListener('dragover',e=>{e.preventDefault()})
h5.addEventListener('dragleave',e=>{e.preventDefault()})
h5.addEventListener('touchend',e=>{imgNumerosTouchH5()})
h5.addEventListener('drop',e=>{imgNumerosH5(e)})
function imgNumerosH5(e){
    var id=e.dataTransfer.getData('text')
    imgH5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgH5.src='imagens/'+numeros[x]+'.png'} }
    h5.appendChild(imgH5)
    h0.innerHTML='-'
    h5.style.borderBottomColor='black'
}
function imgNumerosTouchH5(){
    imgH5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgH5.src='imagens/'+numeros[x]+'.png'} }
    h5.appendChild(imgH5)
    h0.innerHTML='-'
    h5.style.borderBottomColor='black'
}
h5.addEventListener('dragover',e=>{e.preventDefault()})
h5.addEventListener('dragleave',e=>{e.preventDefault()})
h5.addEventListener('touchend',e=>{imgNumerosTouchH5()})
h5.addEventListener('drop',e=>{imgNumerosH5(e)})
function imgNumerosH5(e){
    var id=e.dataTransfer.getData('text')
    imgH5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgH5.src='imagens/'+numeros[x]+'.png'} }
    h5.appendChild(imgH5)
    h0.innerHTML='-'
    h5.style.borderBottomColor='black'
}
function imgNumerosTouchH5(){
    imgH5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgH5.src='imagens/'+numeros[x]+'.png'} }
    h5.appendChild(imgH5)
    h0.innerHTML='-'
    h5.style.borderBottomColor='black'
}
h6.addEventListener('dragover',e=>{e.preventDefault()})
h6.addEventListener('dragleave',e=>{e.preventDefault()})
h6.addEventListener('touchend',e=>{imgNumerosTouchH6()})
h6.addEventListener('drop',e=>{imgNumerosH6(e)})
function imgNumerosH6(e){
    var id=e.dataTransfer.getData('text')
    imgH6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgH6.src='imagens/'+numeros[x]+'.png'} }
    h6.appendChild(imgH6)
    h0.innerHTML='-'
    h6.style.borderBottomColor='black'
}
function imgNumerosTouchH6(){
    imgH6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgH6.src='imagens/'+numeros[x]+'.png'} }
    h6.appendChild(imgH6)
    h0.innerHTML='-'
    h6.style.borderBottomColor='black'
}
i2.addEventListener('dragover',e=>{e.preventDefault()})
i2.addEventListener('dragleave',e=>{e.preventDefault()})
i2.addEventListener('touchend',e=>{imgNumerosTouchI2()})
i2.addEventListener('drop',e=>{imgNumerosI2(e)})
function imgNumerosI2(e){
    var id=e.dataTransfer.getData('text')
    imgI2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgI2.src='imagens/'+numeros[x]+'.png'} }
    i2.appendChild(imgI2)
}
function imgNumerosTouchI2(){
    imgI2.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgI2.src='imagens/'+numeros[x]+'.png'} }
    i2.appendChild(imgI2)
}
i3.addEventListener('dragover',e=>{e.preventDefault()})
i3.addEventListener('dragleave',e=>{e.preventDefault()})
i3.addEventListener('touchend',e=>{imgNumerosTouchI3()})
i3.addEventListener('drop',e=>{imgNumerosI3(e)})
function imgNumerosI3(e){
    var id=e.dataTransfer.getData('text')
    imgI3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgI3.src='imagens/'+numeros[x]+'.png'} }
    i3.appendChild(imgI3)
}
function imgNumerosTouchI3(){
    imgI3.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgI3.src='imagens/'+numeros[x]+'.png'} }
    i3.appendChild(imgI3)
}
i4.addEventListener('dragover',e=>{e.preventDefault()})
i4.addEventListener('dragleave',e=>{e.preventDefault()})
i4.addEventListener('touchend',e=>{imgNumerosTouchI4()})
i4.addEventListener('drop',e=>{imgNumerosI4(e)})
function imgNumerosI4(e){
    var id=e.dataTransfer.getData('text')
    imgI4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgI4.src='imagens/'+numeros[x]+'.png'} }
    i4.appendChild(imgI4)
}
function imgNumerosTouchI4(){
    imgI4.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgI4.src='imagens/'+numeros[x]+'.png'} }
    i4.appendChild(imgI4)
}
i5.addEventListener('dragover',e=>{e.preventDefault()})
i5.addEventListener('dragleave',e=>{e.preventDefault()})
i5.addEventListener('touchend',e=>{imgNumerosTouchI5()})
i5.addEventListener('drop',e=>{imgNumerosI5(e)})
function imgNumerosI5(e){
    var id=e.dataTransfer.getData('text')
    imgI5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgI5.src='imagens/'+numeros[x]+'.png'} }
    i5.appendChild(imgI5)
}
function imgNumerosTouchI5(){
    imgI5.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgI5.src='imagens/'+numeros[x]+'.png'} }
    i5.appendChild(imgI5)
}
i6.addEventListener('dragover',e=>{e.preventDefault()})
i6.addEventListener('dragleave',e=>{e.preventDefault()})
i6.addEventListener('touchend',e=>{imgNumerosTouchI6()})
i6.addEventListener('drop',e=>{imgNumerosI6(e)})
function imgNumerosI6(e){
    var id=e.dataTransfer.getData('text')
    imgI6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgI6.src='imagens/'+numeros[x]+'.png'} }
    i6.appendChild(imgI6)
}
function imgNumerosTouchI6(){
    imgI6.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgI6.src='imagens/'+numeros[x]+'.png'} }
    i6.appendChild(imgI6)
}
/*Divisor*/
b6.addEventListener('dragover',e=>{e.preventDefault()})
b6.addEventListener('dragleave',e=>{e.preventDefault()})
b6.addEventListener('touchend',e=>{imgNumerosTouchB6()})
b6.addEventListener('drop',e=>{imgNumerosB6(e)})
function imgNumerosB6(e){
    var id=e.dataTransfer.getData('text')
    imgB6.className='numero'
    if(id=='zero'){imgB6.src='imagens/zero.png'}else
    if(id=='um'){imgB6.src='imagens/um.png'}else
    if(id=='dois'){imgB6.src='imagens/dois.png'}else
    if(id=='tres'){imgB6.src='imagens/tres.png'}else
    if(id=='quatro'){imgB6.src='imagens/quatro.png'}else
    if(id=='cinco'){imgB6.src='imagens/cinco.png'}else
    if(id=='seis'){imgB6.src='imagens/seis.png'}else
    if(id=='sete'){imgB6.src='imagens/sete.png'}else
    if(id=='oito'){imgB6.src='imagens/oito.png'}else
    if(id=='nove'){imgB6.src='imagens/nove.png'}
    b6.appendChild(imgB6)
    imgCol3c4.src=imgB6.src
    imgCol3c4.className='numeroCol3'
    col3c4.appendChild(imgCol3c4)
}
function imgNumerosTouchB6(){
    imgB6.className='numero'
    if(numeroTouch=='zero'){imgB6.src='imagens/zero.png'}else
    if(numeroTouch=='um'){imgB6.src='imagens/um.png'}else
    if(numeroTouch=='dois'){imgB6.src='imagens/dois.png'}else
    if(numeroTouch=='tres'){imgB6.src='imagens/tres.png'}else
    if(numeroTouch=='quatro'){imgB6.src='imagens/quatro.png'}else
    if(numeroTouch=='cinco'){imgB6.src='imagens/cinco.png'}else
    if(numeroTouch=='seis'){imgB6.src='imagens/seis.png'}else
    if(numeroTouch=='sete'){imgB6.src='imagens/sete.png'}else
    if(numeroTouch=='oito'){imgB6.src='imagens/oito.png'}else
    if(numeroTouch=='nove'){imgB6.src='imagens/nove.png'}
    b6.appendChild(imgB6)
    imgCol3c4.src=imgB6.src
    imgCol3c4.className='numeroCol3'
    col3c4.appendChild(imgCol3c4)
}

b7.addEventListener('dragover',e=>{e.preventDefault()})
b7.addEventListener('dragleave',e=>{e.preventDefault()})
b7.addEventListener('touchend',e=>{imgNumerosTouchB7()})
b7.addEventListener('drop',e=>{imgNumerosB7(e)})
function imgNumerosB7(e){
    var id=e.dataTransfer.getData('text')
    imgB7.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove','virgula']
    for(var x=0;x<11;x++){ if(id==numeros[x]){imgB7.src='imagens/'+numeros[x]+'.png'} }
    b7.appendChild(imgB7)
    if(id!='virgula'){ 
        imgCol3c4.src=imgB7.src
        imgCol3c4.className='numeroCol3'
        col3c4.appendChild(imgCol3c4)        
    }      
}
function imgNumerosTouchB7(){
    imgB7.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove','virgula']
    for(var x=0;x<11;x++){ if(numeroTouch==numeros[x]){imgB7.src='imagens/'+numeros[x]+'.png'} }
    b7.appendChild(imgB7)
    if(numeroTouch!='virgula'){ 
        imgCol3c4.src=imgB7.src
        imgCol3c4.className='numeroCol3'
        col3c4.appendChild(imgCol3c4)        
    }  
}

b8.addEventListener('dragover',e=>{e.preventDefault()})
b8.addEventListener('dragleave',e=>{e.preventDefault()})
b8.addEventListener('touchend',e=>{imgNumerosTouchB8()})
b8.addEventListener('drop',e=>{imgNumerosB8(e)})
function imgNumerosB8(e){
    var id=e.dataTransfer.getData('text')
    imgB8.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove','virgula']
    for(var x=0;x<11;x++){ if(id==numeros[x]){imgB8.src='imagens/'+numeros[x]+'.png'} }
    b8.appendChild(imgB8)
    if(id!='virgula'){ 
    imgCol3c4.src=imgB8.src
    imgCol3c4.className='numeroCol3'
    col3c4.appendChild(imgCol3c4)
    }
}
function imgNumerosTouchB8(){
    imgB8.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove','virgula']
    for(var x=0;x<11;x++){ if(numeroTouch==numeros[x]){imgB8.src='imagens/'+numeros[x]+'.png'} }
    b8.appendChild(imgB8)
    if(numeroTouch!='virgula'){ 
        imgCol3c4.src=imgB8.src
        imgCol3c4.className='numeroCol3'
        col3c4.appendChild(imgCol3c4)
        }
}

b9.addEventListener('dragover',e=>{e.preventDefault()})
b9.addEventListener('dragleave',e=>{e.preventDefault()})
b9.addEventListener('touchend',e=>{imgNumerosTouchB9()})
b9.addEventListener('drop',e=>{imgNumerosB9(e)})
function imgNumerosB9(e){
    var id=e.dataTransfer.getData('text')
    imgB9.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove','virgula']
    for(var x=0;x<11;x++){ if(id==numeros[x]){imgB9.src='imagens/'+numeros[x]+'.png'} }
    b9.appendChild(imgB9)
    if(id!='virgula'){ 
    imgCol3c4.src=imgB9.src
    imgCol3c4.className='numeroCol3'
    col3c4.appendChild(imgCol3c4)
    }
}
function imgNumerosTouchB9(){
    imgB9.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove','virgula']
    for(var x=0;x<11;x++){ if(numeroTouch==numeros[x]){imgB9.src='imagens/'+numeros[x]+'.png'} }
    b9.appendChild(imgB9); 
    if(numeroTouch!='virgula'){ 
        imgCol3c4.src=imgB9.src
        imgCol3c4.className='numeroCol3'
        col3c4.appendChild(imgCol3c4)
    }
}

b10.addEventListener('dragover',e=>{e.preventDefault()})
b10.addEventListener('dragleave',e=>{e.preventDefault()})
b10.addEventListener('touchend',e=>{imgNumerosTouchB10()})
b10.addEventListener('drop',e=>{imgNumerosB10(e)})
function imgNumerosB10(e){
    var id=e.dataTransfer.getData('text')
    imgB10.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgB10.src='imagens/'+numeros[x]+'.png'} }
    b10.appendChild(imgB10)
    imgCol3c4.src=imgB10.src
    imgCol3c4.className='numeroCol3'
    col3c4.appendChild(imgCol3c4)
}
function imgNumerosTouchB10(){
    imgB10.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgB10.src='imagens/'+numeros[x]+'.png'} }
    b10.appendChild(imgB10)
    imgCol3c4.src=imgB10.src
    imgCol3c4.className='numeroCol3'
    col3c4.appendChild(imgCol3c4)
}

b11.addEventListener('dragover',e=>{e.preventDefault()})
b11.addEventListener('dragleave',e=>{e.preventDefault()})
b11.addEventListener('touchend',e=>{imgNumerosTouchB11()})
b11.addEventListener('drop',e=>{imgNumerosB11(e)})
function imgNumerosB11(e){
    var id=e.dataTransfer.getData('text')
    imgB11.className='numeroCol3'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(id==numeros[x]){imgB11.src='imagens/'+numeros[x]+'.png'} }
    b11.appendChild(imgB11)
    imgCol3c4.src=imgB11.src
    imgCol3c4.className='numeroCol3'
    col3c4.appendChild(imgCol3c4)
}
function imgNumerosTouchB11(){
    imgB11.className='numero'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    for(var x=0;x<10;x++){ if(numeroTouch==numeros[x]){imgB11.src='imagens/'+numeros[x]+'.png'} }
    b11.appendChild(imgB11)
    imgCol3c4.src=imgB11.src
    imgCol3c4.className='numeroCol3'
    col3c4.appendChild(imgCol3c4)
}

//Multiplicação

col3a2.addEventListener('dragover',e=>{e.preventDefault()})
col3a2.addEventListener('dragleave',e=>{e.preventDefault()})
col3a2.addEventListener('touchend',e=>{imgNumerosTouchCol3a2()})
col3a2.addEventListener('drop',e=>{imgNumerosCol3a2(e)})

function imgNumerosCol3a2(e){
    var id=e.dataTransfer.getData('text')
    imgCol3a2.className='numeroCol3'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    var numerosCol3=['zeroCol3','umCol3','doisCol3','tresCol3','quatroCol3','cincoCol3','seisCol3','seteCol3','oitoCol3','noveCol3']
    for(var x=0;x<10;x++){ if(id==numerosCol3[x]){imgCol3a2.src='imagens/'+numeros[x]+'.png'} }
    col3a2.appendChild(imgCol3a2)
    col3a1.innerHTML='+'
}
function imgNumerosTouchCol3a2(){
    imgCol3a2.className='numeroCol3'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    var numerosCol3=['zeroCol3','umCol3','doisCol3','tresCol3','quatroCol3','cincoCol3','seisCol3','seteCol3','oitoCol3','noveCol3']
    for(var x=0;x<10;x++){ if(numeroTouchCol3==numerosCol3[x]){imgCol3a2.src='imagens/'+numeros[x]+'.png'} }
    col3a2.appendChild(imgCol3a2)
    col3a1.innerHTML='+'
}
/*
col3d2.addEventListener('dragover',e=>{e.preventDefault()})
col3d2.addEventListener('dragleave',e=>{e.preventDefault()})
col3d2.addEventListener('touchend',e=>{imgNumerosTouchCol3d2()})
col3d2.addEventListener('drop',e=>{imgNumerosCol3d2(e)})
function imgNumerosCol3d2(e){
    var id=e.dataTransfer.getData('text')
    imgCol3d2.className='numeroCol3'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    var numerosCol3=['zeroCol3','umCol3','doisCol3','tresCol3','quatroCol3','cincoCol3','seisCol3','seteCol3','oitoCol3','noveCol3']
    for(var x=0;x<10;x++){ if(id==numerosCol3[x]){imgCol3d2.src='imagens/'+numeros[x]+'.png'} }
    col3d2.appendChild(imgCol3d2)
}
function imgNumerosTouchCol3d2(){
    imgCol3d2.className='numeroCol3'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    var numerosCol3=['zeroCol3','umCol3','doisCol3','tresCol3','quatroCol3','cincoCol3','seisCol3','seteCol3','oitoCol3','noveCol3']
    for(var x=0;x<10;x++){ if(numeroTouchCol3==numerosCol3[x]){imgCol3d2.src='imagens/'+numeros[x]+'.png'} }
    col3d2.appendChild(imgCol3d2)
} */
col3d3.addEventListener('dragover',e=>{e.preventDefault()})
col3d3.addEventListener('dragleave',e=>{e.preventDefault()})
col3d3.addEventListener('touchend',e=>{imgNumerosTouchCol3d3()})
col3d3.addEventListener('drop',e=>{imgNumerosCol3d3(e)})
function imgNumerosCol3d3(e){
    var id=e.dataTransfer.getData('text')
    imgCol3a2.className='numeroCol3'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    var numerosCol3=['zeroCol3','umCol3','doisCol3','tresCol3','quatroCol3','cincoCol3','seisCol3','seteCol3','oitoCol3','noveCol3']
    for(var x=0;x<10;x++){ if(id==numerosCol3[x]){imgCol3a2.src='imagens/'+numeros[x]+'.png'} }
    col3d3.appendChild(imgCol3a2)
    col3a1.innerHTML=''
}
function imgNumerosTouchCol3d3(){
    imgCol3a2.className='numeroCol3'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    var numerosCol3=['zeroCol3','umCol3','doisCol3','tresCol3','quatroCol3','cincoCol3','seisCol3','seteCol3','oitoCol3','noveCol3']
    for(var x=0;x<10;x++){ if(numeroTouchCol3==numerosCol3[x]){imgCol3a2.src='imagens/'+numeros[x]+'.png'} }
    col3d3.appendChild(imgCol3a2)
    col3a1.innerHTML=''
}
col3d4.addEventListener('dragover',e=>{e.preventDefault()})
col3d4.addEventListener('dragleave',e=>{e.preventDefault()})
col3d4.addEventListener('touchend',e=>{imgNumerosTouchCol3d4()})
col3d4.addEventListener('drop',e=>{imgNumerosCol3d4(e)})
function imgNumerosCol3d4(e){
    var id=e.dataTransfer.getData('text')
    imgCol3d4.className='numeroCol3'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    var numerosCol3=['zeroCol3','umCol3','doisCol3','tresCol3','quatroCol3','cincoCol3','seisCol3','seteCol3','oitoCol3','noveCol3']
    for(var x=0;x<10;x++){ if(id==numerosCol3[x]){imgCol3d4.src='imagens/'+numeros[x]+'.png'} }
    col3d4.appendChild(imgCol3d4)
}
function imgNumerosTouchCol3d4(){
    imgCol3d4.className='numeroCol3'
    var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove']
    var numerosCol3=['zeroCol3','umCol3','doisCol3','tresCol3','quatroCol3','cincoCol3','seisCol3','seteCol3','oitoCol3','noveCol3']
    for(var x=0;x<10;x++){ if(numeroTouchCol3==numerosCol3[x]){imgCol3d4.src='imagens/'+numeros[x]+'.png'} }
    col3d4.appendChild(imgCol3d4)
}
  
//Referente ao Touch Divisão

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
virgula.addEventListener('touchstart',e=>{
    virgula.addEventListener('touchend', e=>{
        numeroTouch='virgula'
        desselecionar()
        virgula.style.border='solid'
        virgula.style.backgroundColor='rgba(54, 54, 54, 0.7)'
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
    virgula.style.borderColor='rgb(104, 128, 179)'
    virgula.style.backgroundColor='rgb(104, 128, 179)'
} 

//Referente ao Touch Multiplicação

zeroCol3.addEventListener('touchstart', e=>{
    zeroCol3.addEventListener('touchend', e=>{
        numeroTouchCol3='zeroCol3'
        desselecionarM()
        zeroCol3.style.borderColor='black'
        zeroCol3.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    }) 
},true) 
umCol3.addEventListener('touchstart', e=>{
    umCol3.addEventListener('touchend', e=>{
        numeroTouchCol3='umCol3'
        desselecionarM()
        umCol3.style.borderColor='black'
        umCol3.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    }) 
},true) 
doisCol3.addEventListener('touchstart', e=>{
    doisCol3.addEventListener('touchend', e=>{
        numeroTouchCol3='doisCol3'
        desselecionarM()
        doisCol3.style.borderColor='black'
        doisCol3.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true) 
tresCol3.addEventListener('touchstart', e=>{
    tresCol3.addEventListener('touchend', e=>{
        numeroTouchCol3='tresCol3'
        desselecionarM()
        tresCol3.style.borderColor='black'
        tresCol3.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    }) 
},true) 
quatroCol3.addEventListener('touchstart', e=>{
    quatroCol3.addEventListener('touchend', e=>{
        numeroTouchCol3='quatroCol3'
        desselecionarM()
        quatroCol3.style.border='solid'
        quatroCol3.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true) 
cincoCol3.addEventListener('touchstart', e=>{
    cincoCol3.addEventListener('touchend', e=>{
        numeroTouchCol3='cincoCol3'
        desselecionarM()
        cincoCol3.style.border='solid'
        cincoCol3.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true) 
seisCol3.addEventListener('touchstart', e=>{
    seisCol3.addEventListener('touchend', e=>{
        numeroTouchCol3='seisCol3'
        desselecionarM()
        seisCol3.style.border='solid'
        seisCol3.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    }) 
},true) 
seteCol3.addEventListener('touchstart', e=>{
    seteCol3.addEventListener('touchend', e=>{
        numeroTouchCol3='seteCol3'
        desselecionarM()
        seteCol3.style.border='solid'
        seteCol3.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true) 
oitoCol3.addEventListener('touchstart', e=>{
    oitoCol3.addEventListener('touchend', e=>{
        numeroTouchCol3='oitoCol3'
        desselecionarM()
        oitoCol3.style.border='solid'
        oitoCol3.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true)  
noveCol3.addEventListener('touchstart',e=>{
    noveCol3.addEventListener('touchend', e=>{
        numeroTouchCol3='noveCol3'
        desselecionarM()
        noveCol3.style.border='solid'
        noveCol3.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true)

function desselecionarM(){
    zeroCol3.style.borderColor='rgb(77, 133, 77)'
    zeroCol3.style.backgroundColor='rgb(77, 133, 77)'
    umCol3.style.borderColor='rgb(77, 133, 77)'
    umCol3.style.backgroundColor='rgb(77, 133, 77)'
    doisCol3.style.borderColor='rgb(77, 133, 77)'
    doisCol3.style.backgroundColor='rgb(77, 133, 77)'
    tresCol3.style.borderColor='rgb(77, 133, 77)'
    tresCol3.style.backgroundColor='rgb(77, 133, 77)'
    quatroCol3.style.borderColor='rgb(77, 133, 77)'
    quatroCol3.style.backgroundColor='rgb(77, 133, 77)'
    cincoCol3.style.borderColor='rgb(77, 133, 77)'
    cincoCol3.style.backgroundColor='rgb(77, 133, 77)'
    seisCol3.style.borderColor='rgb(77, 133, 77)'
    seisCol3.style.backgroundColor='rgb(77, 133, 77)'
    seteCol3.style.borderColor='rgb(77, 133, 77)'
    seteCol3.style.backgroundColor='rgb(77, 133, 77)'
    oitoCol3.style.borderColor='rgb(77, 133, 77)'
    oitoCol3.style.backgroundColor='rgb(77, 133, 77)'
    noveCol3.style.borderColor='rgb(77, 133, 77)'
    noveCol3.style.backgroundColor='rgb(77, 133, 77)'
    
}  