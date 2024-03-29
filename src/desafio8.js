// Desafio 8
const telNumber = [7, 1, 9, 8, 8, 0, 8 , 2, 5, 3, 1]


function formatPhoneNumber(telNumber) {
    const menorMaior = telNumber.filter ((x) => {
        return  x < 0 || x > 9 
    } 
    )
      
    if (menorMaior.length >= 1){
        return console.log ( 'Não é possivel gerar um número de telefone com esses valores')
    }

    if ( telNumber.length !== 11 ){
        return console.log('Array com tamanho incorreto')
    } 

    const ocurrences = telNumber.reduce((acc, curr) => {
        return acc[curr] ? ++acc[curr] : acc[curr] = 1, acc
    }, {});

    for (let elemento in ocurrences){
        if (ocurrences[elemento] >= 3){
            return console.log( "Não é possível gerar um número de telefone com esses valores" )
        }
    }    
    
    return console.log(` (${telNumber[0]}${telNumber[1]}) ${telNumber[2]}${telNumber[3]}${telNumber[4]}${telNumber[5]}${telNumber[6]}-${telNumber[7]}${telNumber[8]}${telNumber[9]}${telNumber[10]}`)
    
}
console.log(formatPhoneNumber(telNumber))



module.exports = {
    formatPhoneNumber
}