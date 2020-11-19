/**
 * @title CONWAYs GAME OF LIFE
 * @description Código fuente para la ejecución del juego de la vida de Conway en entorno web con javascript
 * @author ALEJANDRO DÍAZ OBREGÓN
 */

var n_cells;
var playing = false;
var grid = new Array(n_cells);
var nextGrid = new Array(n_cells);
var timer;
var repTime = 100;

//funcionalidad para más adelante
function getN_CELLS(num){
	n_cells = num;
	resetGrids();
	initGrids();
}

function initGrids(){
	for(var i=0; i<n_cells; i++){
		grid[i] = new Array(n_cells);
		next_grid[i] = new Array(n_cells);
	}
}

function resetGrids(){
	for(var i=0; i<n_cells; i++){
		for(var j=0; j<n_cells; j++){
			grid[i][j] = 0;
			next_grid[i][j] = 0;
		}
	}
}

function updateGrid(){
	for(var i=0; i<n_cells; i++){
		for(var j=0;j<n_cells;j++){
			grid[i][j] = next_grid[i][j];
			next_grid[i][j] = 0;
		}
	}
}




