var bgmodal=window.document.getElementById('bgmodal')
var titulo=window.document.getElementById('titulo')

window.onload = function(){
 
    var stage = document.getElementById('stage');
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);
    const img = new Image()
    var numeros=['zero','um','dois','tres','quatro','cinco']
    var numeroAtual=0, imgNumero=[]
    for(var x=0;x<6;x++){imgNumero[x]=document.getElementById(numeros[x])}
    var direcionais=['esquerda','direita','dCima','dBaixo']
    var direcional=[]
    for(var x=0;x<4;x++){direcional[x]=document.getElementById(direcionais[x])}
    direcional[0].addEventListener('click',e=>{ vx = -vel; vy = 0;})  //esquerda
    direcional[1].addEventListener('click',e=>{ vx = vel;  vy = 0; }) //direita
    direcional[2].addEventListener('click',e=>{ vx = 0; vy = -vel; }) //cima
    direcional[3].addEventListener('click',e=>{ vx = 0; vy = vel; }) //baixo
    
    setInterval(game, 240);

    const vel = 1;

    var vx = vy = 0;
    var px =5; //10
    var py = 5; //15
    var tp = 20;
    var qp = 20; //20
    var ax=ay= 10; //15

    var trail = [];
    tail = 5;

    function game(){
        px += vx;
        py += vy;
        if (px <0) {
            px = qp-1;
        }
        if (px > qp-1) {
            px = 0;
        }
        if (py < 0) {
            py = qp-1;
        }
        if (py > qp-1) {
            py = 0;
        }

        ctx.fillStyle = "rgb(179, 122, 104)";
        ctx.fillRect(0,0, stage.width, stage.height);

        //ctx.fillStyle = "red";
        //ctx.fillRect(ax*tp, ay*tp, tp,tp);

        
        img.src = "imagens/"+numeros[numeroAtual] +".png"            //img, x, y, largura, altura
        img.onload = () => { ctx.drawImage(img, ax*tp, ay*tp, tp, tp)}  

        ctx.fillStyle = "rgb(54, 54, 54)";
        for (var i = 0; i < trail.length; i++) {
            ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp-1,tp-1);
            if (trail[i].x == px && trail[i].y == py)
            {
                vx = vy=0;
                //tail =5; //volta pro tamanho inicial
            }
        }

        trail.push({x:px,y:py })
        while (trail.length > tail) {
            trail.shift();
        }

        if (ax==px && ay==py){
            tail++;
            colorirNumero()
            numeroAtual++
            if(numeroAtual==6){
                vx=vy=0
                setTimeout(venceu,1000)
            }else{
                ax = Math.floor(Math.random()*qp);
                ay = Math.floor(Math.random()*qp);

            }

            
        }

    }

    function keyPush(event){
        event.preventDefault()
        switch (event.keyCode) {
            case 37: // Left
                vx = -vel;
                vy = 0;
                break;
            case 38: // up
                vx = 0;
                vy = -vel;
                break;
            case 39: // right
                vx = vel;
                vy = 0;
                break;
            case 40: // down
                vx = 0;
                vy = vel;
                break;          
            default:
                
            break;
        }


    }
    function venceu(){
        bgmodal.style.display='block'
        bgmodal.focus()
        titulo.style.textAlign='center'
    }
    function colorirNumero(){
        imgNumero[numeroAtual].style.opacity='1'
        imgNumero[numeroAtual].style.filter='grayscale(0)'
        imgNumero[numeroAtual].style.transform='scale(1.5)'
        
    }

}

