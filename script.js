// Part A

let myName              = 'Jalen'
let favoriteLanguage    = 'Python'
let newFavoriteLanguage = 'Javascript'
favoriteLanguage = newFavoriteLanguage
console.log(`My name is ${myName} and my favorite coding language is ${favoriteLanguage}`);

// Part B

let firstVariable = 'Hello World'
firstVariable = 2
let secondVariable = firstVariable
secondVariable = "Wow"
console.log(firstVariable);
let yourName = 'Jalen'
console.log(`Hello, my name is ${yourName}`);

// Part C

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false || false || false || false || false || true);
console.log(false != false)
console.log(e === 'Kevin');
console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a + a < d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');

// Part D
let animal = 'cow'

if (animal == 'cow')
{
    console.log('mooooo');
}
else 
{
    console.log("Hey! You're not a cow");
}

// Part E
let age = 15
if (age >= 16){
    console.log("Here are the keys!");
}
else{
    console.log("Sorry, you're too young.");
}

/*
Loops
*/

//Part A
console.log("Part A\n");
for(let i = 0; i <= 10; i++)
{
    console.log(i);
}
console.log("\n\n");
for(let i = 10; i <= 400; i++)
{
    console.log(i);
}
console.log("\n\n");
for(let j = 12; j <= 400; j += 3)
{
    console.log(j);
}

//Part B
console.log("Part B\n");
for(let i = 1; i < 101; i++)
{
    if (i%2 == 0)
    {
        console.log(i + " is an even number");
    }
    else{
        console.log(i);
    }
}