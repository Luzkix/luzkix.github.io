// pro nejrychlejší variantu koukni na konec
// nejdříve nadefinuji narůstající proměnnou "klik" a to pomocí funkce "kliknout"

let klik = 0;
function kliknout() {
    klik += 1;    //tzn. k výchozí hodnotě přičti 1
    return klik;
};


//pak využiju funkce addEventListener, která bude sledovat klikání nad tlačítkem
// a bude mi vracet hodnotu funkce "kliknout" do odstavce, kterým se přepíše nadpis h2 #pocetKliku

document.getElementById("tlacitko1").addEventListener("click", function() {
    $("#pocetKliku").text(`${kliknout()}`)
    });



/* Nebo nemusím funkci na klik vůbec využít, když prakticky jen načítá počet kliků. Toto lze napsat přímo do té funkce getElementById takto:

let klik = 0;
document.getElementById("tlacitko1").addEventListener("click", function() {
    $("#pocetKliku").text(++klik)
    });
 
Větou říkám: u objektu "tlacitko1" poslouchej kliky. 
Když bude proveden klik, tak aplikuj tuto funkci: 
Text v odstavci #pocetKliku nahraď proměnnou "klik", (která je v defaultu = 0) a přičti k ní 1. 
*/


// Vytvořím decreasing button

document.getElementById("tlacitko2").addEventListener("click", function() {
    $("#pocetKliku").text(--klik)
    });
