angular.module('sosiabook').controller('BuscarController', function($http,$scope) {
	$scope.info = {}
	$scope.buscar = false
	$scope.result = null
	$('.ui.modal')
	  .modal('show')
	;

	$("#busca").keypress(function(e) {
    	if(e.which == 13) {
	    	buscarS()		    
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

});