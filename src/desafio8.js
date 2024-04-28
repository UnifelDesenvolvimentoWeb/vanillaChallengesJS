// Desafio 8
const telNumber = [1, 2, 3, 4, 5, 6, 7, 8, 3, 0, 10]

//(12) 34567-8901
function formatPhoneNumber(telNumber) {
    let contNumbers = [];
    if (telNumber.length != 11) {
        return 'Array com tamanho incorreto.';
    } for (let i = 0; i < telNumber.length; i ++){
        if ((telNumber[i] < 0)||(telNumber[i] > 9)) {
        return 'não é possível gerar um número de telefone com esses valores';
        }
        contNumbers[telNumber[i]] = (contNumbers[telNumber[i]] || 0) +1;
        if (contNumbers[telNumber[i]] >= 3) {
            return 'não é possível gerar um número de telefone com esses valores'
        }
    }
    const number = `(${telNumber.join('').slice(0,2)}) ${telNumber.join('').slice(2,7)}-${telNumber.join('').slice(7)}`
    return number;
}console.log(formatPhoneNumber(telNumber));

module.exports = {
    formatPhoneNumber
}