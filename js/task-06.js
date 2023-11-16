const inputText = document.querySelector("#validation-input");

function verif (event) {
    const inputLength = Number(inputText.dataset.length);
    const dataValue = Number(inputText.value.trim().length);

    if (dataValue === inputLength) {
        inputText.classList.add("valid");
        inputText.classList.remove("invalid");
        
        } else {
            inputText.classList.add("invalid");
            inputText.classList.remove("valid");
        }
        
};
inputText.addEventListener("blur", verif);