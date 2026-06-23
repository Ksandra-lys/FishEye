export function getParamsId() {
    const params = new URLSearchParams(window.location.search);
    const id = Number(params.get("id"));
    return id;
}
//# sourceMappingURL=getParamsId.mjs.map