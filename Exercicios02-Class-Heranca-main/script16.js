class Conta {
    constructor(valor, saque) {
        this.valorConta = valor
    }

    exibirValor() {
        console.log("Valor na conta: " + this.valorConta)
    }

    sacar(valorSaque, valorAtual){
        (valorSaque > this.valorConta) 
        ? console.log("Você não tem saldo suficiente para esse saque")
        : (
            valorAtual = this.valorConta - valorSaque,
            console.log("Saque realizado com sucesso!") +
            console.log("Saldo atual: " + valorAtual)
        );
    }
}
const conta01 = new Conta(1000);
conta01.sacar(2000)

