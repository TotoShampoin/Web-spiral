window.onload = function() {
    c = document.getElementById('gc');
    ctx = c.getContext('2d');
    setInterval(update,1000/30);
}

const max = 180;
const ray = 320;

var vort = [0];

var fra = 0;

function update() {
    if(vort.length>max)
        vort = vort.splice(1);
    /* vort[vort.length] = vort[vort.length-1]+(Math.random()*60-30)/180*Math.PI; */
    vort[vort.length] = (Math.sin(fra*Math.PI/180)*120)/180*Math.PI;
    fra++;  
    disp();
}

function disp() {
    ctx.fillStyle = "#000";
    ctx.strokeStyle = "#FFF";
    ctx.lineCap = "round"

    ctx.fillRect(0,0,gc.width,gc.height);
    
    for(var i=1;i<vort.length-1;i++) {
        for(var a=0;a<360;a+=60) {
            var ang = vort[i]+a/180*Math.PI; 
            var j = (i+1)%vort.length;
            var anj = vort[j]+a/180*Math.PI; 
            line3d(2, 
                Math.cos(ang)*ray,
                Math.sin(ang)*ray,
                10+(i)*20, 
                Math.cos(anj)*ray,
                Math.sin(anj)*ray,
                10+(i+1)*20
            );
        }
    }
}


function pos3d(x,y,z) {
    midX = gc.width/2;
    midY = gc.height/2;
    midZ = (midX+midY)/2;
    posX = midX+x*midZ/z;
    posY = midY+y*midZ/z;
    return [posX,posY];
}

function siz3d(s,z) {
    midX = gc.width/2;
    midY = gc.height/2;
    midZ = (midX+midY)/2;
    return s*midZ/z;
}

function line3d(s, x1,y1,z1, x2,y2,z2) {
    ctx.lineWidth = siz3d(s,z1);
    ctx.beginPath();
    ctx.moveTo(pos3d(x1,y1,z1)[0],pos3d(x1,y1,z1)[1]);
    ctx.lineTo(pos3d(x2,y2,z2)[0],pos3d(x2,y2,z2)[1]);
    ctx.stroke();
}
