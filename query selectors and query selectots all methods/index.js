const basketHeading = document.querySelector('#basket-heading');
basketHeading.style.color = 'brown';

const fruitItems = document.querySelectorAll('.fruit');
// Write answer to the questions asked below:

    if (fruitItems.length >= 2) {
    fruitItems[1].style.backgroundColor = 'brown';
    fruitItems[1].style.color = 'white';
}
