import type { Photographer } from "../modules/type.mjs"
export function createProfile(photographers : Photographer[]) {
  const profileContainer = document.querySelector(".profiles_container") as HTMLElement
  photographers.forEach((profile) => {
    profileContainer.innerHTML +=
      `<div class="profile_card">
          <a href="/html/infoPhotographer.html?id=${profile.id}">
            <img src="${profile.portrait}" alt=""/>
          </a>
          <div class="profile_description">
            <span class="name">${profile.name}</span>
            <div class="profile_information">
              <span class="location">${profile.city}, ${profile.country}</span>
              <span class="tagline">${profile.tagline}</span>
              <span class="price">${profile.price}€/jour</span>
            </div>
          </div>
        </div>
        `
  })
}