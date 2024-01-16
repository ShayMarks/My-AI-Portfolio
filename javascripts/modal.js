// Function to open a specific modal
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "block";
  }
}

// Function to close all modals
function closeModal() {
  var modals = document.getElementsByClassName('modal');
  for (var i = 0; i < modals.length; i++) {
    modals[i].style.display = "none";
  }
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  if (event.target.className === "modal") {
    closeModal();
  }
}
