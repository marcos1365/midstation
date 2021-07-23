
var posicao= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var conteudo=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
var estado= [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
var sorteado;
var acertos=0
for(var x=0;x<20;x++){
    sorteado=Number.parseInt(Math.random()*(20-x));
    posicao[x]=conteudo[sorteado];
    conteudo.splice(sorteado,1);
}
var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

var imagemf=['imagemf0','imagemf1','imagemf2','imagemf3','imagemf4','imagemf5','imagemf6','imagemf7','imagemf8','imagemf9','imagemf10'
            ,'imagemf11','imagemf12','imagemf13','imagemf14','imagemf15','imagemf16','imagemf17','imagemf18','imagemf19']
var imagensf=[]
var numeros=['zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove','dez']
var cartas=['cartaQuadrado','cartaCirculo','cartaRetangulo','cartaTriangulo','cartaLosango','cartaTrapezio','cartaEstrela','cartaElipse','cartaPentagono','cartaParalelogramo']

for(x=0;x<20;x++){ imagensf[x]=window.document.getElementById(imagemf[x]) }
for(x=0;x<20;x++){ 
    for(y=0;y<10;y++){
        imagensf[x].src="imagens/"+cartas[posicao[x]]+".png"
        imagensf[x].setAttribute('draggable','false')
    }
}

var imagem=['imagem0','imagem1','imagem2','imagem3','imagem4','imagem5','imagem6','imagem7','imagem8','imagem9','imagem10'
            ,'imagem11','imagem12','imagem13','imagem14','imagem15','imagem16','imagem17','imagem18','imagem19']
var imagens=[]
for(x=0;x<20;x++){ imagens[x]=window.document.getElementById(imagem[x]) }
for(x=0;x<20;x++){
    imagens[x].addEventListener('click',e=>{clicar(e)})
    imagens[x].setAttribute('draggable','false')
} 

//window.setInterval(verificar,4000)

function clicar(e){ 
    verificar()
    var num
    for(i=0;i<20;i++){
        if(e.target.id==imagem[i]){
            num=Number.parseInt(imagem[i].substr(6,2))
        }
    }
    document.getElementById('carta'+(num+1)).style.transform='rotateY(180deg)'
    estado[num]=1
    comparar(num)
    setTimeout(verificar,4000)
}
function comparar(atual){
    for(var x=0;x<20;x++){
        if(estado[x]===1 && estado[atual]===1 && x!=atual && posicao[x]===posicao[atual]){
            for(i=0;i<20;i++){
                if(x===i){
                    imagens[x].removeEventListener('click',clicar)
                    estado[x]=0  
                }
            }
            
            //Atual
            for(i=0;i<20;i++){
                if(atual===i){
                    imagens[x].removeEventListener('click',clicar)
                    estado[atual]=0 
                    acertos+=1 
                }
            }
            
        }
    }
    
    if(acertos==10){
        bgmodal.style.display='block'
        titulo.style.textAlign='center'
    }    
} 
function verificar(){
    for(var x=0;x<20;x++){
        for(var y=0;y<20;y++){
            if(estado[x]===1 && estado[y]===1 && x!=y && posicao[x]!=posicao[y]){ 
                       
                viraXY(x,y)                                    
            }    
        }
    }
}
function viraXY(a,b){
    viraX(a)
    viraY(b)
}
function viraX(x){
    for(i=0;i<20;i++){
       if(x===i){
            //imagens[i].src="imagens/cartaBack.png" 
            document.getElementById('carta'+(i+1)).style.transform='rotateY(0deg)'
            estado[x]=0
        } 
    }
}
function viraY(y){
    for(i=0;i<20;i++){
        if(y===i){
            //imagens[i].src="imagens/cartaBack.png" 
            document.getElementById('carta'+(i+1)).style.transform='rotateY(0deg)'
            estado[y]=0 
        } 
    }
}
