const text = prompt ('Введите произвольный текст');
const maxLength = +prompt ('Введите сколько симфолов Вы хотите видеть');

const textMaxLength = text.slice(0, maxLength);

const textFinal = textMaxLength.concat('…');
console.log (textFinal);

