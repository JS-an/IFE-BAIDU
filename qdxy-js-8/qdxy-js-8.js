var qian = document.getElementById('qian'),
    hou = document.getElementById('hou'),
    big = document.getElementsByClassName('big')[0],
    txt = document.getElementById('txt'),
    ctxt = document.getElementById('ctxt'),
    cx = document.getElementById('cx'),
    sz = []
//点击事件
qian.onclick = function () {
    qk()
    qx(big)
    color()
    chaxun()
}
hou.onclick = function () {
    qk()
    hx(big)
    color()
    chaxun()
}
//前序遍历
function qx(x) {
    if (x !== null) {
        sz.push(x)
        for (var j = 0; j < x.childElementCount; j++) {
            qx(x.children[j])
        }
    }
}
//后序遍历
function hx(x) {
    if (x !== null) {
        for (var j = 0; j < x.childElementCount; j++) {
            hx(x.children[j])
        }
        sz.push(x)
    }
}
//颜色变化
function color() {
    qian.disabled = 'disabled'
    hou.disabled = 'disabled'
    sz[0].style.backgroundColor = '#f55b73'
    var i = 1
    var cctxt = ctxt.value 
    var time = setInterval(function () {
        if (ww[i-1] !== cctxt) {
            if (i < sz.length) {
                sz[i - 1].style.backgroundColor = '#fff'
                sz[i].style.backgroundColor = '#f55b73'
                i++
            }
            else {
                qian.disabled = ''
                hou.disabled = ''
                clearInterval(time)
                sz[sz.length - 1].style.backgroundColor = 'fff'
                alert('无法找到您输入的内容')
            }
        }
        else {
            clearInterval(time)
            sz[i - 1].style.backgroundColor = '#2980b9'
            qian.disabled = ''
            hou.disabled = ''
        }
    }, t)
}
//创建数组查询
function chaxun() {
    ww = []
    for (k = 0; k < sz.length; k++) {
        var ee = sz[k].childNodes[0].data.replace(/\s/g, '')
        ww.push(ee)
    }
}
//初始化
function qk() {
    sz = []
    t = parseInt(txt.value)
}