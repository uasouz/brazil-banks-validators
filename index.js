"use strict"

const SWC = require("./utils/switchcase")
const validators = require("./validators")

const bankValidatorsSwitch = SWC.switchcaseFWithParams({
	104: validators.CaixaValidator().calculate,
	237: validators.BradescoValidator().calculate,
	"033": validators.SantanderValidator().calculate,
	341: validators.ItauValidator().calculate,
	"001": validators.BancoDoBrasilValidator().calculate,
})(false)

const bankAccountLength = SWC.switchcase({
	104: 8,
	237: 7,
	"033": 8,
	341: 0,
	"001": 0,
})(0)

class Bank {
	constructor(bank, agency, agencyDigit = null, account, accountDigit, accountType = 0, operationCode = "") {
		const calculateParams = {
			agency,
			accountDigit,
			accountNumber: account,
			accountOperation: operationCode,
			accountLength: bankAccountLength(bank),
		}
		if (!bankValidatorsSwitch(bank)(calculateParams)) {
			throw new Error("Erro ao validar banco")
		}
		this.bank = bank
		this.agency = agency
		this.agencyDigit = agencyDigit
		this.account = account
		this.accountDigit = accountDigit
		this.accountType = accountType
		this.operationCode = operationCode
	}
}

const validateBank = (bank, agency, agencyDigit = null, account, accountDigit, accountType = 0, operationCode = "") => {
	const calculateParams = {
		agency,
		accountDigit,
		accountNumber: account,
		accountOperation: operationCode,
		accountLength: bankAccountLength(bank),
	}
	if (!bankValidatorsSwitch(bank)(calculateParams)) {
		return false
	}
	return true
}

const validateBankPromise = (bank, agency, agencyDigit = null, account, accountDigit, accountType = 0, operationCode = "", withClass = false) => {
	return new Promise(function (resolve, reject) {
		const calculateParams = {
			agency,
			accountDigit,
			accountNumber: account,
			accountOperation: operationCode,
			accountLength: bankAccountLength(bank),
		}
		if (!bankValidatorsSwitch(bank)(calculateParams)) {
			if (withClass) {
				reject({
					Success: false,
					Bank: {}
				})
			} else {
				reject(false)
				return
			}
		} if (withClass) {
			resolve({
				Success: true,
				Bank: new Bank(bank, agency, agencyDigit, account, accountDigit, accountType, operationCode)
			})
		} else {
			resolve(true)
		}
	})
}

const modules = {}
modules[Bank.name] = Bank
modules[validateBankPromise.name] = validateBankPromise
modules[validateBank.name] = validateBank
module.exports = modules