const toggle = document.getElementById('toggle')
const nav = document.getElementById('nav')

toggle.addEventListener('click', e=> {
  nav.classList.toggle('aktivno')
})




// ********************************************
//  SEARCH
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');

btn.addEventListener('click', e => {
  search.classList.toggle('active')
  document.querySelector('input').focus()
})