const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector(".title");
const sneaker = document.querySelector(".sneaker img");
const purchase = document.querySelector(".purchase");
const description = document.querySelector(".info h3");
const sizes = document.querySelector(".sizes");



// Moving Animation Event
container.addEventListener("mousemove", (e) => {
  let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
  let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

// Animate In
container.addEventListener('mouseenter', e => {
  card.style.transition = 'all 500ms ease'
  title.style.transform = 'translateZ(100px)'
  sneaker.style.transform = 'translateZ(50px) rotateZ(-30deg)'
  purchase.style.transform = 'translateZ(70px)'
  description .style.transform = 'translateZ(100px)'
  sizes .style.transform = 'translateZ(100px)'
})


// Animete Out
container.addEventListener('mouseleave', e=> {
  card.style.transition = 'all 1500ms ease'
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  title.style.transform = 'translateZ(0)'
  sneaker.style.transform = 'translateZ(0) rotateZ(0)'
  purchase.style.transform = 'translateZ(0)'
  description .style.transform = 'translateZ(0)'
  sizes .style.transform = 'translateZ(0)'
})