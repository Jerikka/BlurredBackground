const containerElement = document.querySelector('.container');
const buttonElement = document.querySelector('.btn');
const popUpEl = document.querySelector('.popup-container');
const closeIconEl = document.querySelector('.close-icon');

buttonElement.addEventListener('click', ()=> {
    containerElement.classList.add("active");
    popUpEl.classList.remove('active');
})

closeIconEl.addEventListener('click', ()=> {
    containerElement.classList.remove("active");
    popUpEl.classList.add('active');
})