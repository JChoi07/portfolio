'use strict'

// VARIABLES---------------------------------------------------------------
let lightModeButton = document.querySelector(".button.light-mode");
lightModeButton.setAttribute('aria-active', 'true');
let lightMode = true;

let darkModeButton = document.querySelector(".button.dark-mode");
darkModeButton.setAttribute('aria-active', 'false');
let darkMode = false;


// FUNCTIONS AND INTERACTIVE SCRIPT---------------------------------------
// Set data theme from light to dark
function switchTheme(){
	if (lightMode==true && darkMode==false){
		document.documentElement.setAttribute('data-theme', 'light');
		localStorage.setItem('theme', 'light');
	}
	else if (lightMode==false && darkMode==true){
		document.documentElement.setAttribute('data-theme', 'dark');
		localStorage.setItem('theme', 'dark');
	}
}

function storageSwitch(){

}

// Change switchTheme function from a button click
lightModeButton.addEventListener('click', ()=>{
	lightMode = true;
	darkMode = false;
	switchTheme();
})

darkModeButton.addEventListener('click', ()=>{
	lightMode = false;
	darkMode = true;
	switchTheme();
})





