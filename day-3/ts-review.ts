
function hello(name: string, isSunny: boolean){
    if(!isSunny){
    return `Hi, ${name}!`;
    }
    return `Hi, ${name}! It is sunny out today`
}
console.log(hello("Masha", true));

