const colorInput = document.querySelector("#color-input");
const profilePicture = document.querySelector("#profile-picture");
const name = document.querySelector("#name");

colorInput.addEventListener("input", function() {
  profilePicture.style.borderColor = colorInput.value;
});
