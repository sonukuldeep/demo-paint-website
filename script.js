

let counter = 0;
let smartCount = 1;
setInterval(() => {
    counter +=smartCount;
    const wp = document.getElementById('radio'+counter).checked = true;
    
    // console.log(counter)
    if(counter === 7) smartCount = -1
    if(counter === 1) smartCount = 1

}, 5000);