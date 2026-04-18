// Create an object called myProfile with at least 4 properties: name, age, 
// country, and hobby. Then write a function displayProfile(person) that 
// logs a sentence describing the person using their properties.

const myProfilev = {
    name: "Christopher",
    age: 25,
    country: "Nigeria",
    hobby: "soccer"
};

function displayProfile(person) {
    console.log(`Hello, my name is ${person.name}. I am ${person.age} years old and I live in ${person.country}. In my free time, I enjoy ${person.hobby}.`);
}

displayProfile(myProfilev);