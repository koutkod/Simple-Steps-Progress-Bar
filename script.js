const next =  document.getElementById('next');
const prev = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
const progressBar = document.getElementById('progress');



let isActive = 1;

next.addEventListener('click', ()=>{
    isActive++;
if (isActive > circles.length){
    isActive = circles.length;
}
updateUI();
})

prev.addEventListener('click', ()=>{
    isActive--;
if (isActive < 1){
    isActive = 1;
}
updateUI();
})

function updateUI (){
circles.forEach((circle, index)=>{
if (index < isActive ){
    circle.classList.add('active');
}
else {
    circle.classList.remove('active');
}

})

const actives = document.querySelectorAll('.active');

progressBar.style.width = (actives.length-1)/(circles.length-1)*100 +'%';

if (isActive === 1){
prev.disabled = true;
}
else if (isActive === circles.length){
    next.disabled = true;
}
else {
    prev.disabled = false;
    next.disabled = false;
}

}