/////////// 1 ///////////

class Person  {

    constructor(newName,newgender) {
        this.name = newName;
        this.gender = newgender;
    }  
}

const person = new Person("Stas","mail");
const person2 = new Person("Oksana","female");
console.log(person,person2)

// 2-вариант //

// class Person  {

//     constructor(newName,newgender) {
//         this.name = newName;
//         this.gender = newgender;
//     }  
// }

// const newName = prompt `Введиде имя`; 
// const newSex = prompt `Введиде Ваш пол : male and female`; 
// const person = new Person("Stas","mail");
// console.log(person)

/////////// 2 ///////////

class Room {
    constructor(numApartment) {
        this.apartment = []; 
        for (let i of numApartment) {
            this.apartment.push(i);
        }
    }
}
const numApartment = ['Stas', 'Valera', 'Ihor'];
const numApartment2 = ['Oksana', 'Vary', 'Nastya','Nika'];
const room = new Room(numApartment);
const room2 = new Room(numApartment2);

console.log(`В квартире будет жить ${room.apartment.length} человек`);
console.log(`В квартире будет жить ${room2.apartment.length} человек`)

/////////// 3 ///////////

class House {
    constructor(numOfAprt) {
        this.roomsOfHouse = [];
        this.maxRoom = 20;
        for (let i of numOfAprt) {
        this.roomsOfHouse.push(i);        
        }        
    }
}

const numOfAprt = [1, 2, 13, 4, 5, 12, 16];

//второй вариант колличества квартир
// const numOfAprt = [1, 2, 13, 4, 5, 12, 16, 17, 1, 2, 13, 4, 5, 12, 11, 14, 15, 16, 1, 11, 14, 15, 16, 177];
let house = new House(numOfAprt);

// console.log(house.roomsOfHouse.length)
// console.log(house.maxRoom)

if(house.roomsOfHouse.length < house.maxRoom ){
    console.log(`20-и квартирный дом может покрыть Вашу потребность в ${house.roomsOfHouse.length} квартир(ах)`)
}else {
    console.log(`20-и квартирный дом не может покрыть Вашу потребность в ${house.roomsOfHouse.length} квартир`)
}