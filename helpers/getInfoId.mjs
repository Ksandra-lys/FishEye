export function  getParamsId(){
 const params = new URLSearchParams(window.location.search);
    const profileId = params.get("id");
    return parseInt(profileId)
}