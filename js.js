var lo1 = Math.round(Math.random() * 4) + 1;
var lo2 = lo1 + 1;
var lo3 = lo2 + 1;

var guu;
var hit = 0;
var guuss = 0;

var isSuck = false;

while (isSuck == false) {
    guu = prompt("0 - 6");

    if (guu < 0 || guu > 6) {
        alert("Paesh are a look");
    } else {
        guuss = guuss + 1;
        document.write(guuss + " egg ");

        if (guu == lo1 || guu == lo2 || guu == lo3) {
            hit = hit + 1;
            alert(hit + "is a look");
        
            if (hit == 3) {
                isSuck = true;
                alert("the dne")
            }
        } else {
            alert("Miss");
        }
    }

}
