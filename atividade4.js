//Crie uma função que retorna a palavra (impar/par) de acordo com seu parâmetro.

function retornaParOuImpar(numero){
 if(numero %2 ==0){
    return "É Par!"   
 }else{
   return "É ímpar!"  
 }

}

console.log(retornaParOuImpar(11))