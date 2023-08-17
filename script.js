let btn = document.getElementById("btn")
let input = document.getElementById("input")
let password = document.getElementById("password")

function redirect() {
    window.open("home.html")
}



btn.addEventListener('click',()=>{
    if(validPassword() && (validEmail()||validNumber()||validUsername())){
        redirect();
    }
    else{
        alert("Enter correct credentials")
    }
} )


// validation of username

function validUsername() {
    let inputVal = input.value;
    if (inputVal >= 5) {
        return true;
    }
    return false;
}

function validEmail() {
    let inputVal = input.value;
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (inputVal == emailRegex) {
        return true;
    }
    return false;
}
function validNumber() {
    let inputVal = input.value;
    console.log("This is valid number",inputVal)
    if (inputVal != NaN) {
      console.log("true43")
        return true;
    }else{
        console.log("false46")
    return false;
}
}

function validPassword() {
    let passWord= password.value;
    const hasLowerCase = /[a-z]/.test(passWord);
    const hasUpperCase = /[A-Z]/.test(passWord);
    const hasNumber = /[0-9]/.test(passWord);
    const hasSymbol = /[!@#$%^&*()_+{}\[\]:;<>,.?~\-]/.test(passWord);

    return hasLowerCase && hasUpperCase && hasNumber && hasSymbol;
}




