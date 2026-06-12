class Animal {
    constructor(animal) {
        this.nomeAnimal = animal
    }

}

class Cachorro extends Animal{
    constructor(animal, nome) {
        super(animal)
        this.nomeCachorro = nome
    }

    falar(){
        console.log("Eu tenho um " + this.nomeAnimal + " E o nome dele é " + this.nomeCachorro)
    }

    emitirSom(){
        console.log("AUAUAUAUAU")
    }
}

const cachorro01 = new Cachorro("Golden Retriever", "Romeu")
cachorro01.falar()
cachorro01.emitirSom()