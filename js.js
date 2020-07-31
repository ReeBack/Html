var guu = false;
var bo = 0;
var hit = 0;
var guuss;

var lo1 = 4;

while (guu == false) {
    console.log(guu);
    guuss = prompt("I are a look 0-6");

    if (guuss < 0 || guuss > 6) {
        alert("Miss");
    } else {
        if (guuss == lo1) {
            hit = hit + 1;

            if (hit == 1) {
                guu = true;
                console.log(guu);
                alert("War are amosn");
            }
        }   
    }
}