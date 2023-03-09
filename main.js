var canvas=document.getElementById("meucanvas2")
ctx=canvas.getContext("2d")
var roveralto=100
var roverlargo=90
var backgrouendimage="martechao.jpeg"
var roverimage="rover.png"
var rovery=10
var roverx=10
function add(){
    backgrouend=new Image();
    backgrouend.onload=uploadBackground
    backgrouend.src=backgrouendimage
    rover=new Image();
    rover.onload=uploadRover
    rover.src=roverimage
}
function uploadBackground(){
    ctx.drawImage(backgrouend,0,0,canvas.width,canvas.height)
}
function uploadRover(){
    ctx.drawImage(rover,roverx,rovery,roverlargo,roveralto)
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    teclaapertada=e.keyCode
    console.log(teclaapertada)
    if(teclaapertada=="38"){
        up()
    }
    if(teclaapertada=="40"){
        down()
    }
    if(teclaapertada=="37"){
        left()
    }
    if(teclaapertada=="39"){
        right()
    }
} 
function up(){
    if(rovery>0){
        rovery=rovery-10
        uploadBackground()
        uploadRover()
    }
}
function down(){
    if(rovery<400){
        rovery=rovery+10
        uploadBackground()
        uploadRover()
    }
}
function left(){
    if(roverx>0){
        roverx=roverx-10
        uploadBackground()
        uploadRover()
    }
}
function right(){
    if(rovery<700){
        roverx=roverx+10
        uploadBackground()
        uploadRover()
    }
}

