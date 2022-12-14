
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
console.log(vw/vh)

// carousel start
// getting important classes
const track = document.querySelector("#carousel__track");
const slides = Array.from(track.children);
const dotsNav = document.querySelector("#carousel__nav");
const dots = Array.from(dotsNav.children);
// nextSlide variable stores clicked position to resume auto scroll from
let nextSlide = 0;

// initially positioning all slides horizentally
slides.forEach((slide, index) => {
  slide.style.left = slide.getBoundingClientRect().width * index + "px";
  // console.log(slide)
});

// remove currentSlide class on old slide and adding the same to a new one
const setCurrentSlideClass = (index) => {
  const currentSlide = dotsNav.querySelector('#carousel__nav .current-slide')
  currentSlide.classList.remove('current-slide')
  dots[index].classList.add('current-slide')
  nextSlide = index;
}

// main code that does the shifting and moves classes
const shiftSlide = index =>{
  setCurrentSlideClass(index)
  const amountToMove = slides[index].style.left;
  track.style.transform = 'translateX(-' + amountToMove + ')';
}

// adding event listners to nav buttons
dots.forEach((dot,index) => {
  dot.addEventListener('click', e=> {shiftSlide(index)})
})

// this code below makes automatic scroll possible
const numberOfSlides = slides.length
let posOrNeg = 1;
setInterval(()=>{
  shiftSlide(nextSlide)
  if(nextSlide === numberOfSlides -1) posOrNeg = -1
  if( nextSlide === 0) posOrNeg = 1
  nextSlide +=posOrNeg
},3000)
// carousel end

//animatedGrid

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    entry.target.classList.toggle('show',entry.isIntersecting)

    console.log(entry.target.classList,entry.isIntersecting)
  })
},{threshold: (vw/vh < 1) ? 0 : 0.5})

cards.forEach(card=>{
  observer.observe(card)
})

const cards2 = document.querySelectorAll('.card2');
const observer2 = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    entry.target.classList.toggle('show',entry.isIntersecting)
    if(entry.isIntersecting) observer2.unobserve(entry.target)
    // console.log(entry.target.classList,entry.isIntersecting)
  })
},{threshold: 0.2,})

cards2.forEach(card=>{
  observer2.observe(card)
})
