//Я вызвал 2 раза, попробовал через prompt. Так можно делать ?

function quastion(text, maxLength) {

    const textMaxLength = text.slice(0, maxLength);
        let result;
        
    if (text.length > maxLength ) {
        result = textMaxLength.concat('…');
    } else {
        result = text;
    }
    console.log (result);
    }

quastion("12345678",3)    // Это если мы передаем данные сами. Ниже вариант когда получаем от пользователя
quastion(text = prompt ('Введите произвольный текст'),maxLength = +prompt ('Введите сколько симфолов Вы хотите видеть'))



//Это вариант как ты говорил, что так более лучше сделать .

// function quastion(text, maxLength) {

//     let result;
    
//     if (text.length > maxLength ) {
//         result = `${text.slice(0, maxLength)}...`;
//     } else {
//         result = text;
//     }
//     console.log (result);
// }

// quastion("12345678",3)
