// Array.groupBy() method
// example 1
const products = [
    { name: 'apples', category: 'fruits' },
    { name: 'oranges', category: 'fruits' },
    { name: 'potatoes', category: 'vegetables' }
];

const productsGroupedByCategory = products.groupBy(product => product.category);

// example 2

const animals = [
    { name: 'dog', species: 'canine' },
    { name: 'cat', species: 'feline' },
    { name: 'mouse', species: 'rodent' }
];

const animalsGroupedBySpecies = animals.groupBy(animal => animal.species);

