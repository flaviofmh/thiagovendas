angular.module('meusServicos', ['ngResource'])
	.factory('recursoFoto', function($resource) {

		return $resource('/v1/fotos/:fotoId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
	.factory("cadastroDeFotos", function(recursoFoto, $q) {
		var service = {};
		service.cadastrar = function(foto) {
			return $q(function(resolve, reject) {

				if(foto._id) {
					recursoFoto.update({fotoId: foto._id}, foto, function() {
						resolve({
							mensagem: 'Foto ' + foto.titulo + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar a foto ' + foto.titulo
						});
					});

				} else {
					recursoFoto.save(foto, function() {
						resolve({
							mensagem: 'Foto ' + foto.titulo + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a foto ' + foto.titulo
						});
					});
				}
			});
		};
		return service;
    })
    .factory('recursoCliente', function($resource) {

		return $resource('/v1/clientes/:clienteId', null, {
			'update' : { 
				method: 'PUT'
			}
		});
	})
    .factory("cadastroDeClientes", function(recursoCliente, $q) {
		var service = {};
		service.cadastrar = function(cliente) {
			return $q(function(resolve, reject) {

				if(cliente._id) {
					recursoCliente.update({clienteId: cliente._id}, cliente, function() {
						resolve({
							mensagem: 'Cliente ' + cliente.nome + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o cliente ' + cliente.nome
						});
					});

				} else {
					recursoCliente.save(cliente, function() {
						resolve({
							mensagem: 'Cliente ' + cliente.nome + ' incluído com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a cliente ' + cliente.nome
						});
					});
				}
			});
		};
		return service;
    });