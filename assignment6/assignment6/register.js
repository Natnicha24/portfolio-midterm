window.onload = pageLoad;
function pageLoad(){
    var form=document.getElementById("myForm");
    form.onsubmit=validateForm;
}
function validateForm() {
    var password = document.forms["myForm"]["password"];
    var passwordretype = document.forms["myForm"]["passwordretype"];
    if(password.value==passwordretype.value){
        return true;
    }
    else if(password.value!=passwordretype.value){
        alert("Password Not Match");
        return false;
    }
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
}