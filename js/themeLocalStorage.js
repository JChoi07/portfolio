// REFERENCES (Also found in code)
// - CSS Tricks Guide to Dark Mode: https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/

'use strict'


// Variables
let currentTheme = localStorage.getItem('theme');

// Save website theme in local local storage
if (currentTheme == "dark"){
	document.documentElement.setAttribute('data-theme', 'dark');
}