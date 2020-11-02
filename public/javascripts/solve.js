function checkNumberInput1()
{
    var formInput1 = document.getElementById("formInput1").value;

    if(formInput1 == '')
    {
        notification.innerHTML = "<span style = 'margin-left: 2rem; color: #d7385e; '>Chưa nhập </span>";
        notification.innerHTML += "<span style='color: #d7385e; font-style: italic; font-weight: bold; '>số thứ nhất</span>";     
    
    }
    else if(isNaN(formInput1) === true)
    {
        notification.innerHTML = "<span style='margin-left:2rem; color: #d7385e; font-style: italic; font-weight: bold; '>Số thứ nhất </span>";
        notification.innerHTML += "<span style = 'color: #d7385e;'>không hợp lệ</span>";
    }
    else
    {
        notification.innerHTML = "";
    }
}

function checkNumberInput2()
{
    var formInput2 = document.getElementById("formInput2").value;

    if(formInput2 == '')
    {
        notification.innerHTML = "<span style = 'margin-left:2rem; color: #d7385e;'>Chưa nhập </span>";
        notification.innerHTML += "<span style='color: #d7385e; font-style: italic; font-weight: bold; '>số thứ hai</span>";
    }
    else if(isNaN(formInput2) === true)
    {
        notification.innerHTML = "<span style='margin-left:2rem; color: #d7385e; font-style: italic; font-weight: bold; '>Số thứ hai </span>";
        notification.innerHTML += "<span style = 'color: #d7385e;'>không hợp lệ</span>";
    }
    else
    {
        notification.innerHTML = "";
    }
}

function check()
{
    var check = true;
    var formInput1 = document.getElementById("formInput1").value;
    var formInput2 = document.getElementById("formInput2").value;
    var formResult = document.getElementById("formResult");

    var add = document.getElementById("add");
    var sub = document.getElementById("sub");
    var mul = document.getElementById("mul");
    var div = document.getElementById("div");

    var notification = document.getElementById("notification");

    if(formInput1 === ''){
        notification.innerHTML = "<span style = 'margin-left:2rem; color: #d7385e; '>Chưa nhập </span>";
        notification.innerHTML += "<span style='color: #d7385e; font-style: italic; font-weight: bold; '>số thứ nhất</span>";
        
        check = false;
    }
    if(isNaN(formInput1) === true){
        notification.innerHTML = "<span style='margin-left:2rem; color: #d7385e; font-style: italic; font-weight: bold; '>Số thứ nhất </span>";
        notification.innerHTML += "<span style = 'color: #d7385e;'>không hợp lệ</span>";
        check = false;
    }
    if(formInput2 === ''){
        notification.innerHTML = "<span style = 'margin-left:2rem; color: #d7385e;'>Chưa nhập </span>";
        notification.innerHTML += "<span style='color: #d7385e; font-style: italic; font-weight: bold; '>số thứ hai</span>";      
        check = false;
    }
    if(isNaN(formInput2) === true){
        notification.innerHTML = "<span style='margin-left:2rem; color: #d7385e; font-style: italic; font-weight: bold; '>Số thứ hai </span>";
        notification.innerHTML += "<span style = 'color: #d7385e;'>không hợp lệ</span>";   
        check = false;
    }
    if(add.checked === false && sub.checked === false && mul.checked === false && div.checked === false){
        notification.innerHTML = "<span style = 'margin-left:2rem; color: #d7385e;'>Chưa nhập </span>";
        notification.innerHTML += "<span style='color: #d7385e; font-style: italic; font-weight: bold; '>phép tính</span>";    
        check = false;
    }
    return check;
}