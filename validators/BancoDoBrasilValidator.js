//accountLength - 8

function BancoDoBrasilValidator() {
	if (!(this instanceof BancoDoBrasilValidator)) {
		return new BancoDoBrasilValidator()
	}
}
function modulo(sum) {
	let modulo = 11 - (sum % 11)
	if (modulo === 10) {
		return "X"
	}
	else {
		if (modulo == 11) {
			return "0"
		} else {
			return modulo
		}
	}
}

BancoDoBrasilValidator.prototype =
	{
		calculate: function (calculateParams) {
			let sum = 0
			let numbers = "0".repeat(8 - calculateParams.accountNumber.length) + calculateParams.accountNumber
			for (let i = 0; i < numbers.length; i++) {
				sum += parseInt(numbers.charAt(i)) * (9 - i)
			}
			return modulo(sum) == calculateParams.accountDigit
		}
	}

module.exports = BancoDoBrasilValidator

