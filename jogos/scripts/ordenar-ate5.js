var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

//A variável imagem precisa ser criada fora da função, para o número sempre ser substituído
var img=document.createElement('img')
var img1=document.createElement('img')
var img2=document.createElement('img')
var img3=document.createElement('img')
var img4=document.createElement('img')
var img5=document.createElement('img')

var imgResultado=document.createElement('img')



var numeroImagens, imagem, erros, acertos, numeroTouch=0
var ids=['um','dois','tres','quatro','cinco']
var estrelas=window.document.getElementById('estrelas')
var divImagens= window.document.getElementById('imagens')
var verif=window.document.getElementById('verif')
var resultado= window.document.getElementById('resultado')
var respostaUsuario=[]
var respostaCerta= window.document.getElementById('respostaCerta')
var divNumeros=window.document.getElementById('numeros')

verif.addEventListener('click',verificar)


function iniciar(){
    exibirImagens()
    sortearNumeros()
    acertos=0
    erros=0
    exibirEstrelas()
    exibirErrosAcertos()
}
function verificar(){
    var ids=['um','dois','tres','quatro','cinco']
    var respostaErrada=0
    for(var x=0;x<numeroImagens;x++){
       if(respostaUsuario[x]!=ids[x]){
           respostaErrada+=1
        }
        respostaUsuario[x]='0'
    }
   if(respostaErrada>0){
       errou()
   }else{
       acertou()
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
    tremSaindo()
    window.setTimeout(tremSaindoInicio,3000)
    window.setTimeout(limparCampos,2000)

}
function errou(){
    erros+=1
    acertos-=1
    removeClique()
    resultado.innerHTML='ERROU!<br>'
    for(var x=0;x<numeroImagens;x++){
        respostaCerta.innerHTML+='<u>'+(x+1)+'</u>&nbsp'
    }

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
        divImagens.removeChild(divImagens.lastChild)  
        
    } 
   
    for(var x=0;x<5;x++){
        divNumeros.removeChild(divNumeros.lastChild)  
        
    } 
    resultado.removeChild(resultado.childNodes[0])
    numeroTouch=0
    exibirImagens()
    sortearNumeros()
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
   
    var posicao= []
    var conteudo=['um','dois','tres','quatro','cinco']
    var sorteado
    var numero
    for(var x=0;x<5;x++){
        sorteado=Number.parseInt(Math.random()*(5-x));
        posicao[x]=conteudo[sorteado];
        conteudo.splice(sorteado,1);
        
        numero=window.document.createElement('img')
        numero.setAttribute('id',posicao[x])
        numero.className='numero'
        numero.src='imagens/'+posicao[x]+'.png'
        numero.setAttribute('draggable','true')    
        numero.addEventListener('dragstart', e=>{e.dataTransfer.setData('text',e.target.id)})
        divNumeros.appendChild(numero)

        if(numero.id=='um'){var um = window.document.getElementById('um')}else
        if(numero.id=='dois'){var dois = window.document.getElementById('dois')}else
        if(numero.id=='tres'){var tres = window.document.getElementById('tres')}else
        if(numero.id=='quatro'){var quatro = window.document.getElementById('quatro')}else
        if(numero.id=='cinco'){var cinco = window.document.getElementById('cinco')}
        
    }
    
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

}
function exibirImagens(){
    numeroImagens=Number.parseInt(Math.random()*5)+1
    var imagens=['vagaoAzul','vagaoRoxo','vagaoVermelho']
    var vagao=[]
    var numeroVagao
    var imagemVagao
    for(var x=0;x<numeroImagens;x++){
        vagao[x]=window.document.createElement('div')
        vagao[x].className='vagao'

        numeroVagao=window.document.createElement('div')
        numeroVagao.className='numeroVagao'
        numeroVagao.setAttribute('id','numero'+(x+1))
        //numeroVagao.addEventListener('touchend',e=>{ imgNumerosTouch()})

        numeroVagao.setAttribute('dropzone','copy')
        numeroVagao.addEventListener('dragover',e=>{e.preventDefault()})
        
        imagemVagao=window.document.createElement('img')
        imagemVagao.src='imagens/'+imagens[Number.parseInt(Math.random()*3)]+'.png'
        imagemVagao.className='imagens'
        
        vagao[x].appendChild(numeroVagao)
        vagao[x].appendChild(imagemVagao)
        divImagens.appendChild(vagao[x])
    } 
    
    if(numeroVagao.id=='numero1'){
    window.document.getElementById('numero1').addEventListener('drop',e=>{ imgNumeroUm(e)})
    
    window.document.getElementById('numero1').addEventListener('touchend',e=>{ imgNumeroUmTouch(e);})
    
    }else
    if(numeroVagao.id=='numero2'){
    window.document.getElementById('numero1').addEventListener('drop',e=>{ imgNumeroUm(e)}) 
    window.document.getElementById('numero2').addEventListener('drop',e=>{ imgNumeroDois(e)})
    
    window.document.getElementById('numero1').addEventListener('touchend',e=>{ imgNumeroUmTouch(e)})
    window.document.getElementById('numero2').addEventListener('touchend',e=>{ imgNumeroDoisTouch(e)})
    }else
    if(numeroVagao.id=='numero3'){
    window.document.getElementById('numero1').addEventListener('drop',e=>{ imgNumeroUm(e)}) 
    window.document.getElementById('numero2').addEventListener('drop',e=>{ imgNumeroDois(e)}) 
    window.document.getElementById('numero3').addEventListener('drop',e=>{ imgNumeroTres(e)}) 

    window.document.getElementById('numero1').addEventListener('touchend',e=>{ imgNumeroUmTouch(e)})
    window.document.getElementById('numero2').addEventListener('touchend',e=>{ imgNumeroDoisTouch(e)})
    window.document.getElementById('numero3').addEventListener('touchend',e=>{ imgNumeroTresTouch(e)})
    }else
    if(numeroVagao.id=='numero4'){
    window.document.getElementById('numero1').addEventListener('drop',e=>{ imgNumeroUm(e)}) 
    window.document.getElementById('numero2').addEventListener('drop',e=>{ imgNumeroDois(e)}) 
    window.document.getElementById('numero3').addEventListener('drop',e=>{ imgNumeroTres(e)}) 
    window.document.getElementById('numero4').addEventListener('drop',e=>{ imgNumeroQuatro(e)})

    window.document.getElementById('numero1').addEventListener('touchend',e=>{ imgNumeroUmTouch(e)})
    window.document.getElementById('numero2').addEventListener('touchend',e=>{ imgNumeroDoisTouch(e)})
    window.document.getElementById('numero3').addEventListener('touchend',e=>{ imgNumeroTresTouch(e)})
    window.document.getElementById('numero4').addEventListener('touchend',e=>{ imgNumeroQuatroTouch(e)})
    }else
    if(numeroVagao.id=='numero5'){
    window.document.getElementById('numero1').addEventListener('drop',e=>{ imgNumeroUm(e)}) 
    window.document.getElementById('numero2').addEventListener('drop',e=>{ imgNumeroDois(e)}) 
    window.document.getElementById('numero3').addEventListener('drop',e=>{ imgNumeroTres(e)}) 
    window.document.getElementById('numero4').addEventListener('drop',e=>{ imgNumeroQuatro(e)})
    window.document.getElementById('numero5').addEventListener('drop',e=>{ imgNumeroCinco(e)})

    window.document.getElementById('numero1').addEventListener('touchend',e=>{ imgNumeroUmTouch(e)})
    window.document.getElementById('numero2').addEventListener('touchend',e=>{ imgNumeroDoisTouch(e)})
    window.document.getElementById('numero3').addEventListener('touchend',e=>{ imgNumeroTresTouch(e)})
    window.document.getElementById('numero4').addEventListener('touchend',e=>{ imgNumeroQuatroTouch(e)})
    window.document.getElementById('numero5').addEventListener('touchend',e=>{ imgNumeroCincoTouch(e)})
    }
    tremChegando()
    window.setTimeout(tremInicio,3000)
}

