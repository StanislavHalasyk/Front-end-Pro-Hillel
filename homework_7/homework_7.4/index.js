const checkWord = (str, word = "word") => {
        const strLower = str.toLowerCase();
    
        if ( strLower.includes(word)) {
            return "true";
        }else {
            return "false"
        }   
    }
    let result = checkWord(str = prompt ('Введите произвольный текст'));
    
    console.log(result);


// Старая задача //

// function checkWord(str, word = "word") {

//     const strLower = str.toLowerCase();
//     let result;
    
//     if ( strLower.includes(word)) {
//         result = "true";
//     }else {
//         result = "false"
//     }
//     console.log(result);
   
//     }

//     checkWord(str = prompt ('Введите произвольный текст'))


    
    
    
        