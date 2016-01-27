# 即实现居中布局方案

> horizontal centering
vertical centering
layout

不定宽：父容器，子元素 不定宽
水平居中、垂直居中。
容器宽度跟着内容走。
主要针对块状元素block.
行内元素居中：分为单行和多行： 一般 text-align:center 水平居中 或者 height:2rem ; line-height: 2rem  垂直居中

[TOC]

# 水平居中

## inline-block & text-align

```
<style>
	.child {
		display:inline-block
	}
	.parent {
		text-align:center;
	}
</style>
<div class="parent">
	<div class="child">DEMO</div>
</div>
```

我们的需求： 块状元素居中  但 文字不布局。


**看来 `inline-block` 很多内容啊：**

- http://ued.taobao.org/blog/2012/08/inline-block/  
 inline-block 前世今生 
- http://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block  
display：inline | block | inline-block 的对比
- http://zh.learnlayout.com/inline-block.html   小DEMO 
http://zh.learnlayout.com/inline-block-layout.html  DEMO 与 bug : vertical-align 
- http://www.w3cplus.com/css/inline-blocks.html   
Float 与 inline-block 对比
- http://www.zhangxinxu.com/wordpress/2015/02/css-deep-understand-flow-bfc-column-two-auto-layout/
扩展： 流式布局 BFC（Block Formatting Context）
- http://www.cnblogs.com/leejersey/archive/2012/07/11/2586506.html  
IE6、7下兼容
- https://msdn.microsoft.com/zh-cn/library/bb250481(v=vs.85).aspx  
hasLayout 解析  即IE下的布局hack方式
- http://www.w3cplus.com/css/fighting-the-space-between-inline-block-elements
inline-block造成的子元素之间的空白BUG解决。

### Display  TODO

**display:**
http://quirksmode.org/css/css2/display.html
https://css-tricks.com/almanac/properties/d/display/  全部
https://developer.mozilla.org/en-US/docs/Web/CSS/display
> **所有属性值对比与分析**
区分： 行内元素inline与块状元素block  使用dispaly的不同之处。
结合使用display的属性值：创建惊人的效果。

```
display: none;
display: inline;
display: block;
display: inline-block;

display: contents;
display: list-item;
display: inline-list-item;
/* table */
display: table;
display: inline-table;
display: table-cell;
display: table-column;
display: table-column-group;
display: table-footer-group;
display: table-header-group;
display: table-row;
display: table-row-group;
display: table-caption;
/* flex */
display: flex;
display: inline-flex;
/* grid */
display: grid;
display: inline-grid;
/* ruby */
display: ruby;
display: ruby-base;
display: ruby-text;
display: ruby-base-container;
display: ruby-text-container;
/* run in */
display: run-in;

/* Global values */
display: inherit;
display: initial;
display: unset;
```

- Inline elements:
respect left & right margins and padding, but not top & bottom
cannot have a width and height set
allow other elements to sit to their left and right.
- Block elements:
respect all of those
force a line break after the block element
- Inline-block elements:
allow other elements to sit to their left and right
respect top & bottom margins and padding
respect height and width

![enter image description here](http://i.stack.imgur.com/mGTYI.png)


## table & margin：0 auto

```
// 一：Table
.child {
	display:table;
	margin:0 auto;
}
// 二：固定宽度
.child {
	width：50%;
	margin:0 auto;
}
<div class="parent">
	<div class="child">DEMO</div>
</div>
```

child会根据内容自动伸缩。即不用设置child的宽度都可以用margin使其居中。方便简单，兼容性高。只用设置子元素。

table:  实例化table的不同属性值。



## absolute & transform

```
.parent {
	position:relative;
}
.child {
	position:absolute;
	left:50%;
	transform:translateX(-50%);
}
<div class="parent">
	<div class="child">DEMO</div>
</div>
```

兼容性问题：我不需要满足IE10以下的浏览器，所以不管喽。 加入浏览器前缀即可，不过现代浏览器目前都支持标准写法。 
脱离文档流：absolute 、 float  脱离文档流  

### position

https://developer.mozilla.org/en-US/docs/Web/CSS/position
http://zh.learnlayout.com/position.html

```
/* Keyword values */
position: static;
position: relative;
position: absolute;
position: fixed;
position: sticky;

/* Global values */
position: inherit;
position: initial;
position: unset;
```

- absolute	
生成绝对定位的元素，相对于 static 定位以外的第一个父元素进行定位。
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
- fixed	
生成绝对定位的元素，相对于浏览器窗口进行定位。
元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
- relative	
生成相对定位的元素，相对于其正常位置进行定位。
因此，"left:20" 会向元素的 LEFT 位置添加 20 像素。
- static	
默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right 或者 z-index 声明）。

## flex & justify-content

```
// 第一种
.parent {
	display:flex;
	justify-content:center;
}
// 第二种
.parent {
	display:flex;
}
.child {
	margin:0 auto;
}

<div class="parent">
	<div class="child">DEMO</div>
</div>
```

我的flex指南： http://blog.lwxyfer.com/573.html



# 垂直居中


## table-cell & vertical-align

```
.parent {
	display:table-cell;
	vertical-align:middle;
}
<div class="parent">
	<div class="child">DEMO</div>
</div>
```

vartical-align :  具体的使用. 作用在父元素上还是子元素上?

单独使用与和table-cell配合使用的不同，

对于行内和块状元素的不同。

行内： 对准基线，设置父元素高度后需要调整line-height用来调准基线。

块状： 。。。。



## absolute & transform

```
.parent {
	position:relative;
}
.child {
	position:absolute;
	top:50%;
	transform:translateY(-50%);
}
<div class="parent">
	<div class="child">DEMO</div>
</div>
```

## flex & align-items

```
// 第一种
.parent {
	display:flex;
	align-items:center;
}
<div class="parent">
	<div class="child">DEMO</div>
</div>
```


# 水平垂直居中

终上