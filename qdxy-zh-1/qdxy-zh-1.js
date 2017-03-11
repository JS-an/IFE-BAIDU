var input = document.getElementsByTagName('input'),
    pt1 = input[0]
    pt2 = input[1]
    pt3 = input[2]
    button = document.getElementsByTagName('button')
    btn1 = button[0]
    btn2 = button[1]
    btn3 = button[2]
    td4 = document.getElementsByClassName('td4')
    td41 = td4[0]
    td42 = td4[1]
    td43 = td4[2]
//获取字符长度    
function getlength(){
    var pttxt = pt1.value
    var re = pttxt.replace(/[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/g, 'aa')
    return re.length
}
//验证
btn1.onclick = function(){
    var pttxt = pt1.value
    if (pttxt === ''){
        pt1.style.borderColor = '#d71346'
        td41.textContent = '姓名不能为空'
        td41.style.color = '#d71346'
    }
    else if (getlength() < 4|getlength() > 16){
        td41.innerHTML = '长度必须为4~16个字符'
    }
    else{
        pt1.style.borderColor = '#3498dc'
        td41.textContent = '格式正确'
        td41.style.color = '#3498dc'
    }
}
