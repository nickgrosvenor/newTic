function TicTacCtrl($scope){
	
	$scope.ticTacToe=[['','',''],['','',''],['','','']];

	var playerTurn = 1;

	
	$scope.clickSquare = function(row,column){
			
		if(playerTurn % 2 == 1)

			event.target.innerHTML = "<img src='img/urkel.jpg'>";
		else
			event.target.innerHTML = "<img src='img/Screech2.jpg'>";
		
		playerTurn++;

	};
}