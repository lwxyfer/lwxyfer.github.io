>本文将理清出于css选择器 、选择器的优先级、效率
更多是关于 DOM树，CSS是怎么工作的。

https://developer.mozilla.org/en-US/Learn/CSS/Introduction_to_CSS/How_CSS_works  	HOW css works


http://www.w3cplus.com/css/css-selector-performance
http://blog.jobbole.com/35339/
http://stackoverflow.com/questions/5797014/why-do-browsers-match-CSS-selectors-from-right-to-left
http://www.jianshu.com/p/268c7f3dd7a6

# QAQ

是先把


# CSS Work

https://developer.mozilla.org/en-US/Learn/CSS/Introduction_to_CSS/How_CSS_works

![enter image description here](https://mdn.mozillademos.org/files/11781/rendering.svg)

1. The browser converts HTML and CSS into the DOM (Document Object Model). The DOM represents the document in the computer's memory. It combines the document's content with its style.
2. The browser displays the contents of the DOM.

## 完整的渲染过程

 Load HTML -> Parse HTML -> 浏览器解析时，遇到link就下载css ，css也会及进入解析状态 -> 解析完获得DOM  -> 然后应用解析完后的CSS 和 HTML 的内容到DOM 上 ->  The browser displays the contents of the DOM. 

文本节点，属性节点，元素节点

分清楚 HTML 和 DOM ，明白浏览器呈现的是什么。

对于JS来说，肯定会影响加载，window.onload()

# CSS Selector

首先是CSS选择器部分.

记住重要的一些就可以了 。

## 匹配原理

浏览器CSS匹配不是从左到右进行查找，而是从右到左进行查找。比如`DIV#divBox p span.red{color:red;}`，浏览器的查找顺序如下：

先查找html中所有class='red'的span元素，找到后，再查找其父辈元素中是否有p元素，再判断p的父元素中是否有id为divBox的div元素，如果都存在则匹配上。

浏览器从右到左进行查找的好处是为了尽早过滤掉一些无关的样式规则和元素。比如如下html和css:
```
<style> 
   DIV#divBox p span.red{color:red;}
<style>
<body>
  <div id="divBox">
      <p><span>s1</span></p>
      <p><span>s2</span></p>
      <p><span>s3</span></p>
      <p><span class='red'>s4</span></p>
  </div>
</body>
```
如果按从左到右查找，哪会先查找到很多不相关的p和span元素。而如果按从左到右的方式进行查找，则首先就查找到的元素。Firefox称这种查找方式为`key selector`（关键字查询），所谓的关键字就是样式规则中最后（最右边）的规则，上面的key就是span.red。

## 简洁、高效的CSS

所谓高效的CSS就是让浏览器在查找style匹配的元素的时候尽量进行少的查找，下面列出一些我们常见的写CSS犯的一些低效错误：

### 尽量少使用层级关系

一般写法：#divBox p .red{color:red;}
更好写法：.red{..}

### 不要在ID选择器前使用标签名

一般写法：DIV#divBox
更好写法：#divBox
解释： 因为ID选择器是唯一的，加上div反而增加不必要的匹配。

### 使用class代替层级关系

一般写法：#divBox ul li a{display:block;}
更好写法：.block{display:block;}

### 不要在class选择器前使用标签名

一般写法：span.red
更好写法：.red
解释： 同第一条，但如果你定义了多个.red，而且在不同的元素下是样式不一样，则不能去掉，比如你css文件中定义如下：

   p.red{color:red;}
   span.red{color:#ff00ff}
如果是这样定义的就不要去掉，去掉后就会混淆，不过建议最好不要这样写。 

## 关于图片加载

对于 
```
display:none;
visibility:hidden;
```
就上面两种情况而言： IMG标签都会加载图片 ; css内`background:url()` 都会加载图片。但是firefox 对于使用 `display:none` 下背景图片不会加载。。

css 选择器匹配不到的元素： 测试的浏览器都不会加载图片 。

Example  :  http://lwxyfer.github.io/demoList/none-hidden.html

