var lo1 = 3;
var lo2 = 4;
var lo3 = 5;

var gu;
var hit = 0;
var guss = 0;

var isSunk = false;

var rom = Math.round(Math.random(1) * 10);

while (isSunk == false) {
    gu = prompt("Maybe number 0-6");
    if (gu < 0 || gu > 6) {
        alert("Maybe mistake");
    }
    else {
        guss = guss + 1;
        console.log("ADD " + guss);

        if (gu == lo1 || gu == lo2 || gu == lo3) {
            hit = hit + 1;
            alert("hit");

            if (hit == 3) {
                isSunk = true;
                alert("Bette my!")
            }
        }
    }
    
}

var st = "yuo took " + guss;

alert(guss);