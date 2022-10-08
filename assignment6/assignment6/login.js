window.onload = loginLoad;
function loginLoad(){
	var login=document.getElementById("myLogin");
    login.onsubmit=checkLogin;
}
function checkLogin(){
    var username = document.forms["myLogin"]["username"];
    var password = document.forms["myLogin"]["password"];
    const queryString=window.location.search;
    console.log(queryString);

    const urlParams=new URLSearchParams(queryString);
    const reusername=urlParams.get('username');
    console.log(reusername);
    const repassword=urlParams.get('password');

    if(username.value==reusername && password.value==repassword){
        alert ("LOGIN COMPLETE");
    }
    else if(username.value!=reusername||password.value!=repassword){
        alert("SOME");
        return false;
    }
    
}

			