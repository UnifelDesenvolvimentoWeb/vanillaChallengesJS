// Desafio 7
//Crie uma função que calcula o salário liquido a ser receido Implemente a função taxesCalcul que recebe por parâmetro o valor bruto (do tipo number) do salário e calcula o valor líquido.

function taxesCalcul() {
    const salarioBruto =  4200
    var INSS1 = 9/100
    var INSS2= 11/100
    desconto1 = (salarioBruto *INSS1)
    salarioBase1 = (salarioBruto- desconto1)
    desconto2 = (salarioBruto *INSS2)
    salarioBase2=(salarioBruto- desconto2)
    desconto3 =(salarioBruto *INSS2)
    salarioBase3=(salarioBruto- desconto3)

    if(salarioBruto>1556.95 && salarioBruto<2594.92 && salarioBase1 <= 1903.98){
      console.log(salarioBase1);
      salarioLiquido = (salarioBase1)
      console.log(salarioLiquido);
    }
  
    if(salarioBase2 <2826.65 && salarioBase2> 1903 &&salarioBruto > 2594.93 && salarioBruto<  5189.82 ){
      aliquotoIR1 = (0.075*salarioBase2)
      parcela_deduzida= 142.80
      valorIR =( aliquotoIR1- parcela_deduzida)
      salarioLiquido = (salarioBase2 - valorIR)
      console.log(salarioLiquido)

}  if (salarioBruto >2594.93  && salarioBruto <5189.82 && salarioBase3 > 2826.66 && salarioBase3 <3751.05) {
  aliquotoIR2 = (0.15*salarioBase3)
  parcela_deduzida2= 354.80 
  valorIR2=( aliquotoIR2- parcela_deduzida2)
  salarioLiquido = (salarioBase3 - valorIR2)
  console.log(salarioLiquido)    

}
}
taxesCalcul()