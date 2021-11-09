function add(a,b){
    return Number(a)+Number(b)
}
function subtract(a,b){
    return Number(a)-Number(b)
}
function multiply(a,b){
    return Number(a)*Number(b)
}
function divide(a,b){
return (b === 0)? "can't divide by zero!": Number(a)/Number(b)
}

function numClick(e){
    if (operator===''){
        number1+=this.innerText
        lastEntry='number1'
    } else {
        number2+=this.innerText
        lastEntry='number2'
    }
    refreshDisp()
}

function refreshDisp(){
    display.innerText = number1 +operator +number2
}
function clear(){
    number1=''
    number2=''
    operator=''
    refreshDisp()


}
function evaluate(){
    mathString = display.innerText
    if (mathString.indexOf('+')>= 0){
        [number1,number2] = mathString.split('+')
        number1 = add(...[number1,number2])
        operator =''
        number2 =''

    } else if (mathString.indexOf('-')>= 0){
        [number1,number2] = mathString.split('-')
        number1 = subtract(...[number1,number2])
        operator =''
        number2 =''
    }else if (mathString.indexOf('*')>= 0){
        [number1,number2] = mathString.split('*')
        number1 = multiply(...[number1,number2])
        operator =''
        number2 =''
    }else if (mathString.indexOf('/')>= 0){
        [number1,number2] = mathString.split('/')
        number1 = divide(...[number1,number2])
        operator =''
        number2 =''
    }



    refreshDisp()
    
}

function back(){
    switch (lastEntry){
        case '':
            break
        case 'number1':
            console.log(number1.slice(0,-1))
            number1 = number1.slice(0,-1)


            if (number1 ===''){
                lastEntry= ''
            }
            break
        case 'number2':
            number2 = number2.slice(0,-1)
            if (number2 ===''){
                lastEntry= 'operator'
            }
            break
        case 'operator':
            operator = ''
            lastEntry= 'number1'
            break







    }
    refreshDisp()


}

function operClick(e){
    if (operator ===''){
        operator = this.innerText
        switch (operator){
            case '+/-':
            number1 = -number1
            operator = ''
            break
            case ' + ':
                operator = " + " 
            break;
            case ' - ':
                operator = " - " 
            break;
            case ' * ':
                operator = " * " 
            break;
            case ' / ':
                operator = " / " 
            break;    
        }
    
        
    } else {
        evaluate()
        operator = this.innerText
        switch (operator){
            case '+/-':
            number2 = -number2
            operator = ''
            break
            case ' + ':
                operator = " + " 
            break;
            case ' - ':
                operator = " - " 
            break;
            case ' * ':
                operator = " * " 
            break;
            case ' / ':
                operator = " / " 
            break; 
        }
    
    }
    lastEntry='operator'
    refreshDisp()
}
number1 =''
number2 =''
operator =''
lastEntry=''
display = document.querySelector('.display')
numButtons = document.querySelectorAll('.numButton')
operButtons = document.querySelectorAll('.operButton')
document.querySelector('.equalsButton').addEventListener('click',evaluate)
document.querySelector('.backButton').addEventListener('click',back)
document.querySelector('.clearButton').addEventListener('click',clear)
numButtons.forEach((button)=>button.addEventListener('click',numClick))
operButtons.forEach((button)=>button.addEventListener('click',operClick))