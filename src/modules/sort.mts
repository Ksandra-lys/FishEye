import { sortedMedia } from "./sortedMedia.mjs"
import type { Media } from "./type.mjs"
export function sortByPopularity(popularity : HTMLElement, data : Media[]) : void{
  popularity.addEventListener("click", () => {
    const popularPieces = Array.from(data)
    popularPieces.sort(function (a, b) {
      return b.likes - a.likes
    })
    sortedMedia(popularPieces)

  })
}

export function sortByDate(date : HTMLElement, data : Media[]) {
  date.addEventListener("click", () => {
    const recentDate = Array.from(data)
    recentDate.sort(function (a, b) {
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })
    sortedMedia(recentDate)
  })
}

export function sortByTitle(title : HTMLElement, data : Media[]) {
  title.addEventListener("click", () => {
    const orderedTitle = Array.from(data)
    orderedTitle.sort(function (a, b) {
      return a.title.localeCompare(b.title, "fr", { sensitivity: "base" })
    })
    sortedMedia(orderedTitle)
  })
}

