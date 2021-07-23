var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')
const tela=document.querySelector('#tela')
const contexto=tela.getContext('2d')
tela.width=380
tela.height=300
var numero=0
var voltar = window.document.getElementById('voltar')

//var ongoingTouches = new Array; 
const pincel = {
    ativo: false,
    movendo: false,
    pos: {x:0,y:0},
    posAnterior:null
} 
const desenharLinha = (linha)=>{

    contexto.beginPath()
    contexto.moveTo(linha.posAnterior.x-7,linha.posAnterior.y-7)
    //contexto.lineTo(linha.pos.x,linha.pos.y); contexto.stroke()
    contexto.arc(linha.pos.x-tela.getBoundingClientRect().x,linha.pos.y-tela.getBoundingClientRect().y,10,0,Math.PI*2)
    //contexto.fillStyle="black";
    contexto.fill()
    //alert(tela.getBoundingClientRect().y)
} 
const ciclo = ()=>{
    if(pincel.ativo && pincel.movendo && pincel.posAnterior){
        desenharLinha({pos:pincel.pos,posAnterior:pincel.posAnterior})
        pincel.movendo=false;
    }
    pincel.posAnterior={x:pincel.pos.x,y:pincel.pos.y}
    //setTimeout(ciclo, 1)
    requestAnimationFrame(ciclo)   
}
function gradiente(){
    // Create gradient
    var gradient = contexto.createLinearGradient(0, 0, tela.width, 0);
    gradient.addColorStop("0"," magenta");
    gradient.addColorStop("0.5", "blue");
    gradient.addColorStop("1.0", "red");
    // Fill with gradient
    contexto.fillStyle = gradient;
}

function inserirTexto(){
    contexto.fillStyle='black'
    contexto.font = "250px Comic Sans MS"
    contexto.textAlign = "center"
    contexto.fillText(numero,190,250)
    window.document.getElementById('botao-voltar').style.opacity="0.2"
    gradiente()
}
function voltarNumero(){
    numero-=1
    if(numero==0){window.document.getElementById('botao-voltar').style.opacity="0.2"}
    if(numero==-1){
        numero=0
        window.document.getElementById('botao-voltar').style.opacity="0.2"
    }
    window.document.getElementById('botao-avancar').style.opacity="1"
    limpar()
}
function avancarNumero(){
    numero+=1
    if(numero==6){
        numero=10
        window.document.getElementById('botao-avancar').style.opacity="0.2"
        bgmodal.style.display='block'
        bgmodal.focus()
        titulo.style.textAlign='center'
    }
    window.document.getElementById('botao-voltar').style.opacity="1"
    limpar()
}
function limpar(){
    contexto.clearRect(0, 0, tela.width, tela.height);
    contexto.fillStyle='black'
    contexto.fillText(numero,190,250)
    gradiente()
    limparTouch()
}
function inserirTextoTouch(){
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d"); 
    ctx.fillStyle='black'
    ctx.font = "250px Comic Sans MS"
    ctx.textAlign = "center"
    ctx.fillText(numero,150,250)
    window.document.getElementById('botao-voltar').style.opacity="0.2"
    gradiente()
}
function limparTouch(){
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d"); 
    ctx.clearRect(0, 0, tela.width, tela.height);
    ctx.fillStyle='black'
    ctx.fillText(numero,150,250)
}
tela.onmousedown=(evento)=>{pincel.ativo=true}
tela.onmouseup=(evento)=>{pincel.ativo=false}
tela.onmousemove=(evento)=>{
    pincel.pos.x=evento.clientX
    pincel.pos.y=evento.clientY
    pincel.movendo=true
} 
function startup() {
    var el = document.getElementsByTagName("canvas")[0];
    el.addEventListener("touchstart", handleStart, false); 
    //el.addEventListener("touchend", handleEnd, false);      
    el.addEventListener("touchcancel", handleCancel, false);
    //el.addEventListener("touchleave", handleEnd, false);
    el.addEventListener("touchmove", handleMove, false); 
}

var ongoingTouches = new Array; 

