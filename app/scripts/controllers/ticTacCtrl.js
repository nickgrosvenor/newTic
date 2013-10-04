function TicTacCtrl($scope){
	
	$scope.ticTacToe=[['','',''],['','',''],['','','']];

	var playerTurn = 1;

	
	$scope.clickSquare = function(row,column){
			
		if(playerTurn % 2 == 1)

			event.target.innnerHTML = "IMG/Screech2.jpg";
		else
			event.target.innerHTML = "IMG/urkel.jpg";
		
		++playerTurn

	};
}