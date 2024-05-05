document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll(".card");
    const resetButton = document.getElementById("reset-button");

    let correctCardIndex;
    let gameInProgress = false; // Flag to track if a game is already in progress

    function shuffleCards() {
        correctCardIndex = Math.floor(Math.random() * 4);
        cards.forEach((card, index) => {
            card.style.order = Math.floor(Math.random() * 4);
            card.addEventListener("click", cardClicked.bind(null, index));
        });
        gameInProgress = true; // Set the flag to indicate a game is in progress
    }

    function cardClicked(index) {
        if (!gameInProgress) return; // Ignore clicks if a game is not in progress
        gameInProgress = false; // Set the flag to false to prevent multiple clicks
        if (index === correctCardIndex) {
            let volume = prompt("Congratulations! You've picked the right card. Please enter the desired volume (0-100):");
            if (volume !== null && !isNaN(volume) && volume >= 0 && volume <= 100) {
                alert("Volume set to " + volume);
                // Code to set the volume of the website goes here
                cards[index].classList.add("correct"); // Add class to change card color
            } else {
                alert("Invalid volume input. Volume remains unchanged.");
            }
        } else {
            alert("GAME OVER! You picked the wrong card; that sucks. Press the 'Reset Game' button to play again!");
            // Disable all cards to prevent further clicks
            cards.forEach(card => {
                card.removeEventListener("click", cardClicked);
            });
            // Enable the reset game button
            resetButton.disabled = false;
        }
    }

    function resetGame() {
        cards.forEach(card => {
            card.removeEventListener("click", cardClicked); // Remove event listener
            card.classList.remove("correct"); // Remove class to reset card color
        });
        shuffleCards(); // Shuffle cards for the next game
        resetButton.disabled = true; // Disable the reset game button after resetting the game
    }

    resetButton.addEventListener("click", resetGame);

    shuffleCards(); // Initial shuffle when the page loads
});
