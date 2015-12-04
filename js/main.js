var board = new Array();

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