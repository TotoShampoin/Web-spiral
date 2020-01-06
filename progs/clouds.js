window.onload = function() {
    gc = document.getElementById('gc');
    ctx = gc.getContext('2d');
    w = gc.width; h = gc.height; r = (w+h)/2;
    setInterval(update,1000/30);
}

var RES = 24;
var DEP = 48;
var tunnel = [[]];
var spd = []

for(var j=0;j<DEP;j++){
    tunnel[j] = [];
    for(var i=0;i<RES;i++){
        tunnel[j][i] = Math.floor(Math.random()*32)*8; 
        if(tunnel[j][i]==256) {tunnel[j][i]=255;} 
    }
    tunnel[j][RES] = Math.random()* Math.PI*2/RES;
    spd[j] = (Math.random()*Math.PI/180-Math.PI/360)*1;
}

var time;
var dec, dec2;
var inter = 250;
var depth = 500;
var cloud = new Image(); cloud.src = '../resources/cloud.png';
var cloub = new Image(); cloub.src = '../resources/cloud_b.png';

function update() {
    time = new Date().getTime();
    dec = time%inter;
    if(dec2>dec) {
        tunnel.splice(0,0,[]);
        tunnel[0] = [];
        for(var j=0;j<RES+1;j++){
            /* tunnel[0][j] = Math.floor(Math.random()*32)*8; 
            if(tunnel[0][j]==256) {tunnel[0][j]=255;} */
            tunnel[0][j] = tunnel[tunnel.length-1][j]
        }
        spd.splice(0,0,[]);
        spd[0] = spd[spd.length-1];
        tunnel.splice(tunnel.length-1);
        spd.splice(spd.length-1);
    }
    dec2 = dec;
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,w,h);
    for(var i=tunnel.length-2;i>=0;i--){
        for(var j=0;j<tunnel[i].length-1;j++){
            cl = tunnel[i][j]; deph = tunnel[i][RES];
            ang = j/RES*Math.PI*2 +deph;
            print3d(gc,ctx, cloub, Math.cos(ang)*w , Math.sin(ang)*w , (i*inter+dec)/inter *depth , 960 );
            ctx.globalAlpha = cl/255;
            print3d(gc,ctx, cloud, Math.cos(ang)*w , Math.sin(ang)*w , (i*inter+dec)/inter *depth , 960 );
            ctx.globalAlpha = 1;
        }
        tunnel[i][RES] += spd[i]*2;
    }
}

