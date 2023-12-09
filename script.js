// variables.js
export const name = "Ihr Name";
export const age = 25;
export const isStudent = true;

// conditions.js

export const ageMessage = age >= 18 ? "Sie sind volljährig" : "Sie sind minderjährig";
export const studentMessage = isStudent ? "Sie sind Student" : "Sie sind kein Student";


// loops.js
export function printNumbers() {
    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }
  }
  
  export function printReversedNumbers() {
    for (let i = 5; i >= 1; i--) {
      console.log(i);
    }
  }
  

  // functions.js
export function calculateSquare(number) {
    return number * number;
  }
  

// arrays.js
export const fruits = ["Apfel", "Banane", "Orange"];
export const fruitsMessage = fruits.length > 2 ? "Sie haben genug Früchte" : "Sie brauchen mehr Früchte";


export * from './script'