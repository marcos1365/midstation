var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

//Referente ao Wilson Math
var resposta, respostaCorreta, erros, acertos, a,b
var estrelas=window.document.getElementById('estrelas')

var divImagensUm=window.document.getElementById('imagens1')
var divImagensDois=window.document.getElementById('imagens2')

var verif = window.document.getElementById('verif')
var resultado= window.document.getElementById('resultado')
var respostaCerta= window.document.getElementById('respostaCerta')
verif.addEventListener('click',verificar)
resposta=window.document.getElementById('res') 
var resposta=window.document.getElementById('res')
resposta.addEventListener('keydown', e=>{
    if (e.code == "Enter"){ 
        verificar()
    } 
}) 
function iniciar(){
    window.document.getElementById('res').focus()
    //sortearNumeros()
    exibirImagens()
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
        window.document.getElementById('res').focus()
    }else{
        errou()
        window.document.getElementById('res').focus()
    }
}
function acertou(){
    acertos=acertos+1
    
        verif.setAttribute('disabled',true)
        window.document.getElementById('res').disabled=false
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
    respostaCerta.innerHTML=`${a} + ${b} = ${respostaCorreta}`
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
    for(var x=0;x<a;x++){
        divImagensUm.removeChild(divImagensUm.lastChild)
    }
    for(var x=0;x<b;x++){
        divImagensDois.removeChild(divImagensDois.lastChild)
    } 
    resultado.innerHTML='RESULTADO'
    respostaCerta.innerHTML='&nbsp'
    resultado.style.background='rgb(179, 122, 104)'
    respostaCerta.style.background='rgb(179, 122, 104)'
    window.document.getElementById('res').value=''
    //sortearNumeros()
    exibirImagens()
    window.document.getElementById('verif').disabled=false
    window.document.getElementById('res').disabled=false
    
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
    a=String(Number.parseInt(Math.random()*10)+1)
    b=String(Number.parseInt(Math.random()*10)+1)
    respostaCorreta=Number.parseInt(a)+Number.parseInt(b)
}
function exibirImagens(){
    sortearNumeros()
    //1bala 2balao 3banana 4bola 5bolo 6boneca 7borboleta 8borracha 9brigadeiro 10cachorro
    //11carro 12casa 13coelho 14coruja 15dinossauro 16elefante 17foguete 18formiga 19galinha 20gato
    //21girafa 22golfinho 23lapis 24leao 25maca 26melancia 27mochila 28morango 29panda 30patins
    //31peixe 32pinguim 33pipa 34pirulito 35ponei 36raposa 37sorvete 38trem 39urso 40uva
    var imagens=['bala','balao','banana','bola','bolo','boneca','borboleta','borracha','brigadeiro','cachorro',
                'carro','casa','coelho','coruja','dinossauro','elefante','foguete','foguete','galinha','gato',
                'girafa','golfinho','lapis','leao','maca','melancia','mochila','morango','panda','patins',
                'peixe','pinguim','pipa','pirulito','ponei','raposa','sorvete','trem','urso','uva']
    var imagem=Number.parseInt(Math.random()*40)
    var imagemFilho=[]
    for(var x=0;x<a;x++){
        imagemFilho[x]=window.document.createElement('img')
        imagemFilho[x].src='imagens/'+imagens[imagem]+'.png'
        imagemFilho[x].className='imagens'
        divImagensUm.appendChild(imagemFilho[x])
    }
    for(var x=0;x<b;x++){
        imagemFilho[x]=window.document.createElement('img')
        imagemFilho[x].src='imagens/'+imagens[imagem]+'.png'
        imagemFilho[x].className='imagens'
        divImagensDois.appendChild(imagemFilho[x])
    }
}
