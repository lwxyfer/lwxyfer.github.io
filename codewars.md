##CodeWars练习与笔记
记录一些有趣的问题，好玩的问题。
<hr>

####1. Description:

You must create a function, `spread`, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

```javascript
spread(someFunction, [1, true, "Foo", "bar"] )
// is the same as...
someFunction(1, true, "Foo", "bar")
```
solve:
```javascript
function spread(func, args) {
    return func.apply(null, args);
}
```
konwledge:

https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply   MDN
Function.prototype.apply()

syntax:

``fun.apply(thisArg[, argsArray])``

####2.运算符用法

```javascript
return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
```
三元运算符扩展  ` con0 ?  res0 : con1 ? res1 : res2;`

关于运算符的嵌套与扩展

####3.Description:

You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

solution:
```javascript
function isValidWalk(walk) {
  var dx = 0
  var dy = 0
  var dt = walk.length

  for (var i = 0; i < walk.length; i++) {
    switch (walk[i]) {
      case 'n': dy--; break
      case 's': dy++; break
      case 'w': dx--; break
      case 'e': dx++; break
    }
  }

  return dt === 10 && dx === 0 && dy === 0
}
```

这题有点意思，开始没反应过来，原点与坐标轴。
上面解法最简单了，还很多有趣的在：
http://www.codewars.com/kata/take-a-ten-minute-walk/solutions/javascript

####4.Description:

In this kata, you should calculate type of triangle with three given sides a, b and c (given in any order).

- If all angles are less than 90°, this triangle is acute and function should return 1.

- If one angle is strictly 90°, this triangle is right and function should return 2.

- If one angle more than 90°, this triangle is obtuse and function should return 3.

- If three sides cannot form triangle, or one angle is 180° (which turns triangle into segment) - function should return 0.

Input parameters are sides of given triangle. All input values are non-negative floating point or integer numbers (or both).

Obtuse
Examples:
```javascript
triangleType(2, 4, 6); // return 0 (Not triangle)
triangleType(8, 5, 7); // return 1 (Acute, angles are approx. 82°, 38° and 60°)
triangleType(3, 4, 5); // return 2 (Right, angles are approx. 37°, 53° and exactly 90°)
triangleType(7, 12, 8); // return 3 (Obtuse, angles are approx. 34°, 106° and 40°)
```

刚开始绕了一个圈子，本来对的，又错了，使用三元只是获得了最大值，还是要用数组的`sort()`来排序。
然后我使用`arguments.sort()`来排序，这是一个错误，arguments是一个类数组对象，不是数组，所以不能用`sort()方法`
可以用`[a,b,c].sort()`,而我又创建新的数组，就变得麻烦了。

#####solution:
```javascript
function triangleType(a, b, c){
  var cmp, sides = [a, b, c].sort(function (a, b) { return a - b });
  a = sides[0]; b = sides[1]; c = sides[2];
  if (a && a + b > c) {
    cmp = a * a + b * b - c * c;
    if (cmp > 0) return 1;
    if (cmp == 0) return 2;
    if (cmp < 0) return 3;
  }
  return 0;
}
```
codewars:http://www.codewars.com/kata/53907ac3cd51b69f790006c5/solutions/javascript

MDN : https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments

####5.Description:

You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work regardless of how many numbers the zoo has in total.

Write the function findNumber(array) that takes an array of numbers. The numbers will be unsorted values between 1 and one more than the length of the array. No values will be repeated within the array. Return the number that is missing.

Examples:

findNumber( [1,3] ) => 2

findNumber( [2,3,4] ) => 1

findNumber( [13,11,10,3,2,1,4,5,6,9,7,8] ) => 12

此题比较简单，但一个好方法才是重要的啦。

#####solution：

```javascript
function findNumber(arr) {
  for(var i = 1; i < arr.length+1; i+=1){
    if(arr.indexOf(i) < 0) return i;
  }
}
```

indexOF()方法。

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
####6.Description:
http://www.codewars.com/kata/christmas-tree/solutions?show-solutions=1

Create a function christmasTree(height) that returns a christmas tree of the correct height

christmasTree(5) should return:
```
-
    *
   ***
  *****  
 *******
*********
```
Height passed is always an integer between 0 and 100.

Use \n for newlines between each line.

Pad with spaces so each line is the same length. The last line having only stars, no spaces.
#####solution:
```javascript
function christmasTree(height) {
  var tree = [];
  for(var i = 1; i <= height; i++) {
    tree.push(" ".repeat(height - i) + "*".repeat((i - 1) * 2 + 1) + " ".repeat(height - i));
  }
  return tree.join("\n");
}

String.prototype.repeat = function(n)
{
    return new Array(n+1).join(this);
}
```
此方法使用了str.repeat(count)
注意这里的String.prototype.repeat  属于ECMAScrip 6新增的。
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
此方法直接把所有的'\*'和空格都放到一个数字，然后数组的`join()`输出tree。
还是是push的利用。
