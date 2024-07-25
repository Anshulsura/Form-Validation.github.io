let form = document.querySelector('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let password = document.getElementById('password');
let cpassword  = document.getElementById('cpassword');

// define the seterrorMsg

const seterrorMsg = (input,error) => {
    let pElement = input.parentElement;
    let small = pElement.querySelector('small')
    small.innerText = error;
    pElement.className = 'form_control error';
}
const setSuccessMsg = (input) => {
    let pElement = input.parentElement;
    pElement.className = 'form_control success'
}
form.addEventListener('submit',(e) => {
    e.preventDefault();

    // call the validator function
    validator();
});


function validator() {
    let userValue = username.value.trim();
    let emailValue = email.value.trim();
    let phoneValue = phone.value.trim();
    let passwordValue = password.value.trim();
    let cpasswordValue = cpassword.value.trim();

//  username
    if(userValue === ""){
        seterrorMsg(username,"empty");
    }else if(userValue.length <=2){
        seterrorMsg(username,"write a valid name");
    }else{
        setSuccessMsg(username);
    }

    // email
    if(emailValue === ""){
        seterrorMsg(email,"empty");
    }else{
        setSuccessMsg(email);
    }

    // phone
    if(phoneValue === ""){
        seterrorMsg(phone,"empty");
    }else if(phoneValue.length !==10){
        seterrorMsg(phone,"write a valid phone number");
    }else{
        setSuccessMsg(phone);
    }

    // password
    if(passwordValue === ""){
        seterrorMsg(password,"empty");
    }else if(passwordValue.length <=6){
        seterrorMsg(password,"write a valid password");
    }else{
        setSuccessMsg(password);
    }

    // cpassword
    if(cpasswordValue === passwordValue){
        setSuccessMsg(cpassword);
    }else{
        seterrorMsg(cpassword, 'password are not matching')
    }
}
