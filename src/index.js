import "./css/styles.css";

const indexPageLoader = (function() {
    const contentDiv = document.createElement("div");
    contentDiv.setAttribute("id", "content");
    document.body.appendChild(contentDiv);

    const header = document.createElement("header");
    contentDiv.appendChild(header);

    const main = document.createElement("div");
    main.setAttribute("id", "main");
    contentDiv.appendChild(main);

    main.textContent = "TESTING"

    const footer = document.createElement("footer");
    contentDiv.appendChild(footer);

    console.log("TESTING2")



})();