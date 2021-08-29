const registerBtn = document.getElementById('RegisterBtn');

registerBtn.addEventListener('click', function(){
    const first_name = document.getElementById('first_name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;


    document.getElementById('firstname_errormsg').innerText = "";
    document.getElementById('lastname_errormsg').innerText = "";
    document.getElementById('email_errormsg').innerText = "";
    document.getElementById('password_errormsg').innerText = "";
    
    var request_emailregex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if(first_name == ''){
        document.getElementById('firstname_errormsg').innerText = "FirstName is required";
    }
    else if(last_name == ''){
        document.getElementById('lastname_errormsg').innerText = "LastName is required";
    }
    else if(email == ''){
        document.getElementById('email_errormsg').innerText = "Email is required";
    }
    else if(!email.match(request_emailregex)){
        document.getElementById('email_errormsg').innerText = "Email format is wrong";
    }
    else if(pass == ''){
        document.getElementById('password_errormsg').innerText = "Password is required";
    }
    else{
        alert("Submitted");
    }

});