var CV = document.getElementById("MyCanvas");
var ctx = CV.getContext("2d");
var mouseEvent = "";
var touchEvent = "";

var width_device = screen.value;
var height_device = screen.value;
var new_width_device = width_device - 95;
var new_height_device = height_device - 30;

var color = "";
var width = 0;

CV.addEventListener("mousedown", down);

function down(e){
color = document.getElementById("color").value;
width = document.getElementById("width_line").value;
mouseEvent = "mouseDown";
}

CV.addEventListener("mouseup", up)

function up(e){
 mouseEvent = "mouseUP";
}

CV.addEventListener("mouseleave", leave)

function leave(){
    mouseEvent = "mouseLeave";
}

CV.addEventListener("mousemove", move)

function move(e){
x = e.clientX - CV.offsetLeft;
y = e.clientY - CV.offsetTop;

if (mouseEvent == "mouseDown") {
   console.log("position of x and y coordinates are =");
   console.log("x =" + x + "y =" + y);
   CV.beginPath();
   CV.strokeStyle = color;
   CV.lineTo(x, y);
   CV.stroke();
}
last_x = x;
last_y = y;
}

if (width == 992) {
 CV.addEventListener("touchstart", touchdown)

 function touchdown(e){
    color = document.getElementById("color").value;
    width = document.getElementById("width_line").value;
    touchEvent = "touchstart";
}

CV.addEventListener("touchmove", touchmove)

function touchmove(e){
    x = e.touches[0].clientX - CV.offsetLeft;
    y = e.touches[0].clientY - CV.offsetTop;
if (touchEvent == "touchmove") {
    console.log("position of x and y coordinates are =");
    console.log("x =" + x + "y =" + y);
    CV.beginPath();
    CV.moveTo(last_x, last_y);
    CV.strokeStyle = color;
    CV.lineWidth = width;
    CV.lineTo(x, y);
    CV.stroke();
 }
 last_x = x;
 last_y = y;
}
}