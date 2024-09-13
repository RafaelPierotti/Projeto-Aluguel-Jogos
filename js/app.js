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
