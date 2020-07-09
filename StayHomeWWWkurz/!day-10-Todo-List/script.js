$("#AddButton").click(function() {
    let hodnota = $("#inputField").val();
    if (hodnota === "") {
        alert("Prázdná hodnota!");
    } else {
        $("#Example").remove();
        $("ul").append(`<li>${hodnota}</li>`);
        $("#inputField").val(""); //tím změním obsah text.pole zpět na nic
    }
});

/*Celkový postup: 

1. Nejprve vytvořit základní kostru funkce:
$("#AddButton").click(function() {
    $("ul").append(`<li>${
        nějakáfunkce
    }</li>`);
});

2. Vyčtení hodnoty z textového pole - Stanovím proměnnou "hodnota", 
která se vyčte z pole #inputField. (varianty jScript/javasScript)
let hodnota = $("#inputField").val(); //nebo čistý javascript
let hodnota = document.getElementById("inputField").value;

3. Smažu vytvořený vzorový úkol, který má id Example
    $("#Example").remove();

4. Teď mohu proměnnou použít aby se vrátila jako text do odrážky
$("#AddButton").click(function() {
    let hodnota = $("#inputField").val();
    $("ul").append(`<li>${hodnota}</li>`);
    }
});

5. Pak ještě přidám podmínku, která nakonec vrátí textové pole do výchozího stavu ""
a nakonec přidám podmínku if, která vyhodí alert, pokud je textové pole === "", abych
negeneroval odrážky s prázdným obsahem
$("#AddButton").click(function() {
    let hodnota = $("#inputField").val();
    if (hodnota === "") {
        alert("Prázdná hodnota!");
    } else {
        $("ul").append(`<li>${hodnota}</li>`);
        $("#inputField").val(""); //tím změním obsah text.pole zpět na nic
    }
});
*/

//Další doplňkové funkcionality

//1. přeškrtnutí hotového úkolu
    /*Pozn: úkol jsem si zkomplikoval - výsledná odrážka je složena ze 2 html inline elementů: 
    1. část přeškrtnutý původní text (definován jako proměnná "hodnota"), barva šedá, element <span>
    2. část jednoduchý text, barva zelená, element <strong>
    CSS styl byl nadefinován ručně přímo k těmto elementům - výsledný text (včetně těchto elementů) 
    je vložen jako html (nikoli text!) místo původního textu v <li> - prohlížeč takto aspoň zareaguje
    na manuálně napsané html tagy, včetně ikony palce nahoru
    */

$(document).on("click","li", function () {  // musím použít on.("click", "selector", "function") namísto click, protože jde o dynamický obsah
    hodnota = $(this).text(); // definuji proměnnou (let nemusím, už je definováno)
    $(this).html(`
    <span style="text-decoration: line-through; color: grey;">${hodnota}</span>
    <strong style="color: darkgreen;">...SPLNĚNO! &#128077</strong>
    `)
    .css("font-style", "italic") //kurzíva
});
