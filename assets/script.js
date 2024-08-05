// Ici le tableau ou sont réunis les information concernant les slides du carrousel
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// SCRIPT pour créer le carrousel

// Variables qui seront global
let index = 0

// Variable des flèches
const arrow_left = document.getElementById("arrow_left")
const arrow_right = document.getElementById("arrow_right")

// Variable des bullet point
const containerDots = document.querySelector(".dots")

// Variable des images et du texte à changer dans le slide
let slideImage = document.querySelector(".banner-img")
let slideParagraphe = document.querySelector("#banner p")

// Fonction pour changer le slider et le bullet point au clic sur la flèche
// Gauche
function clickArrowLeft() {
	arrow_left.addEventListener("click", () => {

		// On verifie que sa fonctionne
		console.log("Vous avez cliqué sur la flèche gauche")
		
		// On retire la class CSS des bullet plein
		const arrayDots = document.querySelectorAll(".dots .dot")
		arrayDots[index].classList.remove("dot_selected")

		// On décremente la variable
		// Et Si l'index devient inférieur a 0 alors l'index vaut la dernière image
		index--

		if ( index < 0) {
			index = slides.length - 1
			}
			
		// Changement de l'image et du texte du slider
		slideImage.src = `./assets/images/slideshow/${slides[index].image}`
		slideParagraphe.innerHTML = slides[index].tagLine
		arrayDots[index].classList.add("dot_selected")
})
}
clickArrowLeft();


// Fonction pour changer le slider et le bullet point au clic sur la flèche
// Droite
function clickArrowRight() {
	arrow_right.addEventListener("click", () => {

		// on verifie que sa fonctionne
		console.log("Vous avez cliqué sur la flèche droite")

		// On retire la class CSS des bullet plein
		const arrayDots = document.querySelectorAll(".dots .dot")
		arrayDots[index].classList.remove("dot_selected")

		// On incrémente la variable
		// Et Si l'index devient supérieur à la liste des images alors l'index vaut 0 (donc la première image)
		index++

		if ( index > slides.length - 1) {
			index = 0
			}

		// Changement de l'image et du texte du slider
		slideImage.src = `./assets/images/slideshow/${slides[index].image}`
		slideParagraphe.innerHTML = slides[index].tagLine
		arrayDots[index].classList.add("dot_selected")
})
}
clickArrowRight();


// Fonction pour créer les bullet point
function displayDots() {
	// On crée une balise <span> pour chaque Slide
	for (let i = 0; i < slides.length; i++) {
		let dot = document.createElement("span")
		// et on assigne la class "dot" a ses nouveaux élements
		dot.classList.add("dot")
		// pour les insérer dans la <div class="dots">
		containerDots.appendChild(dot)
		if (i === index) {
			dot.classList.add("dot_selected")
		}
	}
}
displayDots();




