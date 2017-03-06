var txt = document.getElementById("txt");
var zr = document.getElementById("zr");
var yr = document.getElementById("yr");
var zc = document.getElementById("zc");
var yc = document.getElementById("yc");
var dl = document.getElementById("dl");
/*
var duilie = [];
zr.onclick = function () {
    var x = txt.value;
    duilie.unshift('<span>'+x+'</span>');
    dl.innerHTML = duilie;
}
yr.onclick = function () {
    var x = txt.value;
    duilie.push('<span>'+x+'</span>');
    dl.innerHTML = duilie;
}
zc.onclick = function () {
    var y = duilie.shift();
    dl.innerHTML = duilie;
    alert(y);
}
yc.onclick = function () {
    var y = duilie.pop();
    dl.innerHTML = duilie;
    alert(y);
}
*/

zr.onclick = function () {
    var x = txt.value
    if (+x === +x && parseInt(x) === parseInt(x) && +x >= 10 && +x <= 100 && dl.childElementCount < 60) {
        var create = document.createElement('button')
        create.style.paddingTop = +x * 2 + 'px'
        var btn = dl.insertBefore(create, dl.firstChild)
        btn.innerHTML = x
    }
    else {
        alert('请输入数字(数字在10-100之间，且数组最多为60个)')
    }
}
yr.onclick = function () {
    var x = txt.value
    if (+x === +x && parseInt(x) === parseInt(x) && +x >= 10 && +x <= 100 && dl.childElementCount < 60) {
        var create = document.createElement("button")
        create.style.paddingTop = +x * 2 + 'px'
        var btn = dl.insertBefore(create, null)
        btn.innerHTML = x
    }
    else {
        alert('请输入数字(数字在10-100之间，且数组最多为60个)')
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
px.onclick = function () {
    var p = []
    for (j = 0; j < dl.childElementCount; j++) {
        var d = document.getElementsByTagName('button')[j]
        p.push(d.innerHTML)
    }
    var k = 0
    var l = k + 1
    setInterval(go, 50)
    function go() {
        if (k < p.length - 1) {
            if (l < p.length) {
                if (p[k] > p[l]) {
                    var pp = p[k]
                    p[k] = p[l]
                    p[l] = pp
                    dl.innerHTML = ''
                    for (i = 0; i < p.length; i++) {
                        var x = parseInt(p[i])
                        var create = document.createElement('button')
                        create.style.paddingTop = +x * 2 + 'px'
                        create.textContent = x
                        dl.appendChild(create)
                    }
                }
                l++
            }
            else {
                k++
                l = k + 1
            }
        }
        else {
            clearInterval(setInterval(go(), 50))
        }
    }
}