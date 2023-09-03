//String

                                    //Можно было сразу записать все в const и не указывать дополнительные переменные let:
                                                                    // const aStr = String(true);
                                                                   // console.log(typeof aStr); 
let a = true;                   
const aStr = String(a);
console.log(typeof aStr);     

let b = 1000;
const bStr = String(b);
console.log(typeof bStr);  

let c = null;
const cStr = String(c);
console.log(typeof cStr);

//Number

let d = '123a';
const dNum = Number(d);
console.log(typeof dNum);    //Это значение NaN. Можно выделить отдельно число через parseInt 
                            // let d = '123a';
                            // const dNum  = parseInt(d);
                            // console.log (dNum)


let e = '1000';
const eNum = Number(e);
console.log(typeof eNum);    

let f = 'null';
const fNum = Number(d);
console.log(typeof fNum);

let g = 'undefined';
const gNum = Number(g);
console.log(typeof gNum);

let h = 'false';
const hNum = Number(h);
console.log(typeof hNum);


//Boolean


let i = null;
const iBoolean = Boolean(i); 
console.log(typeof iBoolean);   //Это у нас False

let j = '';
const jBoolean = Boolean(j) ;
console.log(typeof jBoolean);   //Это у нас False

let k = 0;
const kBoolean = Boolean(k) ;
console.log(typeof kBoolean);   //Это у нас False

let l = ' ';
const lBoolean = Boolean(l) ;
console.log(typeof lBoolean);   //Это у нас True

let m = 1000;
const mBoolean = Boolean(m) ;
console.log(typeof mBoolean);   //Это у нас True

let n = '1200';
const nBoolean = Boolean(n) ;
console.log(typeof nBoolean);   //Это у нас True








// const container = document.querySelector('#data-container');

// function displayData(data) {
//     data.forEach((item) => {
//         const listItem = document.createElement('div');
//         listItem.innerHTML = `
//         <p><strong>User ID:</strong> ${item.id}</p>
//         <p><strong>Name:</strong> ${item.name}</p>
//         `; 
//         container.appendChild(listItem); 
//         console.log(data)
//     });
// } 

// // fetch('https://jsonplaceholder.typicode.com/users')
// // .then(res => res.json())
// // .then(data => displayData(data))
// // .catch(e => console(e))

// const fetchData = async() => {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         displayData(data) ;
//     } catch (e){
//         console.log(e)
//     }
  
// }

// fetchData()
