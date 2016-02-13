# HTML5 data attributes

HTML5 is designed with extensibility in mind for data that should be associated with a particular element but need not have any defined meaning. data-* attributes allow us to store extra information on standard, semantic HTML elements without other hacks such as classList, non-standard attributes, extra properties on DOM, or setUserData.

> Custom data attributes are intended to store custom data private to the page or application, for which there are no more appropriate attributes or elements.

Custom data attributes:

- are strings — you can store anything which can be string encoded, such as **JSON**. Type conversion must be handled in JavaScript.
- should only be used when no suitable HTML5 element or attribute exists.
- are private to the page. Unlike microformats, they should be ignored by external systems such as search engine indexing bots.

MDN简介：
https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_data_attributes

## 灵活使用data属性

```
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
...
</article>
```

JavaScript Access:
```
// First  the dataset API 
var article = document.getElementById('electriccars'); 
article.dataset.columns // "3"
article.dataset.indexNumber // "12314"
article.dataset.parent // "cars"
article.dataset.columns = "10";   // 设置，是字符串  

// Second    getAttribute and setAttribute
var article = document.getElementById('electriccars');
var fruitCount = article.getAttribute('data-columns'); // 3
article.setAttribute('data-columns','100')

// Third jQuery data() method
var article = $("#msglist");

var show = msglist.data("list-size");  // read 
msglist.data("list-size", "10");   //  set

// Fourth

// Get the values
var cmd = $('#your-button-id').attr('data-cmd');
var id = $('#your-button-id').attr('data-id');
// Change the values
$('#your-button-id')
    .attr('data-cmd', yourNewCmd)
    .attr('data-id', yourNewId);
```
Json
```
// 支持 JSON 语法
<div id="awesome-json" data-awesome='{"game":"on"}'></div>
var gameStatus= jQuery("#awesome-json").data('awesome').game;
console.log(gameStatus);
```

CSS Access
```
article::before {
  content: attr(data-parent);
}

article[data-columns='3'] {
  width: 400px;
}
article[data-columns='4'] {
  width: 600px;
}
```

## CAN I USE

http://caniuse.com/#feat=dataset 

由于js的兼容性： 还是需要用 getAttribute。

The even better news though is that all browsers (even IE7) let you already use the data-* attribute on elements and if you're using jQuery 1.4 or above then you can access the data using jQuery's data object. However, if you're just using JavaScript then you will have to access the data using JavaScript's 'getAttribute' method. 

The main issues to consider are Internet Explorer support and performance. Internet Explorer 11+ provides support for the standard, but all earlier versions do not support dataset. To support IE 10 and under you need to access data attributes with getAttribute()  instead. Also, the performance of reading data-attributes compared to storing this data in a JS data warehouse is bad. Using dataset is even slower than reading the data out with getAttribute().

## Reference

使用的缺点，优点，需要注意的地方。在什么时候使用最佳，什么地方不该用。

http://webdesign.tutsplus.com/tutorials/all-you-need-to-know-about-the-html5-data-attribute--webdesign-9642

http://html5doctor.com/html5-custom-data-attributes/