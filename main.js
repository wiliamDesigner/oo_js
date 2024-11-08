function Farmacia(remedio,preco){
    this.remedio=remedio;
    this.preco=preco;
}

const minhaFarmacia=new Farmacia("dorflex", 1.99);


function Atendente(nome){
    this.nome=nome;
    Farmacia.call(this,minhaFarmacia.remedio,minhaFarmacia.preco);
}
const atendente=new Atendente("pedro");

function cliente(nomec){
    this.nomec=nomec;
    Farmacia.call(this,minhaFarmacia.remedio,minhaFarmacia.preco);
    Atendente.call(this,atendente.nome)
    this.comprar = function comprar () {
        console.log(`${this.nomec} comprou o remédio ${this.remedio} de ${this.nome} por R$${this.preco}`);
    };
}
const renata=new cliente("renata");


console.log(atendente);
console.log(renata);
renata.comprar();


