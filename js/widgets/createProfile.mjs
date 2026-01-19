import { photographers } from "../photographers.mjs";
export default function createProfile() {
  const profilesContainer = document.querySelector(".profiles-container");
  let profileHTML = "";
  photographers.forEach((profile) => {
    profileHTML += `
    <div class="profile-card">
     <img src="${profile.photo}" alt="${profile.name}" class="photo">
     <div class="profile-description">
    <span class="name">${profile.name}</span>
    <span class="location">${profile.location}</span>
    <span class="description">${profile.description}</span>
    <span class="price">${profile.price}€/jour</span>
    </div>
    </div>
  `;
  });
  profilesContainer.innerHTML = profileHTML;
}
