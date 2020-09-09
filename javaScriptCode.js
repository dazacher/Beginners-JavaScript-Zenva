function(parameters) {
    function body
    return outputs
}


var currentHealth = 50;
var healAmount = 10;

function heal() {
    currentHealth += healAmount;
    function nested () {
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

function heal(healAmount = 10) {
    var newHealth = currentHealth + healAmount;
    currentHealth = newHealth > 100 ? maxHealth : newHealth;
    return calculatePercent(currentHealth, maxHealth);
}

function calculatePercent (dividend, divisor) {
    (dividend / divisor) * 100; //fuction immediately exits at this point and ignores any code after it
}

var result = heal(); //changes currentHealth to 60
heal(50); //changes currentHealth to 100 and result = 100
