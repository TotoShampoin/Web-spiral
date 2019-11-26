window.onload = function() {
    gc = document.getElementById('gc');
    ctx = gc.getContext('2d');
    time = new Date();
    tic0 = time.getTime();
    setInterval(update,1000/60);
}

var vecAng = 0;
var a = 0

function update() {
    const midZ = (gc.width+gc.height)/4;
    const cang = 80;

    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,gc.width,gc.height);
    ctx.strokeStyle = "#FFF";
    ctx.lineCap = "round";
    for(var r=0; r<128; r++) {
        var r0 = (gc.height-200)*(r)/128;
        var r1 = (gc.height-200)*(r+1)/128;
        var p0 = pos3dsphere(0,-gc.height/2,200, r0, radians(vecAng),radians(cang));
        var p1 = pos3dsphere(0,-gc.height/2,200, r1, radians(vecAng),radians(cang));
        ctx.lineWidth = 5*midZ/(p1[2]+midZ);
        line3d(gc,ctx, p0[0],p0[1],p0[2], p1[0],p1[1],p1[2]);
    }
    for(var xx=0;xx<2;xx++){
        for(var ang=15;ang<165;ang++) {
            var o = pos3dsphere(0,-gc.height/2,200,(gc.height-136),radians(vecAng),radians(cang));
            var p0 = pos3dsphere(o[0],o[1],o[2], 64, radians(180+vecAng+ang+xx*180),0);
            var p1 = pos3dsphere(o[0],o[1],o[2], 64, radians(180+vecAng+ang+1+xx*180),0);
            ctx.lineWidth = 5*midZ/(p1[2]+midZ);
            line3d(gc,ctx, p0[0],p0[1],p0[2], p1[0],p1[1],p1[2]);
        }
    }
    for(var ang=0;ang<330;ang++) {
        var o = pos3dsphere(0,-gc.height/2,200,(gc.height-136),radians(vecAng),radians(cang));
        var p0 = pos3dsphere(o[0],o[1],o[2], 64, radians(180+vecAng),radians(ang-cang+15));
        var p1 = pos3dsphere(o[0],o[1],o[2], 64, radians(180+vecAng),radians(ang+1-cang+15));
        ctx.lineWidth = 5*midZ/(p1[2]+midZ);
        line3d(gc,ctx, p0[0],p0[1],p0[2], p1[0],p1[1],p1[2]);
    }
    time = new Date();
    vecAng = (time.getTime())/1000* 360/5;
}

function radians(angle) {
    return angle*Math.PI/180;
}
