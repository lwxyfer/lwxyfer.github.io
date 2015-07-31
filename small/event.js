console.log("dsd");
// var btn = document.getElementsByClassName("btn")[0];
// btn.onclick = function(event) {
//     alert(event.type)
// }
var bta = document.getElementById("myid"); 
document.getElementById("myid").onclick=function(){ alert("事件，关于event的属性和方法")};

bta.addEventListener("click",function(event){alert(event.type)},false);

bta.onmouseover = function(event) {
    alert(event.target + event.currentTarget + this)
}
// document.body.onclick = function (event) {
//     alert(event.currentTarget + event.target);
//     alert(event.currentTarget === document.body)
//     alert(event.view)
// }

window.addEventListener("resize",function(){ alert("resize")},false)