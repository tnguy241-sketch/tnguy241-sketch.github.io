const form=document.getElementById('form');
const nameInput=document.getElementById('name-input');
const emailInput=document.getElementById('email-input');
const passwordInput=document.getElementById('password-input');
const confirmInput=document.getElementById('confirm-input');
const errorMessage=document.getElementById('error-message');
form.addEventListener('submit',(e) => {
    let error = [];
    if (nameInput){
        error=getSignupErrors(nameInput.value, emailInput.value, passwordInput.value, confirmInput.value);
    }
    else {
        error=getLoginErrors(emailInput.value, passwordInput.value);
    }
    if (error.length>0){
        e.preventDefault();
        errorMessage.innerText=error.join(". ");
    }
});
function getSignupErrors(name, email, password, confirm)
{
    let error = [];
    if (name === '' || name === null){
        error.push("Name is required.");
        nameInput.parentElement.classList.add("Wrong");
    }
    if (email === '' || email === null){
        error.push("Email is required.");
        emailInput.parentElement.classList.add("Wrong");
    }
    if (password === '' || password === null){
        error.push("Password is required.");
        passwordInput.parentElement.classList.add("Wrong");
    }
    if (password.length<8){
        error.push("Password must be 8 characters long.");
        passwordInput.parentElement.classList.add("Wrong");
    }
    if (password !== confirm){
        error.push("Password must match the confirmed password.");
        passwordInput.parentElement.classList.add("Wrong");
        confirmInput.parentElement.classList.add("Wrong");
    }
    return error;
}
function getLoginErrors(email,password){
    let error=[];
    if (email === '' || email === null){
        error.push("Email is required.");
        emailInput.parentElement.classList.add("Wrong");
    }
    if (password === '' || password === null){
        error.push("Password is required.");
        passwordInput.parentElement.classList.add("Wrong");
    }
}
const allInputs=[nameInput, emailInput, passwordInput, confirmInput].filter(input => input != null);
allInputs.forEach(input => {
    if (input.parentElement.classList.contains("Wrong")){
        input.parentElement.classList.remove("Wrong");
        errorMessage.innerText='';
    }
})