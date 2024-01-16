document.addEventListener('DOMContentLoaded', function () {
  // Attach openModal and openToolModal events to clickable elements
  var clickableElements = document.querySelectorAll('.tool, .video-project, .gallery-thumbnail');
  clickableElements.forEach(function (element) {
    var targetModal = element.getAttribute('data-target');
    if (targetModal) {
      element.addEventListener('click', function () {
        openModal(targetModal);
      });
    } else {
      var galleryIndex = parseInt(element.getAttribute('data-gallery-index'));
      if (!isNaN(galleryIndex)) {
        element.addEventListener('click', function () {
          openGalleryModal(galleryIndex);
        });
      }
    }
  });

  // Attach closeModal event to all close buttons
  var closeButtons = document.querySelectorAll('.modal .close');
  closeButtons.forEach(function (button) {
    button.addEventListener('click', closeModal);
  });
});
