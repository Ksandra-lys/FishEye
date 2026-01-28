export default function createPhotographerPage(
  objectOfphotographers,
  arrayOfmedia,
) {
  const mediaContainer = document.querySelector(".media-container");
  const photographerContainer = document.querySelector(".header_container");
  const modalFormContainer = document.querySelector(".modal-container");
  const lighboxContainer = document.querySelector(".lightbox_container")
  const footer = document.querySelector("footer");
  let mediaBlocPhotographerById = "";
  let infoBlocPhotographerById = "";
  let modalForm = "";
  let lightboxModal = ""
  let footerHTML = ""

  infoBlocPhotographerById += `
           <section class="photographer-description">
              <div class="text"> 
              <span class="name">${objectOfphotographers.name}</span>
              <span class="location">${objectOfphotographers.city}, ${objectOfphotographers.country}</span>
              <span class="description">${objectOfphotographers.tagline}</span>
              </div>
              <button class="contact_btn">Contactez-moi</button>
              <img src="${objectOfphotographers.portrait}" class="photo" alt="Photo de ${objectOfphotographers.name}">
         `;
  photographerContainer.innerHTML = infoBlocPhotographerById;

  arrayOfmedia.forEach((media) => {
    mediaBlocPhotographerById += `  
           
           <section class="photographer-portfolio">
            <div class="picture">
              <img src="${media.image}" alt="${media.title}"> 
              <div class="media_description">
               <span>${media.title}</span>
               <div class="likes">
                 <span>${media.likes}</span>
                 <img src="/assets/icons/red_like.svg" alt="bouton pour aimer">
               </div>
              </div>
            </div>
           </section>
           
        
  `;
    mediaContainer.innerHTML = mediaBlocPhotographerById;
  });

  modalForm += `
  <div class="popupBackground">
    <div class="bground">
     <div class="form_container>"
      <div class="content">
       <div class="form-header">
        <span>
          <span>Contactez-moi</span>
          <span> ${objectOfphotographers.name}</span>
        </span>
        <span class="close"></span>
      </div>
      <form class="contact_photographer_form" method="get">
        <div class="form_content">
          <div class="formData">
            <label for="firstName"> Prénom</label>
            <input type="text" name="firstName" id="firstName">
            <p id="firstNameErrorMsg"></p>
          </div>
          <div class="formData">
           <label for="lastName">Nom</label>
           <input type="text" name="lastName" id="lastName">
           <p id="lastNameErrorMsg"></p>
          </div>
          <div class="formData">
           <label for="email"> Email</label>
           <input type="email" name="email" id="email">
           <p id="emailErrorMsg"></p>
          </div>
          <div class="formData">
           <label for="message">Votre message</label>
           <textarea name="message" id="message" rows="7" cols="40"></textarea>
           <p id="messageErrorMsg"></p>
          </div>
          <div class="submit-btn">
           <input type="submit" value="Envoyer" id="send">
          </div>
        </div>
      </form>
     </div>  
    </div>
  </div>
  `;

  modalFormContainer.innerHTML = modalForm;

  lightboxModal += `
  <div class="lightbox_background">  
    <span class="close"></span>
    <div>
    <img src="${media.image}" alt="${media.title}" class="lightbox_image">
    <span>${media.title}</span>
    </div>
    <span class="left_arrow"></span>
    <span class="right_arrow"></span>
  </div>  
  `
  lighboxContainer.innerHTML = lightboxModal


  footerHTML += `
    <div class="footer_button">
      <div class="footer_button_likes">
        <span>234</span>
        
        <img src="/assets/icons/black_like.svg">
        
      </div>
      <span>${objectOfphotographers.price}$/jour</span>
    </div>
  `
  footer.innerHTML = footerHTML

}
