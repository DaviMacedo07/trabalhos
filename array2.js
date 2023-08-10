//let nomes = ['Davi', 'Júlia', 'Lucas', 'Pedro']

//for(let i = 0; i < nomes.length; i++) {
   // console.log(`${i} : Nome é ${nomes[i]}`)
//}


const pessoa = {
    nome: 'Davi',
    idade: 18,
    email: 'dvmacedo14@gmail.com'
}

console.log(pessoa)

for (let prop in pessoa) {
    console.log(prop)
    console.log(pessoa[prop])
}