const arrayUsers =  ['user', 'user1', 'user10', 'user100', 'user1000']; 

const  showMeUser = (name) => {
    if (name.length > 4){
        console.log(`${name}, пользователь у которых символов более 4-х`)
    }
}

const res = arrayUsers.find(showMeUser);
console.log(res)



// Вариант через forEach //


// const arrayUsers =  ['user', 'user1', 'user10', 'user100', 'user1000'];

// const  showMeUser = (name) => {
//     if (name.length > 4){
//         console.log(`${name}, пользователи у которых символов более 4-х`)
//     }
// }

// arrayUsers.forEach(showMeUser)


