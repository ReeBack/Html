var name = "";
var gus;
var hat = 0;
var six = false;


function games() {
    name = prompt("Why is a ");
    console.log("Why is a " + name);

    while (six == false) {
        hat = hat + 1;
        gus = prompt("Two Three...")

        if (hat == 3) {
            console.log("War");

            six = true;
        }
    }
}

games(name);

var one = ["one", "two"];
console.log(one[1]);
console.log( one.length );