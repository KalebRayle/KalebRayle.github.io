/*
	Kaleb Rayle
	scripts
	Date: 12/13/23
*/

//Hamburger Menu Function
function hamburger() {
    var menu = document.getElementById("menu-links");
    var logo = document.getElementById("page-top");
    if(menu.style.display === "block" && logo.style.display === "none") {
        menu.style.display = "none";
        logo.style.display = "block";
    } else{
        menu.style.display = "block";
        logo.style.display = "none";
    }
}