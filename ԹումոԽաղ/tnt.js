class Tnt{
    constructor(x, y) {
        this.x = x
        this.y = y
        this.directions = [];

        
    }
   
    
        
        getNewCordinates() {
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

            
        chooseCell(character, character1, character2, character3, character4,) {
            this.getNewCordinates()
            var found = [];
            for (let i = 0; i < this.directions.length; i++) {
                let x = this.directions[i][0];
                let y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] == character || matrix[y][x] == character1||matrix[y][x] == character2||matrix[y][x] == character3||matrix[y][x] == character4) {
                        found.push(this.directions[i]);
                    }
                }
    
            }
            return found;
    
        }
        mul() {

            let emptyCells = this.chooseCell(1,2,3,4,6)
            let newCell = random(emptyCells)
    
            if (newCell) {
                let newX = newCell[0]
                let newY = newCell[1]
    
                matrix[newY][newX] = 5
    
                let tnt = new Tnt(newX, newY)
                tntArr.push(tnt)
    
    
    
            }
        }
    
    } 
