// variable declarations using numbers and Boolean

var maxHealth = 100
var currentHealth = 50.5;
currentHealth = maxHealth;

var isGameOver = false;
isGameOver = true;

// const (value can never be changed), let (value can only be changed and accessed in code block it is defined in.), var (if accessed outside of code block declared it will give the result of undefined)

var currentHealth = 50;
const maxHealth = 100;

if (true) {
    var isGameOver = false;
    let someValue = true;
}

console.log(isGameOver) //undefined
console.log(someValue) // gives an error - can't be accessed out here

let maxHealth = 100
var currentHealth = 50.5;
currentHealth = 40.5
currentHealth = maxHealth; //100
var numberOfLives = 3;

var isGameOver = false;
isGameOver = true;
var isAtEnd = false;

//String variables

var characterName = "Nimish";
characterName = "Zenva";
var age = 26

let welcomeMessage = `Hi, my name is ${characterName} and my age is ${age}`;

const length = characterName.length;
let upperName = characterName.toLocaleUpperCase();
let lowerName = characterName.toLocaleLowerCase();

characterName = characterName.toLocaleUpperCase();

let zen = characterName.slice(0, 3); // returns ZEN

var level = 3;
var maxLevel = 25;

var title = `Level ${currentLevel} of ${maxLevel} levels`;

//Assignment operator
var health = 50;

//Arimatic Operators
health = health + 10 //60
health = health % 50 //10

health % 2 === 0;//true

health = health ** 2 // health squared = 100

//+=, -=, *=, /=
health -= 20;// health = health - 20 -----> 80

//++, -- Increase or decrease by one.
health++; // 80 + 1 = 81

//Order of operations, brackets used to make it more readable
health = (health * 2) + (health / 5);

// Three ways to increase health by one.
health = health + 1;
health++;
health += 1;

//Adding string together

var hello = "Hello ";
var world = "world";
var result = hello + world

//Conditional operators > >=, < <=, ==, !=

var number1 = 5;
var number2 = 10;

var result = number1 > number2; //false
result = number1 != number2;// true
var string1 = "hello";
var string2 = "world";
result = string1 === string2;// false

// ||, &&, !
result = !result;// changes a true to a false
result = number1 > number2 && string1 === string2;//false
number1 = number2;
result = number1 === number2 || string === string2;//true

//Terinary operator   ?   :
result = number1 > number2 ? number1 : number2

var numberOfLives = 3;
var isGameOver = numberOfLives > 0 ? false : true;
var isGameOver = !(numberOfLives > 0);

var inventory = ["shirt", "axe", "bread"]
//inventory = ["water", "pants"]

let shirt = inventory[0] //shirt
inventory[2] = "cheese";

var length = inventory.length //3
length = inventory[0].length //5 - how long the word shirt is

inventory.push("water");//sticks water onto the end of inventory

let water = inventory.pop(); //removes the last item of the array - in this case water

//Multi-dimensional arrays ----> arrays of arrays
var levels = [
    [1.1, 1.2, 1.3],
    [2.1, 2.2, 2.3, 2.4, 2.5],
    [3.1, 3.2]
];

let firstWorld = levels[0];//[1.1, 1.2, 1.3]
var firstLevel = levels[0][1];// 1.2
firstLevel = [0][1] = 1.4;//changes 1.2 to 1.4

ver secondWorld = levels[1].pop()
var thridWorld = levels[2].push(3.3)

function(parameters) {
    function body
    return outputs
}


var currentHealth = 50;
var healAmount = 10;

function heal() {
    currentHealth += healAmount;
    function nested() {
        //does not exist outside the heal function
    }
}

heal(); //curentHealth = 60

// func is a refrence to the entire functions
var func = function heal() {
    currentHealth += healAmount;
}



//parameters are only inputs to a function
var maxHealth = 100;
var currentHealth = 50;
//var healAmount = 10;

function heal(healAmount) {
    currentHealth += healAmount;
}

heal(10); // changes currentHealth to 60 by passing the value into the function without having to declare a variable


//Functions
function heal(healAmount = 10) {
    var newHealth = currentHealth + healAmount;
    currentHealth = newHealth > 100 ? maxHealth : newHealth;
    return calculatePercent(currentHealth, maxHealth);
}

function calculatePercent(dividend, divisor) {
    (dividend / divisor) * 100; //fuction immediately exits at this point and ignores any code after it
}

var result = heal(); //changes currentHealth to 60
heal(50); //changes currentHealth to 100 and result = 100

// if statements

keyPress = "l";
var xPos = 0;

if (keyPress === "l") {
    xPos -= 1; // xPos = -1
} else if (keyPress === "r") {
    xPos += 1;
} else {
    xPos = 0;
}

// Multiple concurrent if statements
var someNum = 5
if (someNum > 4) {
    xPos -= 1; // xPos = -1
}

if (someNum > 2) {
    xPos += 1;
}

//Nested if statements
keyPress = "l";
var xPos = 0;
let leftEndPos = 5;
let rightEndPos = -5;

if (keyPress === "l") {
    if (xPos < leftEndPos) {
        xPos -= 1; // xPos = -1
    }
} else if (keyPress === "r") {
    if (xPos > rightEndPos) {
        xPos += 1;
    }
} else {
    xPos = 0;
}


// Loops

let endPos = 5;
var pos = 0;

while (pos < endPos) {
    pos++;
}

let endPos = 5;
var pos = 0;
var enemyPos = 4;
var isGameOver = false;

while (!isGameOver) {
    pos++;
    if (pos >= endPos || pos === enemyPos) {
        isGameOver = true;
    }
}

//Control Loop Statements
// break exit out of loops prematurely
while (pos < endPos) {
    pos++;
    if (pos === enemyPos) {
        break;
    }
}

//continue lets you skip a loop iteration
while (pos < endPos) {
    if (pos % 2 === 1) {
        pos += 2;
        continue;
    }
    pos++;
    if (pos === enemyPos) {
        break;
    }
}

//return statement
function doSomething(someNum) {
    var a = 5;
    var result = a + someNum;
    return;
    a += 10; //This never gets executed
}

function movePlayer() {
    while (pos < endPos) {
        pos++;
        if (pos === enemyPos) {
            return;// exits out of the function
        }
    }
}

//For loops - more restrictive than while loops - predefined start point, and end point, and exit point
for (startPoint; endPoint; iterator) {

}

var items = ["axe", "shirt", "knife"];
var finalString = "In my inventory, I have ";

for (let i = 0; i < items.length; i++) {
    var itemName = items[i];
    finalString += itemName + ", ";
}

// forEach loop startpoint and iterator
items.forEach(function (element) {
    finalString += element + ", ";
});