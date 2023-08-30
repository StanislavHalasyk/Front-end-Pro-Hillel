fetch('https://jsonplaceholder.typicode.com/photos')
.then(response => response.json())
.then(info => console.log(info))


