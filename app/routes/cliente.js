module.exports = function(app) {

	var api = app.api.cliente;

	app.route('/v1/clientes')
		.get(api.lista)
		.post(api.adiciona);

	app.route('/v1/cliente/:id')
		.get(api.buscaPorId)
		.delete(api.removePorId)
		.put(api.atualiza);
};