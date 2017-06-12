var a = prompt('Enter base of triangle'),
    h = prompt('Enter height of triangle');

if ((isNaN(a) || isNaN(h)) || ((a <= 0) || (h <= 0))) {
  console.log('Triangle parameters were wrong'); //triangle parameters checking
} else {
  var triangleArea = a * h / 2;                  //triangle area calculation
  console.log(
    'Triangle field with base a: ' + a + ' and height h: ' + h 
    + ' is equal to: ' + triangleArea
    );
}