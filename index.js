/* let spoiler = document.querySelectorAll(".site");
let activeIndex = null;
console.log(spoiler);


spoiler.forEach((el, index) => {
    el.addEventListener("click", () => {
        activeIndex = index;
        
        spoiler[activeIndex].calssList.toggle("active");
    });
}); */





let label = document.querySelector(".dropdown-label");
let options = document.querySelector(".dropdown-options");
let option = document.querySelector(".option");
let labelValue = document.querySelector(".contacts-span");

/* option.forEach((el) => {
    el.addEventListener("click", () => {
        labelValue.innerHTML = el.innerHTML;
        options.classList.remove("open");
    });
}); */

label.addEventListener("click", () => {
    options.classList.toggle("open");

});
