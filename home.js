function switchMode() {
    let page = document.querySelector("body");
    if (page.style.backgroundColor === "black") {
        page.style.backgroundColor = "white";
        page.style.color = "black";
    } else {
        page.style.backgroundColor = "black";
        page.style.color = "white";
    }
}
