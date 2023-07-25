function calculater (firstNumber , secondNumber, operator){
    switch(operator){
            case '+':
            return firstNumber + secondNumber ;

            case '-':
                return firstNumber - secondNumber ;

            case '*':
            return firstNumber * secondNumber ;


            case '/':
                return firstNumber / secondNumber ;

           default:
            return("operator is wrong !")     
    

    }
}


const firstNumber = +prompt ("Enter first number ?")
const operator= prompt ("Enter operator ?")
const secondNumber= +prompt ("Enter second number ?")
   

console.log(calculater(firstNumber , secondNumber, operator))