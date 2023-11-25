var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("../client"));

app.get('/', function (req, res) {
        res.redirect('index.html');
});
server.listen(3000, () => {
        console.log('connected');
});

function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, pashtpanCount,) {
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


matrix = matrixGenerator(35,35, 8, 8, 8,);
io.sockets.emit('send matrix', matrix)

grassArr = [];
grassEaterArr = [];
predatorArr = [];
pashtpanArr = [];


Grass = require("./Grass")
GrassEater = require("./GrassEater")
Pashtpan = require("./pashtpan")
Predator = require("./predator")

function createObject(matrix) {
        for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
                        // var obj = matrix[y][x];
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArr.push(gr);
                        } else if (matrix[y][x] == 2) {
                                let grEat = new GrassEater(x, y)
                                grassEaterArr.push(grEat)
                        } else if (matrix[y][x] == 3) {
                                let pred = new Predator(x, y);
                                predatorArr.push(pred);
                        }
                        else if (matrix[y][x] == 4) {
                                let pasht = new Pashtpan(x, y);
                                pashtpanArr.push(pasht);
                        }
                        io.sockets.emit('send matrix', matrix)
                }
        }
}

function game() {
        for (let i in grassArr) {
                grassArr[i].mul()
        }

        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }

        for (let i in predatorArr) {
                predatorArr[i].eat();
        }
        for (let i in pashtpanArr) {
                pashtpanArr[i].eat();
        }
        //այո, դու ճիշտ ես տեսնում, կրկին և կրկին
        io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)

io.on('connection', function () {
        createObject(matrix)
})