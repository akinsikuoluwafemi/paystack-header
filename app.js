// select element

const cardInside = document.querySelector('.card-inside'); 


cardInside.addEventListener('mouseover',(e)=> {
    cardInside.classList.add('white');
})


cardInside.addEventListener('mouseout',(e)=> {
    cardInside.classList.remove('white');
})