/*

Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true

*/
const greetingWords = ["hello", "hi", "hey"];
const prefixes = ["my", "his", "her", "their"];

//Possible values of "gender"
//argument are "male", "female", "nonbinary"
/*
/**
 @param {string} name
        name of person
 @parm  {string} gender
 @param {boolean} isSelf
 @returns {string}
          greeting sentence
*/
function greeting(name, gender, isSelf) {
    //variables for the correct pronoun and the greeting word
    var pronoun, greetingWord;

    //conditional statements to determine what pronoun and greeting word to use 
    if (gender === "male") {
        pronoun = prefixes[1];
        greetingWord = greetingWords[0];
    } else if (gender === "female") {
        pronoun = prefixes[2];
        greetingWord = greetingWords[1];
    } else {
        pronoun = prefixes[3];
        greetingWord = greetingWords[2];
    }
    if (isSelf)
        pronoun = prefixes[0];

    //capitalization of the first letter of the greeting word
    greetingWord = greetingWord.charAt(0).toUpperCase() + greetingWord.slice(1);
    return `${greetingWord}, ${pronoun} name is ${name}`;

}
console.log(greeting("Elizabeth", "nonbinary", false));