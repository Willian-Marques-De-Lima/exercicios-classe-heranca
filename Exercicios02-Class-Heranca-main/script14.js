class Conta {
    constructor(valor) {
        this.valorConta = valor
    }

    exibirValor() {
        console.log("Valor na conta: " + this.valorConta)
    }
}


class Poupanca extends Conta {
    constructor(valor) {
        super(valor)
        this.juros = this.valorConta * 0.05 
    }

    aplicarJuros() {
        console.log("Valor na Poupança: " + (this.valorConta + this.juros))
    }
}
const conta01 = new Conta(1000)
const poupanca01 = new Poupanca(conta01.valorConta)
conta01.exibirValor()
poupanca01.aplicarJuros()

