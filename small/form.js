var form = document.getElementById("form");
form[1].focus();
alert("js检查当前form控件的类型: " +form[1].type);
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