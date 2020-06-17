let jmena = ["franta", "Jose", "jarda", "zdenek", "Milos"];

// ForEach mimo funkci - výstup do console.log
console.log("ForEach mimo funkci - výstup do console.log")

jmena.forEach(element => {
   console.log(`<li>${element}</li>`); 
});

// ForEach jako soucast funkce se seznamem jmen dle proměnné jmena - výstup do console.log
console.log("ForEach jako soucast funkce se seznamem jmen dle proměnné jmena - výstup do console.log");

let funkceJmena = (jmena) => {
    jmena.forEach(function(item) {
        console.log(`<li>${item}</li>`); 
    });
}   
funkceJmena (jmena);

// ForEach jako soucast funkce dle individualne zadanych jmen - výstup do console.log
console.log("ForEach jako soucast funkce dle individualne zadanych jmen - výstup do console.log");

funkceJmena (["Jouda1", "Jouda2", "Jouda3"]);


// test - kopie příkazu z webu - přidání Hello World! do do HTML
console.log("test - kopie příkazu z webu - přidání Hello World! do do HTML");

$('main').append(
    '<h1>Hello World!</h1>'
  );

// FINÁLE! ForEach jako součást funkce, která vyjede jména do virtuálního seznamu jako odrážky (nikoli do console.log). To je následně příkazem .append včleněno do HTML.
// Nejprve nadefinována nová funkce s použitím proměnné "a" a následně využití speciálního přičítače += který postupně přidává jména
// Pak zakomponována funkce IF a to pokud item == zdenek, tak má být tlustě
// následně použit příkaz .append kterým se výsledek té funkce "přilepí" do HTML

console.log("FINÁLE! ForEach jako součást funkce, která vyjede jména do virtuálního seznamu jako odrážky (nikoli do console.log). To je následně příkazem .append včleněno do HTML.");

funkceJmena = (jmena) => {
    let a = "";
    jmena.forEach(function(item) { 
        if (item === "zdenek") {
            a += `<li><strong>${item}</strong></li>`;
        } else {
            a += `<li>${item}</li>`;
        }
        });
    return a; 
}

// ta funkce if výše by šla zapsat pomocí ? a : také takto v 1 řádku:
// a += item === "zdenek" ? `<li><strong>${item}</strong></li>` : `<li>${item}</li>`;


$('main').append(
    `${funkceJmena(jmena)}`
);

//Cvičení 2 - vytvořit objekt s nadbisem a textem a vložit jej na konec stránky
console.log("Cvičení 2 - vytvořit objekt s nadbisem a textem a vložit jej na konec stránky")


let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('main').append(
    `<h1>${additionalBlock.title}</h1> 
    <p>${additionalBlock.text}</p>`
);
    
