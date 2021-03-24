console.log(`Sąlygiai sakiniai`);
console.log(`1 uždavinys`);

let n = 4;
let m = 6;

if (n > m) {
    console.log(`Ilgiau aptarnaujamas pirmasis pirkėjas.`);
} else {
    console.log(`Ilgiau aptarnaujamas antrasis pirkėjas.`);
}

console.log(`2 uždavinys`);
let jonas = 2;
let povilas = 3;

if (jonas > povilas) {
    console.log(`Turnyrą laimėjo Jonas.`);
} else {
    console.log(`Turnyrą laimėjo Povilas.`);
}

console.log(`3 uždavinys`);
let martynas = 300;
let karolis = 200;

if (martynas > karolis) {
    console.log(`Daugiau saldainių pirko Martynas.`);
} else {
    console.log(`Daugiau saldainių pirko Karolis.`);
}


console.log(`4 uždavinys`);
let metai = 2020;

if (metai % 4 == 0) {
    let olimpiniuZaidiniuNumeris = (metai - 1896) / 4 + 1;
    console.log(`Olimpinių žaidinių numeris ${olimpiniuZaidiniuNumeris}`);
} else {
    console.log(`Metai neolimpiniai.`);
}

console.log(`5 uždavinys`);
let likesPamokosLaikas = 40;

if (likesPamokosLaikas > 30) {
    console.log(`Liko dar labai daug laiko.`);
} else if (likesPamokosLaikas > 15) {
    console.log(`Liko dar nemažai laiko.`);
} else if (likesPamokosLaikas > 7) {
    console.log(`Liko nedaug laiko.`);
} else {
    console.log(`Pamoka baigiasi.`);
}

console.log(`6 uždavinys`);
let metai2 = 2020;

let keliamieji = metai2 % 400 == 0 || (metai2 % 100 > 0 && metai2 % 4 == 0);

if (keliamieji) {
    console.log(`Metai yra keliamieji.`);
} else {
    console.log(`Metai nėra keliamieji.`);
}

console.log(`7 uždavinys`);

let bilietoNr = '123459';

let skaiciai = bilietoNr.split('').map(Number);

let suma = 0;

for (let i = 0; i < skaiciai.length; i++) {
    suma = suma + skaiciai[i];
}

let sekmingasBilietas = suma % 4 == 0;

if (sekmingasBilietas) {
    console.log(`Bilietas yra sėkmingas!`);
} else {
    console.log(`Bilietas nieko nelaimėjo`);
}

console.log(`8 uždavinys`);

let knygos = 10;
let puslapiai = 200;
let pslSkPerD = [40, 40, 50, 40, 30];
let savaites = 11;

let puslapiaiPerSav = 0;

for (let i = 0; i < pslSkPerD.length; i++) {
    puslapiaiPerSav = puslapiaiPerSav + pslSkPerD[i];
}

let uztruksSkaitydamas = (knygos * puslapiai) / puslapiaiPerSav;

if (uztruksSkaitydamas > savaites) {
    console.log(`Jonas knygų perskaityti nespės`);
} else {
    console.log(`Jonas knygas perskaityti spės.`);
}

console.log(`9 uždavinys`);
let n1 = 1;
let n2 = 1;
let n3 = 1;

if ((n1 + n2 + n3) == 3) {
    console.log(`Mokinys dešimtuką gaus.`);
} else {
    console.log(`Mokinys dešimtuko negaus`);
}

console.log(`10 uždavinys`);
let kelionesKaina = 850;

if (kelionesKaina >= 4000) {
    console.log(`Jolantai geriausiai tiktų pirmos grupės kelionė.`);
} else if (kelionesKaina >= 3000) {
    console.log(`Jolantai geriausiai tiktų antros grupės kelionė.`);
} else if (kelionesKaina >= 1000) {
    console.log(`Jolantai geriausiai tiktų trečios grupės kelionė.`);
} else {
    console.log(`Jolantai geriausiai tiktų ketvirtos grupės kelionė.`);
}


