//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
$("html, body").animate({ scrollTop: "0" }, 500);
  document.documentElement.scrollTop = 0;
}

//
    var scont = document.getElementById("sdiv");

    function fadeinsearch() {
        if (scont.style.display == "none") {
            scont.style.display = "block";
        } else {
            scont.style.display = "none";
        }
    }