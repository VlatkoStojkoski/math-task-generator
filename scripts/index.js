let tocniResenija = [];

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const resetCards = () => {
    resenija.forEach((el, index) => {
        zadacaGrupi[index].style.backgroundColor = 'rgb(63, 63, 63)';
    });
    resenija.forEach(el => {
        el.value='';
    });
    resetZadaci(parseInt(genLimit.value));
}

const zadaci = document.querySelectorAll('.zadaca'),
genButton = document.querySelector('#gen'),
checkButton = document.querySelector('#check'),
resenija = document.querySelectorAll('.input'),
zadacaGrupi = document.querySelectorAll('.zadacaGroup'),
genLimit = document.querySelector('#limiter'),
limitForm = document.querySelector('#limitForm'),
negCheck = document.getElementById('negCheck');

resetZadaci(parseInt(genLimit.value));

limitForm.addEventListener('submit', e => {
    e.preventDefault();
    resetCards();
    resetZadaci(parseInt(genLimit.value));
});

genChange = () => {
    resetCards();
    resetZadaci(parseInt(genLimit.value));
};

genButton.addEventListener('click', () => {
    resetCards();   
});

checkButton.addEventListener('click', () => {
    resenija.forEach((el, index) => {
        resenie=parseInt(el.value);
        if(resenie==tocniResenija[index]) {
            zadacaGrupi[index].style.backgroundColor = 'rgb(49, 97, 30)';
        } else {
            zadacaGrupi[index].style.backgroundColor = 'rgb(189, 29, 29)';
        }
    });
});

function toggleHam() {
    const x = document.getElementById('navbar'),
          y = document.querySelector('.icon i');
    if (x.className === 'navbar') {
        x.className += ' responsive';
        y.className = 'fa fa-times';
    } else {
        x.className = 'navbar';
        y.className = 'fa fa-bars';
    }
}