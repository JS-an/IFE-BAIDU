var input = document.getElementsByTagName('input'),
    pt1 = input[0],
    pt2 = input[1],
    pt3 = input[2],
    pt4 = input[3],
    pt5 = input[4],
    td4 = document.getElementsByClassName('td4'),
    td41 = td4[0],
    td42 = td4[1],
    td43 = td4[2],
    td44 = td4[3],
    td45 = td4[4],
    btn = document.getElementById('btn')
//获取字符长度    
function getlength1() {
    var pttxt = pt1.value
    var re = pttxt.replace(/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/g, 'aa')
    return re.length
}
function getlength2() {
    var pttxt = pt2.value
    var re = pttxt.replace(/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/g, 'aa')
    return re.length
}
//名称验证
function namefocus() {
    pt1.style.borderColor = '#3498dc'
    td41.textContent = '必填，长度为4~16个字符'
    td41.style.color = '#ccc'
}
function nameblur() {
    var pttxt = pt1.value
    var re = /\S/g
    if (pttxt === '') {
        td41.textContent = '姓名不能为空'
        pt1.style.borderColor = '#d71346'
        td41.style.color = '#d71346'
    }
    else if (getlength1() < 4 | getlength1() > 16) {
        td41.textContent = '长度必须为4~16个字符'
        pt1.style.borderColor = '#d71346'
        td41.style.color = '#d71346'
    }
    else if (re.test(pttxt) === false) {
        td41.textContent = '至少一个非空格字符'
        pt1.style.borderColor = '#d71346'
        td41.style.color = '#d71346'
    }
    else {
        td41.textContent = '格式正确'
        pt1.style.borderColor = '#2ecc72'
        td41.style.color = '#2ecc72'
        return 1
    }
}
//密码验证
function pwfocus() {
    pt2.style.borderColor = '#3498dc'
    td42.textContent = '必填，长度为6~16个字符'
    td42.style.color = '#ccc'
}
function pwblur() {
    var pttxt = pt2.value
    if (getlength2() < 6 | getlength2() > 16) {
        td42.textContent = '长度必须为6~16个字符'
        pt2.style.borderColor = '#d71346'
        td42.style.color = '#d71346'
    }
    else {
        td42.textContent = '格式正确'
        pt2.style.borderColor = '#2ecc72'
        td42.style.color = '#2ecc72'
        return 1
    }
}
//密码确认
function pwfocusagain() {
    pt3.style.borderColor = '#3498dc'
    td43.textContent = '再次输入相同密码'
    td43.style.color = '#ccc'
}
function pwbluragain() {
    if (pt2.value === pt3.value) {
        td43.textContent = '两次密码一致'
        pt3.style.borderColor = '#2ecc72'
        td43.style.color = '#2ecc72'
        return 1
    }
    else {
        td43.textContent = '两次密码不一致'
        pt3.style.borderColor = '#d71346'
        td43.style.color = '#d71346'
    }
}
//邮箱验证
function emfocus() {
    pt4.style.borderColor = '#3498dc'
    td44.textContent = '邮箱格式为:xxx@xx.xx'
    td44.style.color = '#ccc'
}
function emblur() {
    var re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9])+$/
    if (re.test(pt4.value) === true) {
        td44.textContent = '格式正确'
        pt4.style.borderColor = '#2ecc72'
        td44.style.color = '#2ecc72'
        return 1
    }
    else {
        td44.textContent = '格式错误'
        pt4.style.borderColor = '#d71346'
        td44.style.color = '#d71346'
    }
}
//手机验证
function phonefocus() {
    pt5.style.borderColor = '#3498dc'
    td45.textContent = '请输入正确的手机号码（中国大陆号码）'
    td45.style.color = '#ccc'
}
function phoneblur() {
    var re = /^1[0-9]{10}$/
    if (re.test(pt5.value) === true) {
        td45.textContent = '格式正确'
        pt5.style.borderColor = '#2ecc72'
        td45.style.color = '#2ecc72'
        return 1
    }
    else {
        td45.textContent = '格式错误'
        pt5.style.borderColor = '#d71346'
        td45.style.color = '#d71346'
    }
}
//绑定事件
pt1.onfocus = namefocus
pt1.onblur = nameblur
pt2.onfocus = pwfocus
pt2.onblur = pwblur
pt3.onfocus = pwfocusagain
pt3.onblur = pwbluragain
pt4.onfocus = emfocus
pt4.onblur = emblur
pt5.onfocus = phonefocus
pt5.onblur = phoneblur
//全局验证
btn.onclick = function () {
    nameblur()
    pwblur()
    pwbluragain()
    emblur()
    phoneblur()
    if (nameblur()+pwblur()+pwbluragain()+emblur()+phoneblur() === 5){
        alert('提交成功')
    }
    else {
        alert('提交失败')
    }
}