# yolo coordinates

A tiny lib to get yolo coordinates (also called labels or annotations) from the .txt file as an array.

Install:

```
npm i yolo-coords
```

Example `img1.txt` file:

```
15 0.235185 0.381657 0.396296 0.727811
16 0.785185 0.420118 0.385185 0.828402
```

Get the coordinates:

```js
const coords = require('yolo-coords')
const array = coords('16', 'sample.txt')
console.log(array)
```

Output:

```
[ '0.785185', '0.420118', '0.385185', '0.828402' ]
```