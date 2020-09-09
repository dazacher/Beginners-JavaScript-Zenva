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

//For loops