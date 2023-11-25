let LivingCreature = require('./LivingCreature')
module.exports = class Pashtpan extends LivingCreature {
    constructor(x, y) {
        super(x, y,);
        this.energy = 10;
    } 

    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
            ];
    }


	chooseCell(character) {
        this.getNewCoordinates()
            
            return super.chooseCell(character);
	}
    
        mul() {
            var emptyCells = super.chooseCell(0);
            var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let pasht = new Pashtpan(newX, newY)
            pashtpanArr.push(pasht)

        }
    }

    eat() {
        var food= super.chooseCell(1);
		var newCell = food[Math.floor(Math.random() * food.length)]

        if (newCell) {
            this.energy++

            let newX = food[0]
            let newY = food[1]

            for (let i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1)
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
        var emptyCells = super.chooseCell(0);
		var newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

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