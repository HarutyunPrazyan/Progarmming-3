let LivingCreature = require('./LivingCreature')
module.exports = class Pashtpan extends LivingCreature {
    constructor(x, y) {
        super(x, y,);
        this.energy = 10;
    } chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);
    }


    mul() {

        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)

        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let pasht = new Pashtpan(newX, newY)
            pashtpanArr.push(pasht)

        }
    }

    eat() {
        let foods = this.chooseCell(2, 3)
        let food = random(foods)

        if (food) {
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1)
                    break;
                }
            }

            for (let i in grassEaterArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 4

            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY

            if (this.energy >= 12) {
                this.mul()
            }



        } else {
            this.move()
        }
    }

    move() {
        this.energy--;
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];


            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;
        }

        if (this.energy <= 0) {
            this.die()
        }

    }

    die() {
        matrix[this.y][this.x] = 0;

        for (let i in pashtpanArr) {
            if (this.x == pashtpanArr[i].x && this.y == pashtpanArr[i].y) {
                pashtpanArr.splice(i, 1);
                break;
            }
        }
    }

}