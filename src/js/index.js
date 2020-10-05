import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */



const textarea = document.querySelector('.entry--js');
const save = document.querySelector('.button__save--js');
const load = document.querySelector('.button__load--js');

const currentValue = localStorage.getItem('entry');

if(currentValue) {
    document.querySelector('.info--js').innerHTML = "🥐";
}

save.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem('entry', textarea.value);
    if(textarea.value){
        document.querySelector('.info--js').innerHTML = "🥐";
    }else {
        document.querySelector('.info--js').innerHTML = "";
    }
})


load.addEventListener('click', (e) => {
    e.preventDefault();
    textarea.value = localStorage.getItem('entry');
})