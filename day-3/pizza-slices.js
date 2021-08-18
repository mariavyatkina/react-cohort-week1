var getSliceSize = function (sliceSize) {
    if (sliceSize === "small") {
        return drawSmallPizzaSlice();
    }
    else if (sliceSize === "medium") {
        return drawMediumPizzaSlice();
    }
    else if (sliceSize === "large") {
        return drawLargePizzaSlice();
    }
    else {
        throw new Error("Wrong input. Unable to draw a slice");
    }
};
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
function drawAnyPizzaSlice(sliceSize) {
    return getSliceSize(sliceSize);
}
function drawAnyPizzaSlice2(width, length) {
    var slice = " ";
    for (var i = 0; i < width; i++) {
        slice += "-";
    }
    slice += "\n";
    // space variable represents a line in a 
    //piece of pizza that look like "|   |"
    // bottom variable represent the crust
    var space = "|", bottom = "|";
    for (var i = 0; i < width; i++) {
        space += " ";
        bottom += "_";
    }
    space += "|";
    bottom += "|";
    for (var i = 0; i < length - 1; i++) {
        slice += space + "\n";
    }
    slice += bottom;
    return slice;
}
// console.log(drawSmallPizzaSlice());
// console.log(drawMediumPizzaSlice());
// console.log(drawLargePizzaSlice());
console.log(drawAnyPizzaSlice("large"));
console.log(drawAnyPizzaSlice2(5, 6));
