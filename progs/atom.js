window.onload = function() {
    c = document.getElementById('gc');
    ctx = c.getContext('2d');
    setInterval(update,1000/30);
}

var vecAng = 0;
var a = 0

function update() {
    const step = 1;
    const rayY = Math.min(gc.width,gc.height)/2-100;
    const rayX = rayY/3;

    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,gc.width,gc.height);
    ctx.strokeStyle = "#FFF";
    ctx.lineCap = "round"
    ctx.lineWidth = 5;
    for(var r=0; r<3; r++) {
        ctx.save();
        ctx.translate(gc.width/2,gc.height/2);
        ctx.rotate((vecAng+r*120)*Math.PI/180);
        ctx.translate(-gc.width/2,-gc.height/2);
        ctx.beginPath();
        for(var ang=0;ang<300;ang++) {
            ctx.moveTo(
                gc.width/2 +Math.cos((ang+a)*Math.PI/180)*rayX,
                gc.height/2 +Math.sin((ang+a)*Math.PI/180)*rayY
            );
            ctx.lineTo(
                gc.width/2 +Math.cos((ang+step+a)*Math.PI/180)*rayX,
                gc.height/2 +Math.sin((ang+step+a)*Math.PI/180)*rayY
            );
        }
        ctx.stroke();
        ctx.restore();
    }
    vecAng -= 0.5;
    a += 1;
}
