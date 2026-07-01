function countVowels(str) {

    if (typeof str !== "string") {
        return 0;
    }

    const vowels = "aeiou";
    let count = 0;

    for (const letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count;
}

module.exports = countVowels;