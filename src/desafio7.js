// Desafio 7
function taxesCalcul(salary) {
     let descontoINSS;
    let salarioLiquido;
    const text = 'Salário: R$ '

    if (salary <= 0) {
        return text + 0;
    } else if (salary <= 1556.94) {
        descontoINSS = salary * 0.08;
    } else if (salary <= 2594.92) {
        descontoINSS = salary * 0.09;
    } else if (salary <= 5189.82) {
        descontoINSS = salary * 0.11;
    } else {
        descontoINSS = 570.88;
    }

    salarioLiquido = salary - descontoINSS;

    

    if (salarioLiquido <= 1903.98) {
        return text + salarioLiquido;
    } else if (salarioLiquido <= 2826.65) {
        descontoINSS = salarioLiquido * 0.075 - 142.80;
    } else if (salarioLiquido <= 3751.05) {
        descontoINSS = salarioLiquido * 0.15 - 354.80;
    } else if (salarioLiquido <= 4664.68) {
        descontoINSS = salarioLiquido * 0.225 - 636.13;
    } else {
        descontoINSS = salarioLiquido * 0.275 - 869.36;
    }

    return text + (salarioLiquido - descontoINSS) ;
}


    module.exports = {
    taxesCalcul
}