export default function createPhotographerPage(
  objectOfphotographers,
  arrayOfmedia,
) {
  const mediaContainer = document.querySelector(".media-container");
  const photographerContainer = document.querySelector(".header_container");
  const modalFormContainer = document.querySelector(".modal-container");
  const lightboxContainer = document.querySelector(".lightbox_container");
  const footer = document.querySelector("footer");
  let mediaBlocPhotographerById = "";
  let infoBlocPhotographerById = "";
  let modalForm = "";
  let lightboxModal = "";
  let footerHTML = "";

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

   lightboxModal += `
    <div class="carousel">
       <img class="close_lightboxmodal" src="/assets/icons/close.svg" alt="close">
    <img src="/assets/icons/left.svg" class="left_arrow" alt="précédent" id="prev">
    <img src="/assets/icons/right.svg" class="right_arrow" alt="suivant" id="next">  
      <div class="slide">
 `;
 
  arrayOfmedia.forEach((media) => {
    mediaBlocPhotographerById += `  
           <section class="photographer-portfolio">
            <div class="pictures">
              <img src="${media.image}" alt="${media.title}" class="picture" data-id="${media.id}"> 
              <div class="media_description" >
               <span>${media.title}</span>
               <div class="likes">
                 <span class="like_count">${media.likes}</span>
                 <img src="/assets/icons/red_like.svg" alt="bouton pour aimer" class="like_btn">
               </div>
              </div>
            </div>
           </section>
  `;

   lightboxModal += `
    <div class="slide_background">
     
      <img src="${media.image}" alt="${media.title}" class="slide_background_img">
      <span>${media.title}</span> 
     </div> 
      
`;


  });
  mediaContainer.innerHTML = mediaBlocPhotographerById;
  lightboxModal += `
  </div>
</div> 
  `
  lightboxContainer.innerHTML = lightboxModal;


  modalForm += `
  <div class="popupBackground">
    <div class="bground">
     <div class="form_container">
      <div class="content">
       <div class="form-header">
        <span>
          <span>Contactez-moi</span>
          <span> ${objectOfphotographers.name}</span>
        </span>
        <span class="close_modalform"></span>
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

  footerHTML += `
    <div class="footer_button">
      <div class="footer_button_likes">
        <span>234</span>
        
        <img src="/assets/icons/black_like.svg">
        
      </div>
      <span>${objectOfphotographers.price}$/jour</span>
    </div>
  `;
  footer.innerHTML = footerHTML;
} 

