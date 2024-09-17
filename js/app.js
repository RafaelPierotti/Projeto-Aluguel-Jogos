function changeStatus(id){
    let game = document.getElementById(`game-${id}`);
    let button = game.querySelector('.dashboard__item__button');

    changeImageButtonStatus(game);
}

function changeImageButtonStatus(game){
    let image = game.querySelector('.dashboard__item__img');
    let button = game.querySelector('.dashboard__item__button');

    if (image.classList.contains('dashboard__item__img--rented')){
        image.classList.remove('dashboard__item__img--rented');
        button.classList.remove('dashboard__item__button--return');
        button.textContent = 'Alugar';
    } else {
        image.classList.add('dashboard__item__img--rented');
        button.classList.add('dashboard__item__button--return');
        button.textContent = 'Devolver';
    }   
}

