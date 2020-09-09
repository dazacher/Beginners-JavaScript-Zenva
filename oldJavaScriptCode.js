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