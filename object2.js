 const produto = {
    nome: 'Lapiseira',
    qtd: 20,
    comprar: function(n) {
        console.log(this)
        if ( n > this.qtd ) {
            return 'Quantidade não disponível'
        }
        this.qtd -= n
    }
 }
 produto.comprar(5)
 console.log(produto)
 let teste = produto.comprar(16)
 console.log(teste)