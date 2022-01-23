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
