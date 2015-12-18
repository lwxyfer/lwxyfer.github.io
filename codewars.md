##CodeWars练习与笔记
记录一些有趣的问题，好玩的问题。
<hr>

###1. Description:

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

###2.运算符用法

```javascript
return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
```
三元运算符扩展  ` con0 ?  res0 : con1 ? res1 : res2;`

关于运算符的嵌套与扩展

###3.Description:

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

###4.Description:

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

###solution:
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

###5.Description:

You're working in a number zoo, and it seems that one of the numbers has gone missing!

Zoo workers have no idea what number is missing, and are too incompetent to figure it out, so they're hiring you to do it for them.

In case the zoo loses another number, they want your program to work regardless of how many numbers the zoo has in total.

Write the function findNumber(array) that takes an array of numbers. The numbers will be unsorted values between 1 and one more than the length of the array. No values will be repeated within the array. Return the number that is missing.

Examples:

findNumber( [1,3] ) => 2

findNumber( [2,3,4] ) => 1

findNumber( [13,11,10,3,2,1,4,5,6,9,7,8] ) => 12

此题比较简单，但一个好方法才是重要的啦。

###solution：

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
###6.Description:

[http://www.codewars.com/kata/christmas-tree/solutions?show-solutions=1][1]

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
###solution:
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

###7.Description:

Take the following IPv4 address: 128.32.10.1 This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

  `ipToInt32("128.32.10.1") => 2149583361`

此题比较简单吧。主要是看别人clever的解法。
###solution：
```javascript
function ipToInt32(ip){
   return ip.split(".").reduce(function(int,v){ return int*256 + +v } )
}
```
1.reduce： https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
2.里面的 `+ +v `

###8.Description:
http://www.codewars.com/kata/525f50e3b73515a6db000b83/solutions/javascript

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

Example:
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) => returns "(123) 456-7890"

The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parenthese!

###solution：
此题感觉没啥重点的啦。不过主要是看别人的解法啦。
1.`String.prototype.substring()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring
还可以用： `String.prototype.substr()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substr
注意两者的区别！
```javascript
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') '
      + numbers.substring(3, 6)
      + '-'
      + numbers.substring(6);
}
```
2.看这个就感觉正则必须会啊
`String.prototype.replace()`
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
```javascript
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}
```
全部都是基本语法的熟练使用。

###9.Description:
http://www.codewars.com/kata/526571aae218b8ee490006f4/solutions/javascript

Write a function that takes an (unsigned) integer as input, and returns the number of bits that are equal to one in the binary representation of that number.

Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
###solution:
1.秒啊，秒啊。
```javascript
function countBits(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
}
```
2.
```javascript
var countBits = function(n)
{
  a = n.toString(2).match(/1/g);
  return a == null ? 0 : a.length;
};
```
3.我的
```javascript
var countBits = function(n) {
  var num = n.toString(2);
  var j = 0;
  for ( var i=0 ;i <num.length; i++) {
    if( num.charAt(i) == 1 ) {
      j = j+1;
    }
  }
  return j;
};
```
看到第一种解法，简直就是绝了。巧妙的利用操作符啊。
而第二种则是使用正则，属于普通的解法，但也是我喜欢的解法。
而看我的，是最普通的解法。按步骤一步步来。

经搜索此题比较出名，而且第一种做法通过不同语言得到普遍应用。

此题点：
1. 操作符，
2. 正则
3. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/toString

### 10.Description:

*************************************
----------


http://www.codewars.com/kata/can-you-keep-a-secret/solutions?show-solutions=1

There's no such thing as private properties on a javascript object! But, maybe there are?

Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
```javascript
getSecret() which returns the secret
setSecret() which sets the secret
var obj = createSecretHolder(5);
obj.getSecret(); // returns 5
obj.setSecret(2);
obj.getSecret(); // returns 2
```
### solution:
```javascript
function createSecretHolder(secret) {
  return {
    getSecret: function() { return secret; },
    setSecret: function(v) { secret = v; }
  };
}
```

从题看是对象的私有属性。
此题对我来说关键点比较多：
对象，函数，私有。

> `此题Mark`

### 11.Description:

**********************************
----------

