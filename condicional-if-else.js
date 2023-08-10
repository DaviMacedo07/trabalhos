let media = 7;
let nota =8.9;

if(nota >= media){
    console.log('Prabens! Você foi aprovado')
} else {
    console.log('Que pena , você ficou de recuperação')
}
let idade = 12
let msgMaiordeIdade = (idade >= 18) ? 'É maior de idade' : 'é menor de 18 anos'

console.log(msgMaiordeIdade)

let dia = '0'

switch (dia) {
    case 0: 
        dia = 'Domingo' 
        break

    case 1: 
        dia = 'Segunda'
        break
       default :
       dia = 'KAKAKAAK'
}

console.log(`Hoje é ${dia}`)