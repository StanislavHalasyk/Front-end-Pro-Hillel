let price = '$120';
const result = price.slice(1);
console.log(result); 
//Если нужно перевести значение в число, изначально была стринга.
const resultNumber = Number(result);
console.log(typeof resultNumber);
