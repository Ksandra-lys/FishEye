export function getParamsId() : number {
    const params = new URLSearchParams(window.location.search)
    const id = Number(params.get("id"))
    return id
} 