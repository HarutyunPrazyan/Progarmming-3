var socket = io();
side = 30

function setup() {
    createCanvas(7 * side, 13 * side);
    background("#acacac");
}
function nkarel(matrix) {
        console.log(matrix);
        
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            var obj = matrix[y][x];
            if (obj == 1) {
                fill("green");
                rect(x * side, y * side, side, side)
            }
            else if (obj == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
        }
    }
    setInterval(
        function () {
        socket.on('send matrix', nkarel)
        },1000
    )


function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount,pashtpanCount,) {
        let matrix = [];
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([]);
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0);
                }
        }

        //Grass
        for (let i = 0; i < grassCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 1
                }
        }

        //GrassEater

        for (let i = 0; i < grassEaterCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 2
                }
        }

        for (let i = 0; i < predatorCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 3
                }
        }

        for (let i = 0; i < pashtpanCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);

                if (matrix[y][x] == 0) {
                        matrix[y][x] = 4
                }
        }
       


        return matrix;
}


let matrix = matrixGenerator(44, 70, 8, 8,8,);
let side = 15;

///creature arrays
let grassArray = [];
let grassEaterArr = [];
let predatorArr = [];
let pashtpanArr = [];


function setup() {
        frameRate(16);

        createCanvas(matrix[0].length * side, matrix.length * side);
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        }  else if(matrix[y][x] == 3){
                                let pred = new Predator(x,y);
                                predatorArr.push(pred);
                        }
                        else if(matrix[y][x] == 4){
                                let pasht = new Pashtpan(x,y);
                                pashtpanArr.push(pasht);
                        }
                       



        }}

}

function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("#00FF00")
                        } else if (matrix[y][x] == 2) {
                                fill("#FFFF00")
                        }else if(matrix[y][x] == 3){
                                fill (' #FF0000')
                        }else if(matrix[y][x] == 4){
                                fill ('white')
                        }
                        
                        else {
                                fill("blue")
                        }
                        rect(x * side, y * side, side, side,side)
                }
        }

        for (let i in grassArray) {
                grassArray[i].mul()
        }

        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }

        for(let i in predatorArr){
                predatorArr[i].eat();
        }
        for(let i in pashtpanArr){
                pashtpanArr[i].eat();
        }
     
        

}
}