http://www.codewars.com/kata/54e6533c92449cc251001667/solutions/javascript


Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:
```javascript
uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
```
### solution:
```javascript
var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}
```
上面是最简单的解法了。***正是非常需要学习的。***
一般解法与我自己的解法相似。
```javascript
var uniqueInOrder=function(it){
  if ( typeof it == "string" ) {
    var it = it.split("")
  }
  var arr = new Array();
  var j=0;
  for ( var i=0; i< it.length;i++) {
    if( it[i] !== it[i+1]) {
        arr[j] = it[i];
        j = j+1;
      }
  }
  return arr;
}
```
里面改为：`arr.push(it[i])`就更简洁了。

解法知识点：
***Array.prototype.filter()***：
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
***Function.prototype.call()***:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/call
重点在于理解`call`，这很关键，涉及函数的构造和调用，还有原型。这是我的梗。

> 此题Mark

### 12.Description:
http://www.codewars.com/kata/two-joggers/solutions?show-solutions=1

Two Joggers

Description

Bob and Charles are meeting for their weekly jogging tour. They both start at the same spot called "Start" and they each run a different lap, which may (or may not) vary in length. Since they know each other for a long time already, they both run at the exact same speed.

Illustration

Example where Charles (dashed line) runs a shorter lap than Bob:

<img src="http://www.haan.lu/files/7713/8338/6140/jogging.png">

Example laps

Task

Your job is to complete the function nbrOfLaps(x, y) that, given the length of the laps for Bob and Charles, finds the number of laps that each jogger has to complete before they meet each other again, at the same time, at the start.

The function takes two arguments:

The length of Bob's lap (larger than 0)
The length of Charles' lap (larger than 0)
The function should return an array containing exactly two numbers:

The first number is the number of laps that Bob has to run
The second number is the number of laps that Charles has to run
Examples

nbrOfLaps(5, 3); // returns [3, 5]
nbrOfLaps(4, 6); // returns [3, 2]

### solution:
```javascript
var nbrOfLaps = function(x, y) {
  var lcm = x;
  while(lcm % y != 0) {lcm += x;}
  return [lcm / x, lcm / y];
}
```
此题我没有想到写法。***我一直想找最小公约数，没有去想最小公倍数***。败笔。
看别人写的一起喝成，好啊。

### 13.Description:

简单说就是杨辉三角的问题，利用杨辉三角的性质就可做出来。

http://www.codewars.com/kata/52945ce49bb38560fe0001d9/solutions/javascript

Here you will create the classic pascal's triangle. Your function will be passed the depth of the triangle and you code has to return the corresponding pascal triangle upto that depth

The triangle should be returned as a nested array.

for example:

pascal(5) // should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
To build the triangle, start with a single 1 at the top, for each number in the next row you just take the two numbers above it and add them together (except for the edges, which are all "1"). eg

```javascript
    -
          [1]
        [1   1]
       [1  2  1]
      [1  3  3  1]
```
here you get the 3 by adding the 2 and 1 above it.

### solution:
```javascript
function pascal(depth) {
  var result = []
  for (var i = 1; i <= depth; ++i) {
    var row = []
    for (var j = 0; j < i; ++j) {
      row.push(j == 0 || j == i - 1 ? 1 : result[i-2][j-1] + result[i-2][j])
    }
    result.push(row)
  }
  return result
}
```
我的：
```javascript
function pascal(d) {
  if(d==1) return [[1]];
  var all= [[1]];
  for ( var i=1;i<d+1;i++) {
    var arr= [];
    for( var j=0;j<i;j++) {
       arr[j] = (all[i-1][j] ? all[i-1][j] : 0 )+ (all[i-1][j-1] ? all[i-1][j-1] : 0 );
      }
    all[i]=arr;  
  }
  return all.slice(1)  
}
```
先设置了all=[[1]];所以最后要减去第一个，就少了中间的处理步骤。

### 14.Description:

http://www.codewars.com/kata/formatting-a-number-as-price/solutions/javascript

Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number。

### solution:
```javascript
var numberToPrice = function(n) {
  return typeof n != 'number' ? 'NaN' : n.toFixed(3).replace(/\d$/, '').replace(/(\d)(?=(?:\d{3})+\.)/g, '$1,')
}
```
主要关心点是在正则表达式上，说来就是我的错。一直没把正则搞好。

### 15.Description:

http://www.codewars.com/kata/52223df9e8f98c7aa7000062/solutions/javascript

