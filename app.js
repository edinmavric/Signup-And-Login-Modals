let form = document.getElementById("form1");
let loginForm = document.getElementById("form2");
let formBtn = document.getElementById("btn");
let formLoginBtn = document.getElementById("btnLogin");

let nameSurname = document.getElementById("nameSurName");
let password = document.getElementById("pname");
let confirmPassword = document.getElementById("cpname");
let email = document.getElementById("ename");
let confirmEmail = document.getElementById("cename");
let loginPassword = document.getElementById("lpname");
let loginConfirmPassword = document.getElementById("lcpname");
let loginEmail = document.getElementById("lename");

let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let confirmEmailError = document.getElementById("cemail-error");
let passError = document.getElementById("pass-error");
let confirmPassError = document.getElementById("cpass-error");
let loginEmailError = document.getElementById("login-email-error");
let loginPasswordError = document.getElementById("login-pass-error");
let loginConfirmPasswordError = document.getElementById("login-cpass-error");

let openBtn = document.querySelector(".open-modal");
let closeBtn = document.querySelector(".close-modal");
let modal = document.querySelector(".form-container");

let openLoginBtn = document.querySelector(".open-login-modal");
let closeLoginBtn = document.querySelector(".close-login-modal");
let loginModal = document.querySelector(".login-form-container");

let buttons = document.querySelector(".buttons-div");

form.addEventListener("submit", (event) => validateForm(event));
loginForm.addEventListener("submit", (event) => validateLoginForm(event));

const validateLoginForm = (event) => {
  event.preventDefault();

  if (loginEmail.value === "" && loginEmail.value.length < 9) {
    loginEmailError.innerHTML = "Email must be entered and valid!";
    loginEmail.style.border = "2px solid red";
  } else {
    loginEmailError.innerHTML = "";
    loginEmail.style.border = "2px solid green";
  }

  if (loginPassword.value === "") {
    loginPasswordError.innerHTML = "Password must be entered!";
    loginPassword.style.border = "2px solid red";
  } else if (loginPassword.value.length < 8) {
    loginPasswordError.innerHTML = "Password must be over 8 characters long!";
    loginPassword.style.border = "2px solid red";
  } else {
    loginPasswordError.innerHTML = "";
    loginPassword.style.border = "2px solid green";
  }

  if (loginConfirmPassword.value === "") {
    loginConfirmPasswordError.innerHTML = "Must confirm password!";
    loginConfirmPassword.style.border = "2px solid red";
  } else if (loginConfirmPassword.value !== loginPassword.value) {
    loginConfirmPasswordError.innerHTML = "Passwords not matching!";
    loginConfirmPassword.style.border = "2px solid red";
  } else {
    loginConfirmPasswordError.innerHTML = "";
    loginConfirmPassword.style.border = "2px solid green";
  }
};

const validateForm = (event) => {
  event.preventDefault();

  if (nameSurname.value === "") {
    nameError.innerHTML = "Name and Surname are required!";
    nameSurname.style.border = "2px solid red";
  } else {
    nameError.innerHTML = "";
    nameSurname.style.border = "2px solid green";
  }

  if (email.value === "") {
    emailError.innerHTML = "Email is required!";
    email.style.border = "2px solid red";
  } else if (email.value.length < 9) {
    emailError.innerHTML = "Email is not valid!";
    email.style.border = "2px solid red";
  } else {
    email.style.border = "2px solid green";
    emailError.innerHTML = "";
  }

  if (confirmEmail.value === "") {
    confirmEmailError.innerHTML = "Please confirm email!";
    confirmEmail.style.border = "2px solid red";
  } else if (confirmEmail.value !== email.value) {
    confirmEmailError.innerHTML = "Emails don't match";
    confirmEmail.style.border = "2px solid red";
  } else {
    confirmEmail.style.border = "2px solid green";
    confirmEmailError.innerHTML = "";
  }

  if (password.value === "") {
    passError.innerHTML = "Password is required!";
    password.style.border = "2px solid red";
  } else if (password.value.length < 8) {
    passError.innerHTML = "Password should be atleast 8 characters long!";
    password.style.border = "2px solid red";
  } else {
    password.style.border = "2px solid green";
    passError.innerHTML = "";
  }

  if (confirmPassword.value === "") {
    confirmPassError.innerHTML = "Please confirm password!";
    confirmPassword.style.border = "2px solid red";
  } else if (confirmPassword.value !== password.value) {
    confirmPassError.innerHTML = "Passwords don't match";
    confirmPassword.style.border = "2px solid red";
  } else {
    confirmPassword.style.border = "2px solid green";
    confirmPassError.innerHTML = "";
  }
};

openBtn.addEventListener("click", () => {
  modal.style.display = "inline";
});
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
openLoginBtn.addEventListener("click", () => {
  loginModal.style.display = "inline";
  buttons.style.display = "none";
});
closeLoginBtn.addEventListener("click", () => {
  loginModal.style.display = "none";
  buttons.style.display = "inline";
});

formBtn.addEventListener("click", () => {
  if (
    nameSurname.value !== "" &&
    email.value.length > 8 &&
    confirmEmail.value === email.value &&
    password.value.length > 7 &&
    confirmPassword.value === password.value
  ) {
    alert("Succesful Sign Up, Have fun!");
  }
});

formLoginBtn.addEventListener("click", () => {
  if (
    loginEmail.value.length > 8 &&
    loginPassword.value.length > 7 &&
    loginConfirmPassword.value === loginPassword.value
  ) {
    alert("Succesful Log In, Welcome back!");
  }
});
