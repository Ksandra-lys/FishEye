import type { Photographer } from "../modules/type.mjs"
export function createInfoPhotographer(objectOfPhotographer : Photographer) : void{
    const portfolioContainer = document.querySelector(".header_infophotographer") as HTMLElement
    const popupBackground = document.querySelector(".popupBackground") as HTMLElement
    const footer = document.querySelector("footer") as HTMLElement
    portfolioContainer.innerHTML = `
    <img src="/assets/images/logo.png" alt="Logo de FishEye" class="logo">
    <div class="header_content">
        <div class="photographer_description">
            <span class="name">${objectOfPhotographer.name}</span>
            <span class="location">${objectOfPhotographer.city}, ${objectOfPhotographer.country}</span>
            <span class="tagline">${objectOfPhotographer.tagline}</span>
        </div>
        <button class="contact_btn">Contactez-moi</button>
        <img src="${objectOfPhotographer.portrait}" alt="${objectOfPhotographer.name}">
    </div>
    ` 
    
    popupBackground.innerHTML = `
    <div class="form_container">
            <div class="form_header">
                <span>
                    <span>Contactez-moi</span>
                    <span>${objectOfPhotographer.name}</span>
                </span>
                <img src="/assets/icons/white_close.svg" alt="" class="close_btn">
            </div>
            <form class="contact_photographer_form" id="form">
                    <div class="formData">
                        <label for="firstName">Prénom</label>
                        <input type="text" name="firstName" id="firstName">
                        <span id="firstNameErrorMsg" class="error_message"></span>
                    </div>
                    <div class="formData">
                        <label for="lastName">Nom</label>
                        <input type="text" name="lastName" id="lastName">
                        <span id="lastNameErrorMsg" class="error_message"></span>
                    </div>
                    <div class="formData">
                        <label for="email">Email</label>
                        <input type="text" id="email" name="email">
                        <span id="emailErrorMsg" class="error_message"></span>
                    </div>
                    <div class="formData">
                        <label for="message">Votre message</label>
                        <textarea name="message" id="message" rows="7" cols="40"></textarea>
                        <span id="messageErrorMsg" class="error_message"></span>
                    </div>
                    <button class="submit_btn">Envoyer</button>
            </form>
        </div>    
    `
    footer.innerHTML = `
    <div class="footer_button">
        <div class="footer_button_likes">
            <span id="footer_likes_count"></span>
            <img src="/assets/icons/black_like.svg">
        </div>
        <span>${objectOfPhotographer.price}$/jour</span>
    </div>
    `
}
