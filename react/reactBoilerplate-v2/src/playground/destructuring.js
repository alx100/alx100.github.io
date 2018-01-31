console.log('destructuring');

// 
// Object destructuring
// 

const person = {
  name: 'Alex',
  age: 30,
  location: {
    city: 'Philadelphia',
    temp: 32
  }
};

const {name: firstName = 'Anonim', age} = person;
console.log(`${firstName} is ${age}.`);

const {city, temp: temperature} = person.location;

if(city && temperature) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

const {name: publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName);

// 
// Array destructuring
// 

const address = ['1299 S Street', 'Philadelphia', 'Pensylvania', '19147'];
const [, myCity, state = 'New York'] = address;
console.log(`You are in ${myCity} ${state}.`);

const item = ['Coffee', '$2.00', '$2.50', '$3.00'];
const[product, ,mediumPrice] = item;
console.log(`A medium ${product} costs ${mediumPrice}.`);