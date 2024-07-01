document.addEventListener('DOMContentLoaded', function() {
  var targetImage = document.querySelector('.frame-icon');

  var images = document.querySelectorAll('img');
  images.forEach(function(image) {
      image.addEventListener('click', function() {
          targetImage.src = this.src;
      });
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

  let audio = new Audio();
  let isPlaying = false;

  // Function to play a song
  function playSong(src) {
      if (audio.src !== src) {
          audio.src = src;
      }
      audio.play();
      isPlaying = true;
      updatePlayPauseIcon();
  }

  // Function to pause the current song
  function pauseSong() {
      audio.pause();
      isPlaying = false;
      updatePlayPauseIcon();
  }

  // Update the play/pause icon based on the current state
  function updatePlayPauseIcon() {
      const playPauseIcon = document.querySelector('.frame-child1');
      if (isPlaying) {
          playPauseIcon.classList.remove('fa-play');
          playPauseIcon.classList.add('fa-pause');
      } else {
          playPauseIcon.classList.remove('fa-pause');
          playPauseIcon.classList.add('fa-play');
      }
  }

  // Attach click event to images
  Object.keys(songMap).forEach(id => {
      const img = document.getElementById(id);
      if (img) {
          img.addEventListener('click', function() {
              playSong(songMap[id]);
          });
      }
  });

  // Toggle play/pause on icon click
  const playPauseIcon = document.querySelector('.frame-child1');
  playPauseIcon.addEventListener('click', function() {
      if (isPlaying) {
          pauseSong();
      } else {
          // If there's no song loaded yet, play the first song by default
          if (!audio.src) {
              playSong(songMap['playSongImage1']);
          } else {
              audio.play();
              isPlaying = true;
              updatePlayPauseIcon();
          }
      }
  });
});

document.addEventListener('DOMContentLoaded', (event) => {
  const lyrics = {
    playSongImage1: "Give me a day or two to think of something clever To write myself a letter To tell ",
    playSongImage2: "Give me a day or two to think of something clever To write myself a letter To tell me what to do, mm-mm Do you read my interviews? Or do you skip my avenue? When you said you were passin' through Was I even on your way? I knew when I asked you to (When I asked you to) Be cool about what I was tellin' you You'd do the opposite of what you said you'd do (What you said you'd do) And I'd end up more afraid Don't say it isn't fair You clearly werеn't aware that you made me misеrable So if you really wanna know",
    playSongImage3: "Give me a day or two to think of something clever To write myself a letter To tell me what to do, mm-mm Do you read my interviews? Or do you skip my avenue? When you said you were passin' through Was I even on your way? I knew when I asked you to (When I asked you to) Be cool about what I was tellin' you You'd do the opposite of what you said you'd do (What you said you'd do) And I'd end up more afraid Don't say it isn't fair You clearly werеn't aware that you made me misеrable So if you really wanna know"
  };
  function updateLyrics(albumId) {
    const lyricsText = document.querySelector('.lyrictext');
    lyricsText.textContent = lyrics[albumId];
  }

  document.getElementById('playSongImage1').addEventListener('click', () => updateLyrics('playSongImage1'));
  document.getElementById('playSongImage2').addEventListener('click', () => updateLyrics('playSongImage2'));
  document.getElementById('playSongImage3').addEventListener('click', () => updateLyrics('playSongImage3'));
});

document.addEventListener('DOMContentLoaded', function() {
    function showPopup(element) {
      const popup = document.createElement('div');
      popup.classList.add('popup-info');
      popup.textContent = element.getAttribute('data-info');
      document.body.appendChild(popup);
  
      const rect = element.getBoundingClientRect();
      popup.style.left = `${rect.left + window.scrollX + rect.width / 2 - popup.offsetWidth / 2}px`;
      popup.style.top = `${rect.top + window.scrollY - popup.offsetHeight - 8}px`;
  
      popup.style.display = 'block';
  
      element.addEventListener('mouseleave', function() {
        popup.remove();
      });
    }
    document.querySelectorAll('.frame-parent37 img').forEach(img => {
      img.addEventListener('mouseenter', function() {
        showPopup(this);
      });
    });
  });