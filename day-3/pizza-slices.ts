/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
  -
 |_|
 ​
 */
 function drawSmallPizzaSlice() {

    return " -" + "\n" + "|_|";

}
/**
 * Draw a length 1 width 2 pizza slice
 * Medium - Length 1 width 2:
  
   --
  |__|
 *
 */
function drawMediumPizzaSlice() {
    return " --" + "\n" + "|__|";
}
/**
 *
 * Draws a length 2 width 2 pizza slice
 * @returns {string}
 * Length 2 width 2:
  
   --
  | .|
  |__|
 ​
 */
function drawLargePizzaSlice() {
    return " --" + "\n" + "|  |" + "\n" + "|__|";
}
/**
 * @param {string} sliceSize
 *                 size of slice - "small", "medium", "large"
 * @return {string}
 *         Returns a string which is a "drawing" of the slice. Examples
 *
 * Small - Length 1 width 1:
   -
  |_|
 ​
 *
 * Medium - Length 1 width 2:
  
   --
  |__|
 *
 ​
 *
 * Large - Length 2 width 2:
 *
  
   --
  | .|
  |__|
 ​
 */
function drawAnyPizzaSlice(sliceSize: string) {
    if (sliceSize === "small") {
        return drawSmallPizzaSlice();
    } else if (sliceSize === "medium") {
        return drawMediumPizzaSlice();
    } else if (sliceSize === "large") {
        return drawLargePizzaSlice();
    } else {
        return "Wrong input. Unable to draw a slice";
    }

}
// console.log(drawSmallPizzaSlice());
// console.log(drawMediumPizzaSlice());
// console.log(drawLargePizzaSlice());
console.log(drawAnyPizzaSlice("largew"));