import { sortedMedia } from "./sortedMedia.mjs";
export function sortByPopularity(popularity, data) {
    popularity.addEventListener("click", () => {
        const popularPieces = Array.from(data);
        popularPieces.sort(function (a, b) {
            return b.likes - a.likes;
        });
        sortedMedia(popularPieces);
    });
}
export function sortByDate(date, data) {
    date.addEventListener("click", () => {
        const recentDate = Array.from(data);
        recentDate.sort(function (a, b) {
            return new Date(a.date).getTime() - new Date(b.date).getTime();
        });
        sortedMedia(recentDate);
    });
}
export function sortByTitle(title, data) {
    title.addEventListener("click", () => {
        const orderedTitle = Array.from(data);
        orderedTitle.sort(function (a, b) {
            return a.title.localeCompare(b.title, "fr", { sensitivity: "base" });
        });
        sortedMedia(orderedTitle);
    });
}
//# sourceMappingURL=sort.mjs.map