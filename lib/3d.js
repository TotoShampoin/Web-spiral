function pix3d(scr,pen, x,y,z,s) {
    var midX = scr.width/2;
    var midY = scr.height/2;
    var midZ = (midX+midY)/2;
    var pS = s*midZ/(midZ+z);
    pen.fillRect(
        x*midZ/(midZ+z)-pS/2,
        y*midZ/(midZ+z)-pS/2,
        pS,pS
    );
}

function line3d(scr,pen, x1,y1,z1, x2,y2,z2) {
    var midX = scr.width/2;
    var midY = scr.height/2;
    var midZ = (midX+midY)/2;
    pen.beginPath(); 
    pen.moveTo(
        midX+x1*midZ/(z1+midZ), 
        midY+y1*midZ/(z1+midZ)
    );
    pen.lineTo(
        midX+x2*midZ/(z2+midZ),
        midY+y2*midZ/(z2+midZ)
    );
    pen.stroke();
}

function pos3dsphere(x,y,z,r,aX,aZ) { 
    var posX = x+Math.cos(aX)*Math.cos(aZ)*r; 
    var posY = y+Math.sin(aZ)*r; 
    var posZ = z+Math.sin(aX)*Math.cos(aZ)*r; 
    return [posX,posY,posZ]; 
}
