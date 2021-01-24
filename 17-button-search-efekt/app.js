const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');

toggle.addEventListener('click', (e) => {
  nav.classList.toggle('aktivno');
});

// ********************************************
//  SEARCH
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  search.classList.toggle('active');
  document.querySelector('input').focus();
});

// =================================================
// RIPPLE efekat
const body = document.querySelector('body');
const rippleBack = document.querySelector('.ripple-back');
const buttons = document.querySelector('.ripple');

buttons.addEventListener('click', (e) => {
  console.log(e, this);

  // Vanjski okvir
  const rippleBackTop = rippleBack.offsetTop;
  const rippleBackLeft = rippleBack.offsetLeft;

  console.log({ rippleBackTop }, { rippleBackLeft });

  const buttonTop = e.target.offsetTop;
  const buttonLeft = e.target.offsetLeft;
  const buttonWidth = e.target.offsetWidth;
  const buttonHeight = e.target.offsetHeight;
  console.log('Buttons Varijabilna apsolitna pozicija=', e.clientX , e.clientY );
  console.log(
    'Fiksna pozicija button =',
    { buttonTop },
    { buttonLeft },
    { buttonWidth },
    { buttonHeight }
  );

  // e.clientX , e.clientY Apsolutni polozaj naspram ekrana
  const polozajX = e.clientX - buttonLeft - rippleBackLeft;
  const polozajY = e.clientY - buttonTop - rippleBackTop;
  console.log({ polozajX }, { polozajY });

  const circle = document.createElement('span');
  circle.classList.add('circle');
  circle.style.setProperty('Top', `${polozajY}px`);
  circle.style.setProperty('Left', `${polozajX}px`);

  // Nakon jedne sekunde obriši efekat
  setTimeout(() => {
    circle.remove();
  }, 1000);

  // append VS appendChild
  // https://dev.to/ibn_abubakre/append-vs-appendchild-a4m

  // buttons.append(circle);
  buttons.appendChild(circle);
});

body.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  console.log(' BODY Varijabilna apsolutna pozicija=', { x }, { y });
  const rippleBackTop = rippleBack.offsetTop;
  const rippleBackLeft = rippleBack.offsetLeft;

  console.log('BODY', { rippleBackTop }, { rippleBackLeft });
});
