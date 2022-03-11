const palindromes = function (str) {
    const cleanString = str.replace(/[^\w\s]|_/g, "") // \w is any digit, letter, or underscore \s is any whitespace [^\w\s] is anything that's not a digit, letter, whitespace, or underscore, then adds underscore back in
                                 .replace(/\s+/g, "") //replace any number of repeating whitespace with no space
                                 .toLowerCase(); //from https://stackoverflow.com/questions/4328500/how-can-i-strip-all-punctuation-from-a-string-in-javascript-using-regex (i understand regex but don't wanna write my own lol)

    return cleanString === cleanString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
