import { totalLikesDislike } from "../helpers/totalLikeDislike.mjs";
export function displayFooterTotalLikes(data) {
    document.getElementById("footer_likes_count").textContent = totalLikesDislike(data).toString();
}
//# sourceMappingURL=displayFooterTotalLikes.mjs.map