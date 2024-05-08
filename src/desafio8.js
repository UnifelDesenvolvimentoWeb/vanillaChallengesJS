// Desafio 8
function formatPhoneNumber(telNumber) {
    const contagem = {};
    let a;
    let result;

    for (let i = 0; i < telNumber.length; i++) {
        const elemento = telNumber[i];
        contagem[elemento] = (contagem[elemento] || 0) + 1;
        const numero = telNumber[i];
        if (contagem[elemento] >= 3) {
            a = 3;
            break;
        }
    }

    if (telNumber.length !== 11) {
        result = 'Array com tamanho incorreto.';
    } else {
        for (let i = 0; i < telNumber.length; i++) {
            if (telNumber[i] > 9 || telNumber[i] < 0 || a > 2) {
                result = 'Não é possível gerar um número de telefone com esses valores.';
                break;
            }
        }

        if (!result) {
            // Se a variável result ainda não foi atribuída, então o array está correto
            result = '(' + telNumber[0] + telNumber[1] + ') ' + telNumber[2] + telNumber[3] + telNumber[4] + telNumber[5] + telNumber[6] + '-' + telNumber[7] + telNumber[8] + telNumber[9] + telNumber[10];
        }
    }

    return result;
}


module.exports = {
    formatPhoneNumber
}