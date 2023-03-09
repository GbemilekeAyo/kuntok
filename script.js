// nav bar  scrolling animation 

const body = document.body;
let lastScroll = 0 ;

window.addEventListener('scroll' , () =>  {
  const  currentScroll = window.pageYOffset


if(currentScroll >= 0){
    body.classList.remove("scroll-up")
}


if(currentScroll > lastScroll && !body.classList.contains("scroll-down")){
 body.classList.remove("scroll-up")
 body.classList.add("scroll-down")
}

if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")
   }


  lastScroll = currentScroll;
})








//JS FOR PROGRESS BAR
const skillsSection = document.getElementById('skills-section');

const progreesBars = document.querySelectorAll('.progress-bar');



function showProgress(){
  progreesBars.forEach(progreesBar=>{
    const value = progreesBar.dataset.progress;
   progreesBar.style.opacity = 1;
   progreesBar.style.width = `${value}%`;
  });
}


function hideProgress(){
  progreesBars.forEach( p =>{
    p.style.opacity = 0;
    p.style.width = 0;
  });
}
 
window.addEventListener('scroll',() => {
 const sectionPOS = skillsSection.getBoundingClientRect().top;
 const screenPOS = window.innerHeight / 2;


 if(sectionPOS < screenPOS){
  showProgress();
 }else{
  hideProgress();
 }
});





