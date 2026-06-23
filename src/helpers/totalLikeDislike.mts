import type { Media } from "../modules/type.mjs";
export function totalLikesDislike(data : Media[]) : number{
    const totalLikes = data.reduce(
   (accumulator, media) => accumulator + media.likes,
  0,
);
return totalLikes
}
