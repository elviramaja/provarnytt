"use strict";
var imageCounter = 1;
showDiv(imageCounter);
function changeImage(m) {
showDiv(imageCounter = imageCounter + m);
}
function showDiv(n) {
    var i;
    var imageArray = document.getElementsByClassName("mySlides");
    if (n > imageArray.length) {
    imageCounter = 1;
    }
    if (n < 1) {
    imageCounter = imageArray.length;
    }
    for (i = 0; i < imageArray.length; i++) {
    imageArray[i].style.display = "none";
    }
    imageArray[imageCounter - 1].style.display = "block";
}

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  