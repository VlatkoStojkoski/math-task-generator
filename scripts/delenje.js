function isPrime(n){
  if (n===1)
    return false;
  else if(n === 2) 
    return true;
  else {
    for(var x = 2; x < n; x++)
      if(n % x === 0)
        return false;
    return true;  
  }
}

const randomDivisor = (n) => {
    let divisorsList = [];
    [ ...Array(n+1).keys() ]
    .slice(1)
    .reduce((s, a)=>{
        var divisor = !(n % a) && a;
        if (divisor) divisorsList.push(divisor);
    }, 0);
    if(!isPrime(n))
        divisorsList.splice(0,1);
    return divisorsList[Math.floor(Math.random() * divisorsList.length)]
}

const resetZadaci = (max) => {
    tocniResenija = [];
    zadaci.forEach((el, index) => {
        num1=random(1, max);
        num2=randomDivisor(num1);
        while (num1==num2 || num1==1) {
            num1=random(1, max);
            num2=randomDivisor(num1);
        }
        el.innerHTML=`${num1} : ${num2} =`;
        tocniResenija.push(num1/num2);
    });
}