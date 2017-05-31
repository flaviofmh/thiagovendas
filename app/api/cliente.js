var mongoose =  require('mongoose');
var api = {};

var model = mongoose.model('Cliente');

api.lista = function(req, res) {

	model
		.find({})
		.then(function(clientes) {
			res.json(clientes);
		}, function(error) {
			console.log(error);
			res.status(500).json(error);
		});

};

api.buscaPorId = function(req, res) {

	model
		.findById(req.params.id)
		.then(function(cliente){
			if(!cliente) throw Error('Cliente nao encontrado');
			res.json(cliente);
		}, function(error){
			console.log(error);
			res.status(404).json(error);
		});

};

api.removePorId = function(req, res) {

	model
		.remove({_id: req.params.id})
		.then(function(){
			res.sendStatus(204);
		}, function(error) {
			console.log(error);
			res.status(500).json(error);
		});

};

api.adiciona = function(req, res) {

	model
		.create(req.body)
		.then(function(cliente){
			res.json(cliente);
		}, function(error) {
			console.log(error);
			res.status(500).json(error);
		});

};

api.atualiza = function(req, res) {

	model
		.findByIdAndUpdate(req.params.id, req.body)
		.then(function(cliente) {
			res.json(cliente);
		}, function(error) {
			console.log(error);
			res.status(500).json(error);
		});

};

module.exports = api;