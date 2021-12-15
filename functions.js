// Funcionalidad del modo claro/oscuro
const btnSwitch = document.querySelector('#switch');

btnSwitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnSwitch.classList.toggle('active');
    btnShopCart.classList.toggle('active');
    btnProfile.classList.toggle('active');
})

const btnShopCart = document.querySelector('#shop-cart');

btnShopCart.addEventListener('click', () => {
    document.btnShopCart.classList.toggle('cart-active');
})

const btnProfile = document.querySelector('#profile');

btnProfile.addEventListener('click', () => {
    btnProfile.classList.toggle('pro-active');
})

// Funcionalidad del Slider
const slider = document.querySelector('#slider');
let sliderSection = document.querySelectorAll('.slider__section');
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector('#btn-left');
const btnRight = document.querySelector('#btn-right');

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    let sliderSectionFirst = document.querySelectorAll('.slider__section')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = '-100%';
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

function Preview() {
    let sliderSectionLast = document.querySelectorAll('.slider__section')[3];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}

btnLeft.addEventListener('click', function(){
    Preview();
});

setInterval(function(){
    Next();
}, 9000);