var kuan=document.body.clientWidth;
var gao=document.body.clientHeight;

var canvas=document.getElementById("canvas");
var context=canvas.getContext("2d");

window.onload=function(){
    canvas.width=kuan;
    canvas.height=gao;
    context.beginPath();
    context.arc(100,100,50,0,1*Math.PI);
    context.fillStyle="#bfb";
    context.fill();
    context.stroke();

}
