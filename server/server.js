var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});
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
io.sockets.emit('send matrix', matrix)

grassArray = [];
grassEaterArr = [];
predatorArr = [];
pashtpanArr = [];


Grass = require("./Grass")
GrassEater = require("./GrassEater")
pashtpan = require("./pashtpan")
predator = require("./predator")

function createObject(matrix) {
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
}}