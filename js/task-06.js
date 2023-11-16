const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
    const inputLength = input.value.length;
    const dataValue = parseInt(input.getAttribute("data-length"));

    if (inputLength === dataValue) {
        input.classlist.add("valid");
        input.classlist.remove("invalid");
        
        } else {
        input.classlist.add("invalid");
        input.classlist.remove("valid");
        }
        console.log(inputLength);
        console.log(dataValue);
});
