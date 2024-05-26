// Desafio 8
// 8 - Crie uma função de número de telefone Implemente a função formatPhoneNumberque recebe um array com 11 números e retorna um número de telefone, respeitando pares, traços e espaços.
function formatoPhoneNumber()   {   
    meuArray= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
    numero1 = meuArray.slice(2,7)
    numero2= meuArray.slice(7)
    ddd1 = meuArray.slice(0,2)
    ddd= ddd1.join('')
    barra1 = "("
    barra2= ")"
    numero =  barra1+ ddd +barra2 + numero1.join('') + '-' + numero2.join('')
if (meuArray.length !=11){
   console.log("Array com tamanhso incorreto. ");
}
for(let i=0;i < meuArray.length; i++) 
if (meuArray[i] <0 )  {
    console.log("não é possível gerar um número de telefone com esses valores"); 
}
for(let i=0;i < meuArray.length; i++)
 if (meuArray[i] >9) {
    console.log("não é possível gerar um número de telefone com esses valores" )}

for(let i=1;i < meuArray.length; i++)
if (numero[i] == numero[i-1]){
console.log("não é possível gerar um número de telefone com esses valores")
}
else {
    console.log(numero);
}
}
formatoPhoneNumber()// 8 - Crie uma função de número de telefone Implemente a função formatPhoneNumberque recebe um array com 11 números e retorna um número de telefone, respeitando pares, traços e espaços.
function formatoPhoneNumber()   {   
    meuArray= [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]
    numero1 = meuArray.slice(2,7)
    numero2= meuArray.slice(7)
    ddd1 = meuArray.slice(0,2)
    ddd= ddd1.join('')
    barra1 = "("
    barra2= ")"
    numero =  barra1+ ddd +barra2 + numero1.join('') + '-' + numero2.join('')
if (meuArray.length !=11){
   console.log("Array com tamanhso incorreto. ");
}
for(let i=0;i < meuArray.length; i++) 
if (meuArray[i] <0 )  {
    console.log("não é possível gerar um número de telefone com esses valores"); 
}
for(let i=0;i < meuArray.length; i++)
 if (meuArray[i] >9) {
    console.log("não é possível gerar um número de telefone com esses valores" )}

for(let i=1;i < meuArray.length; i++)
if (numero[i] == numero[i-1]){
console.log("não é possível gerar um número de telefone com esses valores")
}
else {
    console.log(numero);
}
}
formatoPhoneNumber()