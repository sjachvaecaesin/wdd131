document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');
const h1 = document.querySelector('h1');
const templesElement = document.querySelector('#temples');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    h1.style.display = "block";
    if (hamButton.classList.contains('open')) {
		h1.style.display = "none";
	};
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Bismark North Dakota Temple",
    location: "Bismark, North Dakota, United States",
    dedicated: "1999, September, 19",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bismarck-north-dakota/1280x800/bismarck-temple-lds-829428-wallpaper.jpg"
  },
  {
    templeName: "Bountiful Utah Temple",
    location: "Bountiful, Utah, United States",
    dedicated: "1995, January, 8",
    area: 104000,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/1280x800/bountiful-temple-lds-1059079-wallpaper.jpg"
  },
  {
    templeName: "Ciudad Juárez Mexico Temple",
    location: "Ciudad Juárez, Chihuahua, Mexico",
    dedicated: "2000, February, 26",
    area: 10700,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ciudad-juarez-mexico/1280x800/ciudad-juarez-mexico-temple-1528222-wallpaper.jpg"
  }
];

const displayTemples = (temples) => {
  temples.forEach(temple => {
      let article = document.createElement("article");
      let name = document.createElement("h3");
      name.innerHTML = temple.templeName;

      let location = document.createElement("h4");
      location.innerHTML = `Location: ${temple.location}`;

      let dedicated = document.createElement("h4");
      dedicated.innerHTML = `Dedicated: ${temple.dedicated}`;

      let size = document.createElement("h4");
      size.innerHTML = `Size: ${temple.area} sq ft`;

      let image = document.createElement("img");
      image.setAttribute("src", temple.imageUrl);
      image.setAttribute("alt", temple.templeName);
      image.setAttribute("loading", "lazy");

      article.appendChild(name);
      article.appendChild(location);
      article.appendChild(dedicated);
      article.appendChild(size);
      article.appendChild(image);
      templesElement.appendChild(article);
  });
}

displayTemples(temples);