var qian = document.getElementById('qian'),
    zhong = document.getElementById('zhong'),
    hou = document.getElementById('hou'),
    big = document.getElementsByClassName('big')[0],
    sz = []

qian.onclick = function () {
    qk()
    qx(big)
    color()
}
zhong.onclick = function () {
    qk()
    zx(big)
    color()
}
hou.onclick = function () {
    qk()
    hx(big)
    color()
}
function qx(x) {
    if (!(x == null)) {
        sz.push(x)
        qx(x.firstElementChild)
        qx(x.lastElementChild)
    }
}
function zx(x) {
    if (!(x == null)) {
        zx(x.firstElementChild)
        sz.push(x)
        zx(x.lastElementChild)
    }
}
function hx(x) {
    if (!(x == null)) {
        hx(x.firstElementChild)
        hx(x.lastElementChild)
        sz.push(x)
    }
}

function color() {
    sz[0].style.backgroundColor = '#f55b73'
    var i = 1
    var time = setInterval(function () {
        if (i < sz.length) {
            sz[i - 1].style.backgroundColor = '#fff'
            sz[i].style.backgroundColor = '#f55b73' 
            i++       
        }
        else{
            clearInterval(time)
            sz[sz.length-1].style.backgroundColor = 'fff'
        }
    },500)
}
function qk(){
    sz = []
}