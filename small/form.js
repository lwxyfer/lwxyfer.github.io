var form = document.getElementById("form");
form[1].focus();
//alert("js检查当前form控件的类型: " +form[1].type);
form[2].disabled = true;

// var  addfunction = {
//     some: function() {
//         alert("对象里的函数")
//     }
// }
// addfunction.some();
var email = document.createElement("input");
var url   = document.createElement("input");
email.type="email";
email.value="js create";
url.setAttribute("type","url");
url.setAttribute("value","setAttribute");
form.appendChild(email);
form.appendChild(url);

//富文本编辑的实现
//由于浏览器同源策略问题，所以先不管ifrmae
// window.onload = function () {
//     frames["richedit"].document.designMode= "on";
// }
var li = document.getElementsByTagName("li");
var rich = document.getElementById("rich");
var bold= document.getElementsByClassName("bold");
bold[0].onclick = function() {
    document.execCommand("bold",false,null);
}
var a=0;
bold[1].onclick = function() {
    
    if(a==1){
    document.execCommand("backcolor",false,"fff");
    a=0;
    }
    else if(a==0) {
        document.execCommand("backcolor",false,"red");
        a=1;
    }
}
//双击事件
// bold[1].ondblclick= function() {
//     document.execCommand("backcolor",false,"#fff")
// }