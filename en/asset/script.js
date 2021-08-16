// functions
function openModal(modal) {
	if (modal == null) return
	modal.classList.add('active')
	overlay.classList.add('active')
}

function closeModal(modal) {
	if (modal == null) return
	modal.classList.remove('active')
	overlay.classList.remove('active')
}

function subscribe() {
	console.log("Open subscribe dialog...");
	if(dialog_main) {
		dialog_main.classList.add("active");
		dialog_bg.classList.add("active");
	}
}

function subscribe_submit(dialog) {
	console.log("subscribe_submit");
	// TODO: send ajax...
}

function subscribe_close(dialog) {
	console.log("subscribe_close");
	dialog.classList.remove("active");
	dialog_bg.classList.remove("active");
}

// variables
const nav = document.querySelector("header nav");
const nav_icon = document.querySelector("header .small-nav-icon");

const faq_items = document.querySelectorAll(".faq-item");

const dialog_bg = document.querySelector("#dialog-subscribe-background");
const dialog_main = document.querySelector("#dialog-subscribe");
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

// events
if(nav_icon) {
	nav_icon.addEventListener("click", function() {
		nav.classList.toggle("active");
	});
}

if(faq_items) {
	for(const faq of faq_items) {
		faq.querySelector(".faq-box").addEventListener("click", function() {
			console.log("faq item toggle!");
			faq.classList.toggle("active");
		});
	}
}


if(openModalButtons) {
	openModalButtons.forEach(button => {
		button.addEventListener('click', () => {
			const modal = document.querySelector(button.dataset.modalTarget)
			openModal(modal)
		})
	})
}

if(overlay) {
	overlay.addEventListener('click', () => {
		const modals = document.querySelectorAll('.modal.active')
			modals.forEach(modal => {
			closeModal(modal)
		})
	})
}

if(closeModalButtons) {
	closeModalButtons.forEach(button => {
		button.addEventListener('click', () => {
			const modal = button.closest('.modal')
			closeModal(modal)
		})
	})
}
