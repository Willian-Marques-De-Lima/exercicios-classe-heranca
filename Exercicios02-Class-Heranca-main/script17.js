class Formas {
    desenhar(){
        console.log("Desenhando uma forma.")
    }
}

class Circulo extends Formas {
    desenhar() {
        console.log("Desenhando um círculo")
    }
}

class Quadrado extends Formas {
    desenhar(){
        console.log("Desenhando um quadrado")
    }
}

const circulo0 = new Circulo()
const quadrado01 = new Quadrado()

circulo0.desenhar()
quadrado01.desenhar()