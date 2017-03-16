var sp = document.getElementsByClassName('yuan'),
    sp1 = sp[0],
    sp2 = sp[1],
    zx = document.getElementById('zx'),
    fzx = document.getElementById('fzx'),
    zx1 = document.getElementById('zx1'),
    zx2 = document.getElementById('zx2'),
    xx = [
        ['清华大学', '北京大学', '北京电影学院'],
        ['复旦大学', '上海交通大学', '上海艺术学院'],
        ['广州大学', '中山大学', '华南理工学院']
    ]
window.onload = function(){
    sp1.style.border = '7px solid #5b67f8'
    sp2.style.border = '2px solid #ddd'
    zx.style.display = 'block'
    fzx.style.display = 'none'
}
sp1.onclick = function () {
    sp1.style.border = '7px solid #5b67f8'
    sp2.style.border = '2px solid #ddd'
    zx.style.display = 'block'
    fzx.style.display = 'none'
}
sp2.onclick = function () {
    sp2.style.border = '7px solid #5b67f8'
    sp1.style.border = '2px solid #ddd'
    fzx.style.display = 'block'
    zx.style.display = 'none'
}
zx1.onchange = function () {
    var index = zx1.selectedIndex
    zx2.innerHTML = ''
    for (var i = 0; i < xx[index].length; i++) {
        var cre = document.createElement('option')
        cre.value = xx[index][i]
        cre.textContent = xx[index][i]
        zx2.appendChild(cre)
    }
}