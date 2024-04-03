const firstH2 = document.querySelector('h2');

const allH2 = document.querySelectorAll('h2');
console.log(allH2[1]);

const allbtns=document.querySelectorAll('button');
console.log(allbtns[1]);

firstH2.innerText='xffing<h1>H1</h1>';
allH2[1].innerHTML='xffing<h1>H1</h1>';

const firstp=document.querySelector('p');
firstp.style.backgroundColor='purple';

const img = document.querySelector('img');
img.src= "https://placebear.com/400/400";

const navel= document.querySelector('nav');
navel.classList.add('active');

const classSelector=document.querySelector('.art-3');
classSelector.style.backgroundColor='purple';

const allh3= document.querySelectorAll('h3');
allh3[0].innerHTML='potato';

const navchanger = document.querySelectorAll('nav');
navchanger[0].innerText='start';

