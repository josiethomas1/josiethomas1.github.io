document.addEventListener("DOMContentLoaded", function () {
    const volumeSlider = document.getElementById("volumeSlider");
    const changeVolumeButton = document.getElementById("changeVolumeButton");
    const volumeNumber = document.getElementById("volumeNumber");
  
    volumeSlider.addEventListener("input", function () {
      changeBackgroundColor();
      updateVolumeNumber();
    });
  
    changeVolumeButton.addEventListener("click", function () {
      decreaseVolume();
      animateButton();
    });
  
    function changeBackgroundColor() {
      const volume = volumeSlider.value;
      const red = Math.round((255 * volume) / 100);
      const green = Math.round((255 * (100 - volume)) / 100);
      document.body.style.backgroundColor = `rgb(${red}, ${green}, 0)`;
    }
  
    function decreaseVolume() {
      if (volumeSlider.value > 0) {
        volumeSlider.value -= 10;
        changeBackgroundColor();
        updateVolumeNumber();
      }
    }
  
    function animateButton() {
      const maxOffset = 10;
      let currentOffset = 0;
      const interval = setInterval(() => {
        changeVolumeButton.style.transform = `translateX(${currentOffset}px)`;
        currentOffset = -currentOffset;
        if (currentOffset >= maxOffset) {
          clearInterval(interval);
        }
      }, 50);
    }
  
    function updateVolumeNumber() {
      volumeNumber.textContent = volumeSlider.value;
    }
  });
  