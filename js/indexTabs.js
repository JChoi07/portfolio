'use strict'

// VARIABLES-------------------------------------------------------

// Work Buttons
let workButton1 = document.querySelector(".works-2022");
workButton1.setAttribute('aria-active', 'true');

let workButton2 = document.querySelector(".works-2020-21");
workButton2.setAttribute('aria-active', 'false');

// Work Sections
//insert stuff here 

// FUNCTIONS AND INTERACTIVE SCRIPT--------------------------------
// Work section 1 highlight
workButton1.addEventListener("click", () => {
	//adding work 2022 section
	workButton1.classList.add("active");
	workButton1.setAttribute('aria-active', 'true');

	//removing work 2021 section
	workButton2.classList.remove("active");
	workButton2.setAttribute('aria-active', 'false');
})

// Work section 2 highlight
workButton1.addEventListener("click", () => {
	//adding work 2021 section
	workButton1.classList.add("active");
	workButton1.setAttribute('aria-active', 'true');

	//removing work 2022 section
	workButton2.classList.remove("active");
	workButton2.setAttribute('aria-active', 'false');
})