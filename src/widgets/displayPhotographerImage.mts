import type { Media } from "../modules/type.mjs"
export function displayPhotographerImage(arrayMedia : Media[]) : void{
    const mediaContainer = document.querySelector(".media_container") as HTMLElement
    let mediaHTML =""
    arrayMedia.forEach((media) => {
        if (media.image) {
            mediaHTML = `
        <img src="${media.image}" alt="${media.title}" class="media_image media_pictures">
          `
        } else {
            mediaHTML = `
        <video class="media_video media_pictures" controls>
        <source src="${media.video}" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo.
        </video>
        `
        }

        mediaContainer.innerHTML += `
       <div class="pictures" data-id="${media.id}">
            ${mediaHTML}
            <div class="media_description">
                <span>${media.title}</span>
                <div class="likes">
                    <span class="like_count">${media.likes}</span>
                    <img src="/assets/icons/red_like.svg" alt="bouton pour aimer" class="like_btn"/>
                </div>
            </div>
        </div>
    `
    })
}
