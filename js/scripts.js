var a = prompt('Enter base of triangle'),
    h = prompt('Enter height of triangle');

var triangleArea = a * h / 2; //triangle area calculation

if (triangleArea == NaN) {
  console.log('Triangle parameters were wrong');
} else if (triangleArea == 0) {
  console.log('Triangle field is equal to: ' + 0 + ' Triangle parameters were wrong');
} else {
  console.log('Triangle field with base a: ' + a + ' and height h: ' + h
+ ' is equal to:     ' + triangleArea);
}

