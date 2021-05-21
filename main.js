let arrowR=document.querySelector('.arrow-right')
let arrowL=document.querySelector('.arrow-left')
let ingineCalc=document.querySelector('.ingine')
let contentBox=document.querySelector('.content')
let basicCalc=document.querySelector('.basic')
let input=document.querySelector('.result')


arrowR.onclick=function getIngine(){                    //пререключение на инженерную версию
    arrowR.style.display = 'none';
    arrowL.style.display = 'block'
    ingineCalc.style.display = 'block'
    contentBox.style.width='70%'
    basicCalc.style.width='60%'
    ingineCalc.style.width='40%'
}
arrowL.onclick=function getBasic(){                        //пререключение на базовую версию
    arrowR.style.display = 'block'
    arrowL.style.display = 'none';
    ingineCalc.style.display = 'none'
    contentBox.style.width='40%'
    basicCalc.style.width='100%'
    ingineCalc.style.width='0'
}

function insert(num=0){  
    this.num=num                 //функция ввода выражения
    if(input.textContent=='0'){
        input.textContent='';
        input.textContent=input.textContent + this.num;
    }
    else{
        input.textContent=input.textContent + this.num;
    }
}

function clean(){               //функция очистки на кнопке "С"
    input.textContent='0'
}

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

insert.prototype.equal=function() {                   //функция на кнопке "=" для двух операндов
    let res=0
    let arr=getExpression()

    if(arr[1]=='+'){
        res=arr[0]+arr[2]
    }
    else if(arr[1]=='-'){
        res=arr[0]-arr[2]
    }
    else if(arr[1]=='*'){
        res=arr[0]*arr[2]
    }
    else if(arr[1]=='/'){
        res=arr[0]/arr[2]
    }
    else if(arr[1]=='^'){
        res=Math.pow(arr[0],arr[2])
    }
    else if(arr[1] == '%'){
        res=arr[0] % arr[2]
    }
    else{
        res=input.textContent
    }

    console.log(res)
    input.textContent=res
}

insert.prototype.elevationToDegree=function(){           //возведение в степень
    let res=Math.pow(2,input.textContent)
    input.textContent=res
}

insert.prototype.elevate=function(){
    let res=Math.pow(input.textContent,2)
    input.textContent=res
}

insert.prototype.derivative=function(){
    let res=1/input.textContent
    input.textContent=res
}

insert.prototype.negativePositive=function(){
    let res=-1*input.textContent 
    input.textContent=res
}

insert.prototype.calcPi=function(){
    let res=Math.PI*input.textContent
    input.textContent=res
}

insert.prototype.calcE=function(){
    let res=Math.E*input.textContent
    input.textContent=res
}

insert.prototype.calcLog=function(){
    let res=Math.log10(input.textContent)
    input.textContent=res
}

insert.prototype.calcExp=function(){
    let res=Math.exp(input.textContent)
    input.textContent=res
}

insert.prototype.factorial=function(){
    let res=1
    for (i = 0; i < input.textContent; i++){
        res = res * (input.textContent - i);
    }
    input.textContent=res
}

insert.prototype.absolute=function(){
    let res = Math.abs(input.textContent)
    input.textContent=res
}
insert.prototype.sqrt=function(){
    let res =Math.sqrt(input.textContent)
    input.textContent=res
}

let calculation=new insert()

module.exports=insert