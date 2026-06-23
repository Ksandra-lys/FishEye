import { likeAndDislike } from "./like.mjs";
import { displayFooterTotalLikes } from "../widgets/displayFooterTotalLikes.mjs";
import { lightbox } from "./lightbox.mjs";
export function sortedMedia(arrayOfMedia) {
    const mediaContainer = document.querySelector(".media_container");
    mediaContainer.innerHTML = "";
    let mediaHTML = "";
    arrayOfMedia.forEach((media) => {
        mediaHTML += `
      <div class="pictures" data-id="${media.id}">
        ${media.image
            ? `<img src="${media.image}" alt="${media.title}" class="media_image media_pictures">`
            : `<video class="media_video media_pictures" controls>
                 <source src="${media.video}" type="video/mp4">
               </video>`}

        <div class="media_description">
          <span>${media.title}</span>
          <div class="likes">
            <span class="like_count">${media.likes}</span>
            <img src="/assets/icons/red_like.svg"
                 alt="like"
                 class="like_btn"
                 data-media-id="${media.id}">
          </div>
        </div>
      </div>
    `;
    });
    mediaContainer.innerHTML = mediaHTML;
    likeAndDislike(arrayOfMedia);
    displayFooterTotalLikes(arrayOfMedia);
    lightbox(arrayOfMedia);
}
//# sourceMappingURL=sortedMedia.mjs.map