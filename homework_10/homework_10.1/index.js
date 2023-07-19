

let findAverage = [0, 1, 2, 4, 7, 10]; 
findAverage = findAverage.filter((item) => {return item != 0 })
console.log(findAverage);

const findAverageSum = findAverage.map ( item => sum += item ,sum = 0);
console.log(findAverageSum);

let lastAverageIndex = findAverageSum[findAverageSum.length - 1];
console.log(lastAverageIndex);

const middle = lastAverageIndex / findAverage.length;
console.log(middle)




