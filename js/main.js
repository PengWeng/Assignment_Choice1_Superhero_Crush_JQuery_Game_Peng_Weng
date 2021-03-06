/*

remove images on match
	drop new images
	increment score 
add swap animation

*/
var cols = 5;
var rows = 5;
var heroes = 5;
var board = new Array();

$(function () {
    newgame();
});

function newgame() {

    //initialize the check board
    init();

    var state = 0; // 0 is cell1 not clicked, 1 is clicked
	var cell1 = {row: 0, col: 0};
	var cell2 = {row: 0, col: 0};

    $(".grid-cell").click(function(){

	    // get row/col index
		var id = $(this).attr('id');
		var row = parseInt(id.substring(10, 11));
		var col = parseInt(id.substring(12));

		// setup first cell
		if (!state){

			state = 1;
			cell1.row = row;
			cell1.col = col;
		}

		// setup second cell
		else {

			cell2.row = row;
			cell2.col = col;

			swap(cell1, cell2);
			state = 0;
		}
    });

}

function swap(cell1, cell2){

	if (!check(cell1, cell2) && !check(cell2, cell1)){

		alert("Cells not next to each other.");
	} 

	else {

		//update board
		temp = board[cell1.row][cell1.col];
		board[cell1.row][cell1.col] = board[cell2.row][cell2.col];
		board[cell2.row][cell2.col] = temp;

		//update picture
		updateBoardView();
	}
}

//checks if cell2 is above, below, to the left or right of cell1
function check(cell1, cell2){

	if (cell1.row == cell2.row){

		if (cell1.col + 1 == cell2.col || cell1.col - 1 == cell2.col)
			return true;

		else
			return false;
	}

	if (cell1.col == cell2.col){

		if (cell1.row + 1 == cell2.row || cell1.row - 1 == cell2.row)
			return true;

		else
			return false;
	}

	return false;
}

function init() {
	
	$(".grid-cell").remove();
    $("#grid-container").height(getPosLeft(cols, rows) - 40);
    $("#grid-container").width(getPosTop(cols, rows) - 40);

	//Define a 2D data set
    //i stands for the ROW of the check board
	for (var i = 0; i < rows; i++) {

    	board[i] = new Array();
    	//J stands for the COLUMN of the check board
    	for (var j = 0; j < cols; j++) {

    		//Initialize default value of each cell = 0
    		board[i][j] = Math.floor(Math.random()*heroes);
    		//Use i & j to located each cell
    		var gridCell = $('<div class="grid-cell" id="grid-cell-' + i + '-' + j + '">').appendTo("#grid-container");

        	//Use getPosTop() to set the distance between every grid and top
    		gridCell.css("top", getPosTop(i, j));
    		//Use getPosTop() to set the distance between every grid and left
        	gridCell.css("left", getPosLeft(i, j));
        }
    }

    updateBoardView();
}

function updateBoardView(){
	// alert("start")
	
	$(".grid-cell img").remove();
	var streak = [];
	var heroes = [];
	var allHeroes = new Array();

    for(var i=0;i<rows;i++){
    	streak = [];
    	heroes = [];
    	allHeroes[i] = new Array();

        for(var j=0;j<cols;j++) {

        	// append new one
            var $hero = $('#grid-cell-' + i + '-' + j).append('<img src="img/Superheroes/'+board[i][j]+'.png">');
            allHeroes[i].push($hero);

            //console.log($hero);
            //console.log(allHeroes[i][j]);

            var streakover = function() {
            	if (streak.length >= 3) {
	        		$.each(heroes, function() {
	        			$(this).fadeOut(1000);

	        			// Reset values??


	        		});
	        	}
            }


        	// If the new item is the same as the last item, then add the new item
        	if (streak.length && streak[streak.length-1] == board[i][j]) {
	        	streak.push(board[i][j]);
	        	heroes.push($hero);
	        }
	        else {
	        	streakover();

	        	// restart the streak
	        	streak = [board[i][j]];
	        	heroes = [$hero];
	        }

	        if (j == cols-1) {
	        	streakover();
	        }
        }
    }

     for(var x=0;x<3;x++){

        for(var y=0;y<cols;y++) {

        	if (board[x][y] == board[x+1][y] && board[x+1][y] == board[x+2][y]){

        		$(allHeroes[x][y]).fadeOut(1000);
        		$(allHeroes[x+1][y]).fadeOut(1000);
        		$(allHeroes[x+2][y]).fadeOut(1000);
        	}
        }
    }

}