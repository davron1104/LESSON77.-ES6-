'use strict';
 
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);

// class Rectangle{
//     constructor(height, width) {

//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }


// class ColoredRectangleWithtext extends Rectangle {
//     constructor(height, width, text, bgColor) {
//         super(height, width);
//         this.text = text;
//         this.bgColor = bgColor;

//     }

//     showMyProps() {
//         console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
//     }
// }

// const div = new ColoredRectangleWithtext(25, 10, 'Hello World', 'red');

// div.showMyProps();
// console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());



class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea () {
        return this.height * this.width;
    }
}

// const square = new Rectangle (10, 10);
// const anotherSquare = new Rectangle (30, 20);

// console.log(square.calcArea());
// console.log(anotherSquare.calcArea());

class ColoredRectangleWithtext extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor} `);
    }
}

const div = new ColoredRectangleWithtext(25, 10, 'Hello world', 'red');
div.showMyProps();
console.log(div.calcArea());



// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     } 

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// const square = new Rectangle(10, 10);
// console.log(square.calcArea);


class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    } 

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithtext extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithtext (25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.calcArea());
// const square = new Rectangle(10, 10);
// console.log(square.calcArea);



// BMI = weight / height * height;




class BMI {
    constructor (weight, height){
        this.height = height;
        this.weight = weight;
    }

    showMyBMI() {
        return this.weight / Math.pow(this.height, 2); 
    }
}

// const davronBMI = new BMI(70, 1.78);
// console.log(davronBMI.showMyBMI());

const humanBMI = new BMI(70, 1.78).showMyBMI();
console.log(humanBMI);

const someFunc = function(a, b, ...rest) {
    console.log(a, b, rest);
};

someFunc('davron', 'dilya', 'bollar', 'oilaazolar');

function calaOrDouble(number, basis = 2) {
    // basis = basis || 2;
    console.log(number * basis);
}

calaOrDouble(3);



class Rectangle {
    constructor (height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea (){
        return this.height * this.width;
    }
}

class ColoredRectangleWithtext extends Rectangle {
    constructor (height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`)
    }
}

const div = new ColoredRectangleWithtext(25, 10, 'Hello World', 'red');
div.showMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);
// console.log(square.calcArea());
// console.log(long.calcArea());