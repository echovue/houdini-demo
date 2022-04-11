class MyWorklet {
  
  paint(ctx, geometry, properties) {
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, geometry.width, geometry.height);
  }
}

registerPaint("myWorklet", MyWorklet);
