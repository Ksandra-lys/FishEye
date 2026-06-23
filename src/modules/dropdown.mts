export function showAndHideDropdown() : void{
  const sortButton = document.querySelector(".dropdown_selected") as HTMLElement
  const dropdown = document.querySelector(".dropdown") as HTMLElement
  sortButton.addEventListener("click", () => {
    dropdown.classList.toggle("active")
  })
}

export function selectedDropdown() : void{
  const dropdownOption = document.querySelectorAll(".dropdown_option") as NodeListOf<HTMLElement>
  const dropdownSelected = document.querySelector(".dropdown_selected") as HTMLElement
  const dropdown = document.querySelector(".dropdown") as HTMLElement
 
  dropdownOption.forEach((option)=>{
    option.addEventListener("click", ()=>{
      console.log(option)
      dropdownSelected.childNodes[0]!.textContent = option.textContent
      dropdown.classList.remove("active")
      
    })
  })
}
