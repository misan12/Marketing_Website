const wrapper = document.querySelector(".wrapper")
const loginLink = document.querySelector(".Login-link")
const registerLink = document.querySelector(".register-link")
const input_box = document.querySelector(".input-box")

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

const username = document.getElementById("user").value
const email = document.getElementById("mail").value
const password = document.getElementById("pass").value
const form = document.querySelector("form_")

var register = function reg() {
    wrapper.classList.remove('active');
    console.log("working")
}

const cloud_username = username;
const cloud_email = email;
const cloud_password = password;
var log_ = false

const login_email = document.querySelector(".login_email").value
const login_password = document.querySelector(".login_password").value

var login = function log() {
    if (login_email === cloud_email || login_password === cloud_password) {
        alert("Login Successful")
        log_ = true
    }
    else{
        alert("Login Failed")
    }
}

var loginBtn = document.getElementById("login_btn");
var registerBtn = document.getElementById("register-btn")

registerBtn.addEventListener("click", register);
loginBtn.addEventListener("click", login);


// form.addEventListener("submit", (e) => {
//     let message = []
//     if (email === '' || email === null){
//         input_box.style.border = '2px solid red;'
//     }
//     if (password === '' || password === null){
//         input_box.style.border = '2px solid red;'
//     }
// })
