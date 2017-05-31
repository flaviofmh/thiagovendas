angular.module('alurapic')
	.controller('ClienteController', function($scope, recursoCliente, $routeParams, cadastroDeClientes) {

		$scope.cliente = {};
		$scope.mensagem = '';

		if($routeParams.clienteId) {
			recursoCliente.get({clienteId: $routeParams.clienteId}, function(cliente) {
				$scope.cliente = cliente; 
			}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o cliente'
			});
		}

		$scope.submeter = function() {

			if ($scope.formulario.$valid) {
				cadastroDeClientes.cadastrar($scope.cliente)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.cliente = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});
			}
		};
	});