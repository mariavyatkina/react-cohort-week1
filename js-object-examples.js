const myObject = {
    a: "this is property a",
    mySecondObjectProperty: "my second property",
    "x": "the x key on my object",
    "2": "the number 2",
    3: "key that is 3"
}
console.log("my object", myObject);

const myInfo = {
    "name": "Maria",
    "birthday": 05172001,
    "citiesLivedIn": ["Syktyvkar", "Philadelphia"],
    "isHuman": true,
    "planetVisited": null,
    "personalInfo": { "favoriteFood": "pizza" }
}
console.log("My info as an object:  ", myInfo);
console.log("my info printed as a json string format");
const myInfoAsJSON = JSON.stringify(myInfo);
console.log(myInfoAsJSON);