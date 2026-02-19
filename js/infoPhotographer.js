import { getInformationPhotographerById } from "../modules/getInformationPhotographerById.mjs";
import { getMediaInformation } from "../modules/getMediaInformation.mjs";
import { getParamsId } from "../helpers/getInfoId.mjs";
import { launchModal } from "../helpers/launchModalForm.mjs";
import createPhotographerPage from "../widgets/createInfoPhotographer.mjs";
import { contactPhotographer } from "../modules/modalFormValidation.mjs";
import { changeSlide } from "../helpers/carousel.mjs";
import { showSlide } from "../helpers/carousel.mjs";
//import { getDataset } from "../helpers/getInfoMedia.mjs";
document.addEventListener("DOMContentLoaded", async () => {
  const profileId = getParamsId();
  let data = await getInformationPhotographerById(profileId);
  createPhotographerPage(data.photographer, data.medias);

  const contactBtn = document.querySelector(".contact_btn");
  let modalForm = document.querySelector(".popupBackground");
  launchModal(contactBtn, modalForm);

  const close = document.querySelector(".close_modalform");
  close.addEventListener("click", () => {
    modalForm.style.display = "none";
  });

  const closeLightboxmodal = document.querySelector(".close_lightboxmodal")
  closeLightboxmodal.addEventListener("click", ()=>{
    lightboxBackground.style.display = "none"
  
  })
  contactPhotographer();
  const image = document.querySelector(".photographer-portfolio img");
  image.addEventListener("click", () => { });

  /***** LIGHTBOX MODAL*****/
  const lightboxBackground = document.querySelector(".lightbox_container")
  const picture = document.querySelectorAll(".picture");
  const slides = document.querySelectorAll(".slide_background");
  for (let i = 0; i < picture.length; i++) {
    picture[i].addEventListener("click", async function () {
      const card = this.closest(".picture")
      const mediaId = parseInt(card.dataset.id)
      
      data = await getMediaInformation(mediaId)
      // createPhotographerPage(data.photographerData, [data.mediaData])
      lightboxBackground.style.display = "flex"
      slides[i]
    })
  } 
 
  /****** LIKE/DISLIKE ******/
  const likeBtn = document.querySelectorAll(".like_btn")
  const likeCount = document.querySelectorAll(".like_count")
  //let footerLikeCount = document.querySelector(".footer_button_likes span")
  let isLiked = false
  let count = data.medias.map(media => media.likes)
  //let likeId = data.medias.map(media => media.id)
  for (let i = 0; i < likeBtn.length; i++) {
    likeBtn[i].addEventListener("click", () => {
      if (!isLiked) {
        let realCount = count[i]
        realCount++
        
        console.log("like")
        isLiked = true
        likeCount[i].textContent = realCount
        // let footerLike = Number(footerLikeCount++)
        // console.log(footerLike)
        
      } else {
        let realCount = count[i]
        console.log("dislike")
        isLiked = false
        likeCount[i].textContent = realCount
      }
    })
  }

  /*****CAROUSEL****/
  const rightArrow = document.getElementById("next");
  const leftArrow = document.getElementById("prev");
  let slideIndex = 0
  showSlide(slideIndex);

  leftArrow.addEventListener("click", () => {
    changeSlide(-1)
  })
  rightArrow.addEventListener("click", () => {
    changeSlide(1)
  })
}) 