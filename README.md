# yolo coordinates

![yolo-coords](https://github.com/epomatti/yolo-coords/workflows/yolo-coords/badge.svg) [![codecov](https://codecov.io/gh/epomatti/yolo-coords/branch/master/graph/badge.svg)](https://codecov.io/gh/epomatti/yolo-coords)

A tiny lib to get yolo coordinates (also called labels or annotations) from the .txt file as an array.


```js

/*
* Sample ".txt" file:
*
* 15 0.235185 0.381657 0.396296 0.727811
* 16 0.785185 0.420118 0.385185 0.828402
*/

const coords = require('yolo-coords')
const array = coords('16', 'sample.txt')
console.log(array)

// output
[ '0.785185', '0.420118', '0.385185', '0.828402' ]
```