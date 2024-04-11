
// Section 1
console.log('\n1. Variables & Data types\n\n');

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


// Section 2
console.log('\n2. Loops\n\n');

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

// Part C
console.log("Part C\n");
for(let i = 1; i < 101; i++)
{
    let message = `I found a ${i} `
    let printMessage = false
    if (i%5 == 0){
        message += 'High Five! '
        printMessage = true
    }
    if (i%3 == 0){ 
        message += 'Three is a crowd'
        printMessage = true
    }
    if (printMessage) {console.log(message);}
}

// Part D
console.log("Part D\n");
let bankAccount = 0
for(let i = 1; i <= 10; i++)
{
    bankAccount += i
}
console.log(`You have $${bankAccount} in your bank account`);



// Section 3

console.log('\n3. Arrays & Control flow\n\n');

//Part B
console.log("\nPart B");
const quotes = ['"','"','"']

//Part C
console.log("\nPart C");
const randomThings = [1, 10, "Hello", true]
let first = randomThings[0]
randomThings[2] = 'World'
console.log(randomThings)

//Part D
console.log("\nPart D");
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
third = ourClass[2]
ourClass[4] = 'Octocat'
ourClass.push('Cloud City')
console.log(ourClass);

//Part E
console.log("\nPart E");
const myArray = [5, 10, 500, 20]
myArray.push('Aegon', 'Tpday')
console.log(myArray);
myArray.shift()
myArray.unshift('Bob Marley')
console.log(myArray);
myArray.pop()
newArray = myArray.reverse()
console.log(newArray);

//Part F
console.log("\nPart F");
let num = 8
if (num < 100)
{
    console.log("little number");
}
else {
    console.log("big number");
}

//Part G
console.log("\nPart G");
if (num < 5)
{
    console.log(`${num} is a little number`);
}
else if(num > 10)
{
    console.log(`${num} is a big number`);
}
else
{
    console.log(`${num} is a monkey`);
}

// Part H
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];

const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

let kristyn_outfit = `Kristyn is rocking that ${kristynsCloset[2]} today!`
console.log(kristyn_outfit);
kristynsCloset.splice(6, 0, 'raybans')
console.log(kristynsCloset);
kristynsCloset[5] = 'stained knit hat'
console.log(kristynsCloset);
firstItem = thomsCloset[0][0]
console.log(firstItem);
pants = thomsCloset[1][1]
console.log(pants);
let accessory = thomsCloset[2][2] 
console.log(accessory);
message = `Thom is looking fierce in a ${firstItem}, ${pants}, and ${accessory}!`
console.log(message);


// Objects
console.log('\nOBJECTS');

console.log("\nPart A");
const user = {
    name: 'tommy rons',
    email: 'tommylink@gmail.com',
    age: 22,
    purchased: []
}
console.log(user);

console.log("\nPart B");
user.email = 'tommynew@gamil.com'
user.age++
console.log(user);

console.log("\nPart C");
user.location = 'Emerald City'
console.log(user);

console.log("\nPart D");
user.purchased.push('carbohydrates', 'peace of mind', 'Merino jodhpurs')
console.log(user);
console.log(user.purchased[2]);

console.log("\nPart E");
user.friend = {
    name: "Sidney Loppins",
    age: 45,
    location: 'Munchkin Country',
    purchased: []
}
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push('The One Ring', 'A Latte')
console.log(user.friend.purchased[1]);
// console.log(user);

console.log("\nPart F");
console.log(`${user.name} purchased:`);
for(let item of user.purchased) {console.log(item);}
console.log(`\n${user.friend.name} purchased:`);
for(let item of user.friend.purchased) {console.log(item);}

console.log("\nPart G");

function updateUser()
{
    user.age++
    user.name = user.name.toLocaleUpperCase()
}

function oldAndLoud(userObject)
{
    userObject.age++
    userObject.name = userObject.name.toLocaleUpperCase()
}
updateUser()
console.log(user);
oldAndLoud(user)
console.log(user);