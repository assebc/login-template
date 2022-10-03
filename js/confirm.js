function containsNumbers(str) {
    return /[0-9]/.test(str);
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

function onChange() {
    let password = document.querySelector("input[name=password]");
    let confirm = document.querySelector("input[name=confirm]");
    if (confirm.value != password.value) {
        confirm.setCustomValidity("Passwords do not match!");
    } else{
        confirm.setCustomValidity("");
        return true;
    }
    return false;
}

function register(){
    if(onChange()){
        document.getElementById("but_login").setAttribute("type","button");
        document.getElementById("a_nodef").setAttribute("href","thankyou.html");
    }
}
/*
    EASY - < 8 chars
    MEDIUM - >= 8 chars >= 1 maiscula/minuscula
    MEDIUM HARD - >= 8 chars >= 1 maiuscula/minuscula >= 1 int
    HARD - >= 8 chars >= 1 maiscula/minuscula >= 1 int >= caracter especial

*/

function difficulty(){
    let password = document.querySelector('input[name=password]');
    document.getElementsByClassName("password_quality").style.display = "none";
    document.getElementsByClassName("password_quality_easy").style.display = "none";
    document.getElementsByClassName("password_quality_med").style.display = "none";
    document.getElementsByClassName("password_quality_med_hard").style.display = "none";
    document.getElementsByClassName("password_quality_hard").style.display = "none";
    if(onChange()){
        document.getElementsByClassName("password_quality").style.display = "flex"; 
        if(password.length<8) document.getElementsByClassName("password_quality_easy").style.display = "flex"; // easy
        else{
            if((password.toUpperCase() != password) || password.toLowerCase() != password){
                document.getElementsByClassName("password_quality_easy").style.display = "none";
                document.getElementsByClassName("password_quality_med").style.display = "flex"; // medium
                if(containsNumbers(password)){
                    document.getElementsByClassName("password_quality_med").style.display = "none";
                    document.getElementsByClassName("password_quality_med_hard").style.display = "flex"; // medium hard
                    if(containsSpecialChars(password)){
                        document.getElementsByClassName("password_quality_med_hard").style.display = "none";
                        document.getElementsByClassName("password_quality_hard").style.display = "flex"; // hard
                    }
                }
            } 
        }
    }
}

function checkLogin(){
    const user = document.querySelector('input[name=user]');
    const password = document.querySelector("input[name=pass]");
    if(user.value=="") user.setCustomValidity("Requires to insert an username!"); else user.setCustomValidity(""); // TODO: check in DB, accept username and email
    if(password.value=="") password.setCustomValidity("Requires to insert a password!"); else password.setCustomValidity(""); // TODO: check in DB
}
