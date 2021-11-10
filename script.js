// We create a variable dropdownBtn set to the DOM button node
const dropdownBtn = document.querySelector(".dropdown-btn");
// We create a variable dropdownMenu set to the DOM element
const dropdownMenu = document.querySelector(".dropdown-menu-content");

// We listen for a click event
dropdownBtn.addEventListener("click", function() {
    // On click we toggle the class visible on the dropdown
    dropdownMenu.classList.toggle("visible");
});
