document.addEventListener("DOMContentLoaded", function () {
    const volumeIndicator = document.getElementById("volumeIndicator");
    const volumeBar = document.getElementById("volumeBar");
    const volumeUpButton = document.getElementById("volumeUpButton");
    const volumeDownButton = document.getElementById("volumeDownButton");
    let volumeLevel = 50;
  
    function updateVolumeIndicator() {
      volumeIndicator.style.height = volumeLevel + "%"; // This function adjusts the visual representation of volume
      volumeBar.style.height = (100 - volumeLevel) + "%";
    }
  
    function increaseVolume() {
      if (volumeLevel > 0) {
        volumeLevel -= 10;
        updateVolumeIndicator();
      }
    }
  
    function decreaseVolume() {
      if (volumeLevel < 100) {
        volumeLevel += 10;
        updateVolumeIndicator();
      }
    }
  
    volumeUpButton.addEventListener("click", decreaseVolume);
    volumeDownButton.addEventListener("click", increaseVolume);
  });
  
