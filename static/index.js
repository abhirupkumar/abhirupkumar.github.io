const nav = document.querySelector('header').querySelector('.container>nav');
const tooglemenu = document.querySelector('header').querySelector('.container').querySelector('#tooglemenu');
const infocontainer = document.querySelector('.maincontainer>section>.infocontainer');
const myself = document.querySelector('.maincontainer').querySelector('#myself');
const about = document.querySelector('header').querySelector('.container>nav>li:nth-child(1)>a');
const contact = document.querySelector('.maincontainer').querySelector('#contact');
const myskill = document.querySelector('header').querySelector('.container>nav>li:nth-child(2)>a');
const skills = document.querySelector('.maincontainer').querySelector('#skill');
// const contact_icon = document.querySelector('header').querySelector('.container>nav>li:nth-child(5)>a');
const contact_icon = document.querySelector('header').querySelector('.container').querySelector('#contact_icon');
const skillset = document.querySelector('.maincontainer').querySelector('#skill>div').querySelector('.skillItem').querySelector('.skillset');

tooglemenu.addEventListener("click", ()=>{
  nav.classList.toggle('toogle-h-100');
});

document.querySelectorAll('header>.container>nav').forEach(n => n.addEventListener("click", () =>{
  nav.classList.toggle('toogle-h-100');
}));

myself.addEventListener('mouseover', ()=>{
  about.classList.add("active");
});

myself.addEventListener('mouseout', ()=>{
  about.classList.remove("active");
});

skills.addEventListener('mouseover', ()=>{
  myskill.classList.add("active");
});

skills.addEventListener('mouseout', ()=>{
  myskill.classList.remove("active");
});

contact.addEventListener('mouseover', ()=>{
  contact_icon.classList.add("active");
});

contact.addEventListener('mouseout', ()=>{
  contact_icon.classList.remove("active");
});