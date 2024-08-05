const cart = () => {
let iconCart = document.querySelector('.icon-cart');
let closeBtn = document.querySelector('.cartTap .close');
let body = document.querySelector('body');


iconCart.addEventListener('click',() => {
    body.classList.toggle('activeTapCart');
})
closeBtn.addEventListener('click',() => {
    body.classList.toggle('activeTabcart');
})
}