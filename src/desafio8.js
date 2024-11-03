// Desafio 8
function formatPhoneNumber(numbers) {

    if (numbers.length !== 11) {
        return 'Array com tamanho incorreto.';
    }

    for (let num of numbers) {
        if (num < 0 || num > 9) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }

    const frequency = {};
    for (let num of numbers) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] >= 3) {
            return 'não é possível gerar um número de telefone com esses valores';
        }
    }

    return `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`;
}

module.exports = {
    formatPhoneNumber
}