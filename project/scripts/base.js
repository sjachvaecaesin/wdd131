const year = new Date().getFullYear();
const foot = document.querySelector('#foot');
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

foot.innerHTML = `&copy;${year} - Elias Streeter - Kentucky`;

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});