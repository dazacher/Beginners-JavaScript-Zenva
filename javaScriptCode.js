var inventory =["shirt", "axe", "bread"]
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
