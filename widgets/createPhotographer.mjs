export default function createProfile(photographers) {
  console.log(photographers);

  let profileHTML = "";
  photographers.forEach((profile) => {
    profileHTML += `
    <div class="profile-card">
    <a href="/html/infoPhotographer.html?id=${profile.id}">
     <img src="${profile.portrait}" alt="${profile.name}" class="photo">
    </a>
     <div class="profile-description">
    <span class="name">${profile.name}</span>
    <span class="location">${profile.city}, ${profile.country}</span>
    <span class="description">${profile.tagline}</span>
    <span class="price">${profile.price}€/jour</span>
    </div>
    </div>
  `;
  });
  document.querySelector(".profiles-container").innerHTML = profileHTML;
}
