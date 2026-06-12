class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, cargo, departamento) {
        super(nome, cargo)
        this.departamento = departamento
        this.cargo = cargo
    }


    apresentar() {
        console.log("Funcionário: " + this.nome + " - Salário: " + this.salario + " - Cargo: " + this.cargo + " - Departamento: " + this.departamento)
    }
}

const funcionario01 = new Gerente("Vitor", 7500, "Gerente", "Tecnologia")
funcionario01.apresentar()