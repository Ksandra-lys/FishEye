import { totalLikesDislike } from "../helpers/totalLikeDislike.mjs";
import type { Media } from "../modules/type.mjs";
export function displayFooterTotalLikes(data : Media[]) : void{
    (document.getElementById ("footer_likes_count") as HTMLElement).textContent = totalLikesDislike(data).toString()
}