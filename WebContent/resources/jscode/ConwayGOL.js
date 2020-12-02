let grid;
let cols;
let rows;
let resolution = 10;
const b1Value = document.querySelector("#button1");
const p = document.querySelector("#parrafo");

function initialization(){
  grid = make2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = 0; 
    }
  }
}

function make2DArray(cols, rows) {
  let arr = new Array(cols);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

function randomized() {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = floor(random(2));
    }
  }
}

function draw() {
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * resolution;
      let y = j * resolution;
      rect(x, y, resolution, resolution);
      stroke('rgba(75%,20%,100%,1)');
      if (grid[i][j] == 1) {
        fill('rgba(100%,0%,100%,1)');
        
      }else{
        fill('rgba(0%,0%,100%,.1)');
      }
    }
  }

  let next = make2DArray(cols, rows);

  // Compute next based on grid
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let state = grid[i][j];
      // Count live neighbors!
      let sum = 0;
      let neighbors = countNeighbors(grid, i, j);

      if (state == 0 && neighbors == 3) {
        next[i][j] = 1;
      } else if (state == 1 && (neighbors < 2 || neighbors > 3)) {
        next[i][j] = 0;
      } else {
        next[i][j] = state;
      }

    }
  }

  grid = next;
}


function countNeighbors(grid, x, y) {
  let sum = 0;
  for (let i = -1; i < 2; i++) {
    for (let j = -1; j < 2; j++) {
      let col = (x + i + cols) % cols;
      let row = (y + j + rows) % rows;
      sum += grid[col][row];
    }
  }
  sum -= grid[x][y];
  return sum;
}

function inGame(){
  
  switch (b1Value.value){
    case "RANDOM":
      b1Value.value = "PAUSE";
      randomized();
      break;
    case "PAUSE":
      pauseGame();
      break;
    case "RESUME":
      resumeGame();
      break;
  }
}


function setup(){
  createCanvas(800, 600);
  cols = width / resolution;
  rows = height / resolution;
  initialization();
}

/*********************************************************************************
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
        EVENTOS DE RATON
||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
*********************************************************************************/

function resumeGame(event){
  b1Value.value = "PAUSE";
  loop();
}
function pauseGame(event){
  b1Value.value = "RESUME";
  noLoop();
}


  document.onmousemove = dotheother;


function dotheother(event){
  p.innerHTML = event.offsetX + " - " + event.offsetY;
}

