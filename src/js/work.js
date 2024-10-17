import ScrollReveal from "scrollreveal";
import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { scrollBtn } from "./scroll.js";

const workBackdrop = document.querySelector(".work-backdrop");
const close = document.querySelector(".work-modal-close")
const form = document.querySelector(".work-form")
const emailInput = document.querySelector(".work-input")
const workMessage = document.querySelector(".work-message")
const successIcon = document.querySelector(".work-success-icon");
const errorInput = document.querySelector(".error-input");
const loader = document.querySelector(".work-loader");
const errorMsg = document.querySelector(".error-input-msg")

close.addEventListener("click", () => {
    workBackdrop.classList.add("visually-hidden");
    document.body.style.overflow = 'auto';
})

window.addEventListener("keydown", (event) => {
    if (event.key === 'Escape') {
        workBackdrop.classList.add("visually-hidden");
        document.body.style.overflow = 'auto';
    }
})

workBackdrop.addEventListener("click", (event) => {
    workBackdrop.classList.add("visually-hidden");
    document.body.style.overflow = 'auto';
})

document.addEventListener('DOMContentLoaded', () => {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 0,
    reset: false,
  });
  const elementsToReveal = ['.work-text', '.work-list', '.work-bg', '.work-right'];
  elementsToReveal.forEach((element, index) => sr.reveal(element, { delay: 200 + index * 100 }));
});

const validateEmail = () => {
 
    if (emailInput.validity.valid) {
        successIcon.style.display = "block";
        errorInput.style.display = "none";
        return true;
    }

    else {
        successIcon.style.display = "none";
    }

    if (emailInput.value === "") {
        successIcon.style.display = "none";
    }

    if (emailInput !== "" && !emailInput.validity.valid) {
        errorInput.style.display = "block";
        errorInput.textContent = "Invalid email, try again"
    }
}

emailInput.addEventListener("input", validateEmail);

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (emailInput.value.trim() === "") {
        errorInput.style.display = "block";
        errorInput.textContent = "All fields must be filled";
        return;
    }

    if (workMessage.value.trim() === "") {
        errorMsg.style.display = "block";
        return;
    }

    else {
       errorMsg.style.display = "none";
    }

    if (emailInput.value.trim() !== "" && workMessage.value.trim() !== "" && validateEmail()) {
        loader.classList.remove("visually-hidden");
        const formObj = {
        email: emailInput.value.trim(),
        comment: workMessage.value.trim(),
  };

        try {
            const response =  await axios.post('https://portfolio-js.b.goit.study/api/requests', formObj)
            loader.classList.remove("visually-hidden");
            workBackdrop.classList.remove("visually-hidden");
            scrollBtn.classList.remove("is-active-scroll");
            document.body.style.overflow = 'hidden';
            const modalTitle = document.querySelector(".work-modal-title");
            const modalText = document.querySelector(".work-modal-text");
            
            modalTitle.textContent = response.data.title;
            modalText.textContent = response.data.message;

            errorInput.style.display = "none";
            successIcon.style.display = "none";
            form.reset();
            loader.classList.add("visually-hidden");
        }

        catch (error) {
            console.log(error);
            loader.classList.add("visually-hidden");
            iziToast.error({
                message: error.message,
                title: "Error",
                position: "center",
                timeout: 2000,
                overlay: true,
                color: '#f24d4c',
                image: 'linear-gradient(to right, #f24d4c55, #22242F 30% )',
            });
        }
    }
});