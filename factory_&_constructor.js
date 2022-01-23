// factory function
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

function createRectangle(width, height) {
    let rectangle = {}
    rectangle.width = width;
    rectangle.height = height;
    rectangle.draw = function () {
        console.log('draw');
    }
    return rectangle;
}

let circle = createCircle(1);
let rectangle = createRectangle(1, 2);

// separate method from factory function
let behavior = {
    draw: function () {
        console.log('draw');
    }
}

function createTriangle(height, color) {
    let triangle = Object.create(behavior);
    triangle.height = height;
    triangle.color = color;
    return triangle;
}
let triangle = createTriangle(3, "blue")

triangle.hasOwnProperty('draw') // false

// avoiding methods duplication in factory function

const newPrototype = {
    draw: function () {
        console.log('draw');
    }
}

function createShape() {
    return Object.create(newPrototype, {
        x: {
            value: 0,
            enumerable: true
        },
        y: {
            value: 0,
            enumerable: true
        }
    });
}
