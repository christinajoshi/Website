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

// function email(){
//   // window.location.href = 'mailto:' + $(this).data('mail')+'@' + $(this).data('domain') + '?subject=Contact from website';
//   alert("yo");
// };

// $('#sayHello').on('click', function(){
//   var one = "christinahello",
//         two = "zohomail.com";

//   window.location = 
//   "mailto:" +
//   one.substring(0) +
//   "@" +
//   two.substring(0)
// });

// $('#sayHello').click(function(e){
//   var one = "christinahello",
//         two = "zohomail.com";

//   location.href() = 
//   "mailto:" +
//   one.substring(0) +
//   "@" +
//   two.substring(0);
// });

// // Animating mailto Link
// window.onload = function(){
//   var animatedLink = document.getElementById('animatedLink');
//   animatedLink.style.marginLeft = "25px";
// };







// // Animating mailto Link
// $(window).load(function(){
//   var animatedLink = document.getElementById('animatedLink');
//   animatedLink.style.marginLeft = "200px";
// });

