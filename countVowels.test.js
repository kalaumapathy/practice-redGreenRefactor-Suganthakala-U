const countVowels = require("./countVowels");

describe("countVowels()", () => {

    test("counts vowels in hello", () => {
        expect(countVowels("hello")).toBe(2);
    });

});