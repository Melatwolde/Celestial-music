const searchButton = document.querySelector('.vector-icon4');
const searchInput = document.querySelector('.search');
const resultsList = document.querySelector('.results');
const searchResults = document.querySelector('.search-results');
document.addEventListener('DOMContentLoaded', () => {
  const iconContainer = document.querySelector('.icon-container');
  const audioPlayer = document.getElementById('audioPlayer');

  iconContainer.addEventListener('click', () => {
      const icon = iconContainer.querySelector('.icon-overlay');
      if (icon.classList.contains('fa-play')) {
          icon.classList.remove('fa-play');
          icon.classList.add('fa-pause');
          audioPlayer.play();
      } else {
          icon.classList.remove('fa-pause');
          icon.classList.add('fa-play');
          audioPlayer.pause();
      }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-icon');
  const audioPlayer = document.getElementById('audioPlayer');

  images.forEach(image => {
    image.addEventListener('click', async () => {
      const imageId = image.getAttribute('data-song-id');
      try {
        const response = await fetch(`http://localhost:3338/songs/${imageId}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        audioPlayer.src = data.songUrl;
        audioPlayer.play();
      } catch (error) {
        console.error('Error fetching the song:', error);
      }
    });
  });
});


searchButton.addEventListener('click', () => {

  const query = searchInput.value;

  if (query) {

    const apiKey = '6797551cf07dc3e1736ab1eca6ab1029';
    fetch(`https://ws.audioscrobbler.com/2.0/?method=track.search&track=${query}&api_key=${apiKey}&format=json`)
    .then(response => response.json())
    .then(data => {
      resultsList.innerHTML = '';

      data.results.trackmatches.track.forEach(track => {
        const listItem = document.createElement('li');
        listItem.textContent = track.name;
        resultsList.appendChild(listItem);
      });

      searchResults.style.display = 'flex';
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }
});

// Add an event listener to the search input field
searchInput.addEventListener('input', () => {
  // If the input field is empty, hide the search results
  if (!searchInput.value) {
    searchResults.style.display = 'none';
  }
});




window.onload = ("DOMContentLoaded", function() {
    const icons = document.querySelectorAll('.vector-icon6, .vector-icon7, .vector-icon8, .vector-icon9, .vector-icon10');
    const playSrc = "circle-play-svgrepo-com.svg";
    const pauseSrc = "pause-stop-control-svgrepo-com.svg";

    icons.forEach(icon => {
        icon.addEventListener('click', function() {
            const currentSrc = this.src;
            if (currentSrc.includes(pauseSrc)) {
                this.src = playSrc;
            } else {
                this.src = pauseSrc;
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
  const image18 = document.querySelector(".image-18-icon");
  const image15 = document.querySelector(".image-15-icon");
  const image19 = document.querySelector(".image-19-icon");
  const image17 = document.querySelector(".image-17-icon");
  const image20 = document.querySelector(".image-20-icon");

  function swapImages(image) {
      const tempSrc = image.src;
      const tempWidth = image.style.width;
      const tempHeight = image.style.height;

      image.src = image18.src;
      image.style.width = image18.style.width;
      image.style.height = image18.style.height;

      image18.src = tempSrc;
      image18.style.width = tempWidth;
      image18.style.height = tempHeight;
  }
  image15.addEventListener("mouseenter", ()=> swapImages(image15));
  image15.addEventListener("click", ()=> swapImages(image15));
  image19.addEventListener("mouseenter", () => swapImages(image19));
  image19.addEventListener("click", () => swapImages(image19));

  image17.addEventListener("mouseenter", () => swapImages(image17));
  image17.addEventListener("click", () => swapImages(image17));

  image20.addEventListener("mouseenter", () => swapImages(image20));
  image20.addEventListener("click", () => swapImages(image20));
});


document.addEventListener("DOMContentLoaded", function() {
  // Select all the SVG icons that need to be toggled
  const svgIcons = document.querySelectorAll('img[src="pause-stop-control-svgrepo-com.svg"]');

  // Function to toggle the SVG icon source
  function toggleIcon(event) {
    const icon = event.target;
    if (icon.src.includes("pause-stop-control-svgrepo-com.svg")) {
      icon.src = "circle-play-svgrepo-com.svg";
    } else {
      icon.src = "pause-stop-control-svgrepo-com.svg";
    }
    

  }

  // Add click event listeners to each of the selected SVG icons
  svgIcons.forEach(icon => {
    icon.addEventListener("click", toggleIcon);
  });

});

document.addEventListener("DOMContentLoaded", function() {
  // Select all the SVG icons that need to be toggled
  const svgIcons1 = document.querySelectorAll('img[src="circle-play-svgrepo-com.svg"]');

  // Function to toggle the SVG icon source
  function toggleIcon(event) {
      const icon = event.target;
      if (icon.src.includes("circle-play-svgrepo-com.svg")) {
          icon.src = "pause-stop-control-svgrepo-com.svg";
      } else {
          icon.src = "circle-play-svgrepo-com.svg";
      }
  }

  // Add click event listeners to each of the selected SVG icons
  svgIcons1.forEach(icon => {
      icon.addEventListener("click", toggleIcon);
  });
});

// Mapping of image IDs to song paths
const songMap = {
  'playSongImage1': '/htmlandcss/cloudinary upload songs/We re Good - Dua Lipa.mp3',
  'playSongImage2': '/htmlandcss/cloudinary upload songs/11 NF - CLOUDS (Edit).mp3',
  'playSongImage3': '/htmlandcss/cloudinary upload songs/08 - Pink Birthday.mp3',
  'playSongImage4': '/htmlandcss/cloudinary upload songs/1_1_Dance_The_Night_From_Barbie_The_Album_Dua_Lipa_320.mp3',
  'playSongImage5': '/htmlandcss/cloudinary upload songs/What Other People Say - Sam Fischer.mp3',
};

let currentSongId = null; 
function playSong(imageId) {
  let audio = document.getElementById('songAudio');
  if (!audio) {
    audio = document.createElement('audio');
    audio.id = 'songAudio';
    document.body.appendChild(audio);
  }

  const playPauseIcon = document.querySelector('.frame-child1');

  if (currentSongId === imageId) {
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
  const icons = document.querySelectorAll('.search-bar img');

  icons.forEach(icon => {
    icon.addEventListener('mouseenter', function(e) {
      const popup = document.createElement('div');
      popup.classList.add('popup-info');
      popup.textContent = this.getAttribute('data-info'); 
      document.body.appendChild(popup);
      
      const iconRect = this.getBoundingClientRect();
      popup.style.left = `${iconRect.left + (iconRect.width / 2) - (popup.offsetWidth / 2)}px`;
      popup.style.top = `${iconRect.top + window.scrollY - popup.offsetHeight - 10}px`; 
      popup.style.display = 'block';
      this.addEventListener('mouseleave', function() {
        popup.remove();
      });
    });
  });
});
// const vidmap = {
//   "vid" : "/htmlandcss/cloudinary upload songs/Tyla-ART.mp4",
//   "vid1" : "/htmlandcss/cloudinary upload songs/taylor-reputation.mp4",
//   "vid2" : "/htmlandcss/cloudinary upload songs/Tyla-ART.mp4",
//   "vid3" : "/htmlandcss/cloudinary upload songs/We re Good - Dua Lipa.mp4",
//   "vid4" : "/htmlandcss/cloudinary upload songs/Taylor-Swift-Cruel-Summer.mp4",
// };



