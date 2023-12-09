// variables.js
const name = "Ihr Name";
const age = 25;
const isStudent = true;

// conditions.js
const ageMessage = age >= 18 ? "Sie sind volljährig" : "Sie sind minderjährig";
const studentMessage = isStudent ? "Sie sind Student" : "Sie sind kein Student";

// loops.js
function printNumbers() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}

function printReversedNumbers() {
    for (let i = 5; i >= 1; i--) {
        console.log(i);
    }
}

// functions.js
function calculateSquare(number) {
    return number * number;
}

// arrays.js
const fruits = ["Apfel", "Banane", "Orange"];
const fruitsMessage = fruits.length > 2 ? "Sie haben genug Früchte" : "Sie brauchen mehr Früchte";

export {
    name,
    age,
    isStudent,
    ageMessage,
    studentMessage,
    printNumbers,
    printReversedNumbers,
    calculateSquare,
    fruits,
    fruitsMessage,
};
