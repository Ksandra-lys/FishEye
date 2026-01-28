export function contactPhotographer(){
    let form = document.querySelector(".contact_photographer_form")
    const submitBtn = document.getElementById("send")
    submitBtn.addEventListener("click", async (event) => {
    event.preventDefault()
    const firstName = document.getElementById("firstName").value
    const lastName = document.getElementById("lastName").value
    const email = document.getElementById("email").value
    const message = document.getElementById("message").value

    let nameRegExp = new RegExp("^[a-zA-Z]")
    let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+")

    if (firstName.length < 2) {
      firstNameErrorMsg.textContent = "Veuillez entrer votre prénom (plus de 02 lettres)"
    } else if(!nameRegExp.test(firstName)){
      firstNameErrorMsg.textContent = "Veuillez écrire correctement votre prénom"
    } else {
      firstNameErrorMsg.textContent = ""
    }

    if (lastName.length < 2) {
      lastNameErrorMsg.textContent = "Veuillez entrer votre nom (plus de 02 lettres)"
    } else if (!nameRegExp.test(lastName)){
      lastNameErrorMsg.textContent = "Veuillez écrire correctement votre nom"
    } else {
      lastNameErrorMsg.textContent = ""
    }

    if (email === "" || !emailRegExp.test(email)) {
      emailErrorMsg.textContent = "Veuillez entrer une adresse e-mail valide"
    } else {
      emailErrorMsg.textContent = ""
    }

    if(message === ""){
        messageErrorMsg.textContent = "Veuillez écrire un message"
    } else {
        messageErrorMsg.textContent = ""
    }
    if (firstName.length > 2 && nameRegExp.test(firstName) && lastName.length > 2 && nameRegExp.test(lastName)
      && email !== "" && emailRegExp.test(email) && message !== "") {
        alert("Formulaire envoyé")
        form.reset();
    }
      
    }) 
}