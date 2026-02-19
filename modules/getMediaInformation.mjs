import { fetchData } from "../helpers/fetchData.mjs";
export async function getMediaInformation(id) {

    const mediaids = Number(id)

    const data = await fetchData("../data/photographers.json")

    const mediaData = data.media.find((item) => item.id === mediaids)
    const photographerData = data.photographers.find((item) => item.id === mediaData.photographerId)
    return { mediaData, photographerData }

}


