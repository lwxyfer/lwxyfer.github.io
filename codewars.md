##CodeWars练习与笔记
记录一些有趣的问题，好玩的问题。
<hr>

1. Description:

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

 2.运算符用法

```javascript
return result > 0 ? "Battle Result: Good triumphs over Evil" :
         result < 0 ? "Battle Result: Evil eradicates all trace of Good" :
                      "Battle Result: No victor on this battle field";
```
三元运算符扩展  ` con0 ?  res0 : con1 ? res1 : res2;`
