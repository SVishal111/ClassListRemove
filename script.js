var btn = document.getElementById("btn");
var heroSection = document.getElementById("heroSection");

btn.addEventListener("click", function() {
    heroSection.classList.remove("heroSectionRem");
    alert("Background Image Removed")
});