let resumeBtn = document.querySelector(".resume-button") ;
let downloadIcon = document.createElement("i") ;
downloadIcon.classList.add("fa-regular", "fa-circle-down") ;
resumeBtn.addEventListener("mouseenter", ()=>{
  resumeBtn.textContent = "" ;
    resumeBtn.append(downloadIcon)
})
resumeBtn.addEventListener("mouseleave", ()=>{
    resumeBtn.removeChild(downloadIcon)
    resumeBtn.textContent = "Resume" ;
})

let tabLinks = document.querySelectorAll(".tab-links") ;
let tabContents = document.querySelectorAll(".tab-contents") ;

function toggleTab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link") ;
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab") ;
    }
    event.currentTarget.classList.add("active-link") ;
    document.getElementById(tabname).classList.add("active-tab")
}

  // Get the button
  let mybutton = document.getElementById("myBtn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
      bigWindow.classList.add("navbar-toggle-class");

    } else {
      mybutton.style.display = "none";
      bigWindow.classList.remove("navbar-toggle-class");
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }