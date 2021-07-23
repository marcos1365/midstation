var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

var contador=0
var dropEncaixe=[], dragForma=[], encaixeAtual, formaAtual
var idEncaixes=['imgUm','imgDois','imgTres','imgQuatro','imgCinco']
var encaixes=['quadradoEncaixe','retanguloEncaixe','trianguloEncaixe','circuloEncaixe','losangoEncaixe']
var imgEncaixes=[]
for(var x=0;x<5;x++){ imgEncaixes[x]=document.getElementById(idEncaixes[x])}
for(var x=0;x<5;x++){ imgEncaixes[x].setAttribute('draggable','false')}
for(var x=0;x<5;x++){ imgEncaixes[x].addEventListener('drop',e=>{soltarEncaixe(e)})}
for(var x=0;x<5;x++){ imgEncaixes[x].addEventListener('dragover',e=>{e.preventDefault();e.dataTransfer.dropEffect ='copy'})}
for(var x=0;x<5;x++){ imgEncaixes[x].addEventListener('dragleave',e=>{e.preventDefault();e.dataTransfer.dropEffect ='copy'})}

var idFormas=['formaUm','formaDois','formaTres','formaQuatro','formaCinco']
var formas=['quadrado','retangulo','triangulo','circulo','losango']
var imgFormas=[]
for(var x=0;x<5;x++){ imgFormas[x]=document.getElementById(idFormas[x])}
for(var x=0;x<5;x++){ imgFormas[x].addEventListener('dragstart',e=>{arrastarForma(e)})}
var divFormas=['fUm','fDois','fTres','fQuatro','fCinco']

function iniciar(){ 
    sortearFormasEncaixes()
    
}
function exibirEncaixes(){
  for(var x=0;x<5;x++){
      window.document.getElementById(idEncaixes[x]).src='imagens/'+encaixes[x]+'.png' 
  }   
}
function exibirFormas(){
  for(var x=0;x<5;x++){
      window.document.getElementById(idFormas[x]).src='imagens/'+formas[x]+'.png' 
  }   
}
function sortearFormasEncaixes(){
    
    var conteudoEncaixes=['quadradoEncaixe','retanguloEncaixe','trianguloEncaixe','circuloEncaixe','losangoEncaixe']
    var conteudoFormas=['quadrado','retangulo','triangulo','circulo','losango']
    var sorteado
    for(var x=0;x<5;x++){ 
        sorteado=Number.parseInt(Math.random()*(5-x)) ; 
        window.document.getElementById(idEncaixes[x]).src='imagens/'+conteudoEncaixes[sorteado]+'.png' 
        dropEncaixe[x]=conteudoEncaixes[sorteado]
        conteudoEncaixes.splice(sorteado,1);
    }
    for(var x=0;x<5;x++){ 
        sorteado=Number.parseInt(Math.random()*(5-x)) ; 
        window.document.getElementById(idFormas[x]).src='imagens/'+conteudoFormas[sorteado]+'.png'
        dragForma[x]=conteudoFormas[sorteado]
        conteudoFormas.splice(sorteado,1);
    }
}
// Funções Eventos
function soltarEncaixe(e){
    if(e.target.id=='imgUm'){encaixeAtual=dropEncaixe[0]}else
    if(e.target.id=='imgDois'){encaixeAtual=dropEncaixe[1]}else
    if(e.target.id=='imgTres'){encaixeAtual=dropEncaixe[2]}else
    if(e.target.id=='imgQuatro'){encaixeAtual=dropEncaixe[3]}else
    if(e.target.id=='imgCinco'){encaixeAtual=dropEncaixe[4]}
    verificar(e.target.id)
}
function arrastarForma(e){
    if(e.target.id=='formaUm'){formaAtual=dragForma[0]}else
    if(e.target.id=='formaDois'){formaAtual=dragForma[1]}else
    if(e.target.id=='formaTres'){formaAtual=dragForma[2]}else
    if(e.target.id=='formaQuatro'){formaAtual=dragForma[3]}else
    if(e.target.id=='formaCinco'){formaAtual=dragForma[4]} 
}
function verificar(id){ 
    if((formaAtual+'Encaixe')==encaixeAtual){ 
        for(var x=0;x<5;x++){
            if(id==idEncaixes[x]){
                window.document.getElementById(id).src="imagens/"+formaAtual+".png"
                contador++
                x=5
            }
        }
        //if(id=='imgUm'){window.document.getElementById(id).src="imagens/"+formaAtual+".png"}
    } 
    if(contador==5){
        setTimeout(finalizar,1000)
    } 
}
function finalizar(){
    bgmodal.style.display='block'
    bgmodal.focus()
    titulo.style.textAlign='center'
}
function desselecionar(){
    for(var x=0;x<5;x++){
        window.document.getElementById(divFormas[x]).style.border='solid rgb(54, 54, 54)'
        window.document.getElementById(divFormas[x]).style.backgroundColor='rgb(54, 54, 54)' 
    }
}
//Eventos Formas
imgFormas[0].addEventListener('touchstart', e=>{
    imgFormas[0].addEventListener('touchend', e=>{  
        desselecionar()
        arrastarForma(e)
        window.document.getElementById(divFormas[0]).style.border='solid'
        window.document.getElementById(divFormas[0]).style.backgroundColor='rgb(100, 100, 100)'
    }) 
},true)
imgFormas[1].addEventListener('touchstart', e=>{
    imgFormas[1].addEventListener('touchend', e=>{ 
        desselecionar()
        arrastarForma(e)
        window.document.getElementById(divFormas[1]).style.border='solid'
        window.document.getElementById(divFormas[1]).style.backgroundColor='rgb(100, 100, 100)'
    }) 
},true)
imgFormas[2].addEventListener('touchstart', e=>{
    imgFormas[2].addEventListener('touchend', e=>{ 
        desselecionar()
        arrastarForma(e)
        window.document.getElementById(divFormas[2]).style.border='solid'
        window.document.getElementById(divFormas[2]).style.backgroundColor='rgb(100, 100, 100)'
    }) 
},true)
imgFormas[3].addEventListener('touchstart', e=>{
    imgFormas[3].addEventListener('touchend', e=>{ 
        desselecionar()
        arrastarForma(e)
        window.document.getElementById(divFormas[3]).style.border='solid'
        window.document.getElementById(divFormas[3]).style.backgroundColor='rgb(100, 100, 100)'
    }) 
},true)
imgFormas[4].addEventListener('touchstart', e=>{
    imgFormas[4].addEventListener('touchend', e=>{ 
        desselecionar()
        arrastarForma(e)
        window.document.getElementById(divFormas[4]).style.border='solid'
        window.document.getElementById(divFormas[4]).style.backgroundColor='rgb(100, 100, 100)'
    }) 
},true)

//Eventos Encaixes
imgEncaixes[0].addEventListener('touchstart', e=>{
    imgEncaixes[0].addEventListener('touchend', e=>{ 
        desselecionar()
        soltarEncaixe(e)
    }) 
},true)
imgEncaixes[1].addEventListener('touchstart', e=>{
    imgEncaixes[1].addEventListener('touchend', e=>{ 
        desselecionar()
        soltarEncaixe(e)
    }) 
},true)
imgEncaixes[2].addEventListener('touchstart', e=>{
    imgEncaixes[2].addEventListener('touchend', e=>{ 
        desselecionar()
        soltarEncaixe(e)
    }) 
},true)
imgEncaixes[3].addEventListener('touchstart', e=>{
    imgEncaixes[3].addEventListener('touchend', e=>{ 
        desselecionar()
        soltarEncaixe(e)
    }) 
},true)
imgEncaixes[4].addEventListener('touchstart', e=>{
    imgEncaixes[4].addEventListener('touchend', e=>{ 
        desselecionar()
        soltarEncaixe(e)
    }) 
},true)