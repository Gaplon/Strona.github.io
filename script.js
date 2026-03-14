function showMessage(){

document.getElementById("secret").style.opacity="1"

}
const dates = document.querySelectorAll(".date")
const preview = document.getElementById("preview-img")

dates.forEach(date => {

date.addEventListener("mouseenter", () => {

preview.src = date.dataset.img
preview.style.opacity = "1"
preview.style.transform = "scale(1)"

})

date.addEventListener("mouseleave", () => {

preview.style.opacity = "0"
preview.style.transform = "scale(0.9)"

})

})