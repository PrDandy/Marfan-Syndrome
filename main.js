console.log("Java Script is working!")


const splash = document.querySelector('.splash')
document.addEventListener('DOMContentLoaded', () => {
	setTimeout(() => {
		splash.classList.add('display-none')
	}, 7000)
})

///  GSAP ANIMATION
gsap.from('.anim2', {
	x: -1000,
	duration: 1,
	ease: 'power4',
	delay: 7.5
})

////// Navigation Javascript ////// 

// Get buttons
let whatBtn = document.querySelector('#whatBtn')
let moreBtn = document.querySelector('#moreBtn')
let whereBtn = document.querySelector('#whereBtn')
let whoBtn = document.querySelector('#whoBtn')
let supportBtn = document.querySelector('#supportBtn')

// // Button events LIsteners
whatBtn.addEventListener('click', () => showPage('#what'))
moreBtn.addEventListener('click', () => showPage('#more'))
whereBtn.addEventListener('click', () => showPage('#where'))
whoBtn.addEventListener('click', () => showPage('#who'))
supportBtn.addEventListener('click', () => showPage('#support'))

// // Function to show page
function showPage(pageSelector) {
	//hide all pages
	const allPages = document.querySelectorAll('.page')
	allPages.forEach((page) => {
			page.style.display = 'none'
		})
		// show page corresponding with button Id
	const targetPage = document.querySelector(pageSelector)
	targetPage.style.display = 'grid'
	gsap.from('.anim1', {
		x: -1000,
		duration: 1,
		ease: 'power4',
	})
}

// image swiper
var swiper = new Swiper(".mySwiper", {
	effect: "cards",
	grabCursor: true,
});


// declare buttons
const aortaBtn = document.querySelector('.aorta')
const mitralBtn = document.querySelector('.mitral')
const exertionBtn = document.querySelector('.exertion')
const pectusBtn = document.querySelector('.pectus')


// insert text based on which button you select
aortaBtn.addEventListener('click', () => {
	document.querySelector('.heart-info').innerText = 'Aortic enlargement (expansion of the main blood vessel that carries blood away from the heart to the rest of the body) – can be life-threatening if not cuaght early so prevenative measures can be taken.'
})
mitralBtn.addEventListener('click', () => {
	document.querySelector('.heart-info').innerText = 'Mitral valve prolapse which is when the valve can become “Floppy” and is unable to stop blood from flowing backwards on a heartbeat. This can cause breathlessness but can be mitigated with surgery.'
})
exertionBtn.addEventListener('click', () => {
	document.querySelector('.heart-info').innerText = 'Because of the lack of contective tissue the heart can be slightly weaker meaning over exertion can cause major health issues.'
})
pectusBtn.addEventListener('click', () => {
	document.querySelector('.heart-info').innerText = 'If the person has Pectus excavatum (when the chest bone sinks into the chest) the chest bone can squash the heart and limit blood flow.'
})

// Create function to show corrsponding info

// Get Buttons
let spineBtn = document.querySelector('#spineBtn')
let eyesBtn = document.querySelector('#eyesBtn')
let heartBtn = document.querySelector('#heartBtn')
let lungsBtn = document.querySelector('#lungsBtn')
let boneBtn = document.querySelector('#boneBtn')
let bodyBtn = document.querySelector('#bodyBtn')
// Add Event Listeners
spineBtn.addEventListener('click', () => showPopup('#spine'))
eyesBtn.addEventListener('click', () => showPopup('#eyes'))
heartBtn.addEventListener('click', () => showPopup('#heart'))
lungsBtn.addEventListener('click', () => showPopup('#lungs'))
boneBtn.addEventListener('click', () => showPopup('#bone'))
bodyBtn.addEventListener('click', () => showPopup('#body'))

// Functino to show selected buttons content and brinf to the front.
function showPopup(popupSelector) {
	// Set all popups z-index to 0
	const allPopups = document.querySelectorAll('.popup')
	allPopups.forEach((popup) => {
			popup.style.zIndex = '0'
		})
		// show popup and add s-index 10
	const targetPopup = document.querySelector(popupSelector)
	targetPopup.style.display = 'block'
	targetPopup.style.zIndex = '10'
}

// get area for buttons, and add event listener
let bodyBtns = document.querySelector('.body-btns')
bodyBtns.addEventListener('click', () => hideMessage())

// function to hide orignal message
function hideMessage() {
	const messageSelect = document.querySelector('.whatIntro')
	messageSelect.style.display = 'none'
}
// Run function on website load
window.onload = showPopup
window.onload = showPage