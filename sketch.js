// // var a = -2;
// // var b = -2.4;
// // var c = 1.1;
// // var d = -0.9;
// // var X, Y;
// var a = -2;
// var b = -2.4;
// var c = 1.1;
// var d = -0.9;
// var X, Y, Z;

// function clifford(x0, y0, z0, a, b, c, d, iters) {
//   var x = x0;
//   var y = y0;
//   var z = z0;

//   for (i = 0; i < iters; i++) {
//     var xt = x;

//     x = sin(a * y) + c * cos(a * x);
//     y = sin(b * xt) + d * cos(b * y);
//     z = sin(a * y) + b * cos(c * z);
//   }

//   point(map(x, -2.5, 2.5, 0, width), map(y, -2.5, 2.5, height, 0), [
//     map(z, -2.5, 2.5, height, 0),
//   ]);
// }

// function setup() {
//   createCanvas(800, 800, WEBGL);
//   background(255);
//   noLoop();
// }

// function draw() {
//   stroke(0, 25);
//   // rotateX(frameCount * 0.01);
//   // rotateY(frameCount * 0.01);
//   for (j = 0; j < 1000000; j++) {
//     X = random(-10, 10);
//     Y = random(-10, 10);
//     Z = random(-10, 10);

//     clifford(X, Y, Z, a, b, c, d, 100);
//   }
// }
// noprotect

var a = 0.95;
var b = 0.7;
var c = 0.6;
var d = 3.5;
var e = 0.25;
var f = 0.1;
var r = 160;
var x = 0.1;
var y = 0;
var z = 0;
var dt = 0.01;
var dx, dy, dz, px, py, pz;

function setup() {
  createCanvas(800, 800, WEBGL);
  background(255);
  j=0;
  noLoop();
}


function draw() {
  stroke(0, 200);
  // rotateX(radians(160));
  rotateX(radians(90));
  console.log("Draw function fired")

  while(j < 1){
    for (i = 0; i < 100000; i++) {
      px = x;
      py = y;
      pz = z;
  
      dx = (z-b)*x - d*y;
      dy = d*x + (z-b)*y;
      dz = c + a*z - z*z*z/3 - (x*x + y*y)*(1 + e*z) + f*z*x*x*x;
  
      x += dx*dt;
      y += dy*dt;
      z += dz*dt;
      
      line(px*r, py*r - 50, pz*r, x*r, y*r - 50, z*r);
    }
    j++;
    console.log('Line function fired')
  }
 
}