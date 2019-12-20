window.onload = function() {
    gc = document.getElementById('gc');
    ctx = gc.getContext('2d');
    setInterval(update,1000/1000);
    w = gc.width; h = gc.height; 
    d = (w+h)/2;
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,w,h);
}
var frame;
function update() {
    frame = new Date().getTime()/1000 *360/2;
    ctx.fillStyle = "#000";
    ctx.lineCap = "round";
    ctx.fillRect(0,0,w,h);
    for(var dep=0;dep<4;dep+=0.25){
        var posZ = (dep-(2*frame/360)%0.25)*d;
        ctx.lineWidth = 5*(d/2)/(d/2+posZ);
        var cl = (4-posZ/d)*64;
        var colr = "rgb("+cl+","+cl+","+cl+")";
        for(var px=-w/2;px<=w*4/6;px+=w/6){
            drawPolygon(px,-h/2,posZ,d/12,6,frame,colr);
            drawPolygon(px, h/2,posZ,d/12,6,frame,colr);
        }
        for(var py=-h/4;py<=h/4;py+=h/4){
            drawPolygon3(-w/2,py,posZ,d/12,6,frame,colr);
            drawPolygon3( w/2,py,posZ,d/12,6,frame,colr);
        }
    }
}

function drawPolygon(x,y,z,r,c,phase,clr) {
    ctx.strokeStyle = clr;
    for(var a=0;a<360;a+=360/c) {
        var an0 = (a+phase  )*Math.PI/180;
        var an1 = (a+phase+360/c)*Math.PI/180;
        var p0 = pos3dsphere(x,y,z,r,an0,0);
        var p1 = pos3dsphere(x,y,z,r,an1,0);
        line3d(gc,ctx,p0[0],p0[1],p0[2],p1[0],p1[1],p1[2]);
    }
}
function drawPolygon2(x,y,z,r,c,phase,clr) {
    ctx.strokeStyle = clr;
    for(var a=0;a<360;a+=360/c) {
        var an0 = (a+phase  )*Math.PI/180;
        var an1 = (a+phase+360/c)*Math.PI/180;
        var p0 = pos3dsphere(x,y,z,r,0,an0);
        var p1 = pos3dsphere(x,y,z,r,0,an1);
        line3d(gc,ctx,p0[0],p0[1],p0[2],p1[0],p1[1],p1[2]);
    }
}
function drawPolygon3(x,y,z,r,c,phase,clr) {
    ctx.strokeStyle = clr;
    for(var a=0;a<360;a+=360/c) {
        var an0 = (a+phase  )*Math.PI/180;
        var an1 = (a+phase+360/c)*Math.PI/180;
        var p0 = pos3dsphere(x,y,z,r,Math.PI/2,an0);
        var p1 = pos3dsphere(x,y,z,r,Math.PI/2,an1);
        line3d(gc,ctx,p0[0],p0[1],p0[2],p1[0],p1[1],p1[2]);
    }
}