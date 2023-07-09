const arrayColor = ['green', 'yellow', 'white', 'red', 'black',];

const findColor = (color) => {
    const result = arrayColor.indexOf(color);
    if (result == -1){
        console.log (`false`)
    } else {
        console.log (`true`)
    }
}

findColor('green')

