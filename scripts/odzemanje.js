const resetZadaci = (max) => {
    tocniResenija = [];
    zadaci.forEach((el, index) => {
        if(!negCheck.checked){
            num1=random(1, max);
            num2=random(1, num1);
        } else {
            num1=random(1, max);   
            num2=random(1, max);
        }
        el.innerHTML=`${num1} - ${num2} =`;
        tocniResenija.push(num1-num2);
    });
}