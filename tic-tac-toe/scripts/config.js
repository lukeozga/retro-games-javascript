function openPlayerConfig(event) {
    editedPLayer = +event.target.dataset["playerid"];
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorsOutputElement.textContent = "";
    formElement.firstElementChild.lastElementChild.value = "";
}

function savePlayerConfig(event) {
    // Disable default form submission to backend
    event.preventDefault();
    // Instantiate new FormData object pointing at form triggering event, accesing entered name
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playername").trim();

    if (!enteredPlayerName) {
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }

    const updatedPLayerDataElement = document.getElementById("player-" + editedPLayer + "-data");
    updatedPLayerDataElement.children[1].textContent = enteredPlayerName;
    
    players[editedPLayer - 1].name = enteredPlayerName;

    closePlayerConfig();
}