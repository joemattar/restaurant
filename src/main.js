function mainContentLoader() {
    const mainDiv = document.querySelector("#main");
    mainDiv.textContent = "";

    // Main image
    const mainImg = document.createElement("img");
    mainImg.src = "../src/images/bbq-dish.jpg";
    mainImg.alt = "Main Image";
    mainDiv.appendChild(mainImg);

};

function mainContentInitialLoader() {

    const contentDiv = document.querySelector("#content");

    // Main div element
    const mainDiv = document.createElement("div");
    mainDiv.setAttribute("id", "main");
    contentDiv.appendChild(mainDiv);

    mainContentLoader();

};

export {mainContentLoader, mainContentInitialLoader}