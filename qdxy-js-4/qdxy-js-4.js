var txt = document.getElementById("txt");
var zr = document.getElementById("zr");
var yr = document.getElementById("yr");
var zc = document.getElementById("zc");
var yc = document.getElementById("yc");
var dl = document.getElementById("dl");
/*
var duilie=[];
zr.onclick=function(){
    var x=txt.value;
    duilie.unshift(x);
    dl.innerHTML=duilie;
}
yr.onclick=function(){
    var x=txt.value;
    duilie.push(x);
    dl.innerHTML=duilie;
}
zc.onclick=function(){
    var y=duilie.shift();
    dl.innerHTML=duilie;
    alert(y);
}
yc.onclick=function(){
    var y=duilie.pop();
    dl.innerHTML=duilie;
    alert(y);
}
*/

zr.onclick = function () {
    var x = txt.value;
    if (+x === +x && parseInt(x) === parseInt(x)) {
        var create = document.createElement('button')
        var btn = dl.insertBefore(create, dl.firstChild)
        btn.innerHTML = x
    }
    else {
        alert('请输入数字')
    }
}
yr.onclick = function () {
    var x = txt.value
    if (+x === +x && parseInt(x) === parseInt(x)) {
        var create = document.createElement("button")
        var btn = dl.insertBefore(create, null)
        btn.innerHTML = x
    }
    else {
        alert('请输入数字')
    }
}
zc.onclick = function () {
    var y = dl.removeChild(dl.firstChild);
    alert(y.innerHTML);
}
yc.onclick = function () {
    var y = dl.removeChild(dl.lastChild);
    alert(y.innerHTML);
}
dl.onclick = function (event) {
    var z = event.target.tagName;
    if (z == "BUTTON") {
        dl.removeChild(event.target);
    }
}
