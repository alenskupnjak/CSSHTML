let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectBtn = document.querySelectorAll('.plan button');
let modalNo = document.querySelector('.modal__action--negative');
console.log(backdrop);


for (let i = 0;i< selectBtn.length; i++) {
  selectBtn[i].addEventListener('click', function () {
    modal.style.display = 'block'
    backdrop.style.display = 'block'
  })
}





backdrop.addEventListener('click', function (){
  modal.style.display = 'none'
  backdrop.style.display = 'none'
});

modalNo.addEventListener('click', function(){
  modal.style.display = 'none'
  backdrop.style.display = 'none'
});

