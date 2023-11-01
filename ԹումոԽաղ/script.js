function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount,pashtpanCount,tntCount,akanazercCount) {
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
        for (let i = 0; i < tntCount; i++) {
                let x = Math.floor(Math.random() * matrixSize)
                let y = Math.floor(Math.random() * matrixSize)
                matrix[y][x] = 5}


                for (let i = 0; i <akanazercCount; i++) {
                        let x = Math.floor(Math.random() * matrixSize)
                        let y = Math.floor(Math.random() * matrixSize)
                        matrix[y][x] = 6}


        return matrix;
}


let matrix = matrixGenerator(44, 70, 8, 8,8,1,2);
let side = 15;

///creature arrays
let grassArray = [];
let grassEaterArr = [];
let predatorArr = [];
let pashtpanArr = [];
let tntArr = [];
let akanazercArr = [];

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
                        else if(matrix[y][x] == 5){
                                let t = new Tnt(x,y)
                                tntArr.push(t) }
                        else if (matrix[y][x] == 6){
                                let akan = new Akanazerc(x,y)
                                akanazercArr.push(akan)}
        



        }}

}

function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        } else if (matrix[y][x] == 2) {
                                fill("yellow")
                        }else if(matrix[y][x] == 3){
                                fill ('red')
                        }else if(matrix[y][x] == 4){
                                fill ('white')
                        }

                        else if(matrix[y][x] == 5){
                                fill ('Black')
                        }
                        else if(matrix[y][x] == 6){
                                fill ('orange')
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
        for(let i in akanazercArr){
                akanazercArr[i].akanazerc();

        }
        
        for(let i in tntArr){
                setTimeout(()=>{
                        if(tntArr.length == 1){
                                tntArr[i].mul()

                        }
                }, 1000)
        }

}

