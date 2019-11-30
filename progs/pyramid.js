window.onload = function() {
    gc = document.getElementById('gc');
    ctx = gc.getContext('2d');

    max = gc.height/2;
    vr = 4;

    setInterval(update,1000/1000);
}

function update() {
    w = gc.width; h = gc.height;

    a = []
    for(var ind=0;ind<max;ind++) {
        time = new Date();
        a[ind] = Math.abs(((time.getTime()-ind*4)/1000*512*2)%512-256);
    }

    for(var ind=0;ind<max;ind++) {
        r = (max*0/8<=ind && ind<max*3/8 || max*6/8<=ind && ind<max*8/8); 
        g = (max*2/8<=ind && ind<max*5/8); 
        b = (max*4/8<=ind && ind<max*7/8 || max*-1/8<=ind && ind<max*1/8);
        ctx.fillStyle = "rgb("+a[ind]*r+","+a[ind]*g+","+a[ind]*b+")";
        ctx.fillRect(ind*w/h,ind,w-ind*w/h*2,h-ind*2)
    }
    
    
}
