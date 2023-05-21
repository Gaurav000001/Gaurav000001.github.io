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




/* This code is adding a scroll event listener to the window object. When the user scrolls down the
page, the function inside the event listener is executed. The function selects the HTML element
"header" using `document.querySelector("header")` and assigns it to a constant variable `header`.
Then, it toggles the class "sticky" on the `header` element based on the condition
`this.window.scrollY > 100`. If the user has scrolled down more than 100 pixels, the "sticky" class
is added to the `header` element, otherwise it is removed. This code is used to create a sticky
header that stays at the top of the page when the user scrolls down. */
const header = document.querySelector("header");
window.addEventListener("scroll", function(){

    header.classList.toggle("sticky", this.window.scrollY > 100);
});



//home icons links

//======== For Location Button ========//
/* This code is selecting an HTML element with the ID "home-location" using
`document.getElementById('home-location')` and assigning it to a constant variable
`home_location_button`. Then, it is adding an event listener to the `home_location_button` element
that listens for a click event. When the button is clicked, it opens a new window with the URL
`https://www.google.com/maps?q=` where `home_town` is a variable that contains the name
of a town or city. This code essentially creates a clickable button that redirects the user to a
Google Maps page showing the location of the specified town or city. */
const home_location_button = document.getElementById('home-location');

home_location_button.addEventListener('click', () => {

  const home_town = "Chandrapur";

  // Define the location where I want to redirect the user to
  const location = `https://www.google.com/maps?q=${home_town}`;

  // Redirect the user to the location using the window.location.href property
  window.open(location, '_blank');
});


//======== For Mail Button ========//
/* This code is selecting an HTML element with the ID "home-mail" using
`document.getElementById('home-mail')` and assigning it to a constant variable `home_mail_Button`.
Then, it is adding an event listener to the `home_mail_Button` element that listens for a click
event. When the button is clicked, it opens the user's email client and populates the "To" field
with the email address "gangulygaurav166@gmail.com" using
`window.open('mailto:gangulygaurav166@gmail.com', '_blank')`. This code essentially creates a
clickable button that opens the user's email client with the "To" field pre-populated with the email
address specified in the code. */
const home_mail_Button = document.getElementById('home-mail');

home_mail_Button.addEventListener('click', () => {

  // Define the email address where I want to redirect the user to
  const emailAddress = 'gangulygaurav166@gmail.com';

  // Open the user's email client and populate the "To" field with the email address
  window.open(`mailto:${emailAddress}`, '_blank');
});



//======== For LinkedIn Button ========//
/* This code is selecting an HTML element with the ID "home-linkedIn" using
`document.getElementById('home-linkedIn')` and assigning it to a constant variable
`home_linkedIn_button`. Then, it is adding an event listener to the `home_linkedIn_button` element
that listens for a click event. When the button is clicked, it opens a new window with the URL
"https://www.linkedin.com/in/gaurav-ganguly-bb7ba9246/" using `window.open(url, '_blank')`. This
code is essentially creating a clickable button that redirects the user to the LinkedIn profile of
the user "Gaurav Ganguly". */
const home_linkedIn_button = document.getElementById('home-linkedIn');

home_linkedIn_button.addEventListener('click', () => {

    const url = 'https://www.linkedin.com/in/gaurav-ganguly-bb7ba9246/';

    window.open(url, '_blank');

});


//======== For github Button ========//
/* This code is selecting an HTML element with the ID "home-github" using
`document.getElementById('home-github')` and assigning it to a constant variable
`home_github_button`. Then, it is adding an event listener to the `home_github_button` element that
listens for a click event. When the button is clicked, it opens a new window with the URL
"https://github.com/Gaurav000001" using `window.open(url, '_blank')`. This code is essentially
creating a clickable button that redirects the user to the GitHub profile of the user
"Gaurav000001". */
const home_github_button = document.getElementById('home-github');

home_github_button.addEventListener('click', () => {

    const url = 'https://github.com/Gaurav000001';

    window.open(url, '_blank');
    
});