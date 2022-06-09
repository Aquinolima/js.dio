function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Thiago',
	idade: 32,
};

const pessoa2 = {
	nome: 'Cyndi',
	idade: 28,
};

const animal = {
	nome: 'Léia',
	idade: 6,
    raca: 'Shitzu/York'
};

console.log(calculaIdade.call(pessoa1, 5));
console.log(calculaIdade.call(animal, 5));
console.log(calculaIdade.apply(pessoa2, [5]));