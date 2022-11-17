const word = prompt("Inserisci una parola.");
console.log(word);

const wordChoose = wordRev(word);

function wordRev(wordReverse) {
    const wordResult = wordReverse.split("").reverse("").join("");
    return wordResult;
}

if (word === wordChoose) {
    alert(`La parola ${word} è palindroma`);
} else {
    alert(`La parola ${word} non è palindroma`);
}