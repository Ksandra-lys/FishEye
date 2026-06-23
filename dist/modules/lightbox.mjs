export function lightbox(data) {
    const popup = document.querySelector(".lightbox_container");
    const mediaContainer = document.querySelector("#main");
    const lightboxContainer = document.querySelector(".lightbox_container");
    let currentIndex = 0;
    function displayImageAndVideo(index) {
        const media = data[index];
        console.log(media);
        const element = media.image ? `<img src="${media.image}" alt="${media.title}" class="slide_background_img media_image media_pictures">
          ` : `<video class="media_video media_pictures slide_background_img" controls>
        <source src="${media.video}" type="video/mp4">
        Votre navigateur ne supporte pas la vidéo.
        </video>
        `;
        lightboxContainer.innerHTML = ` 
        <div class="slide_background">
        ${element} 
        <span>${media.title}</span>
        <img class="close_lightboxmodal" src="/assets/icons/close.svg" alt="close">
         <img src="/assets/icons/left.svg" class="left_arrow" alt="précédent" id="prev">
         <img src="/assets/icons/right.svg" class="right_arrow" alt="suivant" id="next">
        </div>
        `;
        const slideBackground = document.querySelector(".slide_background");
        console.log(slideBackground);
        slideBackground.addEventListener("click", (e) => {
            const target = e.target;
            if (target.classList.contains("close_lightboxmodal")) {
                popup.style.display = "none";
            }
        });
        updateArrows(currentIndex, data);
    }
    mediaContainer.addEventListener("click", (e) => {
        const target = e.target;
        if (target.classList.contains("media_pictures")) {
            const card = target.closest(".pictures");
            const mediaId = card.dataset["id"];
            console.log(mediaId);
            currentIndex = data.findIndex((item) => item.id === Number(mediaId));
            displayImageAndVideo(currentIndex);
            popup.style.display = "block";
        }
        if (target.classList.contains("right_arrow") && currentIndex <= data.length - 1) {
            currentIndex += 1;
            displayImageAndVideo(currentIndex);
        }
        if (target.classList.contains("left_arrow") && currentIndex > 0) {
            currentIndex -= 1;
            displayImageAndVideo(currentIndex);
        }
    });
}
function updateArrows(currentIndex, data) {
    const rightArrow = document.querySelector(".right_arrow");
    const leftArrow = document.querySelector(".left_arrow");
    if (!rightArrow || !leftArrow)
        return;
    leftArrow.style.display = currentIndex === 0 ? "none" : "block";
    rightArrow.style.display = currentIndex === data.length - 1 ? "none" : "block";
}
//# sourceMappingURL=lightbox.mjs.map