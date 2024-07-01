document.addEventListener("DOMContentLoaded", () => {
  const favoriteItems = document.querySelectorAll('.favorite-item');

  // Function to update header content based on clicked song
  function updateHeaderContent(item) {
      const headerImage = document.querySelector('.image-box img');
      const headerTitle = document.querySelector('.header-text h1');
      const headerSubtitle = document.querySelector('.header-text p');
      const songTitle = item.querySelector('.info h3').textContent;
      const artistName = item.querySelector('.info p').textContent;
      const artistImage = item.querySelector('img').src;

      headerImage.src = artistImage;
      headerTitle.textContent = songTitle;
      headerSubtitle.textContent = artistName;
  }

  // Add click event listeners to favorite items to update header content
  favoriteItems.forEach(item => {
      item.addEventListener('click', () => {
          updateHeaderContent(item);
      });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const playPauseBtn = document.getElementById('playPauseBtn');
  let isPlaying = false; // Track play/pause state

  playPauseBtn.addEventListener('click', function() {
      // Toggle play/pause icon
      if (isPlaying) {
          this.innerHTML = '<i class="fas fa-play"></i>'; // Show play icon
          // Pause your audio here
      } else {
          this.innerHTML = '<i class="fas fa-pause"></i>'; // Show pause icon
          // Play your audio here
      }
      isPlaying = !isPlaying; // Toggle state
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const audioPlayer = document.getElementById('audioPlayer');
  const playPauseBtn = document.getElementById('playPauseBtn');
  let currentPlayingSong = '';

  // Song map
  const songMap = {
      'playSongImage1': '/htmlandcss/cloudinary upload songs/We re Good - Dua Lipa.mp3',
      'playSongImage2': '/htmlandcss/cloudinary upload songs/11 NF - CLOUDS (Edit).mp3',
      'playSongImage3': '/htmlandcss/cloudinary upload songs/08 - Pink Birthday.mp3',
      'playSongImage4': '/htmlandcss/cloudinary upload songs/1_1_Dance_The_Night_From_Barbie_The_Album_Dua_Lipa_320.mp3',
      'playSongImage5': '/htmlandcss/cloudinary upload songs/What Other People Say - Sam Fischer.mp3',
  };

  // Function to play a song
  function playSong(songId) {
      if (currentPlayingSong === songId && !audioPlayer.paused) {
          audioPlayer.pause();
          playPauseBtn.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
      } else {
          audioPlayer.src = songMap[songId];
          audioPlayer.play();
          playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Change to pause icon
          currentPlayingSong = songId;
      }
  }

  // Event listeners for images
  Object.keys(songMap).forEach(songId => {
      const songImage = document.getElementById(songId);
      songImage.addEventListener('click', function() {
          playSong(songId);
      });
  });

  // Toggle play/pause when the playPauseBtn is clicked
  playPauseBtn.addEventListener('click', function() {
      if (!audioPlayer.paused) {
          audioPlayer.pause();
          this.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
      } else if (audioPlayer.src) {
          audioPlayer.play();
          this.innerHTML = '<i class="fas fa-pause"></i>'; // Change to pause icon
      }
  });
});