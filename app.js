const myHeading = document.getElementById("heading")
const input = document.getElementById("input")
const submit = document.getElementById("submit")

submit.addEventListener("click", () => {
    myHeading.style.color=input.value
}
)