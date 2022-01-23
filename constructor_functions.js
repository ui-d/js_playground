// constructor methods

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let person1 = new Person('John', 30);

Person.prototype.talk = () => {
  console.log(`Hi, I'm ${this.name}`);
}

person1.hasOwnProperty('name'); // true
person1.hasOwnProperty('talk'); // false

function getOwnProperties(obj) {
  let properties = [];
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      properties.push(key);
    }
  }
  return properties;
}

let a = Person.prototype.__proto__ === Object.prototype; // true


// changine prototypal chain

function Animal(name) {
  this.name = name;
}

Animal.prototype.sound = () => {
  console.log(`${this.name} makes a sound`);
}

function Dog(name) {
  this.name = name;
}

const dog = new Dog('Rex');

Dog.prototype = Object.create(Animal.prototype);

dog.sound; // Rex makes a sound

Animal.prototype.walk = () => {
  console.log(`${this.name} walks`);
}

dog.walk; // Rex walks
