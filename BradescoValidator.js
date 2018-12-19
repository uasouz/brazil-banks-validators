//accountLength - 7

function BradescoValidator() {
	if (!(this instanceof BradescoValidator)) {
		return new BradescoValidator()
	}
}
function modulo(sum) {
	let modulo = sum % 11
	if (modulo === 0) {
		return "0"
	}
	else {
		if (modulo == 1) {
			return "P"
		} else {
			return (11 - modulo)
		}
	}
}


function multiplyAccordingWeight(num, index) {
	let weight = [2, 7, 6, 5, 4, 3, 2]
	return num * weight[index]
}

BradescoValidator.prototype =
	{
		calculate: function (calculateParams) {
			if (calculateParams.accountNumber.length == calculateParams.accountLength) {
				let sum = 0
				let numbers = calculateParams.accountNumber
				for (let i = 0; i < numbers.length; i++) {
					sum += multiplyAccordingWeight(numbers.charAt(i), i)
				}
				return modulo(sum) == calculateParams.accountDigit
			} else {
				return false
			}
		}

	}

module.exports = BradescoValidator
