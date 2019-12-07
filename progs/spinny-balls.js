window.onload = function() {
    gc = document.getElementById('gc');
    ctx = gc.getContext('2d');
    setInterval(update,1000/1000);
    w = gc.width; h = gc.height; 
    rR = Math.min(w,h);
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,w,h);
}

var fra = 0;

function update() {
    time = new Date();
    fra = (((time.getTime())/1000*360)/4 )*Math.PI/180 ;

    ctx.fillStyle = "#0001";
    ctx.fillRect(0,0,w,h);
    ctx.fillStyle = "#FFF";
    for(var r=0; r<3; r++) {
        var oX = Math.cos(-fra/4+r*Math.PI*2/3)*rR/4;
        var oY = Math.sin(-fra/4+r*Math.PI*2/3)*rR/4;
        for(var z=0; z<3; z++) {
            var pX = oX + Math.cos(fra/2+z*Math.PI*2/3)*rR/8;
            var pY = oY + Math.sin(fra/2+z*Math.PI*2/3)*rR/8;
            for(var u=0; u<3; u++) {
                var qX = pX + Math.cos(-fra+u*Math.PI*2/3)*rR/16;
                var qY = pY + Math.sin(-fra+u*Math.PI*2/3)*rR/16;
                putcircle(w/2+qX,h/2+qY,rR/48);
            }
        }
    }
}

function putcircle(x,y,r) {
    ctx.beginPath();
    ctx.arc(x,y,r,0,Math.PI*2);
    ctx.fill();
}