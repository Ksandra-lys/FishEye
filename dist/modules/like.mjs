import { displayFooterTotalLikes } from "../widgets/displayFooterTotalLikes.mjs";
export function likeAndDislike(data) {
    const likeButtons = document.querySelectorAll(".like_btn");
    const arrayOfLikedPictures = new Set();
    likeButtons.forEach((btn) => {
        btn.addEventListener("click", function () {
            const card = this.closest(".pictures");
            let mediaId = Number(card.dataset["id"]);
            const media = data.find((item) => item.id === mediaId);
            if (!media)
                return;
            if (arrayOfLikedPictures.has(mediaId)) {
                media.likes -= 1;
                arrayOfLikedPictures.delete(mediaId);
            }
            else {
                media.likes += 1;
                arrayOfLikedPictures.add(mediaId);
            }
            card.querySelector(".like_count").textContent = String(media.likes);
            displayFooterTotalLikes(data);
        });
    });
}
//# sourceMappingURL=like.mjs.map