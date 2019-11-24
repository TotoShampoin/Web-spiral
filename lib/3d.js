function pos3d(screen,x,y,z) {
    midX = screen.width/2;
    midY = screen.height/2;
    midZ = (midX+midY)/2;
    posX = x*midZ/z;
    posY = y*midZ/z;
    return [posX,posY];
}

function line3d(scr,pen, x1,y1,z1, x2,y2,z2) {
    pos = [ [pos3d(scr,x1,y1,z1)] , [pos3d(scr,x2,y2,z2)] ];
    pen.beginPath();
    pen.moveTo(pos[0][0],pos[0][1]);
    pen.lineTo(pos[1][0],pos[1][1]);
    pen.stroke();
}
