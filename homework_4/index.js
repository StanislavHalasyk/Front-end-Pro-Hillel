
const text = prompt ('Введите произвольный текст');
const maxLength = +prompt ('Введите сколько симфолов Вы хотите видеть');

const textMaxLength = text.slice(0, maxLength);
let result;

if (text.length > maxLength ) {
    result = textMaxLength.concat('…');
} else {
    result = text;
}

console.log (result);


//Вопрос. Стоит ли задавать сразу переменную textMaxLength ? Это не будет считаться лишним действием ? Так как если условие не выполняется 
// ( строка которую ввел пользователь короче чем длина которую он указал) и это действие просто пропускается и выполняется сразу else ?
// И если у нас всего 1 проверка то мы используем только одно условие if и  если оно не выполняется то переходим сразу в else ? Верно ?

// const text = prompt ('Введите произвольный текст');
// const maxLength = +prompt ('Введите сколько симфолов Вы хотите видеть');

// let textMaxLength;
// let result;

// if (text.length > maxLength ) {
//     textMaxLength = text.slice(0, maxLength)
//     result = textMaxLength.concat('…');
// } else {
//     result = text;
// }

// console.log (result);