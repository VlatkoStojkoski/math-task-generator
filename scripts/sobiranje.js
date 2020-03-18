const resetZadaci = (max) => {
    max-=1;
    zadaci.forEach((el, index) => {
        num1=random(1, max);
        num2=random(1, max-num1);
        el.innerHTML=`${num1} + ${num2} =`;
        tocniResenija.push(num1+num2);
    });
}