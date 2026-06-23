import { getPhotographerInformation } from "../modules/getPhotographerInformation.mjs"
import { getParamsId } from "../helpers/getParamsId.mjs"
import { fetchData } from "../helpers/fetchData.mjs"
import { createInfoPhotographer } from "../widgets/createInfoPhotographer.mjs"
import { launchModalForm } from "../modules/launchModalForm.mjs"
import { displayPhotographerImage } from "../widgets/displayPhotographerImage.mjs"
import { getPhotographerMedia } from "../modules/getPhotographerInformation.mjs"
import { likeAndDislike } from "../modules/like.mjs"
import { displayFooterTotalLikes } from "../widgets/displayFooterTotalLikes.mjs"
import { lightbox } from "../modules/lightbox.mjs"
import { showAndHideDropdown } from "../modules/dropdown.mjs"
import { selectedDropdown } from "../modules/dropdown.mjs"
import { sortByDate, sortByTitle, sortByPopularity } from "../modules/sort.mjs"

document.addEventListener("DOMContentLoaded",async ()=>{
    //Récupère les données JSON (photographes + médias) 
    const data = await fetchData("../data/photographers.json")
   
    // Récupère l’ID du photographe dans l’URL
    const profileId = getParamsId()

    //Cherche les infos du photographe correspondant dans les données
    const objectPhotographer = getPhotographerInformation(data, profileId)!
   
    //Affiche les infos du photographe dans la page
    createInfoPhotographer(objectPhotographer)

    // Ouvrir le formulaire de contact
    launchModalForm()

    // Récupère uniquement les médias du photographe
    const arrayOfMedia = getPhotographerMedia(data, profileId)

    //Affiche les images/vidéos du photographe sur la page
    displayPhotographerImage(arrayOfMedia)
    
    //Calcule et affiche le total des likes dans le footer
    displayFooterTotalLikes(arrayOfMedia)

    // Ajoute la logique pour liker / disliker les médias
    likeAndDislike(arrayOfMedia)
    
    lightbox(arrayOfMedia)

    //Gère l’ouverture et la fermeture du menu dropdown 
    showAndHideDropdown()

    // Gère l’affichage de l’option sélectionnée dans le dropdown
    selectedDropdown()

    // Trie les médias par popularité, date et titre
    const popularity = document.getElementById("popularity") as HTMLElement
    const date = document.getElementById("date") as HTMLElement
    const title = document.getElementById("title") as HTMLElement
    sortByPopularity(popularity, arrayOfMedia)
    sortByDate(date, arrayOfMedia)
    sortByTitle(title,arrayOfMedia)
    
})
