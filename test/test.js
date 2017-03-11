var qian = document.getElementById('qian'),
    zhong = document.getElementById('zhong'),
    hou = document.getElementById('hou'),
    big = document.getElementsByClassName('big')[0],
    txt = document.getElementById('txt'),
    div = document.getElementsByTagName('div'),
    sz = [],
    l = 0

qian.onclick = function () {
    qk()
    qx(big)
    color()
}
zhong.onclick = function () {
    qk()
    zx(big, div)
    color()
}
hou.onclick = function () {
    qk()
    hx(big)
    color()
}
function qx(x) {
    if (x !== null) {
        sz.push(x)
        qx(x.firstElementChild)
        qx(x.lastElementChild)
    }
}
function zx(x, y) {
    if (x !== null) {
        sz.push(x)
        zx(x.nextElementSibling, y)
        var x = y[l++]
        zx(x.firstElementChild, y)
    }
}
function hx(x) {
    if (x !== null) {
        hx(x.firstElementChild)
        hx(x.lastElementChild)
        sz.push(x)
    }
}

function color() {
    qian.disabled = 'disabled'
    zhong.disabled = 'disabled'
    hou.disabled = 'disabled'
    sz[0].style.backgroundColor = '#f55b73'
    var i = 1
    var time = setInterval(function () {
        if (i < sz.length) {
            sz[i - 1].style.backgroundColor = '#fff'
            sz[i].style.backgroundColor = '#f55b73'
            i++
        }
        else {
            qian.disabled = ''
            zhong.disabled = ''
            hou.disabled = ''
            clearInterval(time)
            sz[sz.length - 1].style.backgroundColor = 'fff'
        }
    }, t)
}
//初始化数组
function qk() {
    sz = []
    t = parseInt(txt.value)
}