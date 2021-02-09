//  Gornji dio slike
const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const ime = document.getElementById('name');
const date = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');

console.log(animated_bgs,animated_bg_texts);


setTimeout(getData, 4000);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" />';
  title.innerHTML = 'Title naslov text';
  excerpt.innerHTML = 'Text 01';
  profile_img.innerHTML ='<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />';
  ime.innerHTML = 'XXX yyyy';
  date.innerHTML = 'Oct 08, 2020';

  animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach((bg) => bg.classList.remove('animated-bg-text'));
}


//  donji dio slike
const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;

let int = setInterval(bluring, 20)


function bluring() {
  load++
  if (load > 99) {
    clearInterval(int)
  }
  let blur = 'blur(' + (100 - load).toString() + 'px)'
  loadText.innerText = `${load}%`
  bg.style.setProperty('filter', blur)
}