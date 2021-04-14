const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const cheap = document.querySelector('#cheap')
const fast = document.querySelector('#fast')



toggles.forEach(data => {
  data.addEventListener('change',(e)=> {
    ukljuci(e.target)
  })
})


function ukljuci(data) {
  console.log(data, data.checked);
  console.log('ukljucio');
  
}