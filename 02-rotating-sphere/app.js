document.getElementById('sljedeci').addEventListener('click', (e) => {
  console.log(e);
});

var t = 0,
  turn = 0,
  rot = 0,
  arms = 1,
  pts = 360,
  offset = 120,
  cos = Math.cos,
  sin = Math.sin;

//Create canvas
var canvas = document.createElement('canvas');
canvas.id = 'canvas';
canvas.height = 300;
canvas.width = 300;
canvas.classList = 'centered pixelated';

//Create canvas
const canvas2 = document.createElement('canvas');
canvas2.id = 'canvas2';
canvas2.height = 300;
canvas2.width = 300;
canvas2.classList = 'centered2 pixelated2';

//append to body
document.body.appendChild(canvas);
document.body.appendChild(canvas2);

//ctx
let ctx = canvas.getContext('2d'),
  cw = canvas.width,
  ch = canvas.height;

let ctx2 = canvas2.getContext('2d'),
  cw2 = canvas2.width,
  ch2 = canvas2.height;

//draw pixels
function draw() {
  for (var i = 0; i < pts; i++) {
    let j = i / arms;
    const r = (sin(i / offset) * cw) / 4;
    // const r =  cw/4;
    const x = cos(j + t);
    // const x = cos(j);
    const y = sin(j + t) * sin(rot);
    const z = (cos(i / offset) * cos(rot) * ch) / 4;
    // console.log(r,x,y,z,t);
    // const z = 0;
    //  pixel(x * r + 64, y * r + 64 + z, (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6));
    // crtajTockicu(x * r + cw/2, y * r + ch/2 + z, (0x1000000 + (Math.random()) * 0xffffff).toString(16).substr(1, 6));
    crtajTockicu(
      x * r + cw / 2,
      y * r + ch / 2 + z,
      (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    );
  }
}

//Draw crtajTockicu
function crtajTockicu(x, y, colHex) {
  ctx.fillStyle = '#' + colHex;
  ctx.fillRect(x, y, 2, 2);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  draw();
  t += 0.01;
  // pts += 10
  rot += 0.01;
  requestAnimationFrame(animate);
}
animate();

//draw pixels
function draw2() {
  for (var i = 0; i < 100; i++) {
    let j = i / arms;
    const r = (sin(i / offset) * cw2) / 4;
    // const r =  cw/4;
    const x = cos(j + t);
    // const x = cos(j);
    const y = sin(j + t) * sin(rot);
    const z = (cos(i / offset) * cos(rot) * ch2) / 4;

    crtajTockicu2(
        x * r + cw2 / 2,
        y * r + ch2 / 2 + z,
        (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
      );

    // setInterval(() => {
    //   console.log(x * r + cw2 / 2);
    //   console.log(cw2);
    // //   console.log('-----', x * r + cw2 / 2, y * r + ch2 / 2 + z);
    //   crtajTockicu2(
    //     x * r + cw2 / 2,
    //     y * r + ch2 / 2 + z,
    //     (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)
    //   );
    // }, 10);
  }
}

//Draw crtajTockicu
function crtajTockicu2(x, y, colHex) {
  ctx2.fillStyle = '#' + colHex;
  ctx2.fillRect(x, y, 2, 2);
}

// ************************************************
function animate2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
  draw2();
  t += 0.01;
  // pts += 10
  rot += 0.01;
  requestAnimationFrame(animate2);
}
animate2();

//Request animation frame
(function () {
  var requestAnimationFrame =
    window.requestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();
