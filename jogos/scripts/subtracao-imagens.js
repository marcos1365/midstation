const numeros= window.document.querySelectorAll('.numero')
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

var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

var numeroTouch
//var numeroUm=window.document.getElementById('um')
var a2=window.document.getElementById('a2')
var a4=window.document.getElementById('a4')
var b3=window.document.getElementById('b3')
var b4=window.document.getElementById('b4')
var b5=window.document.getElementById('b5')
var c3=window.document.getElementById('c3')
var c4=window.document.getElementById('c4')
var c5=window.document.getElementById('c5')
var d2=window.document.getElementById('d2')
var d3=window.document.getElementById('d3')
var d4=window.document.getElementById('d4')
var d5=window.document.getElementById('d5')
//A variável precisa ser criada fora da função, para o número sempre ser substituído
var img=document.createElement('img')
var imgD2=document.createElement('img')
var imgD3=document.createElement('img')
var imgD5=document.createElement('img')

//Referente ao Wilson Math
var a,b,c,d, resposta, respostaCorreta, erros, acertos, contador=0
var conta1=window.document.getElementById('contaA2')
var conta2=window.document.getElementById('contaA3')
var conta3=window.document.getElementById('contaB2')
var conta4=window.document.getElementById('contaB3')
var estrelas=window.document.getElementById('estrelas')
var verif = window.document.getElementById('verif')
var resultado= window.document.getElementById('resultado')
var respostaCerta= window.document.getElementById('respostaCerta')
verif.addEventListener('click',verificar) 
var resposta=window.document.getElementById('res')
resposta.addEventListener('keydown', e=>{
    if (e.code == "Enter"){ 
        verificar()
    } 
}) 
function iniciar(){
    window.document.getElementById('res').focus()
    sortearNumeros() 
    acertos=0
    erros=0
    exibirEstrelas()
    exibirErrosAcertos()
}
function verificar(){
    
    if(resposta.value.length==0){
        window.document.getElementById('res').focus()
    }else
    if(Number(resposta.value)==respostaCorreta){
        acertou()
        
    }else{
        errou()
    }

}
function acertou(){
    acertos=acertos+1
    
        verif.setAttribute('disabled',true)
        window.document.getElementById('res').disabled=true
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
    window.document.getElementById('res').disabled=false
    resultado.innerHTML=`ERROU!`
    respostaCerta.innerHTML=`${(Number(b))} - ${(Number(d))} = ${respostaCorreta}`
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
    window.document.getElementById('res').value=''
    window.document.getElementById('verif').disabled=false
    window.document.getElementById('res').disabled=false    
    contador=0
    c5.innerHTML='0' 
    d2.innerHTML=''   
    sortearNumeros()
    window.document.getElementById('res').focus()

    if(acertos==10){
        //window.alert(`PARABÉNS! VOCÊ VENCEU! NOTA: ${Number.parseInt((acertos*10)/(erros+acertos))}`)
        //iniciar()
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
    //a=Number.parseInt(Math.random()*10)
    b=Number.parseInt(Math.random()*10)
    //c=Number.parseInt(Math.random()*10)
    d=Number.parseInt(Math.random()*10)  
    if(b<d){
        b=d+1
        if(d==9){
            d=7
            b=d+1
        }
    }
       
    //a=String(a)
    b=String(b)
    //c=String(c)
    d=String(d)    
    conta1.innerHTML=''
    conta2.innerHTML=b
    conta3.innerHTML=''
    conta4.innerHTML=d
    b3.innerHTML=''
    b5.innerHTML=b
    c3.innerHTML='-'
    c5.innerHTML='0'
    respostaCorreta=(Number.parseInt(b)-Number.parseInt(d))
    exibirImagens()
}
function exibirImagens(){
    var posicao= []
    var macas
    for(var x=0;x<b;x++){
        
        macas=window.document.createElement('img')
        //macas.setAttribute('id',posicao[x])
        macas.className='macas'
        macas.src='imagens/maca.png'
        //macas.setAttribute('draggable','true')    
        macas.addEventListener('click', removerImagens)
        d2.appendChild(macas)
    }
}
function removerImagens(){
    contador++
    d2.removeChild(d2.lastChild)
    c5.innerHTML=contador
}
//refente ao Soma com reserva
function limpar(){
    contador=0
    c5.innerHTML='0' 
    d2.innerHTML=''
    exibirImagens()
}
numeros.forEach(num=>{addEventListener('dragstart', e=>{e.dataTransfer.setData('text',e.target.id)})}) 
//Referente ao Touch
zero.addEventListener('touchstart', e=>{
    zero.addEventListener('touchend', e=>{
        numeroTouch='zero'
        desselecionar()
        zero.style.border='solid'
        zero.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    }) 
},true) 
um.addEventListener('touchstart', e=>{

    um.addEventListener('touchend', e=>{
        numeroTouch='um'
        desselecionar()
        um.style.border='solid'
        um.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    }) 
},true) 
dois.addEventListener('touchstart', e=>{
    dois.addEventListener('touchend', e=>{
        numeroTouch='dois'
        desselecionar()
        dois.style.border='solid'
        dois.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true) 
tres.addEventListener('touchstart', e=>{
    tres.addEventListener('touchend', e=>{
        numeroTouch='tres'
        desselecionar()
        tres.style.border='solid'
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
    //nove.style.boxShadow='inset 0 0 0 6px red'

    /*
    nove.addEventListener('touchmove',e=>{
        e.preventDefault()
        nove.style.opacity='0.5'
        nove.style.filter='brightness(300%)'
        var touchLocation=e.targetTouches[0]
        nove.style.left=touchLocation.pageX+'px'
        nove.style.top=touchLocation.pageY+'px'        
    })*/
    nove.addEventListener('touchend', e=>{
        nove.style.opacity='1'
        nove.style.filter='brightness(100%)'
        //nove.style.left ="270px"
        //nove.style.top ='1230px'
        numeroTouch='nove'
        desselecionar()
        nove.style.border='solid'
        nove.style.backgroundColor='rgba(54, 54, 54, 0.7)'
    })
},true)

function desselecionar(){
    zero.style.border='none'
    zero.style.backgroundColor='rgb(77, 133, 77)'
    um.style.border='none'
    um.style.backgroundColor='rgb(77, 133, 77)'
    dois.style.border='none'
    dois.style.backgroundColor='rgb(77, 133, 77)'
    tres.style.border='none'
    tres.style.backgroundColor='rgb(77, 133, 77)'
    quatro.style.border='none'
    quatro.style.backgroundColor='rgb(77, 133, 77)'
    cinco.style.border='none'
    cinco.style.backgroundColor='rgb(77, 133, 77)'
    seis.style.border='none'
    seis.style.backgroundColor='rgb(77, 133, 77)'
    sete.style.border='none'
    sete.style.backgroundColor='rgb(77, 133, 77)'
    oito.style.border='none'
    oito.style.backgroundColor='rgb(77, 133, 77)'
    nove.style.border='none'
    nove.style.backgroundColor='rgb(77, 133, 77)'
}

//Referente ao arrastar e soltar com mouse e touch tamnbém

d5.addEventListener('dragover',e=>{
    e.preventDefault()
    e.dataTransfer.dropEffect ='copy'
    
})
d5.addEventListener('dragleave',e=>{
    e.preventDefault()
    e.dataTransfer.dropEffect ='copy'
    
})
d5.addEventListener('drop',e=>{
imgD5Numeros(e)
})
d5.addEventListener('touchend',e=>{imgD5NumerosTouch()})   //testando o touch
d5.addEventListener('pointerup', e=>{imgD5Numeros(e)})

function imgD5Numeros(e){
    var id=e.dataTransfer.getData('text')

    if(id=='zero'){imgD5.setAttribute('src','imagens/zero.png')}else
    if(id=='um'){imgD5.setAttribute('src','imagens/um.png')}else
    if(id=='dois'){imgD5.src='imagens/dois.png'}else
    if(id=='tres'){imgD5.src='imagens/tres.png'}else
    if(id=='quatro'){imgD5.src='imagens/quatro.png'}else
    if(id=='cinco'){imgD5.src='imagens/cinco.png'}else
    if(id=='seis'){imgD5.src='imagens/seis.png'}else
    if(id=='sete'){imgD5.src='imagens/sete.png'}else
    if(id=='oito'){imgD5.src='imagens/oito.png'}else
    if(id=='nove'){imgD5.src='imagens/nove.png'}
    d5.appendChild(imgD5)
}
function imgD5NumerosTouch(){
    if(numeroTouch=='zero'){imgD5.src='imagens/zero.png'}else
    if(numeroTouch=='um'){imgD5.src='imagens/um.png'}else
    if(numeroTouch=='dois'){imgD5.src='imagens/dois.png'}else
    if(numeroTouch=='tres'){imgD5.src='imagens/tres.png'}else
    if(numeroTouch=='quatro'){imgD5.src='imagens/quatro.png'}else
    if(numeroTouch=='cinco'){imgD5.src='imagens/cinco.png'}else
    if(numeroTouch=='seis'){imgD5.src='imagens/seis.png'}else
    if(numeroTouch=='sete'){imgD5.src='imagens/sete.png'}else
    if(numeroTouch=='oito'){imgD5.src='imagens/oito.png'}else
    if(numeroTouch=='nove'){imgD5.src='imagens/nove.png'}
    d5.appendChild(imgD5)
    
}
