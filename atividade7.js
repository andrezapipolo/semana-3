//Crie uma função que recebe 2 parâmetros e retorna o resultado da divisão entre eles. Além disso, se o resto dessa divisão for zero deverá imprimir no console o valor e dizer que ele é par.

function divisao(num1, num2){
 const resultado = num1 / num2 
 if (resultado % 2 === 0){
      return `O resultado da divisão é ${num1 / num2}. O resto é O e é Par`   
    }else{
      return `O Resultado da divisão é ${num1 / num2} é Ímpar`  
    }

}
console.log(divisao(14,2))