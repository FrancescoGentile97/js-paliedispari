const choose = prompt("Scegli \"pari\" o \"dispari\"");
console.log(choose);
const chooseNum = prompt("Inserisci un numero da 1 a 5");
console.log("User Number: " + chooseNum);

if ((choose !== "pari" && choose !== "Dispari")) {
    alert("La parola inserita non è corretta.");
} else if (isNaN(chooseNum) || chooseNum < 1 || chooseNum > 5) {
    alert("Inserisci un numero valido.");
}

const userNum = parseInt(chooseNum);
const iaNum = parseInt(pcNum(1, 5));
let result = userNum + iaNum;
console.log(result);

function pcNum(min, max) {
    const randomNum = Math.floor(Math.random() * (1 + max - min)) + min;
    console.log("Pc Nunmber: " + randomNum);
    return randomNum;
}

function chooseResult() {
    if (result % 2 === 0) {
        return true;
    }
}

if (chooseResult(result) === true) {
    if (choiseEvOd == "pari") {
        alert(`Il numer è pari (${result}), hai vinto.`);
    }
} else {
    alert(`Il numero è dispari (${result}), hai perso.`);
}