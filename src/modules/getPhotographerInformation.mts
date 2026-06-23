import type { Photographer } from "./type.mjs"
import type { Media } from "./type.mjs"
import type { data} from "./type.mjs"
export function getPhotographerInformation(Array : data, profileId : number){
    const photographerInfo = Array.photographers.find((item : Photographer) => item.id === profileId)
    return photographerInfo
}

export function getPhotographerMedia(Array : data, profileId : number){
    const mediaInfo = Array.media.filter((item : Media)=> item.photographerId === profileId)
    return mediaInfo
}