// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

'use strict';
const countryName = prompt("В какую страну хотите доставить товар?");
let country;
let cost;
let message;


if (countryName === null) {
    alert('Очень жаль, приходите ещё');
} else {
    country = countryName.toLowerCase();
}


switch (country) {
    case 'китай':
        cost = 100;
        country = country[0].toUpperCase() + country.substring(1);
        message = `Доставка в ${country} будет стоить ${cost} кредитов`;
        break;

    case 'чили':
        cost = 250;
        country = country[0].toUpperCase() + country.substring(1);
        message = `Доставка в ${country} будет стоить ${cost} кредитов`;
        break;

    case 'австралия':
        cost = 170;
        country = country[0].toUpperCase() + country.substring(1);
        message = `Доставка в ${country} будет стоить ${cost} кредитов`;
        break;

    case 'индия':
        cost = 80;
        country = country[0].toUpperCase() + country.substring(1);
        message = `Доставка в ${country} будет стоить ${cost} кредитов`;
        break;

    case 'ямайка':
        cost = 120;
        country = country[0].toUpperCase() + country.substring(1);
        message = `Доставка в ${country} будет стоить ${cost} кредитов`;
        break;

    default:
        message = 'В вашей стране доставка не доступна';

}

alert(message);