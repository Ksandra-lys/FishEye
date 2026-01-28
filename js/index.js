import { fetchData } from "../helpers/fetchData.mjs";
import createProfile from "../widgets/createPhotographer.mjs";

document.addEventListener("DOMContentLoaded", () => {
  fetchData("../data/photographers.json").then((data) => {
    console.log(data)
    createProfile(data.photographers)
  })

});
 