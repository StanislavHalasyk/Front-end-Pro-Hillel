const arrayUsers =  ['user', 'user1', 'user10', 'user100', 'user1000']; 

const  showMeUser = (name) => {
    if (name.length > 4){
        result = name;
        return name.startsWith(result);
    }    
}

const res = arrayUsers.find(showMeUser);
console.log(res)

