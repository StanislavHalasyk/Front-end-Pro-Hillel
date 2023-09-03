const btns = document.querySelectorAll(".counter__btn");  

btns.forEach( btn=> {
    btn.addEventListener('click', function () {
        const direction = this.dataset.direction;
        const input = this.parentElement.querySelector(".counter__value");
        const currentValue = +input.value; 
        let newValue;

        switch(direction){
            case 'plus':
            newValue = currentValue + 1;  
            break;  
            case 'minus':
            newValue = currentValue - 1; 
            break;
            case 'reset':
            newValue = 0; 
            break;
            default:
            newValue;
        }    

        input.value = newValue;
    })
})