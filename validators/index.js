"use strict"

const fs = require("fs")
const path = require("path")
const validators = {}

fs.readdirSync(__dirname)
	.filter(function (file) {
		return (file.indexOf(".") !== 0) && (file !== "index.js")
	})
	.forEach(function (file) {
		const validator = require(path.join(__dirname, file))
		validators[validator.name] = validator
	})

Object.keys(validators).forEach(function (validatorName) {
	if ("associate" in validators[validatorName]) {
		validators[validatorName].associate(validators)
	}
})

module.exports = validators