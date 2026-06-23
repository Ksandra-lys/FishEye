export function getPhotographerInformation(Array, profileId) {
    const photographerInfo = Array.photographers.find((item) => item.id === profileId);
    return photographerInfo;
}
export function getPhotographerMedia(Array, profileId) {
    const mediaInfo = Array.media.filter((item) => item.photographerId === profileId);
    return mediaInfo;
}
//# sourceMappingURL=getPhotographerInformation.mjs.map