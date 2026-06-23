import type { Media } from "../modules/type.mjs"
export function displaySortedPage(arrayOfMedia : Media[]) :void{
    const mediaContainer = document.querySelector(".media_container") as HTMLElement
    arrayOfMedia.forEach((media)=>{
         let mediaBloc = ""
         if (media.image) {
            mediaBloc = `
        <img src="${media.image}" alt="${media.title}" class="media_image media_pictures">
          `
        } else {
            mediaBloc = `
        <video class="media_video media_pictures" controls>
        <source src="${media.video}" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo.
        </video>
        `
        }

        mediaContainer.innerHTML += `
       <div class="pictures" data-id="${media.id}">
            ${mediaBloc}
            <div class="media_description">
                <span>${media.title}</span>
                <div class="likes">
                    <span class="like_count">${media.likes}</span>
                    <img src="/assets/icons/red_like.svg" alt="bouton pour aimer" class="like_btn"/>
                </div>
            </div>
         </div>
        `
        const lightboxContainer = document.querySelector(".lightbox_container") as HTMLElement
        const lightboxMedia = media.image?`<img src="${media.image}" alt="${media.title}" class="slide_background_img media_image media_pictures">
          ` :  `<video class="media_video media_pictures slide_background_img" controls>
        <source src="${media.video}" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo.
        </video>
        `
        lightboxContainer.innerHTML = ` 
        <div class="slide_background">
        ${lightboxMedia} 
        <span>${media.title}</span>
        <img class="close_lightboxmodal" src="/assets/icons/close.svg" alt="close">
         <img src="/assets/icons/left.svg" class="left_arrow" alt="précédent" id="prev">
         <img src="/assets/icons/right.svg" class="right_arrow" alt="suivant" id="next">
        </div>
        `
    })
}