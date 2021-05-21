
function getExpression(){           //получить выражение в массив
    let sign=''
    let signNumber=0
    for( let i=0;i<input.textContent.length;i++){
        if(input.textContent[i]=='+' || input.textContent[i]=='-' || input.textContent[i]=='*' || input.textContent[i]=='/'){
            signNumber=i
            sign=input.textContent[i]
        }
        else if(input.textContent[i]=='^' || input.textContent[i]=='%'){
            signNumber=i
            sign=input.textContent[i]
        }
    }
    let firstOperand=+input.textContent.slice(0,signNumber)
    let secondOperand=+input.textContent.slice(signNumber+1,input.textContent.length)
    return [firstOperand,sign,secondOperand]
}
