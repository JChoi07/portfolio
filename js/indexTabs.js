'use strict'

// VARIABLES-------------------------------------------------------

// Work Buttons
let workButton1 = document.querySelector(".progress-bar-text.indexTab1");
workButton1.setAttribute('aria-active', 'true');

let workButton2 = document.querySelector(".progress-bar-text.indexTab2");
workButton2.setAttribute('aria-active', 'false');

// Work Sections
let worksTab1 = document.querySelector("#work-tab-1");
worksTab1.setAttribute('aria-active', 'true');

let worksTab2 = document.querySelector("#work-tab-2");
worksTab2.setAttribute('aria-active', 'false');


// FUNCTIONS AND INTERACTIVE SCRIPT--------------------------------
// Work section 1
workButton1.addEventListener("click", () => {
	//set colour of text
	workButton1.classList.add("active");
	workButton1.setAttribute('aria-active', 'true');
	workButton2.classList.remove("active");
	workButton2.setAttribute('aria-active', 'false');

	//adding work 2022 section
	worksTab1.classList.add("active");
	worksTab1.setAttribute('aria-active', 'true');

	//removing work 2021 section
	worksTab2.classList.remove("active");
	worksTab2.setAttribute('aria-active', 'false');
})

// Work section 2
workButton2.addEventListener("click", () => {
	//set colour of text
	workButton1.classList.remove("active");
	workButton1.setAttribute('aria-active', 'true');
	workButton2.classList.add("active");
	workButton2.setAttribute('aria-active', 'false');

	//adding work 2021 section
	worksTab2.classList.add("active");
	worksTab2.setAttribute('aria-active', 'true');

	//removing work 2022 section
	worksTab1.classList.remove("active");
	worksTab1.setAttribute('aria-active', 'false');
})