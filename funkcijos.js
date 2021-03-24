console.log(`Funkcijos`);
console.log(`1 uždavinys`);
let b = 5;
let n = 2;
let m1 = 10;
let m2 = 20;

function dviejuBendrasSvoris(m1, m2) {
    return m1 + m2;
}

let dviejuBagazuBendrasSvoris = dviejuBendrasSvoris(m1, m2);
console.log(`Bendras svoris: ${dviejuBagazuBendrasSvoris}`);

function bendraSuma(bendrasSvoris, b) {
    return bendrasSvoris * b;
}

console.log(`Bendra suma: ${bendraSuma(dviejuBagazuBendrasSvoris, b)}`);

let vidutinisSvoris = dviejuBagazuBendrasSvoris / n;

console.log(`Vidutinis svoris: ${vidutinisSvoris}`);

console.log(`1 b uždavinys`);
let svoriai = [m1, m2];


function kiekDaugiauUz10(svoriai) {
    let daugiauUz10 = 0;

    svoriai.forEach((svoris) => {
        if (svoris > 10) {
            daugiauUz10++;
        }
    });
    return daugiauUz10;
}

console.log(`Bagažas kuris sveria daugiau nei 10kg: ${kiekDaugiauUz10(svoriai)}`);

console.log(`1 c uždavinys`);

svoriai = [m1, m2, 4, 110, 7, 15];

function bendrasSvoris2(svoriai) {
    let bendrasSvoris = 0;
    svoriai.forEach((svoris) => {
        bendrasSvoris = bendrasSvoris + svoris;
    });
    return bendrasSvoris;
}

let bendrasSvoris = bendrasSvoris2(svoriai);
console.log(`Visų svoris: ${bendrasSvoris}`);
console.log(`Kaina: ${bendraSuma(bendrasSvoris, b)}`);

console.log(`Vidurkis: ${(bendrasSvoris / svoriai.length).toFixed(2)}`);

console.log(`Bagažas kuris sveria daugiau nei 10 kg: ${kiekDaugiauUz10(svoriai)}`);

console.log(`2 uždavinys`);

let dalyviai = [7, 6, 6];

function uzdaviniuSuma(dalyviai) {
    let suma = 0;
    dalyviai.forEach((uzdaviniai) => {
        suma = suma + uzdaviniai;
    });

    return suma;
}

let suma = uzdaviniuSuma(dalyviai);
console.log(`${dalyviai.length} olimpiadoje dalyvave programuotojai išsprendė ${suma} uždavinių.`);


console.log(`3 uždavinys`);
let minutes = [18, 10, 10];

function bendrosMinutes(minutes) {
    let suma = 0;
    minutes.forEach((min) => {
        suma = suma + min;
    });
    return suma;
}

let minuciuSuma = bendrosMinutes(minutes);
console.log(minuciuSuma);

let v = minuciuSuma / minutes.length;
console.log(v.toFixed(2));

let ilgiauNei20 = 0;

minutes.forEach((min) => {
    if (min > 20) {
        ilgiauNei20++;
    }
});
console.log(`Ilgiau nei 20: ${ilgiauNei20}`);

console.log(`4 uždavinys`);
let keleiviai = [17, 25, 20];
let sugaistasLaikasValandos = [1, 2, 1];
let sugaistasLaikasMinutes = [50, 5, 55];

function visiKeleiviai(keleiviai) {
    let keleiviuSkaicius = 0;
    let autobusuSkaicius = 0;
    for (let i = 0; i < keleiviai.length; i++) {
        keleiviuSkaicius = keleiviuSkaicius + keleiviai[i];
        if (keleiviai[i] < 10) {
            autobusuSkaicius++;
        }
    }
    console.log(`Iš Vilniaus į Panevėžį pervežta ${keleiviuSkaicius} keleivių.`);
    console.log(`${autobusuSkaicius} autobuse važiavo mažiau nei 10 keleivių.`);
}

visiKeleiviai(keleiviai);

function kelionesLaikas(valandos, minutes) {
    let laikas = 0;
    for (let i = 0; i < minutes.length; i++) {
        laikas = laikas + minutes[i];
    }
    for (let i = 0; i < valandos.length; i++) {
        laikas = laikas + valandos[i] * 60;
    }
    console.log(`Vidutiniškai vienas autobusas sugaišta ${(laikas / valandos.length).toFixed(0)} min.`);
};

kelionesLaikas(sugaistasLaikasValandos, sugaistasLaikasMinutes);

console.log(`5 uždavinys`);

let pirmaDienaPrinoko = 4;
let kiekvienaKitaDienaPrinoko = 5;
let dienos = 3;

function braskes(pirmaDienaPrinoko, kiekvienaKitaDienaPrinoko, dienos) {
    let braskesIsViso = 0;
    for (let i = 1; i <= dienos; i++) {
        for (let j = pirmaDienaPrinoko; j <= pirmaDienaPrinoko + kiekvienaKitaDienaPrinoko; j++) {
            j = j + kiekvienaKitaDienaPrinoko;
            braskesIsViso += j;
        }
    }
    console.log(`Per ${dienos} dienas prinoko ${braskesIsViso} braškės.`);
};

braskes(pirmaDienaPrinoko, kiekvienaKitaDienaPrinoko, dienos);

console.log(`6 uždavinys`);

let intervaloPradzia = 31;
let intervaloPabaiga = 62;

function leduPorcijos(intervaloPradzia, intervaloPabaiga) {
    kiekReikiaLedu = 0;
    for (let i = intervaloPradzia; i <= intervaloPabaiga; i++) {
        if (i % 6 == 0) {
            kiekReikiaLedu++;
        }
    }
    console.log(`Reikalingas porcijų skaičius: ${kiekReikiaLedu}`);
}

leduPorcijos(intervaloPradzia, intervaloPabaiga);

console.log(`7 uždavinys`);
let knygosSkyriai = 17;
function tadasSkaito(knygosSkyriai) {
    let dienosIsViso = 0;
    let i = 0;
    while (i < knygosSkyriai) {
        if (i ==0) {
            i = 1;
            dienosIsViso++;
        } else {
            i = i + i;
            dienosIsViso++;
        }

    }
    console.log(`Tadas visą knygą perskaitys per ${dienosIsViso} dienas(-ų). Tadas vidutiniškai per dieną perskaitė ${(knygosSkyriai / dienosIsViso).toFixed(2)} skyrius(-ų).`);
}

tadasSkaito(knygosSkyriai);
