const giftButton = document.getElementById("giftButton");
const message = document.getElementById("message");

giftButton.addEventListener("click", function () {
    message.style.display = "block";
    giftButton.style.display = "none";
});