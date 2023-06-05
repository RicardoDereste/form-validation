const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
const message = document.querySelector("#message");
const errorMessages = document.querySelectorAll(".error-message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    resetErrors();
    validateInputs();
});

function setError(input, errorMessage) {
    const errorMessageElement = input.nextElementSibling;
    errorMessageElement.textContent = errorMessage;
    input.parentElement.classList.add("error");
}

function resetErrors() {
    errorMessages.forEach((msg) => {
        msg.textContent = "";
    });
    nameInput.parentElement.classList.remove("error");
    email.parentElement.classList.remove("error");
    subject.parentElement.classList.remove("error");
    message.parentElement.classList.remove("error");
}

function validateInputs() {
    const nameValue = nameInput.value.trim();
    const emailValue = email.value.trim();
    const subjectValue = subject.value.trim();
    const messageValue = message.value.trim();

    if (nameValue === "") {
        setError(nameInput, "Name cannot be left blank");
    }

    if (emailValue === "") {
        setError(email, "Email cannot be left blank");
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Email invalid");
    }

    if (subjectValue === "") {
        setError(subject, "Subject cannot be left blank");
    }

    if (messageValue === "") {
        setError(message, "Message cannot be left blank");
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}