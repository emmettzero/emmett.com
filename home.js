let partying = false;

function switchMode() {
    let page = document.querySelector("body");
    if (page.style.backgroundColor === "rgb(38, 36, 36)") {
        page.style.backgroundColor = "white";
        page.style.color = "black";
    } else {
       page.style.backgroundColor = "rgb(38, 36, 36)";
       page.style.color = "white";
    }
}

function changeColors() {
    let page = document.querySelector("body");
    let pageColor = page.style.backgroundColor;
    if (partying === true) {
    	defaultTheme();
   		return;
    }
   
    if (pageColor === "yellow") {
        page.style.backgroundColor = "red";
    } else if (pageColor === "red") {
        page.style.backgroundColor = "blue";
    } else if (pageColor === "blue") {
        page.style.backgroundColor = "purple";
    } else if (pageColor === "purple") {
        page.style.backgroundColor = "green";
    } else {
        page.style.backgroundColor = "yellow";
    }

}

function partyMode() {
    if (partying === false) {
        setInterval(changeColors, 500);
        partying = true;
    } else {
        let page = document.querySelector("body");
        partying = false;
        defaultTheme();
    }
}

function defaultTheme() {
    let page = document.querySelector("body");
	page.style.backgroundColor = "rgb(38, 36, 36)";
    page.style.color = "white";
}

