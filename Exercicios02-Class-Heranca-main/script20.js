class Carro {
    constructor(marca, modelo) {
        this.marcaCarro = marca
        this.modeloCarro = modelo
    }

    exibirDados(){
        console.log("Marca: " + this.marcaCarro)
        console.log("Modelo: " + this.modeloCarro)
        console.log("------------------------")
    }
}

class CarroEletrico extends Carro {
    constructor(marca, modelo, bateria){
        super(marca, modelo)
        this.bateriaCarro = bateria
    }

     exibirDados(){
        console.log("Marca: " + this.marcaCarro)
        console.log("Modelo: " + this.modeloCarro)
        console.log("Bateria: " + this.bateriaCarro + " kWh")
    }
}
const carro01 = new Carro("Ford", "Ka")
const carroEletrico01 = new CarroEletrico("BYD", "Dolphin", 75)

carro01.exibirDados()
carroEletrico01.exibirDados()