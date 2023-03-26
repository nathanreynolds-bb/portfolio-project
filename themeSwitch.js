//Define the toggle button
const toggleButton = document.getElementById("themeSwitch");

//Define callback function for toggle button
function swapColors(color) {
	const navLinks = document.getElementsByClassName("nav-link");
	const sections = document.getElementsByTagName("section");
	if (color == "rgb(255, 255, 255)" || color == "white") {
		// handle nav bar
		for (const link of navLinks) {
			link.style.color = "black";
		}
		document.getElementsByTagName("nav")[0].style.backgroundColor = "#9f9f9f";

		// handle sections
		for (section of sections) {
			section.style.color = "white";
			section.style.backgroundColor = "#1c1c1c"
		}

		// handle contact links
		if (document.title == "Contact") {
			console.log('is Contact')
			for (link of document.getElementsByClassName("contact-link")) {
				console.log(link)
				link.style.color = "#aaaaaa";
			}
		}
	} else {
		// handle nav bar
		for (const link of navLinks) {
			link.style.color = "white";
		}
		document.getElementsByTagName("nav")[0].style.backgroundColor = "#4c4c4c";

		// handle sections
		for (section of sections) {
			section.style.color = "";
			section.style.backgroundColor = ""
		}

		// handle contact links
		if (document.title == "Contact") {
			console.log('is Contact')
			for (link of document.getElementsByClassName("contact-link")) {
				console.log(link)
				link.style.color = "";
			}
		}
	}
}
function swapTheme(e) {
	swapColors(getComputedStyle(toggleButton).getPropertyValue("color"));
}

//Add an event listener to the toggle button
toggleButton.addEventListener("click", swapTheme);
