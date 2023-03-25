//putting the link to the resume section and giving the functionality to open in a new tab
document.getElementById("Big-nav-resume").addEventListener("click", function(){
    window.open("https://drive.google.com/file/d/1S8nqpKJWjNnIg9iYQ-FpHbYRkq7MSCkh/view?usp=share_link", '_blank')
})

document.getElementById("Small-nav-resume").addEventListener("click", function(){
    window.open("https://drive.google.com/file/d/1S8nqpKJWjNnIg9iYQ-FpHbYRkq7MSCkh/view?usp=share_link", '_blank')
})

document.getElementById("third-resume-button").addEventListener("click", function(){
    window.open("https://drive.google.com/file/d/1S8nqpKJWjNnIg9iYQ-FpHbYRkq7MSCkh/view?usp=share_link", '_blank')
})



// var vid = document.getElementById("video-bg");
// vid.playbackRate = .7;

const header = document.querySelector("header");
window.addEventListener("scroll", function(){

    header.classList.toggle("sticky", this.window.scrollY >100);
});

