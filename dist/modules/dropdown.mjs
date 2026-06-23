export function showAndHideDropdown() {
    const sortButton = document.querySelector(".dropdown_selected");
    const dropdown = document.querySelector(".dropdown");
    sortButton.addEventListener("click", () => {
        dropdown.classList.toggle("active");
    });
}
export function selectedDropdown() {
    const dropdownOption = document.querySelectorAll(".dropdown_option");
    const dropdownSelected = document.querySelector(".dropdown_selected");
    const dropdown = document.querySelector(".dropdown");
    dropdownOption.forEach((option) => {
        option.addEventListener("click", () => {
            console.log(option);
            dropdownSelected.childNodes[0].textContent = option.textContent;
            dropdown.classList.remove("active");
        });
    });
}
//# sourceMappingURL=dropdown.mjs.map