import { fetchData } from "../helpers/fetchData.mjs"

export  async function getInformationPhotographerById(id){
const infoId = parseInt(id)
const data = await fetchData(`../data/photographers.json`)
 const ArrayMediaPhotographer = data.media.filter((element)=>element.photographerId === infoId)
 const ObjectInfoPhotographer = data.photographers.find((element)=>element.id === infoId)
 const response ={
    photographer:ObjectInfoPhotographer,
    medias:ArrayMediaPhotographer
 }
 return response

  
}