

let counter = 0;
let smartCount = 1;
setInterval(() => {
    counter +=smartCount;
    const wp = document.getElementById('radio'+counter).checked = true;
    
    // console.log(counter)
    if(counter === 7) smartCount = -1
    if(counter === 1) smartCount = 1

}, 5000);


//animatedGrid

const cards = document.querySelectorAll('.card');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    entry.target.classList.toggle('show',entry.isIntersecting)
    console.log(entry.target.classList,entry.isIntersecting)
  })
},{threshold: 0.5})

cards.forEach(card=>{
  observer.observe(card)
})