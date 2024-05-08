// Desafio 7
function taxesCalcul(grossSalary) {
    let INSS;
    let IR;

    if (grossSalary <= 1556.94) {
    INSS = grossSalary * 0.08;
    }else if (grossSalary <= 2594.92) {
    INSS = grossSalary * 0.09;
    }else if (grossSalary <= 5189.82) {
    INSS = grossSalary * 0.11;
    }else {
    INSS = 570.88;
    }


        
    if (grossSalary <= 1903.98) {
    IR = 0;
    }else if (grossSalary <= 2826.65) {
    IR = (((grossSalary - INSS) * 0.075) - 142.80);
    }else if (grossSalary <= 3751.05) {
    IR = (((grossSalary - INSS)* 0.15) - 354.8);
    }else if (grossSalary <= 4664.68) {
    IR = (((grossSalary - INSS)*0.225) - 636.13);
    }else {
    IR = (((grossSalary - INSS)*0.275)-869.36);
    }

if( IR < 0){
    IR = 0;
}

const expectedNetSalary = grossSalary - INSS - IR;

return expectedNetSalary;
 
}

module.exports = {
    taxesCalcul
}