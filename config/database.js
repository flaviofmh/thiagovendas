var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/alurapic');

mongoose.connection.on('connected', function() {
	console.log('Conectado ao banco de dados');
});

mongoose.connection.on('error', function(error) {
	console.log('Error na conexão: ' + error);
});

mongoose.connection.on('disconnected', function() {
	console.log('Desconectado do MongoDB');
});

/*process.on('SIGINT', function(){

	mongoose.connection.close(function() {
		console.log('Conexao fechada pelo termino da aplicacao');
		process.exit(0);
	});

});*/