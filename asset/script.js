let nav_icon = document.querySelector("header .small-nav-icon");
let nav = document.querySelector("header nav");
nav_icon.addEventListener("click", function() {
	nav.classList.toggle("active");
});

let faq_items = document.querySelectorAll(".faq-item");
if(faq_items) {
	for(let faq of faq_items) {
		console.log(faq);
		faq.querySelector(".faq-box").addEventListener("click", function() {
			console.log("faq item toggle!");
			faq.classList.toggle("active");
		});
	}
}
