const quastion = (text, maxLength) => {
        const textMaxLength = text.slice(0, maxLength);

        if (text.length > maxLength ) {
            return (`${textMaxLength}...`)
        } else {
            return text;
        }
    }            
    const result = quastion("12341535", 4)
    console.log (result);

// Старая задача //

// function quastion(text, maxLength) {

//     const textMaxLength = text.slice(0, maxLength);
//         let result;
        
//     if (text.length > maxLength ) {
//         result = textMaxLength.concat('…');
//     } else {
//         result = text;
//     }
//     console.log (result);
//     }

// quastion("12345678",3)

   