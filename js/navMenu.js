// REFERENCES (Also found in the code)
// - Retractable nav source: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp


'use strict'


// VARIABLES---------------------------------------------------------------
let hamburgerButton = document.querySelector(".hamburger-button");
let hamburgerActive = false;
hamburgerButton.setAttribute('aria-open', 'false');

let dropdownMenu = document.querySelector("#dropdown");
dropdownMenu.setAttribute('aria-actve', 'false');

let dropdownWrapper = document.querySelector(".dropdown-menu");
dropdownWrapper.setAttribute('aria-open', 'false');

let dropdownBreakpoint = window.matchMedia("(min-width: 513px)");

let lastScrollPos = window.pageYOffset;
let navBar = document.querySelector("#nav-header");
navBar.setAttribute('aria-scroll-minimize', 'false');


// FUNCTIONS AND INTERACTIVE SCRIPTS---------------------------------------
// Close hamburger menu if screen is bigger than than 513px
function hamburgerClose(e){
	if (e.matches){
		dropdownMenu.setAttribute('aria-active', 'false');
		dropdownMenu.classList.remove("active");
		hamburgerButton.classList.remove('open');
		ariaHamburgerAttribute();
		ariaDropdownAttribute();
	}
}

dropdownBreakpoint.addListener(hamburgerClose);  // Listeners to close dropdownMenu
hamburgerClose(dropdownBreakpoint);



// Animate hamburger by adding or removing open class
hamburgerButton.addEventListener('click', ()=> {
	if (!hamburgerActive) {
		// Open hamburger
		hamburgerButton.classList.add('open');
		hamburgerActive = true;
		ariaHamburgerAttribute();

	}
	else{
		// Close hamburger
		hamburgerButton.classList.remove('open');
		hamburgerActive = false;
		ariaHamburgerAttribute();
	}
});

// Set aria-attribute
function ariaHamburgerAttribute(){
	if (hamburgerButton.classList.contains("open")){
		hamburgerButton.setAttribute('aria-open', 'true');
	}
	else{
		hamburgerButton.setAttribute('aria-open', 'false');
	}
}


//Activate Dropdown Menu
//Set aria-attribute
function ariaDropdownAttribute (){
	if (dropdownMenu.classList.contains("active")){
		dropdownMenu.setAttribute('aria-active', 'true');
	}
	else{
		dropdownMenu.setAttribute('aria-active', 'false');
	}
}

hamburgerButton.addEventListener("click", () => {
	if (!dropdownWrapper.classList.contains("open")){
		// Set dropdown menu to active
		dropdownMenu.classList.add("active");

		// Activate dropdown open animation
		dropdownWrapper.classList.add("open");
		dropdownWrapper.classList.remove("close");
		dropdownWrapper.setAttribute('aria-open', 'true');
		ariaDropdownAttribute();
	}
	else{
		// Activate dropdown close animation
		dropdownWrapper.classList.remove("open");
		dropdownWrapper.classList.add("close");
		dropdownWrapper.setAttribute('aria-open', 'false');
		ariaDropdownAttribute();
	}
})


// Retracting Nav
// Retractable Nav Source:https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
window.onscroll=function() {
	let currentScrollPos = window.pageYOffset;
	if (lastScrollPos > currentScrollPos){
		navBar.style.top = "0";
		navBar.setAttribute('aria-scroll-minimize', 'false');
	}
	else if (hamburgerActive==false){
		navBar.style.top = "-100px";
		navBar.setAttribute('aria-scroll-minimize', 'true');
	}
	lastScrollPos = currentScrollPos;
}