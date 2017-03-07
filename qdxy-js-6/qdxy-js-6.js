var txt = document.getElementById("txt")
var zr = document.getElementById("zr")
var yr = document.getElementById("yr")
var zc = document.getElementById("zc")
var yc = document.getElementById("yc")
var dl = document.getElementById("dl")
var cxt = document.getElementById('cxt')
var cx = document.getElementById('cx')

var duilie = []
//创建span
function create() {
    dl.innerHTML = ''
    for (i = 0; i < duilie.length; i++) {
        var cre = document.createElement('span')
        cre.textContent = duilie[i]
        cre.onclick = del
        dl.appendChild(cre)
    }
}
//删除
function del() {
    var newduilie = []
    dl.removeChild(event.target)
    var sp = document.getElementsByTagName('span')
    var nduilie = Array.prototype.slice.call(sp)
    for (j = 0; j < nduilie.length; j++) {
        var pp = nduilie[j].innerHTML
        newduilie.push(pp)
    }
    duilie = newduilie
    create(duilie)
}
//输入与输出
zr.onclick = function () {
    var x = txt.value.trim()
    x = x.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/)
    duilie = x.concat(duilie)
    create(duilie)
}
yr.onclick = function () {
    var x = txt.value.trim()
    x = x.split(/[^0-9a-zA-Z\u4e00-\u9fa5]+/)
    duilie = duilie.concat(x)
    create(duilie)
}
zc.onclick = function () {
    var y = duilie.shift()
    create(duilie)
    alert(y)
}
yc.onclick = function () {
    var y = duilie.pop()
    create(duilie)
    alert(y)
}
//查询
cx.onclick = function () {
    create(duilie)
    var cha = new RegExp(cxt.value)
    for (u = 0; u < duilie.length; u++) {
        var xun = cha.test(duilie[u])
        if (xun === true) {
            dl.children[u].style.backgroundColor = '#46f8d5'
        }
    }
}
