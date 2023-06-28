
const text = prompt ('Введите произвольный текст');
const maxLength = +prompt ('Введите сколько симфолов Вы хотите видеть');

const textMaxLength = text.slice(0, maxLength);
let result;

if (text.length > maxLength ) {
    result = textMaxLength.concat('…');
} else if(text.length < maxLength){
    result = text;
}

console.log (result);


//Вопрос. Стоит ли задавать сразу переменную textMaxLength ? Это не будет считаться лишним действием ? Так как если условие не выполняется 
// ( строка которую ввел пользователь короче чем длина которую он указал) и это действие просто пропускается и выполняется сразу else if?

// const text = prompt ('Введите произвольный текст');
// const maxLength = +prompt ('Введите сколько симфолов Вы хотите видеть');

// let textMaxLength;
// let result;

// if (text.length > maxLength ) {
//     textMaxLength = text.slice(0, maxLength)
//     result = textMaxLength.concat('…');
// } else if(text.length < maxLength){
//     result = text;
// }

// console.log (result);