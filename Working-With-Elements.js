
// if you want to make another page when clicking the button use this code
let links = document.querySelectorAll(".tag");
links.forEach(function(link){
    links.setAttribute("target", "_blank");
});