var app = angular.module("votaU",['ngRoute']);

app.controller("voto", ["$scope", function($scope){
	$scope.UrnaDelDia = 'Ruta marcha';

	$scope.OpcionesUrna = [
		{nombre: 'Calle 26 --> 7ma --> plaza', idOpcion: 1},
		{nombre: 'Calle 45 --> Caracas --> Heroes', idOpcion: 2},
		{nombre: 'NQS --> AutoNorte --> Calle 106', idOpcion: 3},
		{nombre: 'Voto en blanco', idOpcion: 4}
	];

	$scope.votos = [
	];

	$scope.admin = 'votaUadmin';
	$scope.listaVotos = false;
	$scope.mostrarLista = false;
	$scope.idvoto = 1;
	$scope.estado = 'Valido';

	for(i=0; i<10000; i++){
		$scope.votos[i] = {usuario: 'humberto', eleccion: 'calle 26', h: $scope.estado, numero: $scope.idvoto}
		$scope.idvoto++;
	}

	$scope.ingresar = function(){
		if($scope.usuarioVoto == $scope.admin){
			$scope.listaVotos = true;
		}else{
			$scope.mostrarLista= true;
			$scope.listaVotos = false;

		}
	};

	$scope.tomarDato = function(op) {
		$scope.votos.push({usuario: $scope.usuarioVoto, eleccion: op.nombre, h: $scope.estado, numero: $scope.idvoto});
		$scope.mostrarLista = false;
		alert('Su voto ha sido guardado');
		$scope.idvoto ++;
	};

	$scope.anularVoto = function(id){
		$scope.votos[id-1].h = 'Nulo';
	};

}])
