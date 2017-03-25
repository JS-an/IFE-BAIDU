var table = document.getElementById('qipan'),
    div = document.getElementById('div1'),
    num = []

window.onload = function(){
    div.style.left = 250 + 'px'
    div.style.top = 250 + 'px'
}
document.onkeydown = function () { 
        move(event.keyCode)
        go(event.keyCode)
}

function move(ev) {
    switch (ev) {
        case 65:
            div.style.transform = 'rotate(-90deg)'
            num = [38, 39, 40, 37]
            break
        case 83:
            div.style.transform = 'rotate(180deg)'
            num = [39, 40, 37, 38]
            break
        case 68:
            div.style.transform = 'rotate(90deg)'
            num = [40, 37, 38, 39]
            break
        case 87:
            div.style.transform = 'rotate(0deg)'
            num = [37, 38, 39, 40]
            break         
    }
    go()
}
function go(ev) {
    switch (ev) {
        case num[0]:
        case 65:
            div.style.left = parseInt(div.style.left) - 50 + 'px'
            break
        case num[1]:
        case 87:
            div.style.top = parseInt(div.style.top) - 50 + 'px'
            break
        case num[2]:
        case 68:
            div.style.left = parseInt(div.style.left) + 50 + 'px'
            break
        case num[3]:
        case 83:
            div.style.top = parseInt(div.style.top) + 50 + 'px'
            break
    }
    if (parseInt(div.style.left) < 50) {
        div.style.left = 50 + 'px'
    }
    else if (parseInt(div.style.left) > 500) {
        div.style.left = 500 + 'px'
    }
    else if (parseInt(div.style.top) < 50) {
        div.style.top = 50 + 'px'
    }
    else if (parseInt(div.style.top) > 500) {
        div.style.top = 500 + 'px'
    }
}