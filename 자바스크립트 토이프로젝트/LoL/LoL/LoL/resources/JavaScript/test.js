var canvas = document.querySelector("canvas"),
    ctx = canvas.getContext("2d"),
    rects = [
        {x: 10, y: 10, w: 200, h: 50},
        {x: 50, y: 70, w: 150, h: 30}    // etc.
    ], i = 0, r;

// render initial rects.
while(r = rects[i++]) ctx.rect(r.x, r.y, r.w, r.h);
ctx.fillStyle = "blue"; ctx.fill();

canvas.onmousemove = function(e) {

  // important: correct mouse position:
  var rect = this.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top,
      i = 0, r;
  
  ctx.clearRect(0, 0, canvas.width, canvas.height); // for demo
   
  while(r = rects[i++]) {
    // add a single rect to path:
    ctx.beginPath();
    ctx.rect(r.x, r.y, r.w, r.h);    
    
    // check if we hover it, fill red, if not fill it blue
    ctx.fillStyle = ctx.isPointInPath(x, y) ? "red" : "blue";
    ctx.fill();
  }

};