// Desafio 8
function formatPhoneNumber(telNumber) {
     if(telNumber.length !==11) {
        return 'Array com tamanho incorreto.';
    }
    
    const contNumber = {};
    for(let i = 0; i < telNumber.length; i++) {
        const numero = telNumber[i];
        if(numero < 0 || numero > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
        contNumber[numero] = (contNumber[numero] || 0) + 1;
        if(contNumber[numero] >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
            } 
    }
    const formatoNumero = `(${telNumber.slice(0, 2).join("")}) ${telNumber.slice(2, 7).join("")}-${telNumber.slice(7).join("")}`
    return formatoNumero
    }


module.exports = {
    formatPhoneNumber
}