function setup() {
  createCanvas(700, 400);
  background(0);
  strokeWeight(10);
  colorMode(HSB);
  describe('Use the mouse to draw on the blank canvas')
}
function mouseDragged() {
  let lineHue=mouseX-mouseY;
  stroke(lineHue, 90, 90);
  line(pmouseX, pmouseY, mouseX, mouseY);
}
