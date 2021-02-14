var header = document.getElementById("site-header");

function collapseHeader() {
	var toggleButton = document.getElementById("header-toggle");
	header.classList.toggle("is-collapsed");
	toggleButton.classList.toggle("fa-angle-double-left");
	toggleButton.classList.toggle("fa-angle-double-right");
}