function handleStart(evt){ 
    evt.preventDefault();   
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d"); 
    var touches = evt.changedTouches;
    var gradient = ctx.createLinearGradient(0, 0, el.width, 0);
    for (var i=0; i < touches.length; i++) {

        ongoingTouches.push(copyTouch(touches[i]));
        //var color = colorForTouch(touches[i]);
        ctx.beginPath();
        ctx.arc(touches[i].pageX-el.getBoundingClientRect().x, touches[i].pageY-el.getBoundingClientRect().y-window.scrollY, 10, 0,2*Math.PI, false);  // a circle at the start
        gradient.addColorStop("0"," magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.fillStyle=gradient;
        ctx.fill(); 
    }     
}
function handleMove(evt) {
    evt.preventDefault();
    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;
    var gradient = ctx.createLinearGradient(0, 0, el.width, 0);

for (var i=0; i < touches.length; i++) {
    //var color = colorForTouch(touches[i]);
    var idx = ongoingTouchIndexById(touches[i].identifier);

    if(idx >= 0) {
         ctx.beginPath();
         ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
        //ctx.lineTo(touches[i].pageX, touches[i].pageY);
        //ctx.lineWidth = 10;
        ctx.arc(touches[i].pageX-el.getBoundingClientRect().x, touches[i].pageY-el.getBoundingClientRect().y-window.scrollY,10,0,Math.PI*2) 
        
        gradient.addColorStop("0"," magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        //ctx.strokeStyle = gradient;
        //ctx.stroke();
        ctx.fillStyle=gradient;
        ctx.fill()
    ongoingTouches.splice(idx, 1, copyTouch(touches[i]));  // swap in the new touch record
    } else {
    //log("can't figure out which touch to continue");
    }
}
}
function handleEnd(evt) {
    evt.preventDefault();

    var el = document.getElementsByTagName("canvas")[0];
    var ctx = el.getContext("2d");
    var touches = evt.changedTouches;
    var gradient = ctx.createLinearGradient(0, 0, el.width, 0);
    for (var i=0; i < touches.length; i++) {
        var color = colorForTouch(touches[i]);
        var idx = ongoingTouchIndexById(touches[i].identifier);

        if(idx >= 0) {
        ctx.lineWidth = 4;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.moveTo(ongoingTouches[idx].pageX, ongoingTouches[idx].pageY);
        ctx.arc(touches[i].pageX-el.getBoundingClientRect().x, touches[i].pageY-el.getBoundingClientRect().y-window.scrollY, 10, 0,2*Math.PI, false);  // a circle at the start
        gradient.addColorStop("0"," magenta");
        gradient.addColorStop("0.5", "blue");
        gradient.addColorStop("1.0", "red");
        ctx.fillStyle=gradient;
        ctx.fill()
        //ctx.lineTo(touches[i].pageX, touches[i].pageY);
        //ctx.fillRect(touches[i].pageX-4, touches[i].pageY-4, 8, 8);  // and a square at the end
        ongoingTouches.splice(idx, 1);  // remove it; we're done
        } else {
        //log("can't figure out which touch to end");
        }
    }
}
function handleCancel(evt) {
evt.preventDefault();
var touches = evt.changedTouches;

for (var i=0; i < touches.length; i++) {
    ongoingTouches.splice(i, 1);  // remove it; we're done
}
}
function colorForTouch(touch) {
var r = touch.identifier % 16;
var g = Math.floor(touch.identifier / 3) % 16;
var b = Math.floor(touch.identifier / 7) % 16;
r = r.toString(16); // make it a hex digit
g = g.toString(16); // make it a hex digit
b = b.toString(16); // make it a hex digit
var color = "#" + r + g + b;
return color;
}
function copyTouch(touch) {
return { identifier: touch.identifier, pageX: touch.pageX, pageY: touch.pageY };
}
function ongoingTouchIndexById(idToFind) {
for (var i=0; i < ongoingTouches.length; i++) {
    var id = ongoingTouches[i].identifier;

    if (id == idToFind) {
    return i;
    }
}
return -1;    // não econtrado
}
function log(msg) {
//var p = document.getElementById('log');
//p.innerHTML = msg + "\n" + p.innerHTML;
}
function onTouch(evt) {
evt.preventDefault();
if (evt.touches.length > 1 || (evt.type == "touchend" && evt.touches.length > 0))
    return;

var newEvt = document.createEvent("MouseEvents");
var type = null;
var touch = null;
switch (evt.type) {
    case "touchstart":    type = "mousedown";    touch = evt.changedTouches[0];break;
    case "touchmove":        type = "mousemove";    touch = evt.changedTouches[0];break;
    case "touchend":        type = "mouseup";    touch = evt.changedTouches[0];break;
}
newEvt.initMouseEvent(type, true, true, evt.originalTarget.ownerDocument.defaultView, 0,
    touch.screenX, touch.screenY, touch.clientX, touch.clientY,
    evt.ctrlKey, evt.altKey, evt.shirtKey, evt.metaKey, 0, null);
evt.originalTarget.dispatchEvent(newEvt);
}
  
function inserirImagem(){
    const img = new Image()
    img.src = "./dez.png"
    img.onload = () => { contexto.drawImage(img, 300, 100, 300, 340)} 
    contexto.drawImage(img,0,0)
}
function iniciar(){
    startup()
    inserirTextoTouch()
    inserirTexto()
    ciclo()
}

