function hello(name, isSunny) {
    if (!isSunny) {
        return "Hi, " + name + "!";
    }
    return "Hi, " + name + "! It is sunny out today";
}
console.log(hello("Masha", true));
