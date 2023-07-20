
       function findAverage(array) {
        if (array.length !== 0) {
            const middlefindAverage = array.reduce((sum, item) => sum + item) / array.length; 
            return middlefindAverage}
        else {
            return 0;
        }
       }
       
       const result1 = (findAverage([1, 2, 4, 7, 10])); 
       const result2 = (findAverage([])); 
       console.log (result1);
       console.log (result2)