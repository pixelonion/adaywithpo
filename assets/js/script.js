document.addEventListener("DOMContentLoaded", function () {
    getYear();
});

function getYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}
