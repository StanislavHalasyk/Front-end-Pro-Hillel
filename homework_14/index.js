function getDataSearch(data) {
    data.forEach((item) => {        
        console.log(item.email)
    });
} 

const getData = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        getDataSearch(data) ;
        console.log(data)
    } catch (e){
        console.log(e)
    }  
}

getData()
