var canvas= document.getElementById('canvas');
var Context = canvas.getContext("2d"); 
canvas.width=600;
canvas.height=500;
var radius=3;
var dragging =false;
var flag_circle=false;
var flag_square=false;
var flag_line=false;
var flag_draw=false;


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

// var putPoint=function(e){
//     if(dragging){
//         Context.lineTo(e.offsetX,e.offsetY);
//         Context.strokeStyle = color;
//         Context.stroke();
//         Context.beginPath();
//         Context.arc(e.offsetX,e.offsetY,radius,0,Math.PI*2)
//         Context.fill();
//         Context.fillStyle = color;
//         Context.beginPath();
//         Context.moveTo(e.offsetX,e.offsetY);
//     }
// }
// var engage=function(e){
//     dragging =true;
//     putPoint(e);

// }
// var disengaged=function(e){
//     if(dragging !=false ) {
//     dragging=false;
//     Context.beginPath();
// }
//     var rect = e.target.getBoundingClientRect();
//     xPosition = e.clientX - rect.left; 
//     yPosition = e.clientY - rect.top;  
    
//     if(flag_line){
//         conlin=canvas.getContext("2d"); 
//         conlin.strokeStyle = color;
//         conlin.moveTo(xPosition,yPosition);
//         conlin.lineTo(xPosition+150,yPosition+75); 
//         conlin.stroke();
//         console.log(flag_line);
//         console.log(flag_circle);
//         console.log(flag_square);
//   }
//   else if(flag_square)
//   {       
//   conlsq=canvas.getContext("2d"); 
//   conlsq.fillStyle = color;
//   conlsq.fillRect(xPosition,yPosition,150,75);
//   console.log(flag_line);
//         console.log(flag_circle);
//         console.log(flag_square);
//   }
//   else if(flag_circle)
// {
//     conlcr=canvas.getContext("2d");
//     conlcr.beginPath();
//     conlcr.arc(xPosition,yPosition,40,0,Math.PI*2)
//     conlcr.fill();
//     conlcr.fillStyle = color;
//   conlcr.stroke();   
//   console.log(flag_line);
//         console.log(flag_circle);
//         console.log(flag_square);
//   }
// }

   $("#ln").on('click', function () {
       flag_line=true;
       flag_circle=false;
       flag_square=false;
       dragging=false;
       flag_draw=false;

   });
   $("#crl").on('click', function () {
    flag_circle=true;
    flag_line=false;
    flag_square=false;
    dragging=false;
    flag_draw=false;
    console.log(flag_circle); 

});
$("#sq").on('click', function () {
    flag_square=true;
    flag_circle=false;
    flag_line=false;
    dragging=false;
    flag_draw=false;


});

$("#dr").on('click', function () {
    flag_draw=true;
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
    if(flag_draw) {dragging=true;}
  
    console.log("Left? : " + xPosition + " ; Top? : " + yPosition + ".");

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
                conlin.lineTo(xPosition+x2,yPosition+y2);                     conlin.stroke();
                
            }

});


// canvas.addEventListener('mousedown',engage);
// canvas.addEventListener('mousemove',putPoint);
// canvas.addEventListener('mouseup',disengaged);
// drawFn();

//    $("#ln").on('click', function (e) {
//     canvas.addEventListener('mousedown', function(e){
//     Context.strokeStyle = color;
//     Context.moveTo(e.offsetX,e.offsetY);
//      Context.lineTo(e.offsetX+150,e.offsetY+75); 
//      Context.stroke();
//      });
//     });

//     $("#sq").on('click', function cl (e)  {
//         canvas.addEventListener('mousedown', function(e){
//         Context.fillStyle = color;
//         Context.fillRect(e.offsetX,e.offsetY,150,75);
//          });
//         });

//    $("#crl").on('click', function (e) {
//     canvas.addEventListener('mousedown', function(e){
//         Context.beginPath();
//         Context.arc(e.offsetX,e.offsetY,40,0,Math.PI*2)
//         Context.fill();
//         Context.fillStyle = color;
//         Context.stroke();       
//      });
//     });


    // $("#del").on('click', function (e) {
    //     Context.beginPath();
    //     $("#crl").removeEventListener("mousemove", cl);
        
    //  });
// var pageX;
// var pageY;
// console.log(pageX);
//     function updateDisplay(event) {
//         pageX = event.pageX;
//         pageY = event.pageY;
//       }
      
//       box.addEventListener("mousemove", updateDisplay, false);
//       box.addEventListener("mouseenter", updateDisplay, false);
//       box.addEventListener("mouseleave", updateDisplay, false);


