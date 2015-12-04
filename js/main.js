var board = new Array();

$(function () {
    newgame();
});

function newgame() {
    //initialize the check board
    init();
    //Generate 2 random numbers in 2 random locations
    generateOneNumber();
    generateOneNumber();
}


function init() {
	//Define a 2D data set
    //i stands for the ROW of 4*4 check board
	for (var i = 0; i < 4; i++) {
    	board[i] = new Array();
    	//J stands for the COLUMN of 4*4 check board
    	for (var j = 0; j < 4; j++) {

    		//Initialize default value of each cell = 0
    		board[i][j] = 0;
    		//Use i & j to located each cell
    		var gridCell = $("#grid-cell-" + i + "-" + j);

        	//Use getPosTop() to set the distance between every grid and top
    		gridCell.css("top", getPosTop(i, j));
    		//Use getPosTop() to set the distance between every grid and left
        	gridCell.css("left", getPosLeft(i, j));
        }
    }



    updateBoardView();
}

function updateBoardView(){
    $(".number-cell").remove();
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++) {
            $("#grid-container").append("<div class='number-cell' id='number-cell-" + i + "-" + j + "'></div>");
            var numberCell = $("#number-cell-" + i + "-" + j);
            //If the height of check board = 0, set the width & height of number cells = 0 
            if (board[i][j] == 0) {
                numberCell.css("width", "0px");
                numberCell.css("height", "0px");
                numberCell.css("top", getPosTop(i, j) + 50);
                numberCell.css("left", getPosLeft(i, j) + 50);
            }
            //If the height of check board != 0, set the width & height of number cells = 75, background & foreground colors & number
            else {
                numberCell.css("width", "100px");
                numberCell.css("height", "100px");
                numberCell.css("top", getPosTop(i, j));
                numberCell.css("left", getPosLeft(i, j));
                numberCell.css("background-color", getNumberBackgroundColor(board[i][j]));
                numberCell.css("color", getNumberColor(board[i][j]));
                numberCell.text(board[i][j]);
            }
        }
    }
}















// $(document).ready(function(){


// // 	$(".boxbatman").click(function(){
// // 		$(".boxbatman").removeClass("boxbatman");
// // 	});

// // 	$(".boxironman").click(function(){
// // 		$(".boxironman").removeClass("boxironman");
// // 	});


// // $(".boxcaptainamerica").click(function(){
// // 		$(".boxcaptainamerica").removeClass("boxcaptainamerica");
// // 	});



// var boxes = [
// 	[1,2,3],
// 	[4,5,6],
// 	[7,8,9]
// ];

// if {
// 	boxes[1][1]==boxes[2][1]
// }




// for (int r=0; r < boxeslength; r++) {
// 	boxes[r]

// 	for (int c=0; c<boxeslength;c++) {
// 		boxes[r][c]==boxes[r][c+1]


// 	}

	

// .
// }











// });