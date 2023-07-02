//Если я верно понял задание, то слово word у нас неизменное. Я его зафиксировал без ввода.
// Так же привожу к общему регистру . Для поиска .
//Если нет то я сделал второй вариант, там где мы вводим любоей слово для поиска.

function checkWord(str, word = "word") {


    const strLower = str.toLowerCase();
    let result;
    
    if ( strLower.includes(word)) {
        result = "true";
    }else {
        result = "false"
    }
    console.log(result);
   
    }

    checkWord(str = prompt ('Введите произвольный текст'))


    //Второй вариант


    // function checkWord(str, word) {


    //     const strLower = str.toLowerCase();
    //     let result;
        
    //     if ( strLower.includes(word)) {
    //         result = "true";
    //     }else {
    //         result = "false"
    //     }
    //     console.log(result);
       
    //     }
    
    //     checkWord(str = prompt ('Введите произвольный текст'), `word`)

