

// const BAV = require("../lib/bankAccountValidators")
// const SWC = require("./switchcase.js")

// const bankValidatorsSwitch = SWC.switchcaseFWithParams({
// 	104: BAV.CaixaValidator().calculate,
// 	237: BAV.BradescoValidator().calculate,
// 	"033": BAV.SantanderValidator().calculate,
// 	341: BAV.ItauValidator().calculate,
// 	"001": BAV.BancoDoBrasilValidator().calculate,
// })(false)

// const bankAccountLength = SWC.switchcase({
// 	104: 8,
// 	237: 7,
// 	"033": 8,
// 	341: 0,
// 	"001": 0,
// })(0)

// class Bank {
// 	constructor(bank, agency, agencyDigit = null, account, accountDigit, accountType = 0, operationCode = "") {
// 		const calculateParams = {
// 			agency,
// 			accountDigit,
// 			accountNumber: account,
// 			accountOperation: operationCode,
// 			accountLength: bankAccountLength(bank),
// 		}
// 		if (!bankValidatorsSwitch(bank)(calculateParams)) {
// 			throw new Error("Erro ao validar banco")
// 		}
// 		this.bank = bank
// 		this.agency = agency
// 		this.agencyDigit = agencyDigit
// 		this.account = account
// 		this.accountDigit = accountDigit
// 		this.accountType = accountType
// 		this.operationCode = operationCode
// 	}

// }

// // class CompanyBank extends Bank {
// // 	/**
// // 	 * @param  {String} document
// // 	 * @param  {String} bank
// // 	 * @param  {String} agency
// // 	 * @param  {Number} agencyDigit
// // 	 * @param  {String} account
// // 	 * @param  {Number} accountDigit
// // 	 * @param  {Number} accountType=0
// // 	 * @param  {String} operationCode=""
// // 	 */
// // 	constructor(document, bank, agency, agencyDigit = null, account, accountDigit, accountType = 0, operationCode = "") {
// // 		super(bank, agency, agencyDigit, account, accountDigit, accountType, operationCode)
// // 		this.company_document = document
// // 	}


// // 	extractToDatabaseModel(){
// // 		return {
// // 			banco_id: this.bank,
// // 			company_document: this.company_document,
// // 			agencia: this.agency,
// // 			agencia_dv: this.agencyDigit ? this.agencyDigit : "",
// // 			conta: this.account.toString() + this.accountDigit.toString(),
// // 			tipo_conta: this.accountType,
// // 			cod_operacao: this.operationCode,
// // 		}
// // 	}

// // 	extract(){
// // 		return Object.assign({},this)
// // 	}
// // }


// const classes = {}
// // classes[CompanyBank.name] = CompanyBank
// classes[Bank.name] = Bank
// module.exports = classes
