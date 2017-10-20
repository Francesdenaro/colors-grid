var container = document.querySelector(".container");
var input = document.querySelector("input");
var createBtn = document.querySelector("button");

function init(numCells,gridCells) {
        container.style.width = '0';
        container.innerHTML = '';
    for (var i = 0; i < gridCells; i++) {
        container.style.width = (numCells*22.5)+"px";
        container.innerHTML+="<div class='cell'></div>"; //creating the grid
    }   
    
}

function randomColor() { //pick a random color and assign it to a cell
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var color = "rgb(" + r + ", "+ g + ", " + b + ")";
    return color;
}

function cellOver(gridCells) {
    var cell = document.querySelectorAll(".cell");
    for(var i = 0; i < gridCells; i++) {
        cell[i].addEventListener("mouseover", function(){
            this.style.background = randomColor();
            });
    }
}


createBtn.addEventListener("click", function(){
    var numCells = input.value;
    var gridCells = numCells*numCells;
    init(numCells,gridCells);
    createBtn.style.display = 'none';
    cellOver(gridCells);
});

input.addEventListener("change", function(){
    createBtn.style.display = 'block';
});


