let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectBtn = document.querySelectorAll('.plan button');
let modalNo = document.querySelector('.modal__action--negative');

let toggleButton = document.querySelector('.toggle-button')
let mobileNav = document.querySelector('.mobile-nav')


for (let i = 0;i< selectBtn.length; i++) {
  selectBtn[i].addEventListener('click', function () {
    // modal.style.display = 'block'
    // backdrop.style.display = 'block'
    // modal.className = 'open'
    modal.classList.add('open')
    backdrop.classList.add('open')
  })
}


console.dir(backdrop.style['background-image']);
// isto!
console.dir(backdrop.style.backgroundImage);

backdrop.addEventListener('click', function (){
  // 1 nacin
  // mobileNav.style.display = 'none'
  // modal.style.display = 'none'
  // backdrop.style.display = 'none'

  // 2 nacin
  mobileNav.classList.remove('open');
  if (modal) {
    modal.classList.remove('open');
  }
  backdrop.classList.remove('open');
});

if (modalNo) {
    modalNo.addEventListener('click', function(){
     // 1 nacin
    // modal.style.display = 'none'
    // backdrop.style.display = 'none'
  
    // 2 nacin
    modal.classList.remove('open')
    backdrop.classList.remove('open')
  });
}


toggleButton.addEventListener('click', function() {
   // 1 nacin
  // mobileNav.style.display = 'block'
  // backdrop.style.display = 'block'

  // 2 nacin
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});

