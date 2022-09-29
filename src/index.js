import "./css/styles.css";

const indexPageLoader = (function() {
    document.title = "Le Me3la2"

    // Main div element that will contain all the web page content
    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "content");
    document.body.appendChild(contentDiv);

    // Header element
    const header = document.createElement("header");
    contentDiv.appendChild(header);

    // Logo div
    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    logoDiv.classList.add("logo-img");
    header.appendChild(logoDiv);

    // Logo Image
    const logoImg = document.createElement("img");
    logoImg.src = "../src/images/butchering.png";
    logoImg.alt = "Le Me3la2 Logo";
    logoDiv.appendChild(logoImg);

    const logoText = document.createElement("div");
    logoText.classList.add("logo");
    logoText.classList.add("logo-text");
    logoText.textContent = "LE ME3LA2 RESTO"
    header.appendChild(logoText);

    // Main div element
    const main = document.createElement("div");
    main.setAttribute("id", "main");
    contentDiv.appendChild(main);

    // Main image
    const mainImg = document.createElement("img");
    mainImg.src = "../src/images/bbq-dish.jpg";
    mainImg.alt = "Main Image";
    main.appendChild(mainImg);

    // Footer element
    const footer = document.createElement("footer");
    contentDiv.appendChild(footer);

    footer.textContent = "FOOTER"



})();