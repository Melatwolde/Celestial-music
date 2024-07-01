document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            const targetImage = document.querySelector('.image-25-icon');
            if (targetImage) {
                targetImage.src = this.src;
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const taylorSwiftElements = document.querySelectorAll('[class^="taylor-swift"]');

    taylorSwiftElements.forEach(function(element) {
        element.parentElement.addEventListener('click', function() {
            const maintyla= document.querySelector('.tyla-laura');
            if (maintyla) {
                maintyla.textContent = element.textContent;
            }
        });
    });
});
const songMap = {
    'playSongImage1': '/htmlandcss/cloudinary upload songs/We re Good - Dua Lipa.mp3',
    'playSongImage2': '/htmlandcss/cloudinary upload songs/11 NF - CLOUDS (Edit).mp3',
    'playSongImage3': '/htmlandcss/cloudinary upload songs/08 - Pink Birthday.mp3',
    'playSongImage4': '/htmlandcss/cloudinary upload songs/1_1_Dance_The_Night_From_Barbie_The_Album_Dua_Lipa_320.mp3',
    'playSongImage5': '/htmlandcss/cloudinary upload songs/What Other People Say - Sam Fischer.mp3',
  };
  
  let currentSongId = null; // Variable to track the current song ID
  
  // Function to play or pause the song
  function playSong(imageId) {
    let audio = document.getElementById('songAudio');
    if (!audio) {
      audio = document.createElement('audio');
      audio.id = 'songAudio';
      document.body.appendChild(audio);
    }
  
    const playPauseIcon = document.querySelector('.frame-child1');
  
    // Check if the clicked song is the same as the currently playing song
    if (currentSongId === imageId) {
      // Toggle play/pause
      if (!audio.paused) {
        audio.pause();
        if (playPauseIcon) {
          playPauseIcon.classList.remove('fa-pause');
          playPauseIcon.classList.add('fa-play');
        }
      } else {
        audio.play();
        if (playPauseIcon) {
          playPauseIcon.classList.remove('fa-play');
          playPauseIcon.classList.add('fa-pause');
        }
      }
    } else {
      // Change the source and play the new song
      audio.src = songMap[imageId];
      audio.play();
      currentSongId = imageId; // Update the current song ID
      if (playPauseIcon) {
        playPauseIcon.classList.remove('fa-play');
        playPauseIcon.classList.add('fa-pause');
      }
    }
  }
  
  // Select the target image that will change upon clicking other images
  const targetImage = document.querySelector('.frame-inner');
  
  // Attach event listeners to each image
  Object.keys(songMap).forEach(imageId => {
    const imageElement = document.getElementById(imageId);
    if (imageElement) {
      imageElement.addEventListener('click', function() {
        playSong(imageId);
        if (targetImage) {
          targetImage.src = this.src;
        }
      });
    }
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    const icons = document.querySelectorAll('.frame-child1');
    icons.forEach(icon => {
      icon.addEventListener('click', function() {
        if (this.classList.contains('fa-play')) {
          this.classList.remove('fa-play');
          this.classList.add('fa-pause');
        } else {
          this.classList.remove('fa-pause');
          this.classList.add('fa-play');
         
        }
      });
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Function to create and show the popup
    function showPopup(element) {
      const popup = document.createElement('div');
      popup.classList.add('popup-info');
      popup.textContent = element.getAttribute('data-info');
      document.body.appendChild(popup);
  
      // Position the popup
      const rect = element.getBoundingClientRect();
      popup.style.left = `${rect.left + window.scrollX + rect.width / 2 - popup.offsetWidth / 2}px`;
      popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight - 8}px`;
  
      // Show the popup
      popup.style.display = 'block';
  
      // Hide and remove the popup when not hovering
      element.addEventListener('mouseleave', function() {
        popup.remove();
      });
    }
  
    // Attach the showPopup function to hover event of each img tag
    document.querySelectorAll('.frame-parent img').forEach(img => {
      img.addEventListener('mouseenter', function() {
        showPopup(this);
      });
    });
  });