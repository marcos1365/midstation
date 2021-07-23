//const numeros= window.document.querySelectorAll('.numero')
var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')


var resposta, respostaCorreta, erros, acertos, a,b,numeroTouch
//Variáveis da coluna 1
var dividendo=window.document.getElementById('dividendo')
var divisor=window.document.getElementById('divisor')
var estrelas=window.document.getElementById('estrelas')
var verif = window.document.getElementById('verif')
var resultado= window.document.getElementById('resultado')
var respostaCerta= window.document.getElementById('respostaCerta')
verif.addEventListener('click',verificar)
resposta=window.document.getElementById('resposta')

//Variáveis coluna 2
var divMacas= window.document.getElementById('macas')
var divCriancas=window.document.getElementById('criancas')
var crianca=[]
var resto=window.document.getElementById('resto')
resposta.addEventListener('keydown', e=>{
    if (e.code == "Enter"){ 
        verificar()
    } 
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
    respostaCerta.innerHTML=`${a} &#247; ${b} = ${parseFloat(respostaCorreta)}`
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
    
    limparMacasCriancas()
    sortearNumeros()

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
function limparMacasCriancas(){
    resto.innerHTML=''
    divMacas.innerHTML='' 
    for(var x=0;x<b;x++){
        divCriancas.removeChild(divCriancas.lastChild)
    }   
}
function limpar(){
    for(var x=1;x<=b;x++){
        window.document.getElementById(x).innerHTML=''
    }
    resto.innerHTML=''
    window.document.getElementById('macas').innerHTML=''
    exibirMacas()
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
    a=String(Number.parseInt(Math.random()*11)+10)
    b=String(Number.parseInt(Math.random()*5)+2)
    while(a%b==0){
        a=String(Number.parseInt(Math.random()*11)+10)
        b=String(Number.parseInt(Math.random()*5)+2)
    }
    dividendo.innerHTML=a
    divisor.innerHTML=b
    respostaCorreta=Number.parseInt((Number.parseInt(a)/Number.parseInt(b)))
    exibirMacas()
    exibirCriancas()
}

function exibirCriancas(){
    
    var nomes=['JOÃO','MARIA','CAUAN','YASMIM','TIAGO','GABRIELA','LUCAS','LAURA','PEDRO','PAULA',
    'ANA','ADILSON','CREUZA','CARLOS','PAULO','LETÍCIA','SOFIA','CAIO','DANIEL','LORENA']

    var numeroCrianca
    var nomeCrianca

    macas.src='imagens/maca.png'
    for(var x=0;x<b;x++){
        crianca[x]=window.document.createElement('div')

        numeroCrianca=window.document.createElement('div')
        numeroCrianca.className='numeroCrianca'
        numeroCrianca.setAttribute('id',x+1)
        
        numeroCrianca.setAttribute('dropzone','copy')
        numeroCrianca.addEventListener('dragover',e=>{e.preventDefault()})

        nomeCrianca=window.document.createElement('p')
        nomeCrianca.innerHTML=nomes[Number.parseInt(Math.random()*20)]
        nomeCrianca.className='criancas'
        
        crianca[x].appendChild(numeroCrianca)
        crianca[x].appendChild(nomeCrianca)
        divCriancas.appendChild(crianca[x])
    } 
    if(numeroCrianca.id=='2'){
        window.document.getElementById('1').addEventListener('drop',e=>{ imgNumeroUm(e)}) 
        window.document.getElementById('2').addEventListener('drop',e=>{ imgNumeroDois(e)})

        window.document.getElementById('1').addEventListener('touchend',e=>{ imgNumeroUmTouch(e);})
        window.document.getElementById('2').addEventListener('touchend',e=>{ imgNumeroDoisTouch(e);})
    }else
        if(numeroCrianca.id=='3'){
        window.document.getElementById('1').addEventListener('drop',e=>{ imgNumeroUm(e)}) 
        window.document.getElementById('2').addEventListener('drop',e=>{ imgNumeroDois(e)}) 
        window.document.getElementById('3').addEventListener('drop',e=>{ imgNumeroTres(e)}) 

        window.document.getElementById('1').addEventListener('touchend',e=>{ imgNumeroUmTouch(e);})
        window.document.getElementById('2').addEventListener('touchend',e=>{ imgNumeroDoisTouch(e);})
        window.document.getElementById('3').addEventListener('touchend',e=>{ imgNumeroTresTouch(e);})
    }else
        if(numeroCrianca.id=='4'){
        window.document.getElementById('1').addEventListener('drop',e=>{ imgNumeroUm(e)}) 
        window.document.getElementById('2').addEventListener('drop',e=>{ imgNumeroDois(e)}) 
        window.document.getElementById('3').addEventListener('drop',e=>{ imgNumeroTres(e)}) 
        window.document.getElementById('4').addEventListener('drop',e=>{ imgNumeroQuatro(e)})

        window.document.getElementById('1').addEventListener('touchend',e=>{ imgNumeroUmTouch(e);})
        window.document.getElementById('2').addEventListener('touchend',e=>{ imgNumeroDoisTouch(e);})
        window.document.getElementById('3').addEventListener('touchend',e=>{ imgNumeroTresTouch(e);})
        window.document.getElementById('4').addEventListener('touchend',e=>{ imgNumeroQuatroTouch(e);})
    }else
        if(numeroCrianca.id=='5'){
        window.document.getElementById('1').addEventListener('drop',e=>{ imgNumeroUm(e)}) 
        window.document.getElementById('2').addEventListener('drop',e=>{ imgNumeroDois(e)}) 
        window.document.getElementById('3').addEventListener('drop',e=>{ imgNumeroTres(e)}) 
        window.document.getElementById('4').addEventListener('drop',e=>{ imgNumeroQuatro(e)})
        window.document.getElementById('5').addEventListener('drop',e=>{ imgNumeroCinco(e)})

        window.document.getElementById('1').addEventListener('touchend',e=>{ imgNumeroUmTouch(e);})
        window.document.getElementById('2').addEventListener('touchend',e=>{ imgNumeroDoisTouch(e);})
        window.document.getElementById('3').addEventListener('touchend',e=>{ imgNumeroTresTouch(e);})
        window.document.getElementById('4').addEventListener('touchend',e=>{ imgNumeroQuatroTouch(e);})
        window.document.getElementById('5').addEventListener('touchend',e=>{ imgNumeroCincoTouch(e);})
    }else
        if(numeroCrianca.id=='6'){
        window.document.getElementById('1').addEventListener('drop',e=>{ imgNumeroUm(e)}) 
        window.document.getElementById('2').addEventListener('drop',e=>{ imgNumeroDois(e)}) 
        window.document.getElementById('3').addEventListener('drop',e=>{ imgNumeroTres(e)}) 
        window.document.getElementById('4').addEventListener('drop',e=>{ imgNumeroQuatro(e)})
        window.document.getElementById('5').addEventListener('drop',e=>{ imgNumeroCinco(e)})
        window.document.getElementById('6').addEventListener('drop',e=>{ imgNumeroSeis(e)})

        window.document.getElementById('1').addEventListener('touchend',e=>{ imgNumeroUmTouch(e);})
        window.document.getElementById('2').addEventListener('touchend',e=>{ imgNumeroDoisTouch(e);})
        window.document.getElementById('3').addEventListener('touchend',e=>{ imgNumeroTresTouch(e);})
        window.document.getElementById('4').addEventListener('touchend',e=>{ imgNumeroQuatroTouch(e);})
        window.document.getElementById('5').addEventListener('touchend',e=>{ imgNumeroCincoTouch(e);})
        window.document.getElementById('6').addEventListener('touchend',e=>{ imgNumeroSeisTouch(e);})
    }
    resto.addEventListener('dragover',e=>{e.preventDefault()})
    window.document.getElementById('resto').addEventListener('drop',e=>{ imgResto(e)}) 
    window.document.getElementById('resto').addEventListener('touchend',e=>{ imgRestoTouch(e)})
} 
function imgNumeroUm(e){ window.document.getElementById('1').appendChild(imgNumeros(e,1))}
function imgNumeroDois(e){ window.document.getElementById('2').appendChild(imgNumeros(e,2))}
function imgNumeroTres(e){ window.document.getElementById('3').appendChild(imgNumeros(e,3))}
function imgNumeroQuatro(e){ window.document.getElementById('4').appendChild(imgNumeros(e,4))}
function imgNumeroCinco(e){ window.document.getElementById('5').appendChild(imgNumeros(e,5))}
function imgNumeroSeis(e){ window.document.getElementById('6').appendChild(imgNumeros(e,6))}
function imgResto(e){ window.document.getElementById('resto').appendChild(imgNumeros(e,7))}

function imgNumeroUmTouch(e){ window.document.getElementById('1').appendChild(imgNumerosTouch(e,1))}
function imgNumeroDoisTouch(e){ window.document.getElementById('2').appendChild(imgNumerosTouch(e,2))}
function imgNumeroTresTouch(e){ window.document.getElementById('3').appendChild(imgNumerosTouch(e,3))}
function imgNumeroQuatroTouch(e){ window.document.getElementById('4').appendChild(imgNumerosTouch(e,4))}
function imgNumeroCincoTouch(e){ window.document.getElementById('5').appendChild(imgNumerosTouch(e,5))}
function imgNumeroSeisTouch(e){ window.document.getElementById('6').appendChild(imgNumerosTouch(e,6))}
function imgRestoTouch(e){ window.document.getElementById('resto').appendChild(imgNumerosTouch(e,7))}
function imgNumeros(e,num){
    var macas=window.document.createElement('img')
    macas.src='imagens/maca.png'
    macas.className='macas'
    macas.setAttribute('draggable','false')
    divMacas.removeChild(divMacas.lastChild)
    return macas
}
function imgNumerosTouch(e,num){
    var macas=window.document.createElement('img')
    macas.src='imagens/maca.png'
    macas.className='macas'
    macas.setAttribute('draggable','false')
    divMacas.removeChild(divMacas.lastChild)
    return macas
}
function exibirMacas(){
   
    var posicao= []
    //var conteudo=['um','dois','tres','quatro','cinco','seis']
    //var sorteado=Number.parseInt(Math.random()*(6-x))
    var macas
    for(var x=0;x<a;x++){
        //sorteado=Number.parseInt(Math.random()*(6-x));
        //posicao[x]=conteudo[sorteado];
        //conteudo.splice(sorteado,1);
        
        macas=window.document.createElement('img')
        macas.setAttribute('id',posicao[x])
        macas.className='macas'
        macas.src='imagens/maca.png'
        macas.setAttribute('draggable','true')    
        macas.addEventListener('dragstart', e=>{e.dataTransfer.setData('text',e.target.id)})
        divMacas.appendChild(macas)
    }
}