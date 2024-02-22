const first = document.querySelector('.first');
const second = document.querySelector('.second');
const plus = document.querySelector('.card i');
const back = document.querySelector('.back');
const cancel = document.querySelector('.btn:first-child');


plus.addEventListener('click', ()=> {
    first.classList.remove('active');
    second.classList.add('active');
})

back.addEventListener('click', getHome);
cancel.addEventListener('click', getHome);

function getHome() {
   if (first.classList.contains('active')) {
   return;
    } else {
    second.classList.remove('active');
    first.classList.add('active');
    }
    console.log('ok');
};