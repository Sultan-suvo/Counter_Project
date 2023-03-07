let value = 0;
document.getElementById("blue-btn").addEventListener("click", function () {
    value += 1;
    document.getElementById("counter").innerText = value;
})
document.getElementById("success-btn").addEventListener("click", function () {
    value -= 1;
    document.getElementById("counter").innerText = value;
})