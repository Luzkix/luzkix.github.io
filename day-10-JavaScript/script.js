console.log('Hello World! My name is Zdenek!');


// FUNKCE IF


let promenna = true;
if (promenna === false) {
    console.log("promenna je pravda");
} else {
    console.log("promenna neni pravda");
};

let a = 3;
if (a < 5) {
    console.log(a / 2);
} else {
    console.log(a * 2);
}


// FOR LOOPS - opakování příkazů


let bookCount = 10;

for (let i = 0; i < (bookCount); i++) {
    console.log(`Presunuta kniha ${i}`)
}

bookCount = 10;

for (let i = 0; i < (bookCount); i++) {
    console.log(`Presunuta kniha ${i + 1}`)
}

bookCount = 10;

for (let i = 0; i <= (bookCount); i++) {
    console.log(`Presunuta kniha ${i * 2}`)
}

for (let i = 0; i < bookCount; i++) {
    console.log(`Přesunuta kniha od konce ${bookCount - i}`)
}


// FUNCTIONS - nadefinuju název, pak proměnné (a, b, c), a pak co se má s proměnnými dělat


let soucin = (a, b) => {
    return a * b;
}

console.log(soucin(2, 32)); // = 64

let vlastniVzorec = (a, b, c) => {
    return ((a * b)/2) + c;
};

console.log(vlastniVzorec(2, 3, 4)); // = 7

a = 4;
b = 4; 
c = 4;
console.log(vlastniVzorec(a, b, c)); // = 12
console.log(vlastniVzorec(5, 5, 8)); // = 20.5


// Excercise 1: Use your previous for loops and create a function which print the first N numbers.
// výsledek: printNumbersTill(15); // should print 1, 1, 2, ...., 15


let printNumbersTill = (n) => {    
    for (let i = 1; i <= n; i++) {
        console.log(i);
        }
};

printNumbersTill(10); 
//zde již neuvádím console.log protože to vytisknutí je již definováno v rámci funkce

//Exercise 2: Create a function which gets a name as parameter and then returns a greeting to the specified person.
// Výsledek: console.log(getGreetingTo('Mark')); // Should print 'Hello Mark!'

let name = (x) => {
    return (`Dobrý den, ${x}!`);
};

console.log(name("Karel")); // Výsledek: Dobrý den, Karel!


// For loops and arrays:


//Exercise 1: Create a function which gets an array as parameter and prints each value from it.
//Výsledek: printValues([0, 3, 6, 7, 9]); // prints to the separate lines 

let printValues = (array) => {
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    }
};

printValues ([0, 1, 3, 5]);

console.log("Teď přijde použití funkce s forEach!")

// Nahrazení for loops za forEach v rámci funkce

let displayValues = (array) => {
    array.forEach(function(item) {
    console.log(item);
    });
};

displayValues ([2, 3, 4, 5]);

