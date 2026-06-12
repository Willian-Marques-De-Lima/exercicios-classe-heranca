class Classe {
    exibir(){
        console.log("Classe")
    }
}

class Aluno extends Classe {
    constructor(nome){
        super()
        this.nomeAluno = nome
    }

    entregarTrabalho() {
        console.log(this.nomeAluno + " entregou o trabalho")
    }
}

class Professor extends Classe {
    constructor(nota){
        super()
        this.notaAluno = nota
    }

    lancarNota(){
        console.log("Nota do trabalho: " + this.notaAluno)
    }
}
const aluno01 = new Aluno("Luiz")
const professor01 = new Professor(10)
aluno01.entregarTrabalho()
professor01.lancarNota()

