// Desafio 8
function formatPhoneNumber(telNumber) {
    
    if (telNumber.length !== 11) {
        return 'Array com tamanho incorreto.';
    }

    
    for (let i = 0; i < telNumber.length; i++) {
        if (telNumber[i] < 0 || telNumber[i] > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }

    
    const counts = {};
    for (let i = 0; i < telNumber.length; i++) {
        counts[telNumber[i]] = counts[telNumber[i]] ? counts[telNumber[i]] + 1 : 1;
        if (counts[telNumber[i]] >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }


    const areaCode = telNumber.slice(0, 2).join('');
    const firstPart = telNumber.slice(2, 7).join('');
    const secondPart = telNumber.slice(7).join('');

    return `(${areaCode}) ${firstPart}-${secondPart}`;
}


console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 
console.log(formatPhoneNumber([-1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])); 
console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1])); 
console.log(formatPhoneNumber([1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5]));


module.exports = {
    formatPhoneNumber
}