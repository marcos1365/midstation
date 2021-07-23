var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

//const numeros= window.document.querySelectorAll('.numero')
//var zero=window.document.getElementById('zero')
var um=window.document.getElementById('um')
var dois=window.document.getElementById('dois')
var tres=window.document.getElementById('tres')
var quatro=window.document.getElementById('quatro')
var cinco=window.document.getElementById('cinco')
/*var seis=window.document.getElementById('seis')
var sete=window.document.getElementById('sete')
var oito=window.document.getElementById('oito')
var nove=window.document.getElementById('nove')*/

//A variável precisa ser criada fora da função, para o número sempre ser substituído
var img=document.createElement('img')
var imgResultado=document.createElement('img')
var imgD3=document.createElement('img')
var imgD5=document.createElement('img')

//Referente ao contar até 5
var numeroImagens, imagem, erros, acertos
var estrelas=window.document.getElementById('estrelas')
var divImagens= window.document.getElementById('imagens')
var resultado= window.document.getElementById('resultado')

var respostaCerta= window.document.getElementById('respostaCerta')

//Eventos de clicar
um.addEventListener('click',verificarUm)
dois.addEventListener('click',verificarDois)
tres.addEventListener('click',verificarTres)
quatro.addEventListener('click',verificarQuatro)
cinco.addEventListener('click',verificarCinco)
function verificarUm(){verificar(1)}
function verificarDois(){verificar(2)}
function verificarTres(){verificar(3)}
function verificarQuatro(){verificar(4)}
function verificarCinco(){verificar(5)}

function iniciar(){
    sortearNumeros()
    exibirImagens() 
    acertos=0
    erros=0
    exibirEstrelas()
    exibirErrosAcertos()
}
function verificar(num){
    if(num==numeroImagens){
        acertou()
    }else{
        errou()
    }

}
function acertou(){
    acertos=acertos+1
    removeClique()
    resultado.innerHTML='ACERTOU!<br>'
    resultado.style.background='green'
    respostaCerta.style.background='green'
    respostaCerta.innerHTML='&nbsp'
    imgResultado.src='imagens/certo.png'
    imgResultado.className='resultado'
    window.document.getElementById('resultado').appendChild(imgResultado) 
    exibirEstrelas()
    exibirErrosAcertos()

    window.setTimeout(limparCampos,2000)

}
function errou(){
    erros+=1
    acertos-=1
    removeClique()
    resultado.innerHTML='ERROU!<br>'
    for(var x=0;x<numeroImagens;x++){
        respostaCerta.innerHTML+='&#10048; '
    }
    respostaCerta.innerHTML+='= '+numeroImagens
    //respostaCerta.innerHTML=`${(Number(a+b))} + ${(Number(c+d))} = ${respostaCorreta}`
    resultado.style.background='red'
    respostaCerta.style.background='red'
    imgResultado.src='imagens/errado.png'
    imgResultado.className='resultado'
    window.document.getElementById('resultado').appendChild(imgResultado)
    if(acertos<0){
        acertos=0
    }
    exibirEstrelas()
    exibirErrosAcertos()

    window.setTimeout(limparCampos,5000)

}
function limparCampos(){
    resultado.innerHTML='&nbsp'
    
    resultado.style.background='rgb(179, 122, 104)'
    respostaCerta.style.background='rgb(179, 122, 104)'
    respostaCerta.innerHTML='&nbsp'
    for(var x=0;x<numeroImagens;x++){
        divImagens.removeChild(divImagens.childNodes[0])
    }
    resultado.removeChild(resultado.childNodes[0])
    
    sortearNumeros()
    exibirImagens()
    insereClique()
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
    numeroImagens=Number.parseInt(Math.random()*5)+1
    imagem=Number.parseInt(Math.random()*40)
}

function exibirImagens(){
    //1bala 2balao 3banana 4bola 5bolo 6boneca 7borboleta 8borracha 9brigadeiro 10cachorro
    //11carro 12casa 13coelho 14coruja 15dinossauro 16elefante 17foguete 18formiga 19galinha 20gato
    //21girafa 22golfinho 23lapis 24leao 25maca 26melancia 27mochila 28morango 29panda 30patins
    //31peixe 32pinguim 33pipa 34pirulito 35ponei 36raposa 37sorvete 38trem 39urso 40uva
    var imagens=['bala','balao','banana','bola','bolo','boneca','borboleta','borracha','brigadeiro','cachorro',
                'carro','casa','coelho','coruja','dinossauro','elefante','foguete','foguete','galinha','gato',
                'girafa','golfinho','lapis','leao','maca','melancia','mochila','morango','panda','patins',
                'peixe','pinguim','pipa','pirulito','ponei','raposa','sorvete','trem','urso','uva']
    /*
    for(var x=0;x<40;x++){
        if(imagem==x){img.src='imagens/'+imagens[x]+'.png'}
    }
    */
    var imagemFilho=[]
    for(var x=0;x<numeroImagens;x++){
        imagemFilho[x]=window.document.createElement('img')
        imagemFilho[x].src='imagens/'+imagens[imagem]+'.png'
        imagemFilho[x].className='imagens'
        divImagens.appendChild(imagemFilho[x])
    }

}
function insereClique(){
    um.addEventListener('click',verificarUm)
    dois.addEventListener('click',verificarDois)
    tres.addEventListener('click',verificarTres)
    quatro.addEventListener('click',verificarQuatro)
    cinco.addEventListener('click',verificarCinco)
}
function removeClique(){
    um.removeEventListener('click',verificarUm)
    dois.removeEventListener('click',verificarDois)
    tres.removeEventListener('click',verificarTres)
    quatro.removeEventListener('click',verificarQuatro)
    cinco.removeEventListener('click',verificarCinco)
}