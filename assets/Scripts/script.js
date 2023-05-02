//putting the link to the resume section and giving the functionality to open in a new tab
document.getElementById("resume-button-1").addEventListener("click", function(){
    window.open("https://drive.google.com/file/d/1S8nqpKJWjNnIg9iYQ-FpHbYRkq7MSCkh/view?usp=share_link", '_blank')
})

document.getElementById("Small-nav-resume").addEventListener("click", function(){
    window.open("https://drive.google.com/file/d/1S8nqpKJWjNnIg9iYQ-FpHbYRkq7MSCkh/view?usp=share_link", '_blank')
})

document.getElementById("resume-button-2").addEventListener("click", function(){
    window.open("https://drive.google.com/file/d/1S8nqpKJWjNnIg9iYQ-FpHbYRkq7MSCkh/view?usp=share_link", '_blank')
})



// var vid = document.getElementById("video-bg");
// vid.playbackRate = .7;

const header = document.querySelector("header");
window.addEventListener("scroll", function(){

    header.classList.toggle("sticky", this.window.scrollY >100);
});



//home icons links

//======== For Location Button ========//
const home_location_button = document.getElementById('home-location');

home_location_button.addEventListener('click', () => {

  // Define the location where I want to redirect the user to
  const location = "https://www.google.com/maps?q=Chandrapur";

  // Redirect the user to the location using the window.location.href property
  window.open(location, '_blank');
});


//======== For Mail Button ========//
const home_mail_Button = document.getElementById('home-mail');

home_mail_Button.addEventListener('click', () => {

  // Define the email address where I want to redirect the user to
  const emailAddress = 'gangulygaurav166@gmail.com';

  // Open the user's email client and populate the "To" field with the email address
  window.open(`mailto:${emailAddress}`, '_blank');
});



//======== For LinkedIn Button ========//
const home_linkedIn_button = document.getElementById('home-linkedIn');

home_linkedIn_button.addEventListener('click', () => {

    const url = 'https://www.linkedin.com/in/gaurav-ganguly-bb7ba9246/';

    window.open(url, '_blank');

});


//======== For github Button ========//
const home_github_button = document.getElementById('home-github');

home_github_button.addEventListener('click', () => {

    const url = 'https://github.com/Gaurav000001';

    window.open(url, '_blank');
    
});