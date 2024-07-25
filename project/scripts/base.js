document.querySelector("#year").textContent = new Date().getFullYear();

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h1 = document.querySelector('h1');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    h1.style.display = "block";
    if (hamButton.classList.contains('open')) {
		h1.style.display = "none";
	};
});