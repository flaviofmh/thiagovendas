angular.module('alurapic').controller('ClientesController', function($scope, recursoCliente) {
	
	$scope.clientes = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	recursoCliente.query(function(clientes) {
		$scope.clientes = clientes;
	}, function(erro) {
		console.log(erro);
	});

	$scope.remover = function(cliente) {

		recursoCliente.delete({clienteId: cliente._id}, function() {
			var indiceDoCliente = $scope.clientes.indexOf(cliente);
			$scope.clientes.splice(indiceDoCliente, 1);
			$scope.mensagem = 'Cliente ' + cliente.nome + ' removido com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a cliente ' + cliente.nome;
		});
	};

});