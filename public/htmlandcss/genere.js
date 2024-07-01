document.addEventListener('DOMContentLoaded', function () {
  const sidebarItems = document.querySelectorAll('.sidebar-item');
  const popup = document.getElementById('popup');
  const queueItems = document.querySelectorAll('.queue-item');
  const mainImage = document.querySelector('.now-playing .main-image');
  const trackInfoTitle = document.querySelector('.now-playing .track-info h3');
  const trackInfoArtist = document.querySelector('.now-playing .track-info p');

  sidebarItems.forEach(item => {
      item.addEventListener('mouseenter', function () {
          const infoText = this.getAttribute('data-info');
          popup.textContent = infoText;
          const rect = this.getBoundingClientRect();
          popup.style.left = `${rect.right + 10}px`; // Corrected to use template literals
          popup.style.top = `${rect.top}px`; // Corrected to use template literals
          popup.style.opacity = 1;
      });

      item.addEventListener('mouseleave', function () {
          popup.style.opacity = 0;
      });
  });

  queueItems.forEach(item => {
      item.addEventListener('click', function () {
          const artist = this.getAttribute('data-artist');
          const title = this.getAttribute('data-title');
          const imageSrc = this.getAttribute('data-image');

          mainImage.src = imageSrc;
          trackInfoTitle.textContent = title;
          trackInfoArtist.textContent = artist;
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  // Select all image elements inside .image-container
  const images = document.querySelectorAll('.image-container img');
  // Select the main image element
  const mainImage = document.querySelector('.main-image');

  // Function to change the main image source to the clicked image source
  const changeMainImageSrc = (event) => {
      const newSrc = event.target.src; // Get the source of the clicked image
      mainImage.src = newSrc; // Set the main image source to the new source
  };

  // Add click event listener to each image in .image-container
  images.forEach(image => {
      image.addEventListener('click', changeMainImageSrc);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const songMap = {
      'playSongImage1': '/htmlandcss/cloudinary upload songs/We re Good - Dua Lipa.mp3',
      'playSongImage2': '/htmlandcss/cloudinary upload songs/11 NF - CLOUDS (Edit).mp3',
      'playSongImage3': '/htmlandcss/cloudinary upload songs/08 - Pink Birthday.mp3',
      'playSongImage4': '/htmlandcss/cloudinary upload songs/1_1_Dance_The_Night_From_Barbie_The_Album_Dua_Lipa_320.mp3',
      'playSongImage5': '/htmlandcss/cloudinary upload songs/What Other People Say - Sam Fischer.mp3',
  };

  let currentAudio = null; // Keep track of the current audio element

  // Function to play a song
  function playSong(songId) {
      if (currentAudio) {
          currentAudio.pause(); // Pause the current song if any
      }
      const songUrl = songMap[songId];
      if (songUrl) {
          currentAudio = new Audio(songUrl);
          currentAudio.play();
          updatePlayPauseIcon(true); // Update icon to 'pause'
      }
  }

  // Function to toggle play/pause
  function togglePlayPause() {
      if (currentAudio) {
          if (currentAudio.paused) {
              currentAudio.play();
              updatePlayPauseIcon(true); // Update icon to 'pause'
          } else {
              currentAudio.pause();
              updatePlayPauseIcon(false); // Update icon to 'play'
          }
      }
  }

  // Function to update the play/pause icon
  function updatePlayPauseIcon(isPlaying) {
      const icon = document.querySelector('.play-pause i');
      if (isPlaying) {
          icon.classList.remove('fa-play');
          icon.classList.add('fa-pause');
      } else {
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play');
      }
  }

  // Add click event listeners to images
  document.querySelectorAll('.image-container img').forEach(img => {
      img.addEventListener('click', function() {
          playSong(this.id);
      });
  });

  // Add click event listener to play/pause icon
  document.querySelector('.play-pause').addEventListener('click', togglePlayPause);
});