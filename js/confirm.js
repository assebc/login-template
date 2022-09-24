function onChange() {
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirm]");
    const but = document.querySelector(".a_nodef");
    let res = true;
    if (confirm.value != password.value) {
        confirm.setCustomValidity("Passwords do not match!");
        res = false;
    } else{
        confirm.setCustomValidity("");
        but.href="index.html";
    }
    return res;
}

/*
    EASY - < 8 chars
    MEDIUM - >= 8 chars >= 1 maiscula/minuscula
    MEDIUM HARD - >= 8 chars >= 1 maiuscula/minuscula >= 1 int
    HARD - >= 8 chars >= 1 maiscula/minuscula >= 1 int >= caracter especial

*/

function containsNumbers(str) {
    return /[0-9]/.test(str);
}

function containsSpecialChars(str) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
}

function difficulty(){
    const password = document.querySelector('input[name=password]');
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

function checkSteps(){
    const user = document.querySelector('input[name=user]');
    const password = document.querySelector("input[name=password]");
    const confirm = document.querySelector("input[name=confirm]");
    if(user.value=="") user.setCustomValidity("Requires to insert an username!"); else user.setCustomValidity("");
    if(password.value=="") password.setCustomValidity("Requires to insert a password!"); else password.setCustomValidity("");
    if(confirm.value=="") confirm.setCustomValidity("Please confirm your password!"); else onChange();
}

function checkLogin(){
    const user = document.querySelector('input[name=user]');
    const password = document.querySelector("input[name=password]");
    if(user.value=="") user.setCustomValidity("Requires to insert an username!"); else user.setCustomValidity(""); // TODO: check in DB
    if(password.value=="") password.setCustomValidity("Requires to insert a password!"); else password.setCustomValidity(""); // TODO: check in DB

}
