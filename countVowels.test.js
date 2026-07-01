const countVowels = require("./countVowels");

describe("countVowels()", () => {

    test("hello → 2 vowels", () => {
        expect(countVowels("hello")).toBe(2);
    });

    test("world → 1 vowel", () => {
        expect(countVowels("world")).toBe(1);
    });

    test("empty string → 0", () => {
        expect(countVowels("")).toBe(0);
    });

    test("AEIOU → 5 vowels", () => {
        expect(countVowels("AEIOU")).toBe(5);
    });

    test("bcdfg → 0 vowels", () => {
        expect(countVowels("bcdfg")).toBe(0);
    });

    test("OpenAI → 4 vowels", () => {
        expect(countVowels("OpenAI")).toBe(4);
    });

});