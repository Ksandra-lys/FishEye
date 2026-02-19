export function getDataset(targetElement) {
    for (let i = 0; i < targetElement.length; i++) {
        targetElement[i].addEventListener("click",  function (){
            const card = this.closest(".picture")
            console.log(card)
            //const elementId = parseInt(card.dataset.id)
            //return elementId
            //console.log(elementId)
        })
    }
}