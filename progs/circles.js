window.onload = function() {
    gc = document.getElementById('gc');
    ctx = gc.getContext('2d');
    setInterval(update,1000/1000);
    r = gc.width/80;
    w = gc.width/2; h = gc.height/2; 
}

const max = 16;
const sr = 3;
var a = 0;

function update() {
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,gc.width,gc.height);
    ctx.fillStyle = "#888";
    ctx.strokeStyle = "#444";
    ctx.lineCap = "round";
    ctx.lineWidth = 4;
    putcircle(w,h,r);
    for(var x=1;x<max;x++) {
        var xX = ((max-x)/1)*((x%2)*2-1);
        drawcircle(w,h,x*r*sr);
        for(var y=0;y<x*6;y++) {
            var yY = (y*2*Math.PI/(x*6));
            putcircle(w+Math.cos(yY+radians(a*xX))*x*r*sr,h+Math.sin(yY+radians(a*xX))*x*r*sr,r);
        }
    }
    
    time = new Date();
    a = (time.getTime())/1000* 360/120;
}

function putcircle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fill();
}
function drawcircle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.stroke();
}

function radians(angle) {
    return angle*Math.PI/180;
}
