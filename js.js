function bark(name, weg, im) {
    console.log(im);
    if (weg > 20) {
        console.log(name + " woog woog");
    } else {
        console.log(name + " woooooog");
    }

}

function games(im) {
    console.log(";)");
    im = prompt("I am a maaa");
    bark("Jov", 21, im);
    
}

games()