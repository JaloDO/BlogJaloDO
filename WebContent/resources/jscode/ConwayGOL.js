/**
 * @title CONWAY's GAME OF LIFE
 * @description Código fuente para la ejecución del juego de la vida de Conway en entorno web con javascript
 * @author ALEJANDRO DÍAZ OBREGÓN
 */

let grid;
let cols;
let rows;
let resolution = 10;


function make2DArray(cols, rows){
	let arr = new Array(cols);
	for (let i = 0; i < arr.length; i++){
		arr[i] = new Array(rows);
	}
	return arr;
}


function setup(){
	createCanvas(600, 400);
	cols = width / resolution;
	rows = height / resolution;
	
	grid = make2DArray(cols, rows);
	
	for (let i = 0; i < cols; i++){
		for (let j = 0; i < rows; j++){
			grid[i][j] = Math.floor(Math.random(2)); 
		}
	}
}


function draw(){
	background(0);
	
	for (let i = 0; i < cols; i++){
		for (let j = 0; j < rows; j++){
			let x = i * resolution;
			let y = j * resolution;
			if(grid[i][j] == 1){
				fill(255);
				stroke(0);
				rect(x, y, resolution-1, resolution-1);
			}
			
		}
	}
	
	let next = make2DArray(cols, rows);
	
	//Compute next GEN based on grid
	for (let i = 0; i < cols; i++){
		for (let j = 0; j < rows; j++){
		
			let state = grid[i][j];
			
			//Count neighbors alive
			let sum = 0;
			let neighbors = countNeighbors(grid, i, j);
			
			
			//Rule 1
			if (state == 0 && neighbors == 3){
				next[i][j] = 1;
			}else if (state == 1 && (neighbors < 2 || neighbors > 3)){
				next[i][j] = 0;
			}else{
				next[i][j] = state;
			}
		}
	}
	
	grid = next;
	
	
}



function countNeighbors(grid, x, y){
	let sum = 0;
	for (let i = -1; i < 2; i++){
		for (let j = -1; j < 2; j++){
			let col = (x + i + cols) % cols;
			let row = (y + j + rows) % rows;
			sum += grid[col][row];
		}
	}
	sum -= grid[x][y];
	return sum;
}








