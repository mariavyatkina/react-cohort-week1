
const SUNNY_DAY_MESSAGE =  "It is sunny out today!";
let isSunny = true;
let numberSunnyDays = 3;

function sunnyDayMessage(isSunny: boolean, numberSunnyDays: number): string{
    if(isSunny){
        return `Hi! ${SUNNY_DAY_MESSAGE} It has been sunny for ${numberSunnyDays}`+ (numberSunnyDays != 1? ` days in a row.` : ` day in a row`);
    }
     return "It is not sunny today";
 }

 console.log(sunnyDayMessage(isSunny, numberSunnyDays));