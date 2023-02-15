const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#name-error span");
const email = document.querySelector("#email");
const emailError = document.querySelector("#email-error span");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subject-error span");
const message = document.querySelector("#message");
const messageError = document.querySelector("#message-error span");
const success = document.querySelector(".success");

const validationForm = (event) => {
  event.preventDefault();

  if (checkLength(fullName.value, 5) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (validEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(subject.value, 15) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (checkLength(message.value, 25) === true) {
    messageError.style.display = "none";
  } else {
    messageError.style.display = "block";
  }

  if (
    checkLength(fullName.value, 5) === true &&
    validEmail(email.value) === true &&
    checkLength(subject.value, 15) === true &&
    checkLength(message.value, 25) === true
  ) {
    succsess.style.display = "block";
    form.style.display = "none";
  } else {
    success.style.display = "none";
  }
};

form.addEventListener("submit", validationForm);

const checkLength = (value, len) => {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
};

const validEmail = (email) => {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatch = regEx.test(email);
  return patternMatch;
};
