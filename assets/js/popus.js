 // Get the popup
 var popup = document.getElementById("myPopup");

 // Get the close button
 var close = document.getElementsByClassName("close")[0];

 // Show the popup when the page loads
 window.onload = function() {
   popup.style.display = "block";
 }

 // Close the popup when the close button is clicked
 close.onclick = function() {
   popup.style.display = "none";
 }

 // Close the popup when clicking outside the popup
 window.onclick = function(event) {
   if (event.target == popup) {
     popup.style.display = "none";
   }
 }