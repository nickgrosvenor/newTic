function TicTacCtrl($scope){
	
	$scope.ticTacToe=[['','',''],['','',''],['','','']];

	var playerTurn = 1;

	
	$scope.clickSquare = function(row,column){
			
		if(playerTurn % 2 == 1)

			event.target.innnerHTML = "X";
		else
			event.target.innerHTML = "O";
		
		++playerTurn

	};
}