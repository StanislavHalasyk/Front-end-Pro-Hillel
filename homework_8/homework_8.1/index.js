const arrayNumber = [50, 60, 'play', 'game', 6, 8];

const showMeNumbers = (numbers) => typeof numbers === "number" ? 
console.log(`${numbers}, Это число`) : console.log(`${numbers}, Это не число`);

arrayNumber.forEach(showMeNumbers)



// const arrayNumber = [50, 60, 'play', 'game', 6, 8];

// const showMeNumbers = (numbers) => {   
//     console.log (numbers)
//   if(typeof numbers === 'number'){
//     console.log(`${numbers}, Это число`)
//   }else {
//     console.log(`${numbers}, Это не число`)
//   }
// }

// arrayNumber.forEach(showMeNumbers)

