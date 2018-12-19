"use strict"
//Módulo de validação de contas bancárias do Itáu

function ItauValidator() {
	if (!(this instanceof ItauValidator)) {
		return new ItauValidator()
	}
}

const modulo = sum => {
	let modulo = sum % 10
	if (modulo === 0) {
		return "0"
	}
	else {
		return (10 - modulo)
	}
}

const adjustAccordingLength = sequence => {
	if (sequence > 9) {
		const numbers = sequence.toString()
		sequence = 0
		for (let i = 0; i < numbers.length; i++) {
			sequence += parseInt(numbers.charAt(i))
		}
	}
	return sequence
}

const multiplyAccordingParity = (number, index) => {
	return number * ((index % 2 == 0) ? 2 : 1)
}

ItauValidator.prototype =
	{
		calculate: (calculateParams) => {
			let sum = 0
			let numbers = calculateParams.agency + calculateParams.accountNumber
			for (let i = 0; i < numbers.length; i++) {
				const num = parseInt(numbers.charAt(i))
				let sequence = multiplyAccordingParity(num, i)
				sequence = adjustAccordingLength(sequence)
				sum += sequence
			}
			return modulo(sum) == calculateParams.accountDigit
		}
	}

module.exports = ItauValidator