const loginBtn = document.getElementById("loginBtn");


loginBtn.addEventListener("click", function(){
    const email = document.getElementById("emailAddress").value;
    const pass = document.getElementById("Password").value;

    document.getElementById("email_errormsg").innerText = "";
    document.getElementById("password_errormsg").innerText = "";

    var request_emailregex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(email == ''){
        document.getElementById("email_errormsg").innerText = "Email is required";
    }
    else if(!email.match(request_emailregex)){
        document.getElementById("email_errormsg").innerText = "Email format is wrong";
    }
    else if(pass == ''){
        document.getElementById("password_errormsg").innerText = "Password is required";
    }
    else{
        alert("Submitted");
    }
});