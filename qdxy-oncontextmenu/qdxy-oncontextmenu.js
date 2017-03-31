var box = document.getElementById('box'),
    yj = document.getElementById('yj')

box.onmousedown = fyou
box.oncontextmenu = you

function fyou(event) {
    yj.style.display = 'none'
}

function you(event) {
    event.preventDefault()
    var x = event.pageX,
        y = event.pageY,
        sx = event.screenX,
        sy = event.screenY,
        wid = window.screen.availWidth,
        hei = window.screen.availHeight
    yj.style.left = x + 'px'
    yj.style.top = y + 'px'
    yj.style.display = 'block'
    if (sx > wid - 200 && sy > hei - 300) {
        yj.style.left = x - 200 + 'px'
        yj.style.top = y - 300 + 'px'
    } else if (sx > wid - 200) {
        yj.style.left = x - 200 + 'px'
    } else if (sy > hei - 300) {
        yj.style.top = y - 300 + 'px'
    }
}