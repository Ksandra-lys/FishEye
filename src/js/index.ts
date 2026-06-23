import { fetchData } from "../helpers/fetchData.mjs"
import { createProfile } from "../widgets/createPhotographer.mjs"

document.addEventListener("DOMContentLoaded", async ()=>{
    const data = await fetchData(`../data/photographers.json`)
    createProfile(data.photographers) 

})