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
    if ( pos >= endPos || pos === enemyPos) {
        isGameOver = true;
    }
}

//Control Loop Statements
