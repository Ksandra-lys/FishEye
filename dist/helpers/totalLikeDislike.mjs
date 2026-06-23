export function totalLikesDislike(data) {
    const totalLikes = data.reduce((accumulator, media) => accumulator + media.likes, 0);
    return totalLikes;
}
//# sourceMappingURL=totalLikeDislike.mjs.map