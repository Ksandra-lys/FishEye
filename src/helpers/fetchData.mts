import type { data } from "../modules/type.mjs"
export async function fetchData(url : string) : Promise<data>{
    try{
       const response = await fetch(url)
       const data = await response.json()
       return data
    }
    catch(error){
        throw new Error("Erreur lors de la recuperation des donnees")
        
    }
}
