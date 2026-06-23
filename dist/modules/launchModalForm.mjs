const popup = document.querySelector(".popupBackground");
export function launchModalForm() {
    document.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target;
        if (target.classList.contains("contact_btn")) {
            popup.style.display = "flex";
        }
        if (target.classList.contains("close_btn")) {
            popup.style.display = "none";
        }
        if (target.classList.contains("submit_btn")) {
            let firstName = document.getElementById("firstName").value;
            let lastName = document.getElementById("lastName").value;
            let email = document.getElementById("email").value;
            let message = document.getElementById("message").value;
            const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
            const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
            const emailErrorMsg = document.getElementById("emailErrorMsg");
            const messageErrorMsg = document.getElementById("messageErrorMsg");
            let nameRegExp = new RegExp("^[a-zA-Z]");
            let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
            if (firstName.length < 2) {
                firstNameErrorMsg.textContent =
                    "Veuillez entrer votre prénom (plus de 02 lettres)";
            }
            else if (!nameRegExp.test(firstName)) {
                firstNameErrorMsg.textContent =
                    "Veuillez écrire correctement votre prénom";
            }
            else {
                firstNameErrorMsg.textContent = "";
            }
            if (lastName.length < 2) {
                lastNameErrorMsg.textContent =
                    "Veuillez entrer votre nom (plus de 02 lettres)";
            }
            else if (!nameRegExp.test(lastName)) {
                lastNameErrorMsg.textContent = "Veuillez écrire correctement votre nom";
            }
            else {
                lastNameErrorMsg.textContent = "";
            }
            if (email === "" || !emailRegExp.test(email)) {
                emailErrorMsg.textContent = "Veuillez entrer une adresse e-mail valide";
            }
            else {
                emailErrorMsg.textContent = "";
            }
            if (message === "") {
                messageErrorMsg.textContent = "Veuillez écrire un message";
            }
            else {
                messageErrorMsg.textContent = "";
            }
            if (firstName.length > 2 &&
                nameRegExp.test(firstName) &&
                lastName.length > 2 &&
                nameRegExp.test(lastName) &&
                email !== "" &&
                emailRegExp.test(email) &&
                message !== "") {
                alert("Formulaire envoyé");
                const userInformation = {
                    Prénom: firstName,
                    Nom: lastName,
                    Email: email,
                    Message: message,
                };
                console.log(userInformation);
                document.getElementById("form").reset();
                popup.style.display = "none";
            }
        }
    });
}
//# sourceMappingURL=launchModalForm.mjs.map