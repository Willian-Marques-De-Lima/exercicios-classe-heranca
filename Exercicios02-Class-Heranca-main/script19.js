class ItemPedido {
    constructor(quantidade, preco) {
        this.quantidadeProduto = quantidade
        this.precoProduto = preco
    }

    calcularPrecoFinal(precoFinal){
        precoFinal = this.precoProduto * this.quantidadeProduto
        console.log("Preço da unidade: " + this.precoProduto)
        console.log("Quantidade: " + this.quantidadeProduto)
        console.log("Preço final: " + precoFinal)
    }
}

const chocolate = new ItemPedido(4, 10)
chocolate.calcularPrecoFinal()