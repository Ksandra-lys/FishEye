const popup = document.querySelector(".popupBackground") as HTMLElement;
export function launchModalForm(): void {
    document.addEventListener("click", (e) => {
        e.preventDefault()
        const target = e.target as HTMLElement;
        if (target.classList.contains("contact_btn")) {
            popup.style.display = "flex";
        }
        if (target.classList.contains("close_btn")) {
            popup.style.display = "none";
        }
        if (target.classList.contains("submit_btn")) {
            let firstName = (document.getElementById("firstName") as HTMLInputElement).value;
            let lastName = (document.getElementById("lastName") as HTMLInputElement).value;
            let email = (document.getElementById("email") as HTMLInputElement).value;
            let message = (document.getElementById("message") as HTMLTextAreaElement).value;

            const firstNameErrorMsg = document.getElementById("firstNameErrorMsg") as HTMLElement
            const lastNameErrorMsg = document.getElementById("lastNameErrorMsg") as HTMLElement
            const emailErrorMsg = document.getElementById("emailErrorMsg") as HTMLElement
            const messageErrorMsg = document.getElementById("messageErrorMsg") as HTMLElement

            let nameRegExp = new RegExp("^[a-zA-Z]");
            let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");

            if (firstName.length < 2) {
                firstNameErrorMsg.textContent =
                    "Veuillez entrer votre prénom (plus de 02 lettres)";
            } else if (!nameRegExp.test(firstName)) {
                firstNameErrorMsg.textContent =
                    "Veuillez écrire correctement votre prénom";
            } else {
                firstNameErrorMsg.textContent = "";
            }

            if (lastName.length < 2) {
                lastNameErrorMsg.textContent =
                    "Veuillez entrer votre nom (plus de 02 lettres)";
            } else if (!nameRegExp.test(lastName)) {
                lastNameErrorMsg.textContent = "Veuillez écrire correctement votre nom";
            } else {
                lastNameErrorMsg.textContent = "";
            }

            if (email === "" || !emailRegExp.test(email)) {
                emailErrorMsg.textContent = "Veuillez entrer une adresse e-mail valide";
            } else {
                emailErrorMsg.textContent = "";
            }

            if (message === "") {
                messageErrorMsg.textContent = "Veuillez écrire un message";
            } else {
                messageErrorMsg.textContent = "";
            }

            if (
                firstName.length > 2 &&
                nameRegExp.test(firstName) &&
                lastName.length > 2 &&
                nameRegExp.test(lastName) &&
                email !== "" &&
                emailRegExp.test(email) &&
                message !== ""
            ) {
                alert("Formulaire envoyé");
                const userInformation = {
                    Prénom: firstName,
                    Nom: lastName,
                    Email: email,
                    Message: message,
                };
                console.log(userInformation);
                (document.getElementById("form") as HTMLFormElement).reset();

                popup.style.display = "none"
            }
        }

    });


}
