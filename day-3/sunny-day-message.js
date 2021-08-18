var SUNNY_DAY_MESSAGE = "It is sunny out today!";
var isSunny = true;
var numberSunnyDays = 3;
function sunnyDayMessage(isSunny, numberSunnyDays) {
    if (isSunny) {
        return "Hi! " + SUNNY_DAY_MESSAGE + " It has been sunny for " + numberSunnyDays + (numberSunnyDays != 1 ? " days in a row." : " day in a row");
    }
    return "It is not sunny today";
}
console.log(sunnyDayMessage(isSunny, numberSunnyDays));
