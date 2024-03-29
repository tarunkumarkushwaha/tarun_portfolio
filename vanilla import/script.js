const showproject = () => {
  var elem = document.getElementsByClassName("slideshow-container")[0];
  elem.scrollIntoView()
}

const showabout = () => {
  var elem = document.getElementsByClassName("about")[0];
  elem.scrollIntoView()
}

const showcontact = () => {
  var elem = document.getElementsByClassName("contact")[0];
  elem.scrollIntoView()
}
const showresume = () => {
  window.location = "https://github.com/tarunkumarkushwaha/Portfolio/raw/master/Downloads/Tarun Resume.pdf"
}

// project slider 

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// auto slide scroll 

setInterval(()=>{plusSlides(1)},4000)

// navbar active button 

const aboutbtn = document.getElementsByClassName("aboutbtn")[0];
const projectsbtn = document.getElementsByClassName("projectsbtn")[0];
const contactbtn = document.getElementsByClassName("contactbtn")[0];
const about = document.getElementsByClassName("about")[0];
const projects = document.getElementsByClassName("projects")[0];
const contact = document.getElementsByClassName("contact")[0];

const scrolleffect = () => {
  if (about.getBoundingClientRect().top <= 0 && projects.getBoundingClientRect().top > 0) {
    aboutbtn.classList.add('on')
    projectsbtn.classList.remove('on')
  }
  else if (projects.getBoundingClientRect().top <= 0 && contact.getBoundingClientRect().top > 0) {
    projectsbtn.classList.add('on')
    aboutbtn.classList.remove('on')
    contactbtn.classList.remove('on')
  }
  else if (contact.getBoundingClientRect().top <= 0) {
    contactbtn.classList.add('on')
    projectsbtn.classList.remove('on')
  }
  else {
    aboutbtn.classList.remove('on')
    projectsbtn.classList.remove('on')
    contactbtn.classList.remove('on')
  }
}

window.addEventListener('scroll',scrolleffect)

// testings

const test = ()=>{
  console.log("test")
}

// progress
// function update() {
//   var element = document.getElementById("myprogressBar");
//   var width = 1;
//   var identity = setInterval(scene, 10);
//   function scene() {
//     if (width >= 100) {
//       clearInterval(identity);
//     } else {
//       width++;
//       element.style.width = width + '%';
//     }
//   }
// }