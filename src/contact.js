import location from "./images/location.png";

function contactContentLoader() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";
    mainDiv.setAttribute("class", "");
    mainDiv.classList.add("contact-display");

    const menuItemDiv1 = document.createElement("div");
    menuItemDiv1.classList.add("menu-item");
    mainDiv.appendChild(menuItemDiv1);
    const menuItemTitle1 = document.createElement("div");
    menuItemTitle1.textContent = "TO CONTACT OR VISIT LE ME3LA2";
    menuItemDiv1.appendChild(menuItemTitle1);
    const menuItemText0 = document.createElement("div");
    menuItemText0.classList.add("alt-font");
    menuItemText0.textContent = "EMAIL: eat@leme3la2.com";
    menuItemDiv1.appendChild(menuItemText0);
    const menuItemText1 = document.createElement("div");
    menuItemText1.classList.add("alt-font");
    menuItemText1.textContent = "PHONE: 416 555 6677";
    menuItemDiv1.appendChild(menuItemText1);
    const menuItemText2 = document.createElement("div");
    menuItemText2.classList.add("alt-font");
    menuItemText2.textContent = "ADDRESS: 699 St Clair Ave W, Toronto, ON M6C 1B2";
    menuItemDiv1.appendChild(menuItemText2);
    const menuItemImg1 = document.createElement("img");
    menuItemImg1.src = location;
    menuItemImg1.alt = "Map Location";
    menuItemDiv1.appendChild(menuItemImg1);
    
};

export {contactContentLoader}