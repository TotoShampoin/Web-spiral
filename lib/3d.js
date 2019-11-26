function pix3d(scr,pen, x,y,z,s) {
    var midX = scr.width/2;
    var midY = scr.height/2;
    var midZ = (midX+midY)/2;
    var pS = s*midZ/z;
    pen.fillRect(
        x*midZ/z-pS/2,
        y*midZ/z-pS/2,
        pS,pS
    );
}

function line3d(scr,pen, x1,y1,z1, x2,y2,z2) {
    var midX = scr.width/2;
    var midY = scr.height/2;
    var midZ = (midX+midY)/2;
    pen.beginPath(); 
    pen.moveTo(
        midX+x1*midZ/z1, 
        midY+y1*midZ/z1
    );
    pen.lineTo(
        midX+x2*midZ/z2,
        midY+y2*midZ/z2
    );
    pen.stroke();
}
