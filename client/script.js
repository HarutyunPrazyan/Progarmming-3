let socket = io();
side = 30

function setup() {
        createCanvas(44 * side, 44 * side);
        background("#acacac");
}

function showGame(matrix) {
        console.log(matrix);

        for (var y = 0; y < matrix.length; y++) {
                for (var x = 0; x < matrix[y].length; x++) {
                        var obj = matrix[y][x];
                        if (obj == 1) {
                                fill("green");
                                rect(x * side, y * side, side, side)
                        } else if (obj == 3) {
                                fill("red");
                                rect(x * side, y * side, side, side)
                        }
                        else if (obj == 4) {
                                fill("white");
                                rect(x * side, y * side, side, side)
                        }
                        else if (obj == 2) {
                                fill("yellow");
                                rect(x * side, y * side, side, side);
                        } else {
                                fill("gray");
                                rect(x * side, y * side, side, side);
                        }
                }
        }

}

setInterval(
        function () {
                socket.on('send matrix', showGame)
        }, 1000
)


