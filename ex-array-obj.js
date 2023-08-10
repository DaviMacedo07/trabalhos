const pessoas = [ {
    nome: 'Davi',
    idade:  18
 } , {
    nome: 'Julia',
    idade: 17
 } , {
    nome: 'Guilherme',
    idade: 16
 }
           
]
    for(let i = 0; i < pessoas.length; i++) {
       console.log(`${pessoas[i].nome} possui ${pessoas[i].idade} anos `)
    }

        


    const carros = [ {
        modelo: 'BMW',
        preço: '199.999$'
    } , {
        modelo: 'Porshe',
        preço: '433.599$'
    } , {
        modelo: 'Lamborghine',
        preço: '1.000.000$'
    }
    ]

    for(let i = 0 ; i < carros.length ; i++) {
        console.log(`O carro ${carros[i].modelo}, custa um totas de ${carros[i].preço} Dólares`)
    }