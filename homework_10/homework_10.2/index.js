const smaller =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15 ];
const smaller2 = [];

let numMinus = 0;
let numZero = [];
let newArr = [];
const numberAll = (value) => {
    if(value > 0){ 
      total = newArr.push(value);           
    }else if (value < 0)
     {
      return numMinus = numMinus + value;     
     }
     else if (numberAll.length === 0){
      return numZero;
     }
    }      

smaller.forEach(numberAll);

console.log(newArr.length); 
console.log(numMinus);
console.log(numZero);
