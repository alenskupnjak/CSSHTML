const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 500) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement('i');
  heart.classList.add('fas');
  heart.classList.add('fa-heart');

  console.log(e.clientX, e.clientY);
  console.log(e.target.offsetLeft, e.target.offsetTop);

  let leftOffset = e.target.offsetLeft;
  let topOffset = e.target.offsetTop;

  let xInside = e.clientX - leftOffset;
  let yInside = e.clientY - topOffset;

  // heart.style.top = `${yInside}px`;
  heart.style.setProperty('top', `${yInside}px`);
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  const heartup = document.createElement('i');
  heartup.classList.add('fas');
  heartup.classList.add('fa-heart');
  heartup.classList.add('fa-heartup');

  leftOffset = e.target.offsetLeft;
  topOffset = e.target.offsetTop;

  xInside = e.clientX - leftOffset - 25;
  yInside = e.clientY - topOffset - 25;

  heartup.style.top = `${yInside}px`;
  heartup.style.left = `${xInside}px`;

  loveMe.appendChild(heartup);

  times.innerHTML = ++timesClicked;

  setTimeout(() => {
    heart.remove();
  }, 5000);
  setTimeout(() => {
    heartup.remove();
  }, 10000);
};

loveMe.addEventListener('mousemove', (e) => {
  console.log(' - mousemove - ', e);
  console.log('01- e.clientX=', e.clientX);
  console.log('02- e.clientY', e.clientY);
  console.log('03- e.target.offsetLeft', e.target.offsetLeft);
  console.log('04- e.target.offsetTop', e.target.offsetTop);
  console.log('04- e.target.clientHeight', e.target.clientHeight);
  console.log('04- e.target.clientLeft', e.target.clientLeft);
  console.log('04- e.target.clientTop', e.target.clientTop);
  console.log('04- e.target.clientWidth', e.target.clientWidth);
});

loveMe.addEventListener('mouseenter', (e) => {
  console.log(' - mouseenter - ', e);
  console.log('01- e.clientX=', e.clientX);
  console.log('02- e.clientY', e.clientY);
  console.log('03- e.target.offsetLeft', e.target.offsetLeft);
  console.log('04- e.target.offsetTop', e.target.offsetTop);
  console.log('04- e.target.clientHeight', e.target.clientHeight);
  console.log('04- e.target.clientLeft', e.target.clientLeft);
  console.log('04- e.target.clientTop', e.target.clientTop);
  console.log('04- e.target.clientWidth', e.target.clientWidth);
});

loveMe.addEventListener('mouseleave', (e) => {
  console.log(' - mouseleave - ', e);
  console.log('01- e.clientX=', e.clientX);
  console.log('02- e.clientY', e.clientY);
  console.log('03- e.target.offsetLeft', e.target.offsetLeft);
  console.log('04- e.target.offsetTop', e.target.offsetTop);
  console.log('04- e.target.clientHeight', e.target.clientHeight);
  console.log('04- e.target.clientLeft', e.target.clientLeft);
  console.log('04- e.target.clientTop', e.target.clientTop);
  console.log('04- e.target.clientWidth', e.target.clientWidth);
});
