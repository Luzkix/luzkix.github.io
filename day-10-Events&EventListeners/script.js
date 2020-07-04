// Jednoduchá cesta bez složité funkce
console.log("jednoduchá cesta bez složité funkce")

$("button").on("click", () => {console.log("to koukas co?")});


// Nyní složitější cesta přes funkci o více hodotách
console.log("Nyní složitější cesta přes funkci o více hodotách")

let kliktext = ["Ahoj", "Nekecej", "Jde to ztuha!"];

let funkceKlik = (kliktext) => {
    let a = "";
    kliktext.forEach(function(item) {
    a += `${item} `;
    });
    return a;
   };


$("button").on("click", () => {console.log(funkceKlik(kliktext))});

// klinku na Button2 a změním popisek Buttonu1
$(".Tlacitko2").on("click", () => {$(".Tlacitko1").text("Nový popis tlačítka pomocí JavaScriptu")});

// kliknu na Button1 a změním popisek na Buttonu1 na Tlacitko1
$(".Tlacitko1").on("click", function() {$(this).text("Tlacitko1")});

// kliknu na Button3 a změním pozadí všech tlačítek na zelenou + popisek Buttonu2
$(".Tlacitko3").on("click", function() {
    $("button").css("background-color", "lightgreen")
    $(".Tlacitko2").text("Pozměněn popisek javascriptem")
});


// změní defaultní hodnotu textového inputu na blue 2 varianty - jScrip vs javascript
// vyjedu hodnotu do logu - potvrzení že fungují oba příkazy
// pokud je hodnota v textovém poli = blue, pak pozadí tlačítek žlutý, jinak červený
// Nakonec funkce na tlačítko - vyčti barvu z textového pole a dle ní obarvi tlačítko

$("#text").val("blue");
document.getElementById("text").value = "blue";

console.log(document.getElementById("text").value);

if ((document.getElementById("text").value) === "blue") {
    $("button").css("background-color", "yellow")
    } else {
        $("button").css("background-color", "red")
};

$(".Tlacitko3").on("click", function() {
    $("button").css("background-color", document.getElementById("text").value)
}); 