How can you tell an extrovert from an introvert at NSA? Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it? According to Wikipedia, ROT13 (http://en.wikipedia.org/wiki/ROT13) is frequently used to obfuscate jokes on USENET.

Hint: For this task you're only supposed to substitue characters. Not spaces, punctuation, numbers etc. Test examples:

Test.expect(rot13("EBG13 rknzcyr.") == "ROT13 example.");
Test.expect(rot13("This is my first ROT13 excercise!") == "Guvf vf zl svefg EBG13 rkprepvfr!")

### solution：
```javascript
我的解决方法：
function rot13(str) {
    var one = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
        two = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm".split(""),
        th  = str.split("");
    for(var i=0;i<th.length;i++) {
      (one.indexOf(th[i]) !=-1) ? th[i]=two[one.indexOf(th[i])] : th[i] = th[i] ;
    }
    return th.join("");
}
最简洁：
function rot13(str) {
  return str.replace(/[a-z]/ig, function(x){
    return String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13));
  });
}
```
https://en.wikipedia.org/wiki/ROT13
嗯，主要还看别人的，学习学习。
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/fromCharCode
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt


### 16.Description:
http://www.codewars.com/kata/advanced-pig-latin/solutions?show-solutions=1

Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"
If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"
This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.

### solution：
```javascript
function translate(sentence) {
  return sentence.replace(/\b([bcdfghjklmnpqrstvwxyz]*)(\w+)\b/gi, function(_, first, rest) {
    if (first) {
      if (first[0] == first[0].toUpperCase()) rest = rest[0].toUpperCase() + rest.slice(1)
    } else {
      first = 'w'
    }

    return rest + first.toLowerCase() + 'ay'
  })
};
```
这种一看只有正则是最简单的方法来做。
从中看出我对正则的不熟悉，还有js的正则方法，replace里的function里的参数，这里三个参数，分别代表匹配的什么。

**/\b([^aeiou]*)(\w+)\b/gi might be much shorter. Excellent solution though. ***

### 17:Description:
http://www.codewars.com/kata/514a024011ea4fb54200004b/solutions/javascript

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

### solution:
参考：http://segmentfault.com/q/1010000003021002/a-1020000003021242

还是正则表达式。正则啊。多练习才行。

### 18：Description:

Create a function named interleave, that accepts an arbitrary number of array arguments and returns a single array. The function should always return an array and the returned array should be generated by alternately appending elements from the passed in arrays. If one list is shorter than the others, the result should be null padded. No modifications should be made to the passed in arguments.

Example:

```javascript
interleave([1, 2, 3], ['c', 'd', 'e']) // should return [1, 'c', 2, 'd', 3, 'e']
interleave([1, 2, 3], [4, 5]) // should return [1,4,2,5,3,null]
interleave([1, 2, 3], [4, 5, 6], [7, 8, 9]) // should return [1, 4, 7, 2, 5, 8, 3, 6, 9]
interleave([]) // should return []
```
### solution:
```javascript
function interleave() {
  var outRay = [];
  arguments = Array.prototype.slice.call(arguments);

  for (var x=0; arguments[0] && x < arguments[0].length; x++ ) {
    arguments.forEach( function(y) {
      outRay.push( y[x] );
    });
  }

  return outRay;
}
```
这就是优雅的代码。感觉一气呵成。
重点：
1. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
function.prototype.call()
2. 有一点注意的是在for循环里的函数的`X`的传入。https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
3. https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
slice method can also be called to convert Array-like objects / collections to a new Array. You just bind the method to the object. The arguments inside a function is an example of an 'array-like object'. 类数组对象 和 集合。

### 19：Description:

http://www.codewars.com/kata/525f039017c7cd0e1a000a26/solutions/javascript/me/best_practice

Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes and 43, 194, 4773 are not palindromes.

Write a method palindrome_chain_length which takes a positive number and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.

If the input number is already a palindrome, the number of steps is 0.

Input will always be a positive integer.

For example, start with 87:

`87 + 78 = 165; 165 + 561 = 726; 726 + 627 = 1353; 1353 + 3531 = 4884`

4884 is a palindrome and we needed 4 steps to obtain it, so `palindrome_chain_length(87) == 4`

### solution:
```javascript
var palindromeChainLength = function(n) {
    var a=0;
    (function xx() {
    var k= Number(n.toString().split("").reverse().join(""));
    if( n!=k) {
      a+=1;
      n= k+n;
      xx(n);
    } else {
      return a;
    }
    })(n);
    return a
};
```
我觉得自己写的还算好的了。
成功应用了string、array、number的方法。
对于闭包和递归函数的使用。好吧，还有很多要学的。
```javascript
function palindromeChainLength(n) {
  var count = 0, rev = 0;
  while(n != (rev = parseInt(n.toString().split('').reverse().join('')))) {
    n += rev;
    count++;
  }
  return count;
};
```
好久没用过while循环啦。
这才是大神写的嘛。


### 20：Description:

Write a program that will calculate the number of trailing zeros in a factorial of a given number.
```
N! = 1 * 2 * 3 * 4 ... N

zeros(12) = 2 # 1 * 2 * 3 .. 12 = 479001600
```
that has 2 trailing zeros 4790016(00)
Be careful 1000! has length of 2568 digital numbers.

### solution:
```javascript
function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}
```
这提很有意思。基本的题吧，然而我没有想出来。考的是数学吧。
有2即有5，有2和5，即有10.

### 21：Description:
http://www.codewars.com/kata/did-i-finish-my-sudoku/solutions?show-solutions=1

Write a function done_or_not passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'

Sudoku rules:

Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.

Rows:



There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.

In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.

Columns:



There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.

In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.

Regions



A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.

Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.

In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.

Valid board example:
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/364px-Sudoku-by-L2G-20050714_solution.svg.png">


For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/
### solution
```javascript
//我的解决办法，只完成一半。没有想到好的解决小九宫格里的问题。
function doneOrNot(board){
  var same =function(arr) {
    var a=[];
    for(var i=0;i<arr.length;i++) {
      if( a.indexOf(arr[i])==-1) {
        a.push(arr[i])
        } else {
        return 0;
        }
     }
   };
   var c=[],d=[];
   for(var j=0;j<9;j++) {
     if( same(board[j]) ==0 ) return "Try again!";
     for(var k=0;k<9;k++) {
       var col=c.push(board[k][j]);
       if( same(col)==0) return "Try again!";
       }
   }
     return "Finished!"
}
```
正则大法好
```javascript
function doneOrNot(a) {
  return /[^1-9;]|\d{10,}|(\d)(\d*|(.{10})*.{9})\1/.test(a = a.join(";").replace(/,/g, "")) ||
    /(\d)(?=((\d*,){3})*\d*\1)/.test(a.replace(/\B(?=(\d{3})+\b)|;(?!(.{30})*.{29}$)/g, ","))
    ? "Try again!" : "Finished!";
}
```
这题的解决办法还是看网站吧，只能说真是聪明啊。
还是选个简单的解读下吧。
```javascript
function doneOrNot(board) {
  var i, j, flipped = [], blocks = [];

  function validArray(array) { return array.slice().sort().join('') === "123456789";  }

  for (i = 0; i < 9; i++) {
    flipped[i] = []; blocks[i] = [];
    for (j = 0; j < 9; j++) {
      flipped[i][j] = board[j][i];
      blocks[i][j] = board[3*(i%3) + (j/3|0)][j%3 + 3*(i/3|0)];
    }
  }
  return board.every(validArray) && flipped.every(validArray) && blocks.every(validArray) ? 'Finished!' : 'Try again!';
}
```
上面循环写的，简直漂亮


### 22:Description:

http://www.codewars.com/kata/52f4261c95d6bff39a003096/solutions/javascript

Given an unsorted array of integer values, find the maximum positive sum of any contiguous range within the array.

An array containing only negative values can return 0. Your solution should be efficient enough to not throw a timeout exception.

Example:

maxContiguousSum([3, -4, 8, 7, -10, 19, -3]); // returns 24
maxContiguousSum([-8, -10, -12, -2, -3, 5]); // returns 5
Visual example:
```
[3, -4, 8, 7, -10, 19, -3]
       |_____________|
             ||
             \/
             24
```

### solution:
```javascript
function maxContiguousSum (arr) {
  var max = 0, sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum
    }
    if (sum < 0 ) {
      sum = 0;
    }
  }
  return max;
}
```
有时候我忽略了很重要的东西：就如函数式编程一样，注重的是what to do，我们要的是结果，give me the correct answer. AS such examples, I need more. I should code more.

### 23：Description:
http://www.codewars.com/kata/least-common-multiple/solutions/javascript?show-solutions=1
Write a function that calculates the least common multiple of its arguments; each argument is assumed to be a non-negative integer.
简单说就是求最小公倍数。

### solution:
```javascript
var lcm = function () {
  function gcd(a,b) {
    if (a == 0) return b;
    return gcd(b%a, a);
  }
  return Array.prototype.slice.apply(arguments).reduce(function(a,b) {return a*b / gcd(a,b);}, 1);
};
```
