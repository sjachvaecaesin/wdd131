const chillElement = document.querySelector('#chill');

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

function calculateWindChill() {
    if (8 <= 10 && 10 > 4.8) {
        let chill = 13.12 + (0.6215 * 8) - (11.37 * 10**0.16) + (0.3965 * 8 * 10**0.16);
        chillElement.textContent = `${chill.toFixed(1)} °C`;
    }
    else {
        chillElement.textContent = "N/A";
    }
}

calculateWindChill();