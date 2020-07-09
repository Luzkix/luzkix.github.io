let color = "purple";
let number = 10;
let word = "cool";

if (color === "purple") {
    $(".North").css("background", "purple")
} else {
    $(".North").css("background", "green")
}

number = 150;
if (number > 100) {
    $(".East").text("Whoah, that's a big number!")
} else {
    $(".East").text("Just a regular number, please.")
}

word = "ahoj";
if (word === "cool") {
    $(".South").text("Power of DOM")
} else {
    $(".West").text("Power of DOM")
}
