http://www.w3schools.com/html/html_form_input_types.asp

# HTML

text
password
submit
radio
checkbox
button


# HTML5

HTML5 added several new input types:

color
date
datetime
datetime-local
email
month
number
range
search
tel
time
url
week


## Range

```html
<input type="range" max="100" min="0" value="10" step="1">
```



https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input

要注意不同浏览器下产生的问题

浏览器私有伪类： 

-webkit-slider-thumb   
-webkit-slider-runnable-track 
-moz-range-track
-moz-range-thumb


-ms-thumb
-ms-track
-ms-fill-lower
-ms-fill-upper

IE proprietary pseudo-element ::-ms-fill-lower, ::-ms-fill-upper, ::-ms-thumb, ::-ms-ticks, and ::-ms-tooltip

-webkit-appearance:none | 

> **https://css-tricks.com/styling-cross-browser-compatible-range-inputs-css/   此文可以完全解决range 的基本问题。**
> http://thenewcode.com/757/Playing-With-The-HTML5-range-Slider-Input  扩展 range 
> http://brennaobrien.com/blog/2014/05/style-input-type-range-in-every-browser.html   注重IE

http://codepen.io/collection/DgYaMj/  超酷的滑动控件


关于旋转 滑动条： 
1. 使用transform:rotate(90deg) 表示很完美。
2. the three major browsers each have a distinct way of making a range input vertical:

- In Firefox, it’s an attribute: orient="vertical"
- In Webkit, it’s CSS: -webkit-appearance: slider-vertical
- Microsoft have chosen a rather, um, rather distinct solution: writing-mode: bt-lr;

### basic grammer

```css
input[type=range] {
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  width: 100%; /* Specific width is required for Firefox. */
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
}

input[type=range]:focus {
  outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */  这也是需要注意的地方
}

input[type=range]::-ms-track {
  width: 100%;
  cursor: pointer;
  background: transparent; /* Hides the slider so custom styles can be added */
  border-color: transparent;
  color: transparent;
}
```

### the Thumb
The widget that you click or drag along the track is called the thumb. It can be styled just like a regular HTML element.

```css
/* Special styling for WebKit/Blink */
input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
  margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d; /* Add cool effects to your sliders! */
}

/* All the same stuff for Firefox */
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;  // 箭头变为 手指 
}

/* All the same stuff for IE */
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
```


### track

The line that the thumb moves across is called the track. It is also styled just like a regular HTML element.

A note on IE: Internet Explorer 10+ has a slightly different approach to range inputs. In IE, you are allowed to specify completely different styles for the upper (right of the thumb) and lower (left of the thumb) areas of the track.

Another thing to note is that you can apply focus effects to the track which change the styling when the user is interacting with the range.

```css
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input[type=range]:focus::-webkit-slider-runnable-track {
  background: #367ebd;
}  // 加入选择器：focus  ，改变拖动滑动条时的样式

input[type=range]::-moz-range-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: #3071a9;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}

input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
// 打到IE   打到IE
input[type=range]::-ms-fill-lower {
  background: #2a6495;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]:focus::-ms-fill-lower {
  background: #3071a9;
}
input[type=range]::-ms-fill-upper {
  background: #3071a9;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]:focus::-ms-fill-upper {
  background: #367ebd;
}
```