function imgNumeroUm(e){ window.document.getElementById('numero1').appendChild(imgNumeros(e,1))}
function imgNumeroDois(e){ window.document.getElementById('numero2').appendChild(imgNumeros(e,2))}
function imgNumeroTres(e){ window.document.getElementById('numero3').appendChild(imgNumeros(e,3))}
function imgNumeroQuatro(e){ window.document.getElementById('numero4').appendChild(imgNumeros(e,4))}
function imgNumeroCinco(e){ window.document.getElementById('numero5').appendChild(imgNumeros(e,5))}


function imgNumeroUmTouch(e){ window.document.getElementById('numero1').appendChild(imgNumerosTouch(e,1))}
function imgNumeroDoisTouch(e){ window.document.getElementById('numero2').appendChild(imgNumerosTouch(e,2))}
function imgNumeroTresTouch(e){ window.document.getElementById('numero3').appendChild(imgNumerosTouch(e,3))}
function imgNumeroQuatroTouch(e){ window.document.getElementById('numero4').appendChild(imgNumerosTouch(e,4))}
function imgNumeroCincoTouch(e){ window.document.getElementById('numero5').appendChild(imgNumerosTouch(e,5))}


function imgNumeros(e,num){
    var id=e.dataTransfer.getData('text')
    var ids=['um','dois','tres','quatro','cinco']
    for(var x=0;x<5;x++){ 
        if(id==ids[x]){
            if(num==1){img1.src='imagens/'+id+'.png'; respostaUsuario[0]=id}else
            if(num==2){img2.src='imagens/'+id+'.png'; respostaUsuario[1]=id}else
            if(num==3){img3.src='imagens/'+id+'.png'; respostaUsuario[2]=id}else
            if(num==4){img4.src='imagens/'+id+'.png'; respostaUsuario[3]=id}else
            if(num==5){img5.src='imagens/'+id+'.png'; respostaUsuario[4]=id}         
        }
    }
   //alert(respostaUsuario)

    //img.className='numeroVagao'
    img1.className='numeroVagao'
    img2.className='numeroVagao'
    img3.className='numeroVagao'
    img4.className='numeroVagao'
    img5.className='numeroVagao'
    
    if(num==1){return img1}else   
    if(num==2){return img2}else   
    if(num==3){return img3}else   
    if(num==4){return img4}else   
    if(num==5){return img5}
}
function insereClique(){
    verif.addEventListener('click',verificar)
}
function removeClique(){
      verif.removeEventListener('click',verificar) 
}
function desselecionar(){
    //Função para tratar TOUCH
    for(var x=0;x<5;x++){
        window.document.getElementById(ids[x]).style.border='none'
        window.document.getElementById(ids[x]).style.backgroundColor='rgb(179, 122, 104)'
    }
    
}
function imgNumerosTouch(e,num){
    //Função para copiar um número para um vagão usando TOUCH
    //var id=e.dataTransfer.getData('text')
    if(numeroTouch==0){
        window.alert('ESCOLHA UM NÚMERO!')
    }else{
    var id=numeroTouch
    var ids=['um','dois','tres','quatro','cinco']
    for(var x=0;x<5;x++){ 
        if(id==ids[x]){
            if(num==1){img1.src='imagens/'+id+'.png'; respostaUsuario[0]=id}else
            if(num==2){img2.src='imagens/'+id+'.png'; respostaUsuario[1]=id}else
            if(num==3){img3.src='imagens/'+id+'.png'; respostaUsuario[2]=id}else
            if(num==4){img4.src='imagens/'+id+'.png'; respostaUsuario[3]=id}else
            if(num==5){img5.src='imagens/'+id+'.png'; respostaUsuario[4]=id}         
        }
    }
   //alert(respostaUsuario)

    //img.className='numeroVagao'
    img1.className='numeroVagao'
    img2.className='numeroVagao'
    img3.className='numeroVagao'
    img4.className='numeroVagao'
    img5.className='numeroVagao'
    
    if(num==1){return img1}else   
    if(num==2){return img2}else   
    if(num==3){return img3}else   
    if(num==4){return img4}else   
    if(num==5){return img5}
    }
}
function tremChegando(){
    let dImagens=window.document.getElementById('imagens')
    dImagens.classList.add('trem_chegando')    

    //divImagens.className="trem_chegando"
    //divImagens.classList.toggle('trem_chegando')
    //divImagens.style.animation="trem-chegando 2s"
}
function tremInicio(){
    //divImagens.className="trem_inicio"
    let dImagens=window.document.getElementById('imagens')
    dImagens.classList.remove('trem_chegando')
    
}
function tremSaindo(){
    let dImagens=window.document.getElementById('imagens')
    dImagens.classList.add('trem_saindo')   
}
function tremSaindoInicio(){
    let dImagens=window.document.getElementById('imagens')
    dImagens.classList.remove('trem_saindo')
}
