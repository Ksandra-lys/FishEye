import {getInformationPhotographerById} from "../modules/getInformationPhotographerById.mjs"
import {getParamsId} from "../helpers/getInfoId.mjs"
import { launchModal } from "../helpers/LaunchmodalForm.mjs"
import createPhotographerPage  from "../widgets/createInfoPhotographer.mjs"
import { contactPhotographer } from "../modules/modalFormValidation.mjs"
document.addEventListener("DOMContentLoaded", async()=>{
  const profileId  = getParamsId()
  const data = await getInformationPhotographerById(profileId)
  createPhotographerPage(data.photographer,data.medias)
  
  const contactBtn = document.querySelector(".contact_btn")
  let modalForm = document.querySelector(".popupBackground")
  launchModal(contactBtn, modalForm)
  
  const close = document.querySelector(".close")
  close.addEventListener("click", ()=>{
    modalForm.style.display="none"
  })

  contactPhotographer()
  const image = document.querySelector(".photographer-portfolio img")
  console.log(image)
  image.addEventListener("click", ()=>{
     
  })

    
})