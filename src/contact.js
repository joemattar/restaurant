function contactContentLoader() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";
    mainDiv.setAttribute("class", "");
    mainDiv.classList.add("contact-display");

    mainDiv.textContent = "TESTING-MENU-CONTACT"

};

export {contactContentLoader}