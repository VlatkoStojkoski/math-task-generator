const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const zadaci = document.querySelectorAll(".zadaca"),
      genButton = document.querySelector("#gen"),
      checkButton = document.querySelector("#check"),
      resenija = document.querySelectorAll(".input"),
      zadacaGrupi = document.querySelectorAll(".zadacaGroup"),
      genLimit = document.querySelector("#limiter")
      limitForm = document.querySelector("#limitForm");

let tocniResenija = [];

const resetZadaci = (max) => {
    zadaci.forEach((el, index) => {
        num1=random(1, max);
        num2=random(1, num1);
        el.innerHTML=`${num1} - ${num2} =`;
        tocniResenija.push(num1-num2);
    });
}

resetZadaci(parseInt(genLimit.value));

limitForm.addEventListener("submit", e => {
    e.preventDefault();
    resetZadaci(parseInt(genLimit.value));
});

genChange = () => {
    resetZadaci(parseInt(genLimit.value));
};


genButton.addEventListener("click", () => {
    resenija.forEach((el, index) => {
        zadacaGrupi[index].style.backgroundColor = "rgb(63, 63, 63)";
    });
    resenija.forEach(el => {
        el.value="";
    });
    tocniResenija = [];
    resetZadaci(parseInt(genLimit.value));
});

checkButton.addEventListener("click", () => {
    resenija.forEach((el, index) => {
        resenie=parseInt(el.value);
        if(resenie==tocniResenija[index]) {
            zadacaGrupi[index].style.backgroundColor = "rgb(49, 97, 30)";
        } else {
            zadacaGrupi[index].style.backgroundColor = "rgb(189, 29, 29)";
        }
    });
    console.log(tocniResenija);
});

