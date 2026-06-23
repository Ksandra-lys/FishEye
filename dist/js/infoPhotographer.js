var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getPhotographerInformation } from "../modules/getPhotographerInformation.mjs";
import { getParamsId } from "../helpers/getParamsId.mjs";
import { fetchData } from "../helpers/fetchData.mjs";
import { createInfoPhotographer } from "../widgets/createInfoPhotographer.mjs";
import { launchModalForm } from "../modules/launchModalForm.mjs";
import { displayPhotographerImage } from "../widgets/displayPhotographerImage.mjs";
import { getPhotographerMedia } from "../modules/getPhotographerInformation.mjs";
import { likeAndDislike } from "../modules/like.mjs";
import { displayFooterTotalLikes } from "../widgets/displayFooterTotalLikes.mjs";
import { lightbox } from "../modules/lightbox.mjs";
import { showAndHideDropdown } from "../modules/dropdown.mjs";
import { selectedDropdown } from "../modules/dropdown.mjs";
import { sortByDate, sortByTitle, sortByPopularity } from "../modules/sort.mjs";
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    //Récupère les données JSON (photographes + médias) 
    const data = yield fetchData("../data/photographers.json");
    // Récupère l’ID du photographe dans l’URL
    const profileId = getParamsId();
    //Cherche les infos du photographe correspondant dans les données
    const objectPhotographer = getPhotographerInformation(data, profileId);
    //Affiche les infos du photographe dans la page
    createInfoPhotographer(objectPhotographer);
    // Ouvrir le formulaire de contact
    launchModalForm();
    // Récupère uniquement les médias du photographe
    const arrayOfMedia = getPhotographerMedia(data, profileId);
    //Affiche les images/vidéos du photographe sur la page
    displayPhotographerImage(arrayOfMedia);
    //Calcule et affiche le total des likes dans le footer
    displayFooterTotalLikes(arrayOfMedia);
    // Ajoute la logique pour liker / disliker les médias
    likeAndDislike(arrayOfMedia);
    lightbox(arrayOfMedia);
    //Gère l’ouverture et la fermeture du menu dropdown 
    showAndHideDropdown();
    // Gère l’affichage de l’option sélectionnée dans le dropdown
    selectedDropdown();
    // Trie les médias par popularité, date et titre
    const popularity = document.getElementById("popularity");
    const date = document.getElementById("date");
    const title = document.getElementById("title");
    sortByPopularity(popularity, arrayOfMedia);
    sortByDate(date, arrayOfMedia);
    sortByTitle(title, arrayOfMedia);
}));
//# sourceMappingURL=infoPhotographer.js.map