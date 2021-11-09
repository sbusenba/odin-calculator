function add(a,b){
    return String(Number(a)+Number(b))
}
function subtract(a,b){
    return String(Number(a)-Number(b))
}
function multiply(a,b){
    return String(Number(a)*Number(b))
}
function divide(a,b){
return (b === 0)? "can't divide by zero!": String(Number(a)/Number(b))
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

    if (operator === '+'){
        number1 = add(number1,number2)
        operator =''
        number2 =''

    } else if (operator === '-'){
        number1 = subtract(number1,number2)
        operator =''
        number2 =''
    }else if (operator === '*'){
        number1 = multiply(number1,number2)
        operator =''
        number2 =''
    }else if (operator === '/'){
        if (Number(number2) != 0){
            number1 = divide(number1,number2)
         } else{
             number1 = "Can't divide by Zero!"
         }

    }
    if (number1 !=="Can't divide by Zero!")
    {
        number1 =String(Number(number1).toFixed(8))
    }
    operator =''
    number2 =''
    lastEntry='equals'

    refreshDisp()
    
}
function signButton(){
    if (number2 === ''){
        number1 = -number1
    } else {
        number2 = -number2
    }
    refreshDisp()
}
function back(){
    switch (lastEntry){
        case '':
            break
        case 'number1':
            number1 = String(number1).slice(0,-1)
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
        case 'equals':
            clear()
            break
    }
    refreshDisp()


}

function decimal(){
    if ((operator==='')&&(number1.indexOf('.')===-1)){
        (number1==='') ? number1 = "0.":number1+=this.innerText
        lastEntry='number1'
    } else if ((operator!=='')&&(number2.indexOf('.')===-1)) {
        (number2==='') ? number2 = "0.":number2+=this.innerText
        lastEntry='number2'
    }
    refreshDisp()
}
function operClick(e){
    if (number1 !="Can't divide by Zero!"){
        if (operator ===''){
            operator = this.innerText
            switch (operator){

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
    }else{
        clear()
        refreshDisp()
    }
}
number1 =''
number2 =''
operator =''
lastEntry=''
display = document.querySelector('.display')
numButtons = document.querySelectorAll('.numButton')
operButtons = document.querySelectorAll('.operButton')
document.querySelector('.equalsButton').addEventListener('click',evaluate)
document.querySelector('.decimalButton').addEventListener('click',decimal)
document.querySelector('.signButton').addEventListener('click',signButton)
document.querySelector('.backButton').addEventListener('click',back)
document.querySelector('.clearButton').addEventListener('click',clear)
numButtons.forEach((button)=>button.addEventListener('click',numClick))
operButtons.forEach((button)=>button.addEventListener('click',operClick))