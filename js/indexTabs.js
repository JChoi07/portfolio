'use strict'

// VARIABLES-------------------------------------------------------

// Work Buttons
let workButton1 = document.querySelector(".progress-bar-text.indexTab1");
workButton1.setAttribute('aria-active', 'true');

let workButton2 = document.querySelector(".progress-bar-text.indexTab2");
workButton2.setAttribute('aria-active', 'false');

// Work Sections
let worksSection1 = document.querySelector(".works-2022");
worksSection1.setAttribute('aria-active', 'true');

let worksSection2=document.querySelector(".works-2020-21");
worksSection2.setAttribute('aria-active', 'false');

// FUNCTIONS AND INTERACTIVE SCRIPT--------------------------------
// Work section 1
workButton1.addEventListener("click", () => {
	//adding work 2022 section
	worksSection1.classList.add("active");
	worksSection1.setAttribute('aria-active', 'true');

	//removing work 2021 section
	worksSection2.classList.remove("active");
	worksSection2.setAttribute('aria-active', 'false');
})

// Work section 2
workButton2.addEventListener("click", () => {
	//adding work 2021 section
	worksSection2.classList.add("active");
	worksSection2.setAttribute('aria-active', 'true');

	//removing work 2022 section
	worksSection1.classList.remove("active");
	worksSection1.setAttribute('aria-active', 'false');
})