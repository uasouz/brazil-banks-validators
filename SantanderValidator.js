//accountLength - 8

function SantanderValidator() {
	if (!(this instanceof SantanderValidator)) {
		return new SantanderValidator()
	}
}

function modulo(sum) {
	if (sum === 0) {
		return "0"
	}
	else {
		return (10 - sum)
	}
}


function multiplyAccordingWeight(num, index) {
	let weight = [9, 7, 3, 1, 0, 0, 9, 7, 1, 3, 1, 9, 7, 3]
	return (num * weight[index]).toString().substr(-1)
}

SantanderValidator.prototype =
	{
		calculate: function (calculateParams) {
			const accountNumber = "0".repeat(8 - calculateParams.accountNumber.length) + calculateParams.accountNumber
			if (accountNumber.length == calculateParams.accountLength) {
				let sum = 0
				let numbers = calculateParams.agency + "00" + accountNumber
				for (let i = 0; i < numbers.length; i++) {
					sum += parseInt(multiplyAccordingWeight(parseInt(numbers.charAt(i)), i))
				}
				return modulo(parseInt(sum.toString().substr(-1))) == calculateParams.accountDigit
			} else {
				return false
			}
		}

	}

module.exports = SantanderValidator


