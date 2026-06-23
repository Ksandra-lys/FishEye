import type { Media } from "./type.mjs"
export function lightbox(data : Media []) : void{
    const popup = document.querySelector(".lightbox_container") as HTMLElement
    const mediaContainer = document.querySelector("#main") as HTMLElement
    const lightboxContainer = document.querySelector(".lightbox_container") as HTMLElement
    
    let currentIndex = 0
    function displayImageAndVideo(index : number) : void{
        const media = data[index]!
        console.log(media)
        
        const element = media.image?`<img src="${media.image}" alt="${media.title}" class="slide_background_img media_image media_pictures">
          ` :  `<video class="media_video media_pictures slide_background_img" controls>
        <source src="${media.video}" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo.
        </video>
        `
        lightboxContainer.innerHTML = ` 
        <div class="slide_background">
        ${element} 
        <span>${media.title}</span>
        <img class="close_lightboxmodal" src="/assets/icons/close.svg" alt="close">
         <img src="/assets/icons/left.svg" class="left_arrow" alt="précédent" id="prev">
         <img src="/assets/icons/right.svg" class="right_arrow" alt="suivant" id="next">
        </div>
        `
        const slideBackground = document.querySelector(".slide_background") as HTMLElement
        console.log(slideBackground)
        slideBackground.addEventListener("click", (e)=>{
            const target = e.target as HTMLElement
            if(target.classList.contains("close_lightboxmodal")){
                popup.style.display = "none"
            }
            
        })
        updateArrows(currentIndex, data)
    } 
    
    mediaContainer.addEventListener("click",(e)=>{
        const target = e.target as HTMLElement
        if(target.classList.contains("media_pictures")){
        
        const card = target.closest(".pictures") as HTMLElement
        const mediaId = card.dataset["id"]
        console.log(mediaId)
        currentIndex = data.findIndex((item)=>item.id === Number(mediaId))
        
        displayImageAndVideo(currentIndex) 
        popup.style.display="block"
        }
        if(target.classList.contains("right_arrow") && currentIndex <= data.length-1 ){
            currentIndex +=1
            displayImageAndVideo(currentIndex)  
        }
        if(target.classList.contains("left_arrow") && currentIndex > 0){
            currentIndex -= 1
            displayImageAndVideo(currentIndex) 
        }
    })
}
function updateArrows(currentIndex : number, data : Media[]) : void{
    const rightArrow = document.querySelector(".right_arrow") as HTMLElement
    const leftArrow = document.querySelector(".left_arrow") as HTMLElement

    if (!rightArrow || !leftArrow) return

    leftArrow.style.display = currentIndex === 0 ? "none" : "block"
    rightArrow.style.display = currentIndex === data.length - 1 ? "none" : "block"
}

