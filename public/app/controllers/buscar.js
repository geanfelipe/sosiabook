angular.module('sosiabook').controller('BuscarController', function($http,$scope) {
	$scope.info = {}
	$scope.buscar = false
	$scope.result = null
	$scope.nomeDoSosiaDaVaga = null;
	$scope.agenciaEscolhida = null;
	$scope.sosias = null

	$("#busca").keypress(function(e) {
    	if(e.which == 13) {
	    	buscarS()		    
	    }
	});


	$("#buscarsosia").keypress(function(e) {
    	if(e.which == 13) {
	    	buscarSosias()		    
	    }
	});

	let buscarS = function() {
		$http.get('/api/buscar?info='+ JSON.stringify($scope.info)).then(function(data) {
			$scope.result = data.data

		}, function(err) {
			$scope.result = null
		})
	}
	$scope.buscar = buscarS

	$scope.candidatar = function(agencia, sosia) {
		$scope.agenciaEscolhida = agencia
		$scope.nomeDoSosiaDaVaga = sosia
		$('.ui.modal.confirmar').modal('show')
	}

	$scope.confirmarCandidatura  = function() {
		$http.post('/api/candidatar',{agencia:$scope.agenciaEscolhida,sosia:$scope.nomeDoSosiaDaVaga}).then( function(data) {
			$('.ui.modal.realizado').modal('show')		
		}, function(err) {
			console.log(err)
		})
	}


	/*contratar*/
	$scope.contratar = function(sosia) {
		$scope.nome = sosia
		$('.ui.modal.confirmarContrato').modal('show')
	}

	$scope.confirmarContrato = function() {
		$http.post('/api/contratar',{nome:$scope.nome}).then(function(data) {
			$('.ui.modal.contratorealizado').modal('show')
		}, function(err) {

		})
	}

	let buscarSosias = function() {
		$http.get('/api/sosias?info='+JSON.stringify($scope.info)).then(function(data) {
			$scope.sosias = data.data
		}, function(err) {
			$scope.sosias = null
		})
	}

	$scope.buscarSosia = buscarSosias
});