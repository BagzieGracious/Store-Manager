
/*** login function ***/
function loginFunction(){
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var error = document.getElementById("error-message");

    if(password != "" & email != ""){
        //password and email not empty
        var type = document.getElementById("type");
        var typevalue = type.options[type.selectedIndex].value;
        
        if(typevalue == "admin"){
            window.location.href = "admin.html";
        }else{
            window.location.href = "attendant.html";
        }

    }else{
        if(password == "" & email == ""){
            //password and email are empty
            error.innerText = "Please, enter your email and password";
            error.style.display = "block";
            setInterval(function(){
                error.style.display = "none";
            }, 4000);
            
        }else if(password == ""){
            //password empty
            error.innerText = "Please, enter your password";
            error.style.display = "block";
            setInterval(function(){
                error.style.display = "none";
            }, 4000);

        }else if(email == ""){
            //email empty
            error.innerText = "Please, enter your email";
            error.style.display = "block";
            setInterval(function(){
                error.style.display = "none";
            }, 4000);

        }else{
            console.log("do nothing")
        }
    }    
}

/*** sidemenu toggle ***/
function sidemenu(){
    var menu = document.getElementById("side-menu");

    if(menu.style.display === "inline"){
        menu.style.display = "none";
    }else{
        menu.style.display = "inline";
    }
}