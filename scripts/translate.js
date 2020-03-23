const tA = [
    document.querySelector('#navbar > a:nth-child(2)'),
    document.querySelector('#navbar > a:nth-child(3)'),
    document.querySelector('#navbar > a:nth-child(4)'),
    document.querySelector('#navbar > a:nth-child(5)'),
    document.querySelector('#navbar > a:nth-child(6)'),
    document.querySelector('header > h1'),
    document.querySelector('#limitForm > label'),
    document.querySelector('#limitForm > div > label'),
    document.querySelector('#check'),
    document.querySelector('#gen'),
    document.querySelector('footer > span:first-child'),
    document.querySelectorAll('section > h1'),
    document.querySelectorAll('section > div > p:nth-child(1) > .key'),
    document.querySelectorAll('section > div > p:nth-child(2) > .key'),
    document.querySelectorAll('section > div > p:nth-child(3) > .key'),
    document.querySelectorAll('section > div > p:nth-child(4) > .key'),
    document.querySelector('section.local> div > p:nth-child(5) > .key'),
    document.querySelector('section.local> div > p:nth-child(6) > .key'),
    document.querySelector('footer > span:nth-child(2)'),
    document.querySelector('.project > section > h1'),
    document.querySelectorAll('.project > section > p'),
    document.querySelector('.me > section > h1'),
    document.querySelectorAll('.me > section > p'),
];

const translateToAL = () => {
    tA[0].innerText = 'Shtim';
    tA[1].innerText = 'Zbritje';
    tA[2].innerText = 'Shumëzim';
    tA[3].innerText = 'Ndarje';
    tA[4].innerText = 'COVID-19';
    tA[10].innerHTML = '&copy; 2020 Vlatko Stojkoski';
    if (pageNum > 0 && pageNum < 5) {
        tA[5].innerText = `Detyrat me ${tA[pageNum-1].innerText.toLowerCase()}`;
        tA[8].innerText = 'Rezultatet e kontrollit';
        tA[9].innerText = 'Generate detyrat';
    }
    if (pageNum==0) {
        tA[19].innerText = 'Për këtë projekt';
        tA[20][0].innerText = 'Ky projekt është bërë në lidhje me situatën e COVID-19.';
        tA[20][1].innerText = 'Fëmijët e vegjël mund të zgjidhin detyra të krijuara rastësisht pa mërzit prindërit e tyre për detyra të shkruajnë për ta, në mënyrë që prindërit mund të përqëndrohen më shumë në punën e tyre nga shtëpia.';
        tA[20][2].innerText = 'Kjo i motivon website fëmijët për të zgjidhur shumë detyra duke theksuar rezultatet e duhura në të gjelbër.';
        tA[21].innerText = 'Rreth meje';
        tA[22][0].innerText = 'Emri im është Vlatko, unë jam një web designer / developer bazuar në Maqedoni. Më pëlqen duke e bërë faqet e internetit të pjesërisht të frymëzuara nga minimalism. Unë dua atë që bëj unë, dhe adhuroj procesin krijues. Ajo është addicting dhe mund të japë mundësi pa fund.';
        tA[22][1].innerText = 'Zhvillimi ka qenë gjithmonë my favorite, por kohët e fundit unë kam qenë duke bërë një shumë të dizajnit too. Unë plotësisht të gëzojnë të bërë kështu.';
    } else if (pageNum==2) {
        tA[7].innerText = 'Rezultatet negative';
        tA[6].innerText = 'Generate me numra deri në';
    } else if (pageNum == 1) {
        tA[6].innerText = 'Generate me rezultate deri në';
    } else if (pageNum == 3 || pageNum == 4) {
        tA[6].innerText = 'Generate me numra deri në';
    } else if (pageNum == 5) {
        tA[11][0].innerText = 'Globalisht';
        tA[11][1].innerText = 'Në Maqedoni';
        tA[12][1].innerText = tA[12][0].innerText = 'Gjithsej raste:';
        tA[13][1].innerText = tA[13][0].innerText = 'Aktiv:';
        tA[14][1].innerText = tA[14][0].innerText = 'Shëruar:';
        tA[15][1].innerText = tA[15][0].innerText = 'I vdekur:';
        tA[16].innerText = 'I ri:'
        tA[17].innerText = 'kritik:'
        tA[18].innerText = 'Të dhënat janë marrë nga Organizata Botërore e Shëndetësisë. Kjo nuk do të thotë se të dhënat e paraqitura është gjithmonë e saktë'
    }
    window.localStorage.setItem('language', 'al');
}


const translateToEN = () => {
    tA[0].innerText = 'Addition';
    tA[1].innerText = 'Subtraction';
    tA[2].innerText = 'Multiplication';
    tA[3].innerText = 'Division';
    tA[4].innerText = 'COVID-19';
    tA[10].innerHTML = '&copy; 2020 Vlatko Stojkoski';
    if (pageNum > 0 && pageNum < 5) {
        tA[5].innerText = `${tA[pageNum-1].innerText} tasks`;
        tA[8].innerText = 'Check results';
        tA[9].innerText = 'Generate tasks';
    }
    if (pageNum==0) {
        tA[19].innerText = 'About This Project';
        tA[20][0].innerText = 'This project was made regarding the COVID-19 situation.';
        tA[20][1].innerText = 'Young kids can solve randomly generated tasks without bothering their parents to write tasks for them, so that parents can focus more on their work from home.';
        tA[20][2].innerText = 'This website motivates kids to solve more tasks by higlighting the correct results in green.';
        tA[21].innerText = 'About Me';
        tA[22][0].innerText = 'My name is Vlatko, I am a web designer/developer based in Macedonia. I like making websites partly inspired by minimalism. I love what I do, and adore the creative process. It is addicting and can give never ending possibilities.';
        tA[22][1].innerText = 'Developing has always been my favourite, but lately I\'ve been doing a lot of design too. I thoroughly enjoy doing so.';
    } else if (pageNum==2) {
        tA[7].innerText = 'Negative results';
        tA[6].innerText = 'Generate with numbers up to';
    } else if (pageNum == 1) {
        tA[6].innerText = 'Generate with results up to';
    } else if (pageNum == 3 || pageNum == 4) {
        tA[6].innerText = 'Generate with numbers up to';
    } else if (pageNum == 5) {
        tA[11][0].innerText = 'Globally';
        tA[11][1].innerText = 'In Macedonia';
        tA[12][1].innerText = tA[12][0].innerText = 'Total cases:';
        tA[13][1].innerText = tA[13][0].innerText = 'Active:';
        tA[14][1].innerText = tA[14][0].innerText = 'Recovered:';
        tA[15][1].innerText = tA[15][0].innerText = 'Dead:';
        tA[16].innerText = 'New:'
        tA[17].innerText = 'Critical:'
        tA[18].innerText = 'The data is taken from the World Health Organization. This does not necessarily mean that the data shown is always accurate'
    }
    window.localStorage.setItem('language', 'en');
}

const translateToMK = () => {
    tA[0].innerText = 'Собирање';
    tA[1].innerText = 'Одземање';
    tA[2].innerText = 'Множење';
    tA[3].innerText = 'Делење';
    tA[4].innerText = 'COVID-19';
    tA[10].innerHTML = '&copy; 2020 Влатко Стојкоски';
    if (pageNum > 0 && pageNum < 5) {
        tA[5].innerText = `Задачи со ${tA[pageNum-1].innerText.toLowerCase()}`;
        tA[8].innerText = 'Проверете ги задачите';
        tA[9].innerText = 'Генерирајте нови задачи';
    }
    if (pageNum==0) {
        tA[19].innerText = 'За овој проект';
        tA[20][0].innerText = 'Овој проект е направен во однос на состојбата COVID-19.';
        tA[20][1].innerText = 'Малите деца може да решаваат случајно генерирани задачи без да им попречуваат на родителите додека тие работат од дома.';
        tA[20][2].innerText = 'Овој веб-сајт ги мотивира децата да решаваат повеќе задачи со истакнување на точните резултати со зелена боја';
        tA[21].innerText = 'За мене';
        tA[22][0].innerText = 'Моето име е Влатко, јас сум веб дизајнер / девелопер од Скопје, Република Македонија. Мене многу ми се допаѓа правењето веб-страници. Јас го сакам тоа што го правам и го обожувам креативниот процес.';
        tA[22][1].innerText = 'Девелопмент отсекогаш бил мојот фаворит, но во последно време јас многу го засакав и дизајнот на страници';
    } else if (pageNum==2) {
        tA[7].innerText = 'Негативни резултати';
        tA[6].innerText = 'Генерирај со броеви до';
    } else if (pageNum == 1) {
        tA[6].innerText = 'Генерирај со резултати до';
    } else if (pageNum == 3 || pageNum == 4) {
        tA[6].innerText = 'Генерирај со броеви до';
    } else if (pageNum == 5) {
        tA[11][0].innerText = 'На глобално ниво';
        tA[11][1].innerText = 'Во Македонија';
        tA[12][1].innerText = tA[12][0].innerText = 'Вкупно случаи:';
        tA[13][1].innerText = tA[13][0].innerText = 'Активни:';
        tA[14][1].innerText = tA[14][0].innerText = 'Оздравени:';
        tA[15][1].innerText = tA[15][0].innerText = 'Мртви:';
        tA[16].innerText = 'Нови:'
        tA[17].innerText = 'Критични:'
        tA[18].innerText = 'Податоците се земени од Светската здравствена организација. Ова не мора да значи дека податоците кои се прикажани се секогаш точни'
    }
    window.localStorage.setItem('language', 'mk');
}

const localLanguage = window.localStorage.getItem('language');

switch (localLanguage) {
    case 'mk':
        translateToMK(pageNum);
        break;
    case 'en':
        translateToEN(pageNum);
        break;
    case 'al':
        translateToAL(pageNum);
        break;
    default:
        translateToEN(pageNum);
        break;
}
