class Test {
    constructor(imie, procent) {
        this.imie = imie;
        this.procent = procent;
    }
}

let tests = new Map();

function addTestResult(imie, wynik) {
    tests.set(imie, new Test(imie, wynik));
}

function getLowestGrade() {
    const Nnizszy = [...tests.values()].reduce((min, test) => test.procent < min ? test.procent : min, 101); 
    return Nnizszy === 101 ? null : Nnizszy;
}

function getHighestGrade() {
    const Nwyzszy = [...tests.values()].reduce((max, test) => test.procent > max ? test.procent : max, -1);
    return Nwyzszy === -1 ? null : Nwyzszy;
}

function getAverageGrade() {
    const suma = [...tests.values()].reduce((sum, test) => sum + test.procent, 0);
    return Math.round(suma / tests.size);
}

addTestResult("Yaqub Qamar Ad-Din Dibiazah", 90);
addTestResult("Khalid Kashimiri", 32);
addTestResult("Khidir Karawita", 89);

console.log(`Najniższy wynik: ${getLowestGrade()}%`);
console.log(`Najwyższy wynik: ${getHighestGrade()}%`);
console.log(`Średni wynik: ${getAverageGrade()}%`);
