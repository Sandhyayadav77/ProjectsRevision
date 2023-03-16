const form = document.querySelector("form");
const passwordInput = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const message = document.querySelector("#msg");
form.addEventListener('submit', (event) => {
    const passwordValue = passwordInput.value;
    const confirmPasswordValue = confirmPassword.value;
    if (passwordValue == confirmPasswordValue) {
        console.log("Password Matched. Password validation Successful.");

    }
    else {
        message.innerHTML = "Password didn't match. Password validation unsuccessful";
        console.log("Password didn't match. Password validation unsuccessful");
event.preventDefault();
message.style.color= "red";
    }
})