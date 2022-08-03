/*=============== SCROLL REVEAL ===============*/
window.sr=ScrollReveal();
sr.reveal('.anime-left',{
  origin: 'left',
  duration: 1000,
  distance: '25rem',
  delay: 300
})

sr.reveal('.anime-right',{
  origin: 'right',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.anime-top',{
  origin: 'top',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

sr.reveal('.anime-bottom',{
  origin: 'bottom',
  duration: 1000,
  distance: '25rem',
  delay: 600
})

/*=============== SHOW MENU ===============*/
var navList=document.getElementsByClassName('nav-list');
navList.style.maxHeight="0px";
function menuToggle() {
  if (navList.style.maxHeight=="0px") {
    navList.style.maxHeight="200px";
  } else {
    navList.style.maxHeight="0px";
  }
}
