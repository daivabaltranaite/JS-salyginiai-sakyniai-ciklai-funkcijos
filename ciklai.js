console.log(`Ciklai`);
console.log(`Ciklas FOR`);
console.log(`1 uždavinys`);

let dresurosDienos = 4;
let dresurosMinutes = [15, 12, 13, 20];
let isViso = 0;
for (let i = 0; i < dresurosMinutes.length; i++) {
    isViso = isViso + dresurosMinutes[i];
}
console.log(`Per ${dresurosDienos} dienas Zinas buvo dresuojamas ${isViso} minučių. Vidutiniškai per dieną katinas nubo dresuojamas ${isViso / dresurosMinutes.length} minučių.`);

console.log(`2 uždavinys`);
let prinoksta = 4;
let prinokstaDaugiau = 5;
let braskiuDienos = 3;
let braskesIsViso = 0;
for (let i = 1; i <= braskiuDienos; i++) {
    for (let j = prinoksta; j <= prinoksta + prinokstaDaugiau; j++) {
        j = j + prinokstaDaugiau;
        braskesIsViso = braskesIsViso + j;
    }
}
console.log(`Per ${braskiuDienos} dienas pririnko ${braskesIsViso} braškes.`);

console.log(`3 uždavinys`);
let lt = [5, 7, 5, 5];
let kaina = 100;
for (let i = 0; i < lt.length; i++) {
    kaina = kaina + lt[i];
}
console.log(`Galutinė prekės kaina bus ${kaina} litai.`);

console.log(`4 uždavinys`);
let sk = 28;
let naturalusSk = 0;
for (let i = 1; i < sk; i++) {
    if (sk % i == 0) {
        naturalusSk = naturalusSk + i;
    }
}
if (naturalusSk == sk) {
    console.log(`Skaičius ${sk} yra tobulas.`);
} else {
    console.log(`Skaičius ${sk} nėra tobulas.`);
}

console.log(`5 uždavinys`);
let skaitmuo = 7;
let kartojama = 5;
let suma = 0;

for (let i = 1; i <= kartojama; i++) {
    suma = suma + Number.parseInt(skaitmuo.toString().padEnd(i, skaitmuo));
}

console.log(`Suma: ${suma}`);

console.log(`Ciklas WHILE`);
console.log(`1 uždavinys`);
let sk1 = 3;
let sk2 = 5;
let bmk = 0;
while (true) {
    bmk++;
    if (bmk % sk1 == 0 && bmk % sk2 == 0) {
        console.log(`Skaičių ${sk1} ir ${sk2} BMK yra: ${bmk}`);
        break;
    }
}

console.log(`2 uždavinys`);
let dabartinisAtlyginimas = 1000;
let pradinisAtlyginimas = dabartinisAtlyginimas;
let priedas = 100;
let menesis = 0;
let tenkinaSalygas = 0;
let atlyginimas = {};
while (tenkinaSalygas < 4) {
    menesis++;
    dabartinisAtlyginimas = dabartinisAtlyginimas + priedas;
    if (menesis == 3) {
        atlyginimas.po3men = dabartinisAtlyginimas;
        tenkinaSalygas++;
    }
    if (menesis == 12) {
        atlyginimas.po12men = dabartinisAtlyginimas;
        tenkinaSalygas++;
    }
    if ((dabartinisAtlyginimas > pradinisAtlyginimas * 2) && !atlyginimas.dvigubaiDidesnis) {
        atlyginimas.dvigubaiDidesnis = menesis;
        tenkinaSalygas++;
    }
    if (dabartinisAtlyginimas > 4000 && !atlyginimas.didesnis4000) {
        atlyginimas.didesnis4000 = menesis;
        tenkinaSalygas++;
    }
}

console.log(atlyginimas);

console.log(`3 uždavinys`);
let skaicius = 1234;
let atvirksciai = 0;
while (skaicius > 0) {
    console.log(skaicius);
    atvirksciai = atvirksciai * 10;
    atvirksciai = atvirksciai + (skaicius % 10);
    skaicius = skaicius - (skaicius % 10);
    skaicius = skaicius / 10;
}
console.log(atvirksciai);

console.log(`4 uždavinys`);
let duotasSkaicius = 10;
let sum = 0;
let i = 1;
while (sum <= duotasSkaicius - 1) {
    console.log(i);
    sum = sum + i;
    i++;
}
console.log(`Visų šių skaičių suma lygi: ${sum}`);

console.log(`5 uždavinys`);
let pirmasSkaicius = 2;
let antrasSkaicius = 5;
let daliklis = 1;
while (daliklis < antrasSkaicius) {
    daliklis++;
    if (pirmasSkaicius % daliklis == 0 && antrasSkaicius % daliklis == 0) {
        console.log(`Skaičiai ${pirmasSkaicius} ir ${antrasSkaicius} yra sudėtiniai.`);
        break;
    }
    if (pirmasSkaicius % daliklis != 0 && antrasSkaicius % daliklis != 0) {
        console.log(`Skaičiai ${pirmasSkaicius} ir ${antrasSkaicius} yra pirminiai.`);
        break;
    }
}

console.log(`6 uždavinys`);
let nSkaicius = 24;
let ieskomasSk = 1;
let j = 2;
while (ieskomasSk < nSkaicius) {
    ieskomasSk = ieskomasSk * j;
    j++;
}

if (ieskomasSk == nSkaicius) {
    console.log(`${nSkaicius} turi faktorialą`);
} else {
    console.log(`${nSkaicius} neturi faktorialo`);
}


console.log(`Ciklai + Masyvai:`);
console.log(`1 uždavinys`);
let apskritimai = [4, 20, 6, 4, 10, 3, 4, 12, 78, 23];
let didziausiuApskritimuSkaicius = 0;
apskritimai.sort(function (a, b) {
    return a - b;
});
for (let i = 0; i < apskritimai.length; i++) {
    if (apskritimai[i] == apskritimai[apskritimai.length - 1]) {
        didziausiuApskritimuSkaicius++;
    }
}
console.log(apskritimai);
console.log(`Didžiausių apskritimų yra: ${didziausiuApskritimuSkaicius}`);


console.log(`2 uždavinys`);
let indeliai = [1000, 600, 900, 1500, 12000, 1000000, 5000, 2000, 1000, 200];

let indeliuSk = 1;
for (let i = 0; i < indeliai.length; i++) {
    if (indeliai[i] > 1000) {
        indeliuSk++;
    }
}

console.log(`Indėlių kurių suma viršija 1000 eur. ${indeliuSk}`);

console.log(`3 uždavinys`);
let lankymas = [64, 32, 30, 28, 26, 16, 8, 4, 2, 1];

console.log(`Lankomumo duomenys išdėstyti mažėjimo tvarka ${lankymas}`);

console.log(`4 uždavinys`);
let kartoteka = [64, 32, 30, 28, 26, 16, 8, 4, 2, 1];
for (let i = 0; i < kartoteka.length; i++) {
    if (i % 2 == 0) {
        kartoteka[i] = kartoteka[i] + i;
    }
}

console.log(`Kartoteka: ${kartoteka}`);

console.log(`5 uždavinys`);
let mokiniai = [[4, 5, 6], [10, 10, 10], [7, 6, 10]];
let vidurkiai = [];
for (let i = 0; i < mokiniai.length; i++) {
    let pazymiai = mokiniai[i];
    let sum = 0;
    for (let j = 0; j < pazymiai.length; j++) {
        sum = sum + pazymiai[j];
    }
    vidurkiai[i] = (sum / pazymiai.length).toFixed(2);
}

console.log(`Mokinių vidurkiai ${vidurkiai}`);
