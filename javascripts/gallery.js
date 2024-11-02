var currentImageIndex = -1;
var images = [];

function openGalleryModal(galleryIndex) {
  currentImageIndex = -1;
  images = [];

  var modal = document.getElementById("galleryModal");
  var galleryContent = document.getElementById("galleryContent");

  galleryContent.innerHTML = ''; // Clear existing images

  var imagesPaths = [
    ["images/harabotBarzel/war1.png", "images/harabotBarzel/war2.png","images/harabotBarzel/war3.png","images/harabotBarzel/war4.png","images/harabotBarzel/war5.png","images/harabotBarzel/war6.png","images/harabotBarzel/war7.png","images/harabotBarzel/war8.png"],
    ["images/cyberPunk/cyberpunk.png", "images/cyberPunk/cyberpunk1.png", "images/cyberPunk/cyberpunk2.png", "images/cyberPunk/cyberpunk3.png", "images/cyberPunk/cyberpunk4.png", "images/cyberPunk/cyberpunk5.png", "images/cyberPunk/cyberpunk6.png", "images/cyberPunk/cyberpunk7.png", "images/cyberPunk/cyberpunk8.png", "images/cyberPunk/cyberpunk9.png", "images/cyberPunk/cyberpunk10.png"],
    ["images/Independence/1.png","images/Independence/2.png","images/Independence/3.png","images/Independence/4.png","images/Independence/5.png","images/Independence/6.png","images/Independence/7.png","images/Independence/8.png","images/Independence/9.png","images/Independence/10.png",]
  ];

  imagesPaths[galleryIndex].forEach(function(path) {
    var img = document.createElement("img");
    img.src = path;
    galleryContent.appendChild(img);
  });

  images = document.querySelectorAll('#galleryContent img');
  showImage(0);
  modal.style.display = "block";
}

function changeImage(step) {
  currentImageIndex += step;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  } else if (currentImageIndex < 0) {
    currentImageIndex = images.length - 1;
  }
  showImage(currentImageIndex);
}

function showImage(index) {
  if (index >= images.length) {
    index = 0;
  } else if (index < 0) {
    index = images.length - 1;
  }

  images.forEach(img => img.style.display = 'none');
  images[index].style.display = 'block';
  currentImageIndex = index;
  document.getElementById('imageCounter').innerText = (index + 1) + ' / ' + images.length;
}

