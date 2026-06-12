class Veiculos {
    mover(){
        console.log("O veículo está se movendo")
    }

}

class Aviao extends Veiculos {
    mover(){
        console.log("O Avião está voando")
    }
}

class Carro extends  Veiculos {
    mover(){
        console.log("O carro está andando")
    }
}
const carro01 = new Carro()
const aviao01 = new Aviao()

carro01.mover()
aviao01.mover()