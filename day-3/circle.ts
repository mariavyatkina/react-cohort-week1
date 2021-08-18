/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
​
 Complete the following functions and add function param and return type annotations
 */
const radius = 5;

 function getArea(radius: number): number{
     return Math.pow(radius, 2)*Math.PI;

 }

 function getDiameter(radius: number): number{
     return radius * 2;

 }

 function getCircumference(radius: number): number{
     return Math.PI * getDiameter(radius);

 }

 console.log(`Circle with a radius of ${radius} has an area of ${getArea(radius)}, a diameter of ${getDiameter(radius)}, and a circumfrence of ${getCircumference(radius)}`);