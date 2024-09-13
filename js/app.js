function changeButtonStatus(){
    let button = document.getElementById('dashboard__item__button');

    if (button.classList.contains('dashboard__item__button')){
        button.classList.remove('dashboard__item__button');
        button.classList.add('dashboard__item__button dashboard__item__button--return');
    } else {
        button.classList.remove('dashboard__item__button dashboard__item__button--return');
        button.classList.add('dashboard__item__button');
    }
}

function changeImageStatus(){
    let image = document.getElementById('dashboard__item__img');

    if (image.classList.contains('dashboard__item__img')){
        image.classList.remove('dashboard__item__img');
        image.classList.add('dashboard__item__img dashboard__item__img--rented');
    } else {
        image.classList.remove('dashboard__item__img dashboard__item__img--rented');
        button.classList.add('dashboard__item__button');
    }   
}