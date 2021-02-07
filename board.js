var canvas= document.getElementById('canvas');
var Context = canvas.getContext("2d"); 
canvas.width=1100;
canvas.height=520;
var radius=3;
var dragging =false;
var flag_circle=false;
var flag_square=false;
var flag_line=false;
var flag_draw=false;
var flag_clear=false;


Context.lineWidth=radius*2;

var color;

var  xPosition;
var  yPosition;

var x1; 
var y1;
var x2;
var y2;

function changeColor(){
 color=document.getElementById('color').value;
}



   $("#ln").on('click', function () {
       flag_line=true;
       flag_circle=false;
       flag_square=false;
       dragging=false;
       flag_draw=false;
       flag_clear=false;

   });
   $("#crl").on('click', function () {
    flag_circle=true;
    flag_line=false;
    flag_square=false;
    dragging=false;
    flag_draw=false;
    flag_clear=false;

});
$("#sq").on('click', function () {
    flag_square=true;
    flag_circle=false;
    flag_line=false;
    dragging=false;
    flag_draw=false;
    flag_clear=false;


});

$("#dr").on('click', function () {
    flag_draw=true;
    flag_square=false;
    flag_circle=false;
    flag_line=false;
    dragging=false;
    flag_clear=false;
    

});

$("#clear").on('click', function () {
    flag_clear=true;
    flag_draw=false;
    flag_square=false;
    flag_circle=false;
    flag_line=false;
    dragging=false;
    

});

canvas.addEventListener('mousedown',(e)=>{
    var rect = e.target.getBoundingClientRect();
    xPosition = e.clientX - rect.left; 
    yPosition = e.clientY - rect.top;  
    x1=xPosition;
    y1=yPosition;
    if(flag_draw || flag_clear) dragging=true;

  
});

canvas.addEventListener('mousemove',(e)=>{
    if(flag_draw){
        if(dragging){
            Context.lineTo(e.offsetX,e.offsetY);
            Context.strokeStyle = color;
            Context.stroke();
            Context.beginPath();
            Context.arc(e.offsetX,e.offsetY,radius,0,Math.PI*2)
            Context.fill();
            Context.fillStyle = color;
            Context.beginPath();
            Context.moveTo(e.offsetX,e.offsetY);
        }
  }
  else if(flag_clear){
    if(dragging){
        Context.lineTo(e.offsetX,e.offsetY);
        Context.strokeStyle = "white";
        Context.stroke();
        Context.beginPath();
        Context.arc(e.offsetX,e.offsetY,radius,0,Math.PI*2)
        Context.fill();
        Context.fillStyle = "white";
        Context.beginPath();
        Context.moveTo(e.offsetX,e.offsetY);
    }
}

});


canvas.addEventListener('mouseup',(e)=>{
    Context.beginPath();
    var rect = e.target.getBoundingClientRect();
    xPosition = e.clientX - rect.left; 
    yPosition = e.clientY - rect.top; 
    x2=xPosition;
    y2=yPosition;
    dragging=false;
    if(flag_circle)
    {  
    var conlcr=canvas.getContext("2d");
        conlcr.beginPath();
        var rad = Math.sqrt(Math.pow(Math.abs(x1-x2), 2) + Math.pow(Math.abs(y1-y2), 2)); 
        conlcr.arc(xPosition,yPosition,rad,0,Math.PI*2)
        conlcr.fill();
        conlcr.fillStyle = color;
      conlcr.stroke();   
          
      }
      else if(flag_square)
        {       
        var conlsq=canvas.getContext("2d"); 
        conlsq.fillStyle = color;
        conlsq.fillRect(xPosition,yPosition,x2,y2);
      
            }

        else if(flag_line){
                var conlin=canvas.getContext("2d"); 
                 conlin.strokeStyle = color;
                conlin.moveTo(xPosition,yPosition);
                conlin.lineTo(xPosition+x2,yPosition+y2);             
                        conlin.stroke();
                
            }

});

