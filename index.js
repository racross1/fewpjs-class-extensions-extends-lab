class Polygon{
    constructor(sides) {
        this.sides = sides
    }

    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((a, b) => a + b, 0)
    }
}


class Triangle extends Polygon {
    get isValid () {
        let booleanArr = []
        this.sides.forEach(side => {
            if (this.perimeter - side > side) {
                booleanArr.push(1)
            } else {
                booleanArr.push(0)
            }
        })
        if (booleanArr.includes(0)) {
            return false 
        } else {
            return true
        }
    }

}


class Square extends Polygon {
    get isValid() {
        let count = 0
        this.sides.forEach(side => {
            if (side === this.sides[0]) {
                count += 1
            }
        })
        return count == 4 ? true : false     
    }

    get area() {
        return this.sides[0] ** 2
        }

}