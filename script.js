const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const progressBar = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');


let isActive = 1;

nextBtn.addEventListener('click', ()=>{
isActive++;

if (isActive > circles.length){
    isActive = circles.length;
    
}
updateUI();


})

prevBtn.addEventListener('click', ()=>{
    isActive--;
    if (isActive <1){
        isActive= 1;
    }
    updateUI();
    })


    function updateUI (){
circles.forEach ((circle, index)=>{
if (index <isActive){
    circle.classList.add('active');
} else {
    circle.classList.remove('active');
}

})
const activeCircle = document.querySelectorAll('.active');

progressBar.style.width = (activeCircle.length -1)/(circles.length-1)*100+'%';

if (isActive === 1){
    prevBtn.disabled = true;
}
else if (isActive === circles.length){
    nextBtn.disabled = true;
}
else {
    prevBtn.disabled=false;
    nextBtn.disabled = false;
}

    }
