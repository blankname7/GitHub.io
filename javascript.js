const modal = document.getElementById("my-modal");
const openBtn = document.querySelector(".presentation");
const closeX = document.getElementById("modal-x");

openBtn.addEventListener("click", () => {
    modal.classList.add("show");
});

closeX.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
    }
});

const themeButton = document.getElementById("btnn1");

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
});

const nameInput = document.getElementById("name-input");
const phoneInput = document.getElementById("phone-input");
const submitButton = document.getElementById("submit-button");

function updateButtonState() {
    submitButton.disabled = !(nameInput.validity.valid && phoneInput.validity.valid)
}

nameInput.addEventListener("input", () => {
    updateButtonState();
});

phoneInput.addEventListener("input", () => {
    updateButtonState();
});

updateButtonState();

submitButton.addEventListener("click", () => {
    nameInput.value = "";
    phoneInput.value = "";
    updateButtonState();
});
