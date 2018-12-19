//accountLength - 8

function CaixaValidator() {
	if (!(this instanceof CaixaValidator)) {
		return new CaixaValidator()
	}
}
function modulo(sum) {
	let multiSum = sum * 10 | 0
	let modulo = (multiSum / 11 | 0) * 11 | 0
	let modModule = multiSum % 11
	if (modModule === 10) {
		return "0"
	}
	else {
		return (multiSum - modulo | 0).toString()
	}
}


function multiplyAccordingWeight(num, index) {
	let weight = [8, 7, 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
	return num * weight[index]
}

CaixaValidator.prototype =
	{
		calculate: function (calculateParams) {
			if (calculateParams.accountNumber.length == calculateParams.accountLength) {
				let sum = 0
				let numbers = calculateParams.agency + calculateParams.accountOperation + calculateParams.accountNumber
				for (let i = 0; i < numbers.length; i++) {
					sum += multiplyAccordingWeight(numbers.charAt(i), i)
				}
				return modulo(sum) == calculateParams.accountDigit
			} else {
				return false
			}
		}
	}

module.exports = CaixaValidator