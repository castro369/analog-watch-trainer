let currentHours = 10
let currentMinutes = 8

// Get elements from HTML
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const timeInput = document.getElementById("timeInput")
const button = document.getElementById("button-new-time")
const messageParagraph = document.getElementById('message');

// Updates Clock
function updateClock(hours, minutes) {
	const minutesRatio = (0.3 + minutes) / 60
	const hoursRatio = (minutesRatio + hours) / 12

	setRotation(minuteHand, minutesRatio)
	setRotation(hourHand, hoursRatio)
}

// Sets variable for CSS degrees
function setRotation(element, rotationRatio) {
	element.style.setProperty('--rotation', rotationRatio * 360)
}

// Function to generate random times
function getRandomTime() {
  const randHours = Math.floor(Math.random() * 12) // 0-11
  const randMinutes = Math.floor(Math.random() * 60) // 0-59
    
	return [randHours, randMinutes]
}

// Actions when button is clicked
function buttonClick() {
	const userTime = timeInput.value
	const [userHours, userMinutes] = userTime.split(':');
	console.log("userTime:", userTime)
	console.log(parseInt(userHours, 10))
	console.log(parseInt(userMinutes, 10))
	console.log(currentHours)
	console.log(currentMinutes)

	if (parseInt(userHours) === currentHours && parseInt(userMinutes) === currentMinutes) {
		messageParagraph.textContent = 'Correct';
		messageParagraph.style.color = 'green'

		const [randHours, randMinutes] = getRandomTime();
		// Output random values to console 
		console.log(randHours, randMinutes)

		updateClock(randHours, randMinutes)
		currentHours = randHours
		currentMinutes = randMinutes
	} else {
		messageParagraph.textContent = 'Wrong. Try Again';
		messageParagraph.style.color = 'red'
	}
}

// Set initital clock time
updateClock(currentHours, currentMinutes)

// Add a click event listener to the button
button.addEventListener("click", buttonClick)
