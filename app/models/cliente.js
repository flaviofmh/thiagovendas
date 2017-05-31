var mongoose = require('mongoose');

var schema = mongoose.Schema({

	nome: {
		type: String,
		required: true
	},
	razaosocial: {
		type: String
	},
	cpfcnpj: {
		type: String,
		required: true
	},
	logradouro: {
		type: String
	},
	bairro: {
		type: String
	},
	cidade: {
		type: String
	},
	estado: {
		type: String
	},
	contato: {
		type: String
	},
	tipopessoa: {
		type: String
	},
	fone: {
		type: String
	},
	inscricaoestadual: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	url: {
		type: String,
	},
	descricao: {
		type: String,
	}
});

mongoose.model('Cliente', schema);