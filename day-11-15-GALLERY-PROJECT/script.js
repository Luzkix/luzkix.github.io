//nadefinuji objekty photo1-20, skládající se ze 3 items.
let photo1 = {
    photo: "Gallery/1_Erice.jpg",
    title: "Erice",
    description: "(2019) Erice is a very small town located on top of Mount Erice, at around 750 metres (2,460 ft) above sea level, overlooking the city of Trapani in Sicily. It is beutiful and breathtaking especially when flooded by the clouds."
};

let photo2 = {
    photo: "Gallery/2_arancini.jpg",
    title: "Arancini",
    description: "(2019) Arancini are Italian snacks consisting of a ball of rice coated with bread crumbs and then deep fried—a staple of Sicilian cuisine. A number of regional variants exist which differ in fillings and shape. And most important, it is soo tasty if properly made! Definitely must have if visiting Sicily."
};

let photo3 = {
    photo: "Gallery/3_panama.jpg",
    title: "View of Panama City",
    description: "(2018) On the way to Cuba we made a one-day break in Panama City. Panama is famous for its Panama Canal and also as a tax heaven. We took a taxi from the airport and look what a wonderful scenery did we witnessed!"
};

let photo4 = {
    photo: "Gallery/4_havana.jpg",
    title: "Havana, Cuba",
    description: "(2018) Havana, with its narrow streets and overhanging balconies, is the traditional center of Cubans commerce, industry, and entertainment, as well as being a residential area. We loved Havana´s nice people, mojito and of course old American cars (taxis) which put you back to the 50´s. And of course, the sunset…"
};

let photo5 = {
    photo: "Gallery/5_vignales.jpg",
    title: " Viñales Valley, Cuba",
    description: "(2018) The Viñales Valley near the western end of the island of Cuba is an outstanding landscape encircled by mountains and dotted with spectacular dome-like limestone outcrops (mogotes) that rise as high as 300 m. The photo was taken from the bar with beautiful view to these ´mogotes´, where we were also served with possibly the best mojito in Cuba."
};

let photo6 = {
    photo: "Gallery/6_kubansky_doutnik.jpg",
    title: "Cuban Cigar",
    description: "(2018) You know the pure taste of fresh original Cuban cigar, right? Ok, Ok, probably not – then believe me, it is a unique experience especially if you enjoy it in Cuba itself. And if you are not a smoker nor seeking for the cigar experience, you shall visit Cuba anyway! It is such a beautiful country full of nice people, beautiful nature, tasty food and cheap great mojitos – a bad mood is unknown term there."
};

let photo7 = {
    photo: "Gallery/7_poustevnik.jpg",
    title: "Robinson Crusoe",
    description: "(2018) Playa Baracoa, Cuba.  Baracoa is a city in Guantánamo Province near the eastern tip of Cuba. It was visited by Christopher Columbus on November 27, 1492 and became the oldest Spanish settlement in Cuba and was its first capital. It took us 24 hours in the bus to get there from Havana, but it was definitely worth it. Minimal tourism and pure nature. And no, we did not forget Jirka behind, alone with his coconut full of rum…"
};

let photo8 = {
    photo: "Gallery/8_Johnny5.jpg",
    title: "Johnny 5",
    description: "(2014) Talinn, Estonia. Binoculars on the hill with a nice view on the city of Talinn, the capital of Estonia. Does it remind you something? What about Johnny 5? It is the robot acting in the great movie Short Circuit filmed in 1986. And yes, it is also the year of the Chernobyl nuclear disaster."
};

let photo9 = {
    photo: "Gallery/9_zed_most_berlin.jpg",
    title: "The Wall",
    description: "(2013) Berlin, the wall of the unknown bridge. What is interesting about this picture? Mostly nothing – except for memories on how some of the Berlin´s bridges provided us with a cover against heavy rain, which suddenly surprised us. Thus, I got time for creating of this simple yet beautiful picture of the wall composed from nice red-orange bricks."
};

let photo10 = {
    photo: "Gallery/10_Berlinska_zed.jpg",
    title: "The Berlin Wall",
    description: "(2013) Berlin. Although not clear at first, the picture represents the real painting on the famous Berlin Wall. In fact, the Berlin Wall is covered by a lot of paintings and this is just one of them. However, I liked it a lot – the dark atmosphere from the painting was touching me immediately and was screaming for taking of the picture. So, I took a picture – freely, unlike in times before 9th of November, 1989, when the Berlin Wall was still fulfilling its purpose – separating free West from communistic East." 
};

let photo11 = {
    photo: "Gallery/Greenfox.PNG",
    title: "Test Picture",
    description: "(2013) Berlin. Although not clear at first, the picture represents the real painting on the famous Berlin Wall. In fact, the Berlin Wall is covered by a lot of paintings and this is just one of them. However, I liked it a lot – the dark atmosphere from the painting was touching me immediately and was screaming for taking of the picture. So, I took a picture – freely, unlike in times before 9th of November, 1989, when the Berlin Wall was still fulfilling its purpose – separating free West from communistic East." 
};

//nadefinuji array "imagesData" z výše uvedených objektů photo1-20
let imagesData = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8, photo9,
    photo10, photo11];

let currentPhoto = 0; 

/*  Nadefinuji jquerry skripty, které dohrávají fotku a popisky do příslušné html sekce. 
    Níže je všechny dám do funkce "loadPhoto".
$('#photo').attr('src', imagesData[currentPhoto].photo);
$('#photo-title').text(imagesData[currentPhoto].title);
$('#photo-description').text(imagesData[currentPhoto].description);
*/

let loadPhoto = function () { //nadefinuji obsah funkce loadPhoto
    $('#photo').attr('src', imagesData[currentPhoto].photo);
    $('#photo-title').text(imagesData[currentPhoto].title);
    $('#photo-description').text(imagesData[currentPhoto].description);  
}

loadPhoto(currentPhoto); //spustím funkci loadPhoto, tím se nahraje úvodní fotka

$("#arrow_right").click(function() { //nadefunuji co se má stát po kliku na pravou šipku
    if (currentPhoto < ((imagesData.length)-1)) { //dokud je číslo menší než délka array - 1, tak přičítej 1
        currentPhoto++;
    }  else {
        currentPhoto = 0
    }
    loadPhoto(currentPhoto);
});

$("#arrow_left").click(function() { //to samé pro levou šipku
    if (currentPhoto > 0) {
        currentPhoto--;
    } else {
        currentPhoto = ((imagesData.length)-1)
    }
    loadPhoto(currentPhoto);
});





