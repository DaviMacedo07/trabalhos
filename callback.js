/* const saudar = (nome, responder) => {
    const horaAtual = new Date().getHours()

    // const responder = (saudacao) => console.log(saudacao, nome)

    if(horaAtual <= 12) return responder('Bom Dia!')
    if(horaAtual <= 18) return responder('Boa Tarde!')
    return responder('Boa noite')
}


const responderCallback = (saudacao) => console.log(saudacao)
saudar('Davi', responderCallback) */

const square = x => 2 ** 4;
console.log(square())
function quadrado() {
    return 2 ** 2  
}

console.log(quadrado())


let palavra = messagem => 'Eu sou Brabissimo';

console.log(palavra())

let palavra2 = (function(){
    return 'Programação é mt legal'
})()

console.log(palavra2)

function somatoria(num1 , num2){
    let sum = Number(num1) + Number(num2)
    return num1 + num2
}

console.log(somatoria(15,15))

const somaArrow = (nume1, nume2) => nume1 + nume2

console.log(somaArrow(50 + 100 + 2 + 4 + 5, 20))


function numero(num1 , num2) {
    return num1 / num2
}

console.log(numero(8 , 4))


function media(num3, num4) {
    let median = Number(num3 + num4) /2
    if((num3 + num4) / 2 < 7) {
        console.log('REPROVADO')
    } else {
        console.log("APROVADO")
    }
   // return (num3 + num4) /2 
}
let mediag = media(4 , 4)
console.log(`Sua média foi: ${mediag} : `)