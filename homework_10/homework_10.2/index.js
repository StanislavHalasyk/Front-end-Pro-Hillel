const smaller =  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15 ];
const smaller2 = [];


let numPlus = 0;
let numMinus = 0;
let numZero = [];
const numberAll = (value) => {
    if(value > 0 ){
        return numPlus = numPlus + value;         
    }else if (value < 0)
     {
       return numMinus = numMinus + value;     
     }
     else if (numberAll.length === 0){
     return numZero;
     }
    }      

smaller.forEach(numberAll);

console.log(numPlus);
console.log(numMinus);
console.log(numZero);
