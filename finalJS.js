document.addEventListener("DOMContentLoaded", function () {
  const volumeIndicator = document.getElementById("volumeIndicator");
  const volumeUpButton = document.getElementById("volumeUpButton");
  const volumeDownButton = document.getElementById("volumeDownButton");
  let volumeLevel = 50;

  function updateVolumeIndicator() {
      volumeIndicator.style.height = volumeLevel + "%"; //This function adjusts the visual representation of volume
  }

  function increaseVolume() {
      if (volumeLevel < 100) {
          volumeLevel += 10;
          updateVolumeIndicator();
      }
  }

  function decreaseVolume() {
      if (volumeLevel > 0) {
          volumeLevel -= 10;
          updateVolumeIndicator();
      }
  }

  volumeUpButton.addEventListener("click", increaseVolume);
  volumeDownButton.addEventListener("click", decreaseVolume);
});
