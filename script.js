"use strict"


var table = document.createElement('table');
var tr = [];
var td = [];
var mas = [];
var n = 40;


// create the table
document.body.appendChild(table);
table.setAttribute("cellspacing",'0');

for(var r=0;r<n;r++){
	tr[r] = document.createElement('tr');
	for(var i=0;i<n;i++){
		td[i] = document.createElement('td');
		tr[r].appendChild(td[i]);	
	}
	
	table.appendChild(tr[r]);
}

//

//create button for start the game
var button = document.createElement('button');
document.body.appendChild(button);
button.innerHTML = 'Start Game' ;

// 

//add listener for cells and button
var tdList = document.querySelectorAll('td');
for(var i=0;i<tdList.length;i++){
	tdList[i].addEventListener('click', startPosition);
}

button.addEventListener('click', beginGame);

//

//add live cells
function startPosition(){
	this.classList.toggle('black');
}

//

//create array for all cells
for(var row=0;row<n;row++){
		mas.push(tr[row]);
		for(var cell=0;cell<n;cell++){
			mas[row][cell]=tr[row].getElementsByTagName('td')[cell];	
		}
	}

//

//function for start the game
function beginGame(){
 	button.setAttribute('disabled','disabled');
	setInterval(function(){
	 	for(var row=0;row<n;row++){
	 		for(var cell=0;cell<n;cell++){
	 			checkLife(row, cell);
	 		}
	 	}
	},1000);

}

//

//check all neighboring cells
function checkLife(row, cell){
	var isCell = mas[row][cell];
	var ltd = null;   //left top diagonal cell
	var t=null;       //top cell
	var rtd=null;     //right top diagonal cell
	var r=null;		  //right cell
	var rbd=null;	  //right bottom diagonal cell
	var b=null;		  //bottom cell
	var lbd=null;	  //left bottom diagonal cell
	var l=null;		  //left cell
	
	if((row-1) < 0){
		ltd=null;
		t=null;
		rtd=null;
		l=mas[row][cell-1];
		lbd=mas[row+1][cell-1];
		b=mas[row+1][cell];
		rbd=mas[row+1][cell+1];
		r=mas[row][cell+1];
	}
	else if((row+1) >= mas.length){
		b=null;
		lbd=null;
		rbd=null;
		l=mas[row][cell-1];
		ltd=mas[row-1][cell-1];
		t=mas[row-1][cell];
		rtd=mas[row-1][cell+1];
		r=mas[row][cell+1];
	}
	else {
		ltd=mas[row-1][cell-1];
		t=mas[row-1][cell];
		rtd=mas[row-1][cell+1];
		lbd=mas[row+1][cell-1];
		b=mas[row+1][cell];
		rbd=mas[row+1][cell+1];
		l=mas[row][cell-1];
		r=mas[row][cell+1];
	}




	if((cell-1) < 0){
		ltd=null;
		l=null;
		lbd=null;
	}	
	else if((cell+1)>=mas.length){
		rtd=null;
		r=null;
		rbd=null;
	}
	

	isDeadOrAlive(isCell,ltd,t,rtd,r,rbd,b,lbd,l);



	
}


//make cell dead or alive
function isDeadOrAlive(it,ltd,t,rtd,r,rbd,b,lbd,l){
	var cellCount=0;

	if(ltd != null){
		if(ltd.classList.contains('black')){
			cellCount++;
		}		
	}
	if(t != null){
		if(t.classList.contains('black')){
			cellCount++;
		}		
	}
	if(rtd != null){
		if(rtd.classList.contains('black')){
			cellCount++;
		}		
	}
	if(r != null){
		if(r.classList.contains('black')){
			cellCount++;
		}		
	}
	if(rbd != null){
		if(rbd.classList.contains('black')){
			cellCount++;
		}		
	}
	if(b != null){
		if(b.classList.contains('black')){
			cellCount++;
		}		
	}
	if(lbd != null){
		if(lbd.classList.contains('black')){
			cellCount++;
		}		
	}
	if(l != null){
		if(l.classList.contains('black')){
			cellCount++;
		}		
	}


	if(it.classList.contains('black')){
		if(cellCount < 2){
			it.classList.remove('black');
		}
		else if(cellCount > 3){
			it.classList.remove('black');
		}
	}else {
		if(cellCount == 3){
			it.classList.add('black');
		}
	}
}
//
