/*
 * Auto-generated content from the Brackets New Project extension.
 */

/* ESLint is a static code analysis tool for identifying problematic patterns found in JavaScript code. 
jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 
global $, window, document 
global document  */

// Simple jQuery event handler
$(document).ready(function () {
   // Get the modal
var modal = document.getElementById("modal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("featureImage");
var modalImg = document.getElementById("featureImagePop");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
});

