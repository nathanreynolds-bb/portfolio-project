//Define the toggle button
const toggleButton = document.getElementById("themeSwitch");

//Define callback function for toggle button
function swapTheme(e) {
	if (e.target.style.color == 'white') {
		e.target.style.color = 'black';
	} else {
		e.target.style.color = 'white';
	}
}

//Add an event listener to the toggle button
toggleButton.addEventListener('click', swapTheme)