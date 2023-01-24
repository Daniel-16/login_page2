const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");
//Get form inputs
const email = document.getElementById("login-email");
const password = document.getElementById("login-password");
const loginForm = document.getElementById("login-form");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted");
  console.log(password.value);
  fetch("https://interactive-login.onrender.com/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email: email.value,
      password: password.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

//Signup Forms
const signupName = document.getElementById("signup-name");
const signupEmail = document.getElementById("signup-email");
const signupPassword = document.getElementById("signup-password");
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(signupName.value);
  fetch("https://interactive-login.onrender.com/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      fullname: signupName.value,
      email: signupEmail.value,
      password: signupPassword.value,
    }),
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
});

const showPassword = document.getElementById("show-signup-password");
const showHidePassword = () => {
  if (signupPassword.type == "password") {
    signupPassword.setAttribute("type", "text");
    showPassword.innerHTML = "Hide Password";
  } else {
    signupPassword.setAttribute("type", "password");
    showPassword.innerHTML = "Show Password";
  }
};
showPassword.addEventListener("click", showHidePassword);
