// Minecraft Fishing Sim

// Variables to stone HTML Elements

let steveImgEl = document.getElementById("steve-img");
let villagerImgEl = document.getElementById("villager-img");
let alexImgEl = document.getElementById("alex-img");
let fishBtnEl = document.getElementById("fish-btn");
let imgResultEl = document.getElementById("img-result");
let numCodEl = document.getElementById("num-cod");
let numSalmonEl = document.getElementById("num-salmon");
let numTropicalEl = document.getElementById("num-tropical");
let numPufferEl = document.getElementById("num-puffer");

// Global Variables

let character = "Steve";
let numCod = "0";
let numSalmon = "0";
let numTropical = "0";
let numPuffer = "0";

// Event Listeners

steveImgEl.addEventListener("click", selectSteve);
alexImgEl.addEventListener("click", selectAlex);
fishBtnEl.addEventListener("click", fishOnce);
villagerImgEl.addEventListener("click", selectVillager)

function selectSteve() {
    // Update Active Border
    steveImgEl.classList.add("active");
    alexImgEl.classList.remove("active");
    villagerImgEl.classList.remove("active");

    // Update character selection variable
    character = "Steve";
}

function selectAlex() {
    // Update Active Border
    alexImgEl.classList.add("active");
    steveImgEl.classList.remove("active");
    villagerImgEl.classList.remove("active");

function selectVillager() {
    alexImgEl.classList.remove("active");
    steveImgEl.classList.remove("active");
    villagerImgEl.classList.add("active");
}

    // Update character selection variable
    character = "Alex";
}

function fishOnce() {
    // Test Current Character
    if (character === "Steve") {
        // Use Steve Probability Distribution for Fishing
        let randNum = Math.random();
        
        if (randNum < 0.7) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png";
            numCodEl.innerHTML = numCod;
        } else if (randNum < 0.9) {
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png";
            numSalmonEl.innerHTML = numSalmon;
        } else if (randNum < 0.95) {
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png";
            numTropicalEl.innerHTML = numTropical;
        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png";
            numPufferEl.innerHTML = numPuffer;
        }
    } else if (character === "Alex") {
        // use Alex Probability Distribution for Fishing
        let randNum = Math.random();

        if (randNum < 0.1) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png";
            numCodEl.innerHTML = numCod;
        } else if (randNum < 0.2) {
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png";
            numSalmonEl.innerHTML = numSalmon;
        } else if (randNum < 0.5) {
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png";
            numTropicalEl.innerHTML = numTropical;
        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png";
            numPufferEl.innerHTML = numPuffer;
        }
    } else {
        let randNum = Math.random();

        if (randNum < 0.25) {
            numCod++;
            imgResultEl.src = "img/Raw-Cod.png";
            numCodEl.innerHTML = numCod;
        } else if (randNum < 0.5) {
            numSalmon++;
            imgResultEl.src = "img/Raw-Salmon.png";
            numSalmonEl.innerHTML = numSalmon;
        } else if (randNum < 0.75) {
            numTropical++;
            imgResultEl.src = "img/Tropical-Fish.png";
            numTropicalEl.innerHTML = numTropical;
        } else {
            numPuffer++;
            imgResultEl.src = "img/Pufferfish.png";
            numPufferEl.innerHTML = numPuffer;
        }
    }